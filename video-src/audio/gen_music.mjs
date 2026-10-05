// AgoraIn v4 宣传片 · 原创背景音乐合成器（纯 Node，无外部素材）
// 输出：audio/music.wav（44.1k / 16bit / stereo）
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SR = 44100
const DUR = 62.6
const N = Math.ceil(SR * DUR)
const L = new Float32Array(N)
const R = new Float32Array(N)

// ---------- 工具 ----------
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x)
const lerp = (a, b, t) => a + (b - a) * t

function add(t0, dur, fn, pan = 0) {
  const i0 = Math.max(0, Math.floor(t0 * SR))
  const i1 = Math.min(N, Math.ceil((t0 + dur) * SR))
  const gl = Math.sqrt((1 - pan) / 2) * Math.SQRT2
  const gr = Math.sqrt((1 + pan) / 2) * Math.SQRT2
  for (let i = i0; i < i1; i++) {
    const s = fn((i - i0) / SR)
    L[i] += s * gl
    R[i] += s * gr
  }
}

function noteFreq(midi) { return 440 * Math.pow(2, (midi - 69) / 12) }
const N_ = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
const midi = (name, oct) => 12 * (oct + 1) + N_[name[0]] + (name[1] === '#' ? 1 : 0)

// 谐波叠加音色
function tone({ freq, harm, amp = 0.2, attack = 0.005, decay = 0.3, sustain = 0, release = 0.2, detune = 0 }) {
  const w = 2 * Math.PI * freq
  return (t) => {
    let env
    if (t < attack) env = t / attack
    else if (t < attack + decay) env = 1 - (1 - sustain) * ((t - attack) / decay)
    else env = sustain * Math.max(0, 1 - (t - attack - decay) / release)
    if (env <= 0) return 0
    let v = 0
    for (let h = 0; h < harm.length; h++) {
      const f = w * (h + 1) * (1 + detune * (h + 1) * 0.0007)
      v += harm[h] * Math.sin(f * t + h * 0.5)
    }
    return v * env * amp
  }
}

function pluck(m, amp = 0.16) {
  return tone({ freq: noteFreq(m), harm: [1, 0.55, 0.3, 0.16, 0.08], amp, attack: 0.004, decay: 0.16, sustain: 0.28, release: 1.1 })
}
function bell(m, amp = 0.14) {
  return tone({ freq: noteFreq(m), harm: [1, 0.45, 0.22, 0.1], amp, attack: 0.002, decay: 0.5, sustain: 0.12, release: 1.4 })
}
function padChord(freqs, amp = 0.055, atk = 0.9, sus = 0.75) {
  return (t) => {
    let env = t < atk ? t / atk : 1
    env *= Math.min(1, Math.max(0, (DUR - t) / 1.2 > 1 ? 1 : (DUR - t) / 1.2))
    let v = 0
    for (const f of freqs) {
      v += Math.sin(2 * Math.PI * f * t) * 0.5
      v += Math.sin(2 * Math.PI * f * 1.004 * t + 1.2) * 0.35
      v += Math.sin(2 * Math.PI * f * 0.997 * t + 2.4) * 0.35
      v += Math.sin(2 * Math.PI * f * 2 * t) * 0.06
    }
    return v * env * amp * sus
  }
}
function subBass(m, amp = 0.30) {
  const f = noteFreq(m)
  return (t) => {
    const env = t < 0.01 ? t / 0.01 : Math.exp(-t * 3.2)
    return (Math.sin(2 * Math.PI * f * t) + 0.12 * Math.sin(2 * Math.PI * f * 2 * t)) * env * amp
  }
}
function kick(amp = 0.95) {
  return (t) => {
    const f = 132 * Math.exp(-t * 34) + 44
    const env = Math.exp(-t * 6.5)
    const click = t < 0.006 ? (1 - t / 0.006) * 0.35 : 0
    return (Math.sin(2 * Math.PI * f * t) * env + click) * amp
  }
}
function hat(amp = 0.11) {
  let prev = 0
  const rnd = () => Math.random() * 2 - 1
  return (t) => {
    const n = rnd()
    const hp = n - prev
    prev = n
    return hp * Math.exp(-t * 62) * amp
  }
}
function clap(amp = 0.2) {
  const rnd = () => Math.random() * 2 - 1
  let burst = 0
  return (t) => {
    if (t < 0.03) burst = 0.6 * rnd()
    const body = rnd() * Math.exp(-t * 20) * 0.55
    return (body + burst) * amp
  }
}
function noiseSweepRise(dur, amp = 0.16, f0 = 300, f1 = 9000) {
  // 噪声 + 双极点低通，截止频率随时间上升
  let y1 = 0, y2 = 0
  const rnd = () => Math.random() * 2 - 1
  return (t) => {
    const p = clamp(t / dur, 0, 1)
    const fc = lerp(f0, f1, p * p)
    const g = 1 - Math.exp((-2 * Math.PI * fc) / SR)
    const x = rnd()
    y1 += g * (x - y1)
    y2 += g * (y1 - y2)
    const env = Math.pow(p, 0.7) * (1 - p * 0.15)
    return y2 * env * amp
  }
}
function whooshDown(dur = 0.6, amp = 0.22) {
  let y = 0
  const rnd = () => Math.random() * 2 - 1
  return (t) => {
    const p = clamp(t / dur, 0, 1)
    const fc = lerp(5200, 350, Math.pow(p, 0.55))
    const g = 1 - Math.exp((-2 * Math.PI * fc) / SR)
    y += g * (rnd() - y)
    return y * Math.pow(1 - p, 1.6) * amp
  }
}

// ---------- 混响（Schroeder 梳状 + 全通） ----------
const combs = [1557, 1617, 1491, 1422].map((d) => ({ d, buf: new Float32Array(d), i: 0, lp: 0 }))
const aps = [225, 556].map((d) => ({ d, buf: new Float32Array(d), i: 0 }))
function reverbIn(x) {
  let out = 0
  for (const c of combs) {
    const v = c.buf[c.i]
    c.lp = v * 0.72 + c.lp * 0.28
    c.buf[c.i] = x + c.lp * 0.8
    c.i = (c.i + 1) % c.d
    out += v
  }
  out *= 0.25
  for (const a of aps) {
    const v = a.buf[a.i]
    const y = -x * 0.5 + v
    a.buf[a.i] = out + v * 0.5
    a.i = (a.i + 1) % a.d
    out = y
  }
  return out
}

// ---------- 编曲 ----------
const CH = {
  D: [midi('D', 3), midi('F#', 3), midi('A', 3)],
  A: [midi('A', 2), midi('C#', 3), midi('E', 3)],
  Bm: [midi('B', 2), midi('D', 3), midi('F#', 3)],
  G: [midi('G', 2), midi('B', 2), midi('D', 3)],
}
const BAR = 2.0 // 4/4 @120bpm
const sections = [
  { t: 0.0, bars: 4, ch: ['Bm', 'G', 'D', 'A'], pad: 1, kick: 0, hat: 0.5, arp: 0.0, bass: 0, bright: 0 },
  { t: 8.0, bars: 3, ch: ['D', 'A', 'Bm', 'G'].slice(0, 3), pad: 1, kick: 1, hat: 0.7, arp: 0.5, bass: 0.4, bright: 0.4 },
  { t: 14.0, bars: 5, ch: ['D', 'A', 'Bm', 'G', 'D'], pad: 1, kick: 1, hat: 1, arp: 1, bass: 1, bright: 1 },
  { t: 24.0, bars: 5, ch: ['Bm', 'G', 'D', 'A', 'Bm'], pad: 1, kick: 1, hat: 1, arp: 1, bass: 1, bright: 1 },
  { t: 39.4, bars: 3, ch: ['G', 'D', 'A'], pad: 1, kick: 0, hat: 0.6, arp: 0.8, bass: 0.5, bright: 0.6 },
  { t: 46.6, bars: 3, ch: ['Bm', 'G', 'A'], pad: 1, kick: 0, hat: 0.7, arp: 0.9, bass: 0.6, bright: 0.7, riserFrom: 49.0 },
  { t: 52.6, bars: 4, ch: ['D', 'A', 'Bm', 'G'], pad: 1, kick: 1, hat: 1, arp: 1, bass: 1, bright: 1.1 },
  { t: 60.6, bars: 2, ch: ['D', 'D'], pad: 1.2, kick: 0, hat: 0, arp: 0.3, bass: 0.3, bright: 0.9, tail: 1 },
]

const reverbSend = []
const midiToF = noteFreq

for (const sec of sections) {
  const barCount = sec.bars
  for (let b = 0; b < barCount; b++) {
    const t0 = sec.t + b * BAR
    if (t0 > DUR) break
    const name = sec.ch[b % sec.ch.length]
    const chord = CH[name]
    const bt = b % 2 // 小节内 0/1（配合 8 分/16 分律动）

    // pad：每两小节换一次
    if (b % 2 === 0) {
      const freqs = chord.map(midiToF)
      const A = padChord(freqs, 0.05 * sec.pad)
      add(t0, BAR * 2 + 1.4, A, -0.25)
      add(t0, BAR * 2 + 1.4, A, 0.25)
      reverbSend.push({ t: t0, dur: BAR * 2 + 1.4, fn: padChord(freqs, 0.02 * sec.pad), pan: 0.1 })
    }

    // 鼓组
    for (let beat = 0; beat < 4; beat++) {
      const tb = t0 + beat * 0.5
      if (sec.kick && (beat === 0 || beat === 2 || (beat === 3 && b % 2 === 1))) add(tb, 0.5, kick(0.9))
      if (sec.hat) {
        if (sec.hat >= 0.7) add(tb + 0.25, 0.12, hat(0.075), beat % 2 ? 0.2 : -0.15)
        if (sec.hat >= 1) add(tb + 0.125, 0.09, hat(0.045), 0.3)
      }
    }
    if (sec.kick && b % 4 === 3) { add(t0 + 1.75, 0.4, clap(0.22)); reverbSend.push({ t: t0 + 1.75, dur: 0.4, fn: clap(0.1) }) }

    // 低音
    if (sec.bass > 0) {
      const root = chord[0] - 12
      const pat = [0, 0, 1.5, 2] // 半拍位置
      for (const off of pat) add(t0 + off * 0.5, 0.7, subBass(root + (off === 1.5 ? 5 : 0), 0.26 * sec.bass))
    }

    // 琶音（16 分）
    if (sec.arp > 0) {
      const seq = [0, 1, 2, 1, 2, 0, 1, 2].map((i) => chord[i % chord.length] + (i >= 4 ? 12 : 0))
      for (let s = 0; s < 8; s++) {
        const ts = t0 + s * 0.25
        const m = seq[s]
        const amp = 0.13 * sec.arp * (s % 2 ? 0.7 : 1)
        add(ts, 1.0, pluck(m, amp), 0.35)
        if (s % 4 === 0) add(ts, 1.2, pluck(m + 12, amp * 0.5), -0.4)
        reverbSend.push({ t: ts, dur: 1.0, fn: pluck(m, amp * 0.45), pan: -0.2 })
      }
    }

    // 亮点铃音
    if (sec.bright > 0.4 && b % 2 === 1) {
      const m = chord[2] + 12
      add(t0 + 1.5, 1.6, bell(m, 0.09 * sec.bright), 0.45)
      reverbSend.push({ t: t0 + 1.5, dur: 1.6, fn: bell(m, 0.06), pan: 0.3 })
    }
  }

  // 段落过渡扫频
  if (sec.riserFrom) add(sec.riserFrom, sec.t + sec.bars * BAR - sec.riserFrom, noiseSweepRise(sec.t + sec.bars * BAR - sec.riserFrom, 0.16), 0)
}

// 场景硬切处的小 whoosh
for (const t of [7.35, 13.35, 21.15, 28.75, 39.15, 46.35, 52.55]) {
  add(t - 0.45, 0.6, whooshDown(0.6, 0.18))
}

// ---------- 混响总线 ----------
for (const s of reverbSend) {
  const i0 = Math.max(0, Math.floor(s.t * SR))
  const i1 = Math.min(N, Math.ceil((s.t + s.dur) * SR))
  const gl = Math.sqrt((1 - (s.pan || 0)) / 2) * Math.SQRT2
  const gr = Math.sqrt((1 + (s.pan || 0)) / 2) * Math.SQRT2
  for (let i = i0; i < i1; i++) {
    const x = s.fn((i - i0) / SR) * gl
    const y = reverbIn(x * 0.9)
    L[i] += y * 0.55 * gl
    R[i] += y * 0.75 * gr
  }
}

// ---------- 母带：软限幅 + 淡出 ----------
let peak = 0
for (let i = 0; i < N; i++) {
  const fadeIn = Math.min(1, i / (SR * 0.6))
  const fadeOut = Math.min(1, Math.max(0, (N - i) / (SR * 1.8)))
  L[i] = Math.tanh(L[i] * 1.15) * fadeIn * fadeOut
  R[i] = Math.tanh(R[i] * 1.15) * fadeIn * fadeOut
  peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]))
}
const norm = 0.89 / (peak || 1)

// ---------- 写 WAV ----------
const bytes = Buffer.alloc(44 + N * 4)
bytes.write('RIFF', 0); bytes.writeUInt32LE(36 + N * 4, 4); bytes.write('WAVE', 8)
bytes.write('fmt ', 12); bytes.writeUInt32LE(16, 16); bytes.writeUInt16LE(1, 20)
bytes.writeUInt16LE(2, 22); bytes.writeUInt32LE(SR, 24); bytes.writeUInt32LE(SR * 4, 28)
bytes.writeUInt16LE(4, 32); bytes.writeUInt16LE(16, 34)
bytes.write('data', 36); bytes.writeUInt32LE(N * 4, 40)
for (let i = 0; i < N; i++) {
  bytes.writeInt16LE(clamp(Math.round(L[i] * norm * 32767), -32768, 32767), 44 + i * 4)
  bytes.writeInt16LE(clamp(Math.round(R[i] * norm * 32767), -32768, 32767), 46 + i * 4)
}
const out = path.join(path.dirname(fileURLToPath(import.meta.url)), 'music.wav')
fs.writeFileSync(out, bytes)
console.log('music ->', out, (bytes.length / 1e6).toFixed(1), 'MB', DUR + 's')
