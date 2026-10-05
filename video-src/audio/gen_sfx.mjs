// AgoraIn v4 宣传片 · 音效合成（原创）
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SR = 44100
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'sfx')
fs.mkdirSync(dir, { recursive: true })

function write(name, dur, gen) {
  const N = Math.ceil(SR * dur)
  const buf = Buffer.alloc(44 + N * 4)
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8)
  buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20)
  buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28)
  buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34)
  buf.write('data', 36); buf.writeUInt32LE(N * 4, 40)
  let peak = 1e-6
  const l = new Float32Array(N), r = new Float32Array(N)
  for (let i = 0; i < N; i++) {
    const [a, b] = gen(i / SR)
    l[i] = a; r[i] = b
    peak = Math.max(peak, Math.abs(a), Math.abs(b))
  }
  const g = 0.95 / peak
  for (let i = 0; i < N; i++) {
    buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(l[i] * g * 32767))), 44 + i * 4)
    buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(r[i] * g * 32767))), 46 + i * 4)
  }
  fs.writeFileSync(path.join(dir, name), buf)
  console.log('sfx ->', name, dur + 's')
}

const rnd = () => Math.random() * 2 - 1

// 成功铃音（双音）
write('ding.wav', 1.2, (t) => {
  const e = Math.exp(-t * 4.2)
  const s = (Math.sin(2 * Math.PI * 1318.5 * t) * 0.6 + Math.sin(2 * Math.PI * 1975.5 * t) * 0.4 + Math.sin(2 * Math.PI * 2637 * t) * 0.15) * e
  return [s * 0.5, s * 0.5]
})

// 转场 whoosh
write('whoosh.wav', 0.7, (t) => {
  let y = 0
  const p = t / 0.7
  const fc = 4200 * Math.pow(1 - p, 2.2) + 220
  const g = 1 - Math.exp((-2 * Math.PI * fc) / SR)
  y += g * (rnd() - y)
  const env = Math.pow(1 - p, 1.4) * Math.min(1, t / 0.05)
  return [y * env * 0.8, y * env * 0.55]
})

// 相机快门（两声脆响）
write('shutter.wav', 0.35, (t) => {
  const click = (t0, amp, dec) => (t >= t0 ? rnd() * Math.exp(-(t - t0) * dec) * amp : 0)
  const s = click(0, 1, 260) + click(0.055, 0.7, 200) + click(0.115, 0.35, 120)
  return [s * 0.7, s * 0.7]
})

// 时钟滴答
write('tick.wav', 0.12, (t) => {
  const s = rnd() * Math.exp(-t * 220) * 0.9 + Math.sin(2 * Math.PI * 2400 * t) * Math.exp(-t * 160) * 0.4
  return [s * 0.75, s * 0.6]
})

// 卡片弹出
write('pop.wav', 0.22, (t) => {
  const f = 520 + 900 * Math.min(1, t / 0.06)
  const s = Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 26)
  return [s * 0.65, s * 0.65]
})

// 翻页/切纸
write('swipe.wav', 0.3, (t) => {
  let y = 0
  const g = 0.35
  y += g * (rnd() - y)
  const env = Math.min(1, t / 0.02) * Math.exp(-t * 12)
  return [y * env * 0.9, y * env * 0.6]
})
