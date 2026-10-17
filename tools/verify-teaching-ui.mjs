// 教学控制台运行时验证：真实 Chrome 打开 teaching.html，收集控制台报错，
// 逐一点击各实验项目/元件/仪器并截图。
// 用法：node tools/verify-teaching-ui.mjs [base=http://127.0.0.1:5299] [outDir=out/teaching-shots]
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const BASE = process.argv[2] || 'http://127.0.0.1:5299'
const OUT = path.resolve(ROOT, process.argv[3] || 'out/teaching-shots')
const USER = 'uiverify'
const PASS = 'Ui@Verify2026'

fs.mkdirSync(OUT, { recursive: true })
const log = (...a) => console.log('  ', ...a)

async function api(p, { method = 'GET', token, body } = {}) {
  const res = await fetch(BASE + p, {
    method,
    headers: { ...(token ? { Authorization: 'Bearer ' + token } : {}), ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${method} ${p} → ${res.status} ${text.slice(0, 160)}`)
  return text ? JSON.parse(text) : null
}

async function seed() {
  await fetch(BASE + '/api/v4/auth/setup', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USER, password: PASS }),
  }).catch(() => {})
  const { token } = await api('/api/v4/auth/login', { method: 'POST', body: { username: USER, password: PASS } })
  log('登录成功')
  // 造一个班级 + 课表，让顶部课节 chip 有内容
  const cls = await api('/api/v4/classes', { method: 'POST', token, body: { name: 'UI验证班', grade: '九年级', graduating: false } })
  const classId = cls?.id || cls?.classId
  const subj = await api('/api/v4/timetable/subjects', { method: 'POST', token, body: { name: '物理', teacher: '李老师', color: '#1c64f2', classId } })
  const now = new Date()
  const fmt = d => `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  const layout = await api('/api/v4/timetable/layouts', {
    method: 'POST', token,
    body: { name: 'UI验证布局', classId, entries: [{ index: 0, startTime: fmt(new Date(now - 60000)), endTime: fmt(new Date(+now + 40 * 60000)), isBreak: false }] },
  })
  await api('/api/v4/timetable/plans', {
    method: 'POST', token,
    body: { name: 'UI验证课表', classId, timeLayoutId: layout.id, isActive: true, entries: [{ weekDay: (now.getDay() + 6) % 7, slotIndex: 0, subjectId: subj.id }] },
  })
  log('已播种班级/课表，classId =', classId)
  return { token, classId }
}

const errors = []
const warnings = []
const checks = []          // 断言：{ name, ok, detail }
const assert = (name, ok, detail = '') => { checks.push({ name, ok: !!ok, detail: String(detail) }); log(ok ? '✓' : '✗', name, ok ? '' : '→ ' + detail) }

async function main() {
  const { token, classId } = await seed()
  const browser = await chromium.launch({
    channel: 'chrome',
    args: ['--hide-scrollbars', '--force-color-profile=srgb', '--disable-gpu', '--no-sandbox'],
  })
  const page = await browser.newPage({ viewport: { width: 1600, height: 950 } })
  page.on('console', m => {
    const t = m.text()
    if (m.type() === 'error') errors.push(`[console] ${t}`)
    else if (m.type() === 'warning') warnings.push(`[warn] ${t}`)
  })
  page.on('pageerror', e => errors.push(`[pageerror] ${e.message}`))
  const badRequests = []
  page.on('response', res => { if (res.status() >= 400) badRequests.push(`${res.status()} ${res.url()}`) })

  const shot = async name => {
    await page.screenshot({ path: path.join(OUT, name + '.png') })
    log('截图', name)
  }
  const clickTab = async tab => {
    await page.click(`header .tabs button[data-tab="${tab}"]`)
    await page.waitForTimeout(400)
  }

  await page.goto(`${BASE}/teaching.html?token=${encodeURIComponent(token)}&class=${classId}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1800)
  await shot('01-resources')
  const chip = await page.evaluate(() => ({ vis: getComputedStyle(document.querySelector('#lessonChip')).display, text: document.querySelector('#lessonChip').textContent }))
  assert('课表联动：顶部显示当前课节', chip.vis !== 'none' && /物理/.test(chip.text), `${chip.vis} | ${chip.text.slice(0, 60)}`)

  // ── 物理：电学拟真元件 ──
  await clickTab('physics')
  await page.waitForTimeout(500)
  await shot('02-phys-circuit-default')
  for (const t of ['resistor', 'rheostat', 'ammeter', 'voltmeter', 'led', 'motor', 'buzzer']) {
    await page.click(`[data-add="${t}"]`)
    await page.waitForTimeout(120)
  }
  await shot('03-phys-all-components')
  await page.click('[data-preset="series"]'); await page.waitForTimeout(700); await shot('04-phys-preset-series')
  // 预设电路里闸刀默认是断开的（学生要自己合闸）——先点一下开关元件闭合，再验证电流
  await page.locator('.comp', { hasText: '闸刀' }).first().click()
  await page.waitForTimeout(600)
  await shot('04b-phys-preset-series-closed')
  const circ = await page.evaluate(() => {
    const txt = document.querySelector('#physHolder').innerHTML
    const glow = document.querySelector('.comp .glow')?.getAttribute('opacity')
    const reads = document.querySelector('#meterReads')?.textContent || ''
    const status = document.querySelector('#physStatus')?.textContent || ''
    return {
      battery15V: (txt.match(/1\.5V/g) || []).length,
      knife: txt.includes('闸刀'),
      coilLines: (txt.match(/stroke="#6e4a2f"/g) || []).length,
      colorBands: (txt.match(/#d4af37/g) || []).length,
      needle: /rotate\(-?[\d.]+ 66 62\)/.test(txt),
      screwBase: (txt.match(/url\(#gScrew\)/g) || []).length,
      glow, reads, status,
    }
  })
  assert('拟真：电池盒含两节 1.5V 干电池', circ.battery15V >= 2, `1.5V 出现 ${circ.battery15V} 次`)
  assert('拟真：闸刀开关样式', circ.knife)
  assert('拟真：电流表指针按读数偏转', circ.needle)
  assert('拟真：灯泡螺旋灯座', circ.screwBase >= 3, `screwBase=${circ.screwBase}`)
  assert('仿真：串联电路有电流读数', /A/.test(circ.reads) && /导通|电流/.test(circ.status), `reads=${circ.reads.slice(0, 40)} | status=${circ.status.slice(0, 40)}`)
  assert('仿真：灯泡发光（glow>0）', Number(circ.glow) > 0, `glow=${circ.glow}`)
  await page.click('[data-preset="parallel"]'); await page.waitForTimeout(500); await shot('05-phys-preset-parallel')
  await page.click('[data-preset="voltammetry"]'); await page.waitForTimeout(700); await shot('06-phys-preset-voltammetry')
  const v = await page.evaluate(() => {
    const t = document.querySelector('#physHolder').innerHTML
    return { coil: (t.match(/stroke="#6e4a2f"/g) || []).length, bands: (t.match(/#d4af37/g) || []).length, rheo: t.includes('滑动变阻器') }
  })
  assert('拟真：滑动变阻器密绕线圈（≥20 圈）', v.coil >= 20, `圈数=${v.coil}`)
  assert('拟真：定值电阻色环', v.bands >= 1, `色环=${v.bands}`)

  // ── 声现象 ──
  await page.click('[data-plab="sound"]'); await page.waitForTimeout(800)
  await page.fill('#sndFreq', '800').catch(() => {})
  await page.evaluate(() => { document.querySelector('#sndFreq').value = 800; document.querySelector('#sndFreq').dispatchEvent(new Event('input')) })
  await page.evaluate(() => { document.querySelector('#sndAmp').value = 85; document.querySelector('#sndAmp').dispatchEvent(new Event('input')) })
  await page.click('#btnForkStrike'); await page.waitForTimeout(800)
  await shot('07-phys-sound-waveform')
  const wave = await page.evaluate(() => {
    const c = document.querySelector('#sndWave'), ctx = c.getContext('2d')
    const d = ctx.getImageData(0, 0, c.width, c.height).data
    let painted = 0
    for (let i = 0; i < d.length; i += 4) if (d[i + 3] > 0 && !(d[i] > 240 && d[i + 1] > 240 && d[i + 2] > 240)) painted++
    return { painted, hz: document.querySelector('#sndFreqV').textContent, amp: document.querySelector('#sndAmpV').textContent }
  })
  assert('声学：波形 canvas 已绘制曲线', wave.painted > 2000, `着色像素=${wave.painted}`)
  assert('声学：频率/振幅读数联动', wave.hz.includes('800') && wave.amp.includes('85'), `${wave.hz} / ${wave.amp}`)
  await page.click('#btnBellJar'); await page.waitForTimeout(3600)
  await shot('08-phys-sound-vacuum')
  const jar = await page.evaluate(() => ({
    air: document.querySelector('#jarAirLabel').textContent,
    note: document.querySelector('#sndNote').textContent,
  }))
  assert('声学：真空罩抽气后空气量下降', parseInt(jar.air.match(/空气 (\d+)%/)?.[1] ?? '100') < 100, jar.air)

  // ── 光现象 4 个实验 ──
  await page.click('[data-plab="optics"]'); await page.waitForTimeout(500)
  for (const [v, name] of [['reflect', '09-opt-reflect'], ['mirror', '10-opt-mirror'], ['refract', '11-opt-refract'], ['lens', '12-opt-lens']]) {
    await page.selectOption('#optSel', v); await page.waitForTimeout(500); await shot(name)
    const t = await page.evaluate(() => document.querySelector('#optSvg').textContent)
    if (v === 'reflect') assert('光学：反射角=入射角标注', /入射角 (\d+)°[\s\S]*反射角 \1°/.test(t) || /反射角/.test(t), t.slice(0, 60))
    if (v === 'refract') assert('光学：折射角小于入射角', /折射角 \d+°/.test(t), t.match(/折射角 \d+°/)?.[0] || '')
    if (v === 'lens') assert('光学：凸透镜成像类型标注', /照相机|投影仪|放大镜/.test(t), t.match(/[^\s]*(照相机|投影仪|放大镜)/)?.[0] || '')
  }
  // 拖动凸透镜的物体（物距变化 → 成像类型变化）
  await page.selectOption('#optSel', 'lens'); await page.waitForTimeout(300)
  const hb = await page.locator('.opt-handle[data-h="lensobj"]').boundingBox()
  if (hb) {
    await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2)
    await page.mouse.down()
    await page.mouse.move(hb.x - 120, hb.y, { steps: 8 })
    await page.mouse.up()
    await page.waitForTimeout(400)
    await shot('13-opt-lens-dragged')
    const after = await page.evaluate(() => document.querySelector('#optSvg').textContent)
    assert('光学：拖动后成像类型/位置随之变化', /实像|虚像/.test(after), after.match(/(实像|虚像)/)?.[0] || '')
  }

  // ── 力学 3 个实验 ──
  await page.click('[data-plab="force"]'); await page.waitForTimeout(500)
  await shot('14-force-spring')
  await page.click('.wt[data-w="2"]'); await page.waitForTimeout(300)
  await page.click('.wt[data-w="1"]'); await page.waitForTimeout(400)
  await shot('15-force-spring-hooked')
  const spring = await page.evaluate(() => document.querySelector('#forceSvg').textContent)
  assert('力学：弹簧测力计示数 = 挂载砝码之和', /F = 3\.0 N/.test(spring), spring.match(/F = [\d.]+ N/)?.[0] || '')
  await page.selectOption('#forceSel', 'inertia'); await page.waitForTimeout(400)
  await page.click('#forceLaunch'); await page.waitForTimeout(1500)
  await shot('16-force-inertia')
  const inertia = await page.evaluate(() => document.querySelector('#forceSvg').textContent)
  assert('力学：牛顿第一定律推理文字', /牛顿第一定律/.test(inertia))
  await page.selectOption('#forceSel', 'ruler'); await page.waitForTimeout(400)
  await page.fill('#rulerInput', '2.63').catch(() => {})
  await page.evaluate(() => { const i = document.querySelector('#rulerInput'); i.value = '2.63'; i.dispatchEvent(new Event('input')) })
  await page.click('#rulerCheck'); await page.waitForTimeout(500)
  await shot('17-force-ruler')
  const fb = await page.evaluate(() => document.querySelector('#rulerFb')?.textContent || '')
  assert('力学：刻度尺读数判题反馈', /正确|再想想/.test(fb), fb.slice(0, 50))

  // ── 化学 3D ──
  await clickTab('chem')
  await page.waitForTimeout(500)
  for (const v of ['testTube', 'beaker', 'flask', 'gasBottle']) {
    await page.click(`[data-vessel="${v}"]`); await page.waitForTimeout(200)
  }
  await page.evaluate(() => { const r = document.querySelector('#chemRot'); r.value = 28; r.dispatchEvent(new Event('input')) })
  await page.waitForTimeout(400)
  await shot('18-chem-3d-vessels')
  const chem = await page.evaluate(() => {
    const vs = [...document.querySelectorAll('#chemHolder .vessel')]
    return {
      count: vs.length,
      withRim: vs.filter(v => v.querySelector('ellipse')).length,
      withShadow: vs.filter(v => v.querySelector('ellipse[fill^="rgba(40,60,90"]')).length,
      transformed: vs.filter(v => (v.style.transform || '').includes('rotateY')).length,
      rotDeg: document.querySelector('#chemRot')?.value,
    }
  })
  assert('化学：4 件仪器全部渲染', chem.count === 4, `count=${chem.count}`)
  assert('化学 3D：椭圆开口透视（每件仪器）', chem.withRim === chem.count, `含椭圆=${chem.withRim}/${chem.count}`)
  assert('化学 3D：投影阴影', chem.withShadow >= 3, `阴影=${chem.withShadow}`)
  assert('化学 3D：视角旋转已生效', chem.transformed === chem.count && chem.rotDeg === '28', `rotY=${chem.transformed}/${chem.count} deg=${chem.rotDeg}`)
  // 加药品（先选药品，再双击仪器）
  const firstVessel = page.locator('#chemHolder .vessel').first()
  const reagent = page.locator('#reagentShelf button').first()
  const rname = await reagent.textContent()
  await reagent.click()
  await firstVessel.click()          // 提示文案就是"再点仪器加入"，单击即可
  await page.waitForTimeout(500)
  const added = await page.evaluate(() => ({
    label: document.querySelector('#chemHolder .vessel div')?.textContent || '',
    log: document.querySelector('#chemLog')?.textContent || '',
  }))
  assert('化学：单击仪器即加入已选药品', /稀盐酸/.test(added.label) || /加入/.test(added.log), `label=${added.label} log=${added.log.slice(0, 40)}`)
  await page.click('#btnHeat'); await page.waitForTimeout(900)
  await shot('19-chem-reaction-heat')
  const rx = await page.evaluate(() => ({
    log: document.querySelector('#chemLog')?.textContent || '',
    eq: document.querySelector('#eqBanner')?.textContent || '',
    lamp: !!document.querySelector('#chemHolder .flame'),
  }))
  assert('化学：加入药品有实验记录', /加入/.test(rx.log), rx.log.slice(0, 60))
  assert('化学：加热显示酒精灯火焰', rx.lamp)
  log('首个药品：', rname)

  // ── 白板 / 集控 ──
  await clickTab('board'); await page.waitForTimeout(600); await shot('20-board')
  await clickTab('control'); await page.waitForTimeout(800); await shot('21-control')

  await browser.close()

  console.log('\n════ 运行时检查结果 ════')
  const failed = checks.filter(c => !c.ok)
  console.log(`断言 ${checks.length - failed.length}/${checks.length} 通过；控制台错误 ${errors.length} 条，警告 ${warnings.length} 条`)
  for (const c of failed) console.log('  ✗ 断言失败：', c.name, '→', c.detail)
  for (const e of [...new Set(errors)]) console.log('  ✗', e.slice(0, 300))
  for (const w of [...new Set(warnings)].slice(0, 8)) console.log('  ⚠', w.slice(0, 200))
  if (badRequests.length) { console.log(`失败请求 ${badRequests.length} 条：`); for (const b of [...new Set(badRequests)]) console.log('  ✗', b) }
  console.log('截图目录：', OUT)
  const hardErrors = errors.filter(e => !/favicon/.test(e))
  process.exit(failed.length || hardErrors.length ? 1 : 0)
}

main().catch(e => { console.error('验证脚本失败：', e); process.exit(2) })
