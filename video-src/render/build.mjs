// 全片渲染：逐帧截图 → ffmpeg 编码；以及音频总线合成
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const FPS = 30
const TOTAL = 62.0
const mode = process.argv[2] || 'h'

const ff = (args, opts = {}) => execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit', ...opts })

async function renderFrames(vertical) {
  const W = vertical ? 1080 : 1920
  const H = vertical ? 1920 : 1080
  const dir = path.join(ROOT, 'out', vertical ? 'frames-v' : 'frames-h')
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
  const browser = await chromium.launch({ channel: 'chrome', args: ['--hide-scrollbars', '--force-color-profile=srgb', '--disable-lcd-text'] })
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })
  page.on('pageerror', (e) => { console.error('[pageerror]', e.message); process.exit(1) })
  await page.goto(`http://127.0.0.1:8791/index.html?v=${vertical ? 1 : 0}&nofit=1`, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(500)

  const N = Math.round(TOTAL * FPS)
  const cdp = await page.context().newCDPSession(page)
  const t0 = Date.now()
  for (let i = 0; i < N; i++) {
    const t = i / FPS
    await page.evaluate((tt) => window.__seek(tt), t)
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 92, captureBeyondViewport: false })
    fs.writeFileSync(path.join(dir, String(i).padStart(5, '0') + '.jpg'), Buffer.from(data, 'base64'))
    if (i % 120 === 0) console.log(`  ${i}/${N}  ${((Date.now() - t0) / 1000).toFixed(0)}s`)
  }
  await browser.close()
  console.log(`frames -> ${dir} (${N})`)
  return dir
}

const AUDIO_MASTER = path.join(ROOT, 'out', 'audio-master.wav')
const MASTER_GAIN = Number(process.env.MASTER_GAIN || 1.0)

function buildAudio() {
  const vo = [
    ['s1', 0.50], ['s2', 7.80], ['s3', 13.80], ['s4', 21.60],
    ['s5', 29.20], ['s6', 39.60], ['s7', 46.80], ['s8', 53.00],
  ]
  const sfx = [
    ['tick', 0.55, 0.30], ['tick', 1.11, 0.30], ['tick', 1.67, 0.30], ['tick', 2.23, 0.30],
    ['tick', 3.35, 0.22], ['tick', 3.91, 0.22],
    ['pop', 13.55, 0.35], ['pop', 15.10, 0.28],
    ['ding', 16.75, 0.42], ['pop', 17.30, 0.25], ['pop', 17.85, 0.25],
    ['pop', 21.65, 0.30], ['pop', 21.95, 0.24],
    ['shutter', 31.12, 0.70], ['swipe', 32.30, 0.35],
    ['ding', 35.35, 0.40], ['pop', 52.85, 0.38], ['pop', 54.15, 0.28],
  ]
  const ins = [path.join(ROOT, 'audio', 'music.wav')]
  const parts = []
  const mkVo = (name, t) => {
    const f = path.join(ROOT, 'audio', 'vo', name + '.mp3')
    const idx = ins.length; ins.push(f)
    const ms = Math.round(t * 1000)
    parts.push(`[${idx}:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=1.45,adelay=${ms}|${ms}[v${idx}]`)
    return `[v${idx}]`
  }
  const mkSfx = (name, t, v) => {
    const f = path.join(ROOT, 'audio', 'sfx', name + '.wav')
    const idx = ins.length; ins.push(f)
    const ms = Math.round(t * 1000)
    parts.push(`[${idx}:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=${v},adelay=${ms}|${ms}[s${idx}]`)
    return `[s${idx}]`
  }
  const voiceIns = []
  for (const [n, t] of vo) voiceIns.push(mkVo(n, t))
  const sfxIns = []
  for (const [n, t, v] of sfx) sfxIns.push(mkSfx(n, t, v))
  const voiceLabels = voiceIns.concat(sfxIns)
  parts.push(`${voiceLabels.join('')}amix=inputs=${voiceLabels.length}:normalize=0:dropout_transition=0,apad=whole_dur=${TOTAL + 0.6}[voice]`)

  // 复用人声总线做侧链闪避
  parts.push(`[voice]asplit=2[voiceA][voiceB]`)
  parts.push(`[0:a]aformat=sample_fmts=fltp:sample_rates=44100:channel_layouts=stereo,volume=0.5[music]`)
  parts.push(`[music][voiceB]sidechaincompress=threshold=0.05:ratio=4:attack=8:release=320:makeup=1[musduck]`)
  parts.push(`[musduck][voiceA]amix=inputs=2:normalize=0:dropout_transition=0[mixed]`)
  parts.push(`[mixed]apad,atrim=0:${TOTAL},volume=${MASTER_GAIN},alimiter=limit=0.85:level=false:attack=5:release=80[aout]`)

  const args = []
  for (const f of ins) args.push('-i', f)
  args.push('-filter_complex', parts.join(';'), '-map', '[aout]', '-ar', '48000', '-ac', '2', AUDIO_MASTER)
  console.log('mix audio ...')
  ff(args)
  console.log('audio ->', AUDIO_MASTER)
}

async function main() {
  if (mode === 'audio') { buildAudio(); return }
  const vertical = mode === 'v'
  const frames = await renderFrames(vertical)
  const out = path.join(ROOT, 'out', vertical ? 'agorain-v4-promo-vertical-1080x1920.mp4' : 'agorain-v4-promo-1920x1080.mp4')
  if (!fs.existsSync(AUDIO_MASTER)) buildAudio()
  ff([
    '-framerate', String(FPS), '-i', path.join(frames, '%05d.jpg'),
    '-i', AUDIO_MASTER,
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p',
    '-profile:v', 'high', '-level', '4.1', '-g', '60',
    '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-movflags', '+faststart', '-shortest', out,
  ])
  fs.rmSync(frames, { recursive: true, force: true })
  console.log('video ->', out)
}

main()
