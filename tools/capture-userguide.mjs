// 官网「使用手册」截图采集：本地起服务端 → 播种数据 → 用 Chrome 逐页截图
// 用法：node tools/capture-userguide.mjs [base=http://127.0.0.1:5299] [outDir=public/userguide]
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const BASE = process.argv[2] || 'http://127.0.0.1:5299'
const OUT = path.resolve(ROOT, process.argv[3] || 'public/userguide')
const USER = 'shotadmin'
const PASS = 'Shot@2026'
const SAMPLE_PDF = 'C:/Users/liuyu/Desktop/数学打卡/check-in-net/测试表格.pdf'
const PLUGIN = 'C:/Users/liuyu/Desktop/数学打卡/check-in-net/v4/dist-plugins/classisland.management-1.0.0.agp'

fs.mkdirSync(OUT, { recursive: true })
const log = (...a) => console.log('  ', ...a)

async function api(p, { method = 'GET', token, body, form } = {}) {
  const res = await fetch(BASE + p, {
    method,
    headers: {
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
      ...(body && !form ? { 'Content-Type': 'application/json' } : {}),
    },
    body: form || (body ? JSON.stringify(body) : undefined),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${method} ${p} → ${res.status} ${text.slice(0, 200)}`)
  return text ? JSON.parse(text) : null
}

async function seed() {
  await fetch(BASE + '/api/v4/auth/setup', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USER, password: PASS }),
  }).catch(() => {})
  const { token } = await api('/api/v4/auth/login', { method: 'POST', body: { username: USER, password: PASS } })
  log('登录成功')

  // 1) 资源中心：上传一份示例 PDF
  let rid = null
  try {
    const buf = fs.readFileSync(SAMPLE_PDF)
    const fd = new FormData()
    fd.append('file', new Blob([buf], { type: 'application/pdf' }), '课堂讲义-示例.pdf')
    const item = await api('/api/v4/teaching/resources', { method: 'POST', token, form: fd })
    rid = item.id
    log('已上传示例 PDF，resourceId =', rid)
  } catch (e) { log('上传示例失败（继续）：', e.message) }

  // 2) 白板批注：画两笔（回放/同步都有内容）
  if (rid) {
    const strokes = [
      { tool: 'pen', color: '#e03131', width: 4, points: Array.from({ length: 24 }, (_, i) => ({ x: 260 + i * 14, y: 300 + Math.sin(i / 3) * 46 })) },
      { tool: 'rect', color: '#1c64f2', width: 4, x1: 620, y1: 220, x2: 980, y2: 420 },
      { tool: 'ellipse', color: '#0ca678', width: 4, x1: 300, y1: 520, x2: 620, y2: 700 },
      { tool: 'text', color: '#111827', width: 4, x: 260, y: 200, text: '重点：本节课考点', size: 34 },
    ]
    await api('/api/v4/teaching/annotations', { method: 'PUT', token, body: { resourceId: rid, page: 1, strokes } })
    log('已写入白板批注示例')
  }

  // 3) 集控：装插件 + 下发几条指令（历史列表有内容）
  try {
    const fd = new FormData()
    fd.append('package', new Blob([fs.readFileSync(PLUGIN)]), 'classisland.management-1.0.0.agp')
    fd.append('confirmGpl', 'true')
    await api('/api/v4/plugins/install', { method: 'POST', token, form: fd })
    await api('/api/v4/plugins/classisland.management/enable', { method: 'POST', token })
    log('已安装并启用集控插件')
  } catch (e) { log('插件安装跳过：', e.message) }

  for (const [type, payload] of [
    ['notification', { text: '上课铃已响，请同学们回到座位' }],
    ['tts', { text: '请第一组同学上台领取答题卡' }],
    ['timetable_push', {}],
    ['lock', {}],
  ]) {
    try { await api('/api/v4/teaching/control', { method: 'POST', token, body: { type, payload, targetUuid: null } }) } catch { }
  }
  log('已下发集控指令示例')

  // 4) 呼叫（一体机联动截图用）
  try {
    await api('/api/v4/calls', { method: 'POST', token, body: { type: 'summon', title: '下课传唤', message: '请张三同学下课后到办公室', studentNames: '张三', minutesBefore: 0, targetUuid: null } })
  } catch { }

  return { token, rid }
}

async function shoot(browser, { token, rid }) {
  const page = await browser.newPage({ viewport: { width: 1600, height: 950 }, deviceScaleFactor: 2 })
  page.on('pageerror', e => log('[pageerror]', e.message))

  const shot = async (name, full = false) => {
    await page.waitForTimeout(900)
    await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: full })
    log('→', name + '.png')
  }

  // ── 教学模式 ──
  await page.goto(`${BASE}/teaching.html?token=${encodeURIComponent(token)}`, { waitUntil: 'load' })
  await page.waitForTimeout(3500)
  await shot('teaching-resources')

  if (rid) {
    await page.locator('#resGrid .res-card').first().locator('button', { hasText: '打开授课' }).click()
    await page.waitForTimeout(3000)
    await shot('teaching-whiteboard')
    await page.locator('button', { hasText: '回放批注' }).click().catch(() => {})
    await page.waitForTimeout(2500)
    await shot('teaching-replay')
  }

  const tabs = [['物理实验', 'teaching-physics'], ['化学实验', 'teaching-chem'], ['集控平台', 'teaching-control'], ['插件', 'teaching-plugins']]
  for (const [label, name] of tabs) {
    await page.locator('header .tabs button', { hasText: label }).click()
    await page.waitForTimeout(label === '化学实验' ? 1200 : 900)
    if (label === '化学实验') {
      // 放两个仪器并做一个反应，画面才有内容
      await page.locator('[data-vessel=beaker]').click()
      await page.locator('#reagentShelf button', { hasText: '大理石' }).click()
      await page.locator('#chemHolder .vessel').first().dblclick()
      await page.locator('#reagentShelf button', { hasText: '稀盐酸' }).click()
      await page.locator('#chemHolder .vessel').first().dblclick()
      await page.waitForTimeout(800)
    }
    await shot(name)
  }

  // ── 管理面板登录页（含「登录并进入教学模式」入口）──
  await page.goto(`${BASE}/login`, { waitUntil: 'load' })
  await page.evaluate((t) => localStorage.removeItem('agorain_token'), token)
  await page.reload({ waitUntil: 'load' })
  await shot('server-login')

  // ── 管理面板：教学模式入口 / 仪表盘 ──
  await page.evaluate((t) => localStorage.setItem('agorain_token', t), token)
  await page.goto(`${BASE}/teaching`, { waitUntil: 'load' }).catch(() => {})
  await page.waitForTimeout(1500)
  await shot('server-teaching-entry')
  await page.goto(`${BASE}/dashboard`, { waitUntil: 'load' }).catch(() => {})
  await page.waitForTimeout(2500)
  await shot('server-dashboard')

  await page.close()
}

const browser = await chromium.launch({ channel: 'chrome', args: ['--hide-scrollbars', '--force-color-profile=srgb'] })
try {
  const ctx = await seed()
  await shoot(browser, ctx)
} finally {
  await browser.close()
}
console.log('DONE →', OUT)
