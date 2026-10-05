// 抽帧检查：在指定时间点截图，人工核对版面
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'

const [aspectArg, timesArg, outArg] = process.argv.slice(2)
const vertical = aspectArg === 'v'
const times = (timesArg || '').split(',').filter(Boolean).map(Number)
const outDir = outArg || 'out/checks'

const W = vertical ? 1080 : 1920
const H = vertical ? 1920 : 1080
fs.mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome', args: ['--hide-scrollbars', '--force-color-profile=srgb'] })
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })
const url = `http://127.0.0.1:8791/index.html?v=${vertical ? 1 : 0}&nofit=1`
await page.goto(url, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(400)

for (const t of times) {
  await page.evaluate((tt) => window.__seek(tt), t)
  await page.waitForTimeout(60)
  const p = path.join(outDir, `${vertical ? 'v' : 'h'}-${String(t).replace('.', '_')}.jpg`)
  await page.screenshot({ path: p, type: 'jpeg', quality: 88 })
  console.log('shot', p)
}
await browser.close()
