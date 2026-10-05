/* 工具层：确定性动画辅助（无随机、无时间依赖，可逐帧 seek） */
const P = {
  SCENES: [],
  W: 1920, H: 1080, V: false,
  TOTAL: 62.0,
}

/* ---------- 基础 ---------- */
const $ = (sel, root = document) => root.querySelector(sel)
const mk = (tag, cls, html) => {
  const e = document.createElement(tag)
  if (cls) e.className = cls
  if (html != null) e.innerHTML = html
  return e
}
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x)
const seg = (t, a, b) => clamp01((t - a) / (b - a || 1e-6))
const mix = (a, b, p) => a + (b - a) * p

const E = {
  linear: (p) => p,
  outCubic: (p) => 1 - Math.pow(1 - p, 3),
  outQuart: (p) => 1 - Math.pow(1 - p, 4),
  outQuint: (p) => 1 - Math.pow(1 - p, 5),
  outExpo: (p) => (p >= 1 ? 1 : 1 - Math.pow(2, -11 * p)),
  inCubic: (p) => p * p * p,
  inOutCubic: (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
  outBack: (p) => 1 + 2.2 * Math.pow(p - 1, 3) + 1.2 * Math.pow(p - 1, 2),
  outElastic: (p) => (p === 0 || p === 1 ? p : Math.pow(2, -9 * p) * Math.sin((p * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1),
  outBounce: (p) => {
    const n = 7.5625, d = 2.75
    if (p < 1 / d) return n * p * p
    if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75
    if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375
    return n * (p -= 2.625 / d) * p + 0.984375
  },
}
const A = (t, a, b, ease = E.outCubic) => ease(seg(t, a, b))

/* 确定性伪随机（基于索引哈希，逐帧一致） */
const hash = (i) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

/* ---------- 动画应用 ---------- */
function place(el, { x = null, y = null, s = null, sx = null, sy = null, rot = null, sk = null } = {}) {
  const parts = []
  if (x != null || y != null) parts.push(`translate3d(${x || 0}px, ${y || 0}px, 0)`)
  if (sx != null || sy != null) parts.push(`scale(${sx == null ? sy : sx}, ${sy == null ? sx : sy})`)
  if (s != null) parts.push(`scale(${s})`)
  if (rot != null) parts.push(`rotate(${rot}deg)`)
  if (sk != null) parts.push(`skewX(${sk}deg)`)
  el.style.transform = parts.join(' ')
}
function show(el, p) { el.style.opacity = p }

/* 入场：从下方/缩放 + 渐显 */
function enter(el, p, { dy = 46, dx = 0, s = 0.94, rot = 0, ease = E.outCubic } = {}) {
  const e = ease(p)
  place(el, { x: dx * (1 - e), y: dy * (1 - e), s: mix(s, 1, e), rot: rot * (1 - e) })
  show(el, clamp01(p * 1.6))
}
/* 退场 */
function leave(el, p, { dy = -40, s = 1.04, ease = E.inCubic } = {}) {
  const e = ease(p)
  place(el, { y: dy * e, s: mix(1, s, e) })
  show(el, 1 - e)
}

/* 文本拆字（可逐字动画） */
function splitChars(el) {
  if (el.dataset.split === '1') return [...el.querySelectorAll('.ch')]
  const txt = el.textContent
  el.textContent = ''
  for (const c of txt) {
    const s = mk('span', 'ch', c === ' ' ? '&nbsp;' : c)
    s.style.display = 'inline-block'
    s.style.willChange = 'transform, opacity'
    el.appendChild(s)
  }
  el.dataset.split = '1'
  return [...el.querySelectorAll('.ch')]
}
function charsIn(el, t, { start = 0, per = 0.05, dur = 0.5, dy = 40, rot = 0, s = 0.9 } = {}) {
  const cs = splitChars(el)
  cs.forEach((c, i) => {
    const p = A(t, start + i * per, start + i * per + dur)
    place(c, { y: dy * (1 - p), s: mix(s, 1, p), rot: rot * (1 - p) })
    show(c, clamp01(p * 1.3))
  })
  return cs
}
/* 高亮扫过 */
function hlSweep(el, p) {
  const hl = el.querySelector('.hl')
  if (!hl) return
  hl.style.transform = `scaleX(${clamp01(p)})`
}

/* 数字滚动 */
function rollNumber(el, v, digits = 0) {
  el.textContent = v.toFixed(digits)
}

/* 通用：字幕轮换 */
function capSwap(el, t, steps) {
  // steps: [[t0, html], ...]
  let cur = null
  for (let i = 0; i < steps.length; i++) {
    if (t >= steps[i][0] && (i === steps.length - 1 || t < steps[i + 1][0])) cur = i
  }
  if (cur == null) { show(el, 0); return }
  if (el.dataset.cur !== String(cur)) {
    el.dataset.cur = String(cur)
    el.querySelector('.cap-text').innerHTML = steps[cur][1]
  }
  const t0 = steps[cur][0]
  const inP = A(t, t0, t0 + 0.35, E.outCubic)
  enter(el, inP, { dy: 26, s: 0.96 })
}

/* ---------- 品牌 logo ---------- */
const LOGO_SVG = (size = 190) => `
<svg width="${size}" height="${size}" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/><stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="65" fill="url(#bgGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

/* ---------- 常用积木 ---------- */
function captionBar(text) {
  const cap = mk('div', 'caption', `<span class="bar"></span><span class="cap-text">${text}</span>`)
  return cap
}
function chipEl(text, cls = '') {
  return mk('div', 'chip ' + cls, text)
}
function students(n = 36) {
  const names = ('张小明 李思远 王雨桐 陈嘉禾 刘子墨 赵晨曦 孙一诺 周天佑 吴梓涵 郑亦然 冯浩宇 陈思彤 褚佳怡 卫子涵 ' +
    '蒋雨泽 沈嘉宁 韩欣然 杨博文 朱语桐 秦子敬 许清和 何芷若 吕泽宇 施沐晨 张语诺 孔令仪 曹雨辰 严承宇 ' +
    '华梓萱 金泽楷 魏子涵 陶依然 姜宇轩 戚嘉懿 谢知远 邹雨桐').split(' ')
  return names.slice(0, n)
}

/* 打卡大屏 mockup */
function buildBoard() {
  const board = mk('div', 'board')
  board.innerHTML = `
    <div class="board-head">
      <div class="board-title"><span class="live"></span>高一(2)班 · 数学 · 扫码签到</div>
      <div class="board-timer" id="timer">02:41</div>
    </div>
    <div class="board-body">
      <div class="stu-grid" id="grid"></div>
      <div class="rank">
        <h4>签到榜</h4>
        <div id="ranklist"></div>
      </div>
    </div>`
  return board
}

window.P = Object.assign(P, {
  $, mk, clamp01, seg, mix, E, A, hash, place, show, enter, leave, splitChars, charsIn, hlSweep,
  rollNumber, capSwap, LOGO_SVG, captionBar, chipEl, students, buildBoard,
})
