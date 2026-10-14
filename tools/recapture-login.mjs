// 重拍登录页截图（含「登录并进入教学模式」按钮）
import { chromium } from 'playwright-core'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = path.resolve(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'public/userguide')
const BASE = process.argv[2] || 'http://127.0.0.1:5299'

const browser = await chromium.launch({ channel: 'chrome', args: ['--hide-scrollbars', '--force-color-profile=srgb'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 950 }, deviceScaleFactor: 2 })
await page.goto(`${BASE}/login`, { waitUntil: 'load' })
await page.evaluate(() => localStorage.removeItem('agorain_admin_token'))
await page.reload({ waitUntil: 'load' })
await page.waitForTimeout(1800)
await page.screenshot({ path: path.join(OUT, 'server-login.png') })
console.log('→ server-login.png（已更新）')
await browser.close()
