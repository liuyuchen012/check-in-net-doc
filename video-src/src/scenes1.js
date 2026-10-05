/* 场景 1-4：钩子 / 亮相 / 真实大屏签到 / 真实后台页面 */
;(function () {
const { mk, seg, A, E, place, show, enter, leave, charsIn, hlSweep, clamp01, mix, hash, LOGO_SVG } = P

/* ---------- 真实截图卡片：浏览器窗口 + 可缩放画面 ---------- */
function shotCard(img, url, w) {
  const el = mk('div', 'shot')
  if (w) el.style.width = w + 'px'
  el.innerHTML = `
    <div class="shot-bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>
      <span class="shot-url">${url}</span></div>
    <div class="shot-body"><div class="shot-zoom"><img class="shot-img" src="${img}" alt=""><div class="spot"></div></div></div>`
  return el
}
/** Ken Burns：把截图放大到 z 倍并聚焦到 (fx,fy) 归一化坐标（0..1） */
function focusShot(card, z, fx, fy) {
  const layer = card && card.querySelector('.shot-zoom')
  if (!layer) return
  const img = card.querySelector('.shot-img')
  const w = img.clientWidth || 1
  const h = img.clientHeight || 1
  // transform-origin 默认是中心：把 (fx,fy) 处的像素推到视口中心；spot 在同一层里一起动
  place(layer, { s: z, x: -(w * z * (clamp01(fx) - 0.5)), y: -(h * z * (clamp01(fy) - 0.5)) })
}
function spot(card, { x, y, w, h, p }) {
  const el = card && card.querySelector('.spot')
  if (!el) return
  el.style.left = x + '%'
  el.style.top = y + '%'
  el.style.width = w + '%'
  el.style.height = h + '%'
  show(el, clamp01(p))
  place(el, { s: mix(1.16, 1, clamp01(p)) })
}

/* ============ S1 · HOOK ============ */
P.SCENES.push({
  id: 'hook', start: 0.0, end: 7.4,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-dark"></div>
      <div class="layer grid-lines dark"></div>
      <div class="layer papers"></div>
      <div class="clock"><div class="ring"></div><div class="hand"></div><div class="lab">时间</div></div>
      <div class="hw" id="hw"></div>
      <div class="pain" id="pain">
        <span class="pain-t pt1">琐碎的日常，正在</span><span class="mark"><span class="hl"></span><span class="pain-t pt2 warn">偷走课堂时间</span></span><span class="pain-t pt3">。</span>
      </div>`
    const words = ['点名', '签到', '批改', '发成绩']
    const hw = root.querySelector('#hw')
    words.forEach((w, i) => {
      const c = mk('div', 'wcard', `<span>${w}</span><i class="slash"></i>`)
      c.dataset.i = i
      hw.appendChild(c)
    })
    const papers = root.querySelector('.papers')
    for (let i = 0; i < 7; i++) {
      const p = mk('div', 'fpaper')
      const w = 150 + hash(i) * 130
      p.style.width = w + 'px'
      p.style.height = w * 1.34 + 'px'
      p.style.left = hash(i + 20) * 92 + '%'
      p.style.top = hash(i + 40) * 92 + '%'
      p.innerHTML = '<i></i><i></i><i></i><i></i>'
      papers.appendChild(p)
    }
  },
  update(t) {
    const root = this.root
    const words = [...root.querySelectorAll('.wcard')]
    const times = [0.5, 1.06, 1.62, 2.18]
    words.forEach((w, i) => {
      const p = A(t, times[i], times[i] + 0.42, E.outBack)
      place(w, { y: mix(40, 0, p), s: mix(1.34, 1, p), rot: mix(i % 2 ? 4 : -4, 0, p) })
      show(w, (t < times[i] ? 0 : 1) * clamp01(p * 2))
      const sl = w.querySelector('.slash')
      sl.style.transform = `scaleX(${A(t, 6.35 + i * 0.12, 6.75 + i * 0.12, E.outQuart)})`
    })
    ;[...root.querySelectorAll('.fpaper')].forEach((p, i) => {
      place(p, { x: Math.sin(t * 0.5 + i) * 26, y: Math.cos(t * 0.42 + i * 1.7) * 20,
                 rot: Math.sin(t * 0.3 + i * 2) * 7 + (hash(i) * 10 - 5) })
      show(p, 0.1 + 0.05 * Math.sin(t + i))
    })
    root.querySelector('.hand').style.transform = `rotate(${(t * 340) % 360}deg)`
    show(root.querySelector('.clock'), A(t, 0.15, 0.7) * (1 - A(t, 6.9, 7.3, E.inCubic)))
    charsIn(root.querySelector('.pt1'), t, { start: 2.95, per: 0.05, dur: 0.45, dy: 34 })
    charsIn(root.querySelector('.pt2'), t, { start: 3.35, per: 0.05, dur: 0.45, dy: 34 })
    show(root.querySelector('.pt3'), A(t, 3.75, 4.0))
    hlSweep(root.querySelector('#pain'), A(t, 4.35, 5.15, E.outQuart))
    const painBox = root.querySelector('#pain')
    show(painBox, A(t, 2.9, 3.25) * (1 - A(t, 6.95, 7.35, E.inCubic)))
    place(painBox, { y: mix(20, 0, A(t, 2.9, 3.4, E.outCubic)) })
    if (t > 7.0) show(root, 1 - A(t, 7.05, 7.4, E.inCubic))
  },
})

/* ============ S2 · REVEAL ============ */
P.SCENES.push({
  id: 'reveal', start: 7.4, end: 13.4,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-bright"></div>
      <div class="layer grid-lines"></div>
      <div class="blob" style="width:900px;height:900px;left:-160px;top:-220px;background:radial-gradient(circle,rgba(66,133,244,.5),transparent 65%)"></div>
      <div class="blob" style="width:820px;height:820px;right:-180px;bottom:-260px;background:radial-gradient(circle,rgba(124,58,237,.4),transparent 65%)"></div>
      <div class="center-layer"><div class="rv">
        <div class="rv-logo" id="rvlogo">
          <div class="ring r1"></div><div class="ring r2"></div>
          <div class="logo-in">${LOGO_SVG(190)}</div>
        </div>
        <div class="rv-mark"><span class="rv-word" id="rvword">AgoraIn</span><span class="v4badge" id="rvbadge">4</span></div>
        <div class="sub" id="rvsub">课堂签到与教学管理一体化平台</div>
        <div class="rv-chips" id="rvchips"></div>
      </div></div>`
    const chips = ['教室一体机', '桌面端', 'Web 管理后台', '移动端 App', '家长小程序']
    const box = root.querySelector('#rvchips')
    chips.forEach((c) => box.appendChild(mk('div', 'chip', c)))
  },
  update(t) {
    const root = this.root
    ;[...root.querySelectorAll('.blob')].forEach((b, i) => {
      place(b, { x: Math.sin(t * 0.35 + i * 2) * 60, y: Math.cos(t * 0.3 + i) * 44, s: 1 + 0.06 * Math.sin(t * 0.4 + i) })
    })
    const logo = root.querySelector('#rvlogo')
    const p = A(t, 0.18, 0.86, E.outBack)
    place(logo, { s: mix(0.3, 1, p), rot: mix(-16, 0, p) })
    show(logo, clamp01(p * 2))
    ;[...root.querySelectorAll('.ring')].forEach((r, i) => {
      const rp = seg(t, 0.25 + i * 0.28, 1.5 + i * 0.28)
      place(r, { s: mix(0.7, 2.1, rp) })
      show(r, rp > 0 && rp < 1 ? 0.55 * (1 - rp) : 0)
    })
    charsIn(root.querySelector('#rvword'), t, { start: 0.62, per: 0.055, dur: 0.5, dy: 62, s: 0.86 })
    const badge = root.querySelector('#rvbadge')
    const bp = A(t, 1.28, 1.72, E.outBack)
    place(badge, { s: mix(0.2, 1, bp), rot: mix(18, 0, bp) })
    show(badge, clamp01(bp * 2))
    enter(root.querySelector('#rvsub'), A(t, 1.6, 2.2), { dy: 30 })
    ;[...root.querySelectorAll('#rvchips .chip')].forEach((c, i) => {
      const cp = A(t, 2.05 + i * 0.16, 2.5 + i * 0.16, E.outBack)
      place(c, { y: mix(50, 0, cp), s: mix(0.9, 1, cp) })
      show(c, clamp01(cp * 2))
    })
    const out = A(t, 5.5, 6.0, E.inCubic)
    place(root.querySelector('.rv'), { s: mix(1, 1.07, out) })
    show(root.querySelector('.rv'), 1 - out * 0.9)
  },
})

/* ============ S3 · 扫码签到（真实「大屏模式」截图） ============ */
P.SCENES.push({
  id: 'checkin', start: 13.4, end: 21.2,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div id="ckWrap" style="position:absolute;left:180px;top:120px"></div>
      <div class="cap-layer"><div class="caption ck-cap" id="ckcap"><span class="bar"></span><span class="cap-text"></span></div></div>
      <div class="ck-chip" id="ckchip">前三名 · 金银铜</div>
      <div class="ck-qr" id="ckqr">
        <img src="img/qr-checkin.png" alt="">
        <div class="ck-qr-line" id="ckqrline"></div>
        <div class="ck-qr-tip">扫一扫 · 签到</div>
      </div>`
    const card = shotCard('img/desktop-large.png', 'AgoraIn 桌面端 · 大屏模式', 1440)
    card.id = 'ckcard'
    root.querySelector('#ckWrap').appendChild(card)
  },
  update(t) {
    const root = this.root
    const card = root.querySelector('#ckcard')
    const sp = A(t, 0.15, 0.95, E.outCubic)
    enter(card, sp, { dy: 70, s: 0.94 })
    // 镜头：整体 → 学生网格 → 左侧打卡排名（前三名）
    const p1 = A(t, 1.1, 2.9, E.inOutCubic)
    const p2 = A(t, 3.2, 5.4, E.inOutCubic)
    const z = mix(mix(P.V ? 1.45 : 1, 1.55, p1), 2.15, p2)
    const fx = mix(mix(0.5, 0.66, p1), 0.19, p2)      // 学生网格 → 左侧打卡排名
    const fy = mix(mix(0.5, 0.24, p1), 0.27, p2)
    focusShot(card, z, fx, fy)
    spot(card, { x: 4.5, y: 9, w: 17.5, h: 36, p: A(t, 3.5, 4.2, E.outCubic) * (1 - A(t, 6.7, 7.05)) })
    // 手机扫一扫浮层（真实二维码来自答题卡页脚二维码）
    const qr = root.querySelector('#ckqr')
    const qp = A(t, 1.5, 2.2, E.outBack)
    place(qr, { x: mix(430, 0, qp), y: mix(70, 0, qp), s: mix(0.85, 1, qp), rot: mix(8, 0, qp) })
    const qVis = clamp01(qp * 1.6) * (1 - A(t, 6.9, 7.25))
    show(qr, qVis)
    const line = root.querySelector('#ckqrline')
    const lp = seg(t, 1.9, 3.0)
    show(line, t > 1.85 && t < 3.15 ? 1 : 0)
    line.style.top = mix(6, 88, lp) + '%'
    enter(root.querySelector('#ckchip'), A(t, 3.6, 4.1, E.outBack), { dy: 24, s: 0.9 })
    const cap = root.querySelector('#ckcap')
    const steps = [[0.5, '手机一扫，立即签到'], [2.4, '名字实时上大屏'], [3.8, '前三名 · 金银铜一目了然']]
    let cur = 0
    for (let i = 0; i < steps.length; i++) if (t >= steps[i][0]) cur = i
    const ct = root.querySelector('.cap-text')
    if (ct.dataset.k !== String(cur)) { ct.dataset.k = String(cur); ct.textContent = steps[cur][1] }
    const cp = A(t, steps[cur][0], steps[cur][0] + 0.4)
    show(cap, cp)
    place(cap, { y: mix(24, 0, cp) })
    const out = A(t, 7.0, 7.7, E.inCubic)
    place(root.querySelector('#ckWrap'), { s: mix(1, 1.04, out) })
    show(root.querySelector('#ckWrap'), 1 - out)
    show(qr, qVis * (1 - out))
  },
})

/* ============ S4 · 课堂日常（四个真实后台页面） ============ */
P.SCENES.push({
  id: 'daily', start: 21.2, end: 28.8,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div class="blob" style="width:760px;height:760px;left:60%;top:-180px;background:radial-gradient(circle,rgba(66,133,244,.42),transparent 65%)"></div>
      <div class="dl-cards" id="dlgrid"></div>
      <div class="cap-layer"><div class="caption dl-cap" id="dlcap"><span class="bar"></span><span>一个后台，全部搞定</span></div></div>`
    const pages = [
      ['img/p-classhours.png', '/classhours', '课时管理'],
      ['img/p-points.png', '/points', '积分管理'],
      ['img/p-duty.png', '/duty', '值日管理'],
      ['img/p-seats.png', '/seats', '座位编排'],
    ]
    const g = root.querySelector('#dlgrid')
    pages.forEach(([img, url, label]) => {
      const cell = mk('div', 'dl-cell')
      const card = shotCard(img, url, 700)
      cell.appendChild(card)
      cell.appendChild(mk('div', 'dl-label', label))
      g.appendChild(cell)
    })
  },
  update(t) {
    const root = this.root
    ;[...root.querySelectorAll('.dl-cell')].forEach((c, i) => {
      const p = A(t, 0.4 + i * 0.18, 1.05 + i * 0.18, E.outBack)
      place(c, { x: mix(i % 2 ? 90 : -90, 0, p), y: mix(60, 0, p), s: mix(0.9, 1, p), rot: mix(i % 2 ? 3 : -3, 0, p) })
      show(c, clamp01(p * 1.7))
      const card = c.querySelector('.shot')
      const z = mix(1, 1.09, A(t, 1.6 + i * 0.5, 6.8, E.linear))
      focusShot(card, z, i % 2 ? 0.34 : 0.62, i < 2 ? 0.26 : 0.6)
    })
    const cap = root.querySelector('#dlcap')
    const cp = A(t, 3.6, 4.1, E.outBack)
    // 竖屏：四张卡纵向滚动，一屏一屏看完（每卡高约 570，可视区约 1350 → 滚动约 1030）
    if (P.V) place(root.querySelector('#dlgrid'), { y: -mix(0, 1030, A(t, 1.3, 7.0, E.inOutCubic)) })
    place(cap, { y: mix(40, 0, cp), s: mix(0.94, 1, cp) })
    show(cap, cp)
    const out = A(t, 7.0, 7.6, E.inCubic)
    show(root.querySelector('#dlgrid'), 1 - out * 0.92)
    show(cap, cp * (1 - out * 0.92))
  },
})
})()
