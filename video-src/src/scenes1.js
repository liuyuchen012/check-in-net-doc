/* 场景 1-4：钩子 / 亮相 / 扫码签到 / 课堂日常 */
;(function () {
const { mk, seg, A, E, place, show, enter, leave, charsIn, hlSweep, clamp01, mix, hash, LOGO_SVG, captionBar, chipEl, students, buildBoard } = P

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
      </div>
      `
    const words = ['点名', '签到', '批改', '发成绩']
    const hw = root.querySelector('#hw')
    words.forEach((w, i) => {
      const c = mk('div', 'wcard', `<span>${w}</span><i class="slash"></i>`)
      c.dataset.i = i
      hw.appendChild(c)
    })
    // 漂浮纸张
    const papers = root.querySelector('.papers')
    for (let i = 0; i < 7; i++) {
      const p = mk('div', 'fpaper')
      const w = 150 + hash(i) * 130
      const h = w * 1.34
      p.style.width = w + 'px'
      p.style.height = h + 'px'
      p.style.left = (hash(i + 20) * 92) + '%'
      p.style.top = (hash(i + 40) * 92) + '%'
      p.innerHTML = '<i></i><i></i><i></i><i></i>'
      papers.appendChild(p)
    }
  },
  update(t, t0) {
    const root = this.root
    const words = [...root.querySelectorAll('.wcard')]
    const times = [0.5, 1.06, 1.62, 2.18]
    words.forEach((w, i) => {
      const p = A(t, times[i], times[i] + 0.42, E.outBack)
      const vis = t < times[i] ? 0 : 1
      place(w, { y: mix(40, 0, p), s: mix(1.34, 1, p), rot: mix(i % 2 ? 4 : -4, 0, p) })
      show(w, vis * clamp01(p * 2))
      // 红线划掉
      const sl = w.querySelector('.slash')
      const cp = A(t, 6.35 + i * 0.12, 6.75 + i * 0.12, E.outQuart)
      sl.style.transform = `scaleX(${cp})`
    })
    // 纸张漂浮
    const papers = [...root.querySelectorAll('.fpaper')]
    papers.forEach((p, i) => {
      const dx = Math.sin(t * 0.5 + i) * 26
      const dy = Math.cos(t * 0.42 + i * 1.7) * 20
      place(p, { x: dx, y: dy, rot: Math.sin(t * 0.3 + i * 2) * 7 + (hash(i) * 10 - 5) })
      show(p, 0.1 + 0.05 * Math.sin(t + i))
    })
    // 时钟
    const hand = root.querySelector('.hand')
    hand.style.transform = `rotate(${(t * 340) % 360}deg)`
    const clock = root.querySelector('.clock')
    show(clock, A(t, 0.15, 0.7) * (1 - A(t, 6.9, 7.3, E.inCubic)))

    // 痛点句（分两段逐字，避免高亮层被拆字破坏）
    charsIn(root.querySelector('.pt1'), t, { start: 2.95, per: 0.05, dur: 0.45, dy: 34 })
    charsIn(root.querySelector('.pt2'), t, { start: 3.35, per: 0.05, dur: 0.45, dy: 34 })
    show(root.querySelector('.pt3'), A(t, 3.75, 4.0))
    hlSweep(root.querySelector('#pain'), A(t, 4.35, 5.15, E.outQuart))
    const painBox = root.querySelector('#pain')
    show(painBox, A(t, 2.9, 3.25) * (1 - A(t, 6.95, 7.35, E.inCubic)))
    place(painBox, { y: mix(20, 0, A(t, 2.9, 3.4, E.outCubic)) })

    // 收尾：整体轻推

    if (t > 7.0) { show(this.root, 1 - A(t, 7.05, 7.4, E.inCubic)) }
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
    chips.forEach((c) => box.appendChild(chipEl(c)))
    root.querySelector('#rvword').style.textAlign = 'center'
  },
  update(t) {
    const root = this.root
    // 背景流动
    const blobs = [...root.querySelectorAll('.blob')]
    blobs.forEach((b, i) => { place(b, { x: Math.sin(t * 0.35 + i * 2) * 60, y: Math.cos(t * 0.3 + i) * 44, s: 1 + 0.06 * Math.sin(t * 0.4 + i) }) })

    const logo = root.querySelector('#rvlogo')
    const p = A(t, 0.18, 0.86, E.outBack)
    place(logo, { s: mix(0.3, 1, p), rot: mix(-16, 0, p) })
    show(logo, clamp01(p * 2))
    const rings = [...root.querySelectorAll('.ring')]
    rings.forEach((r, i) => {
      const rp = seg(t, 0.25 + i * 0.28, 1.5 + i * 0.28)
      place(r, { s: mix(0.7, 2.1, rp) })
      show(r, rp > 0 && rp < 1 ? 0.55 * (1 - rp) : 0)
    })

    const word = root.querySelector('#rvword')
    charsIn(word, t, { start: 0.62, per: 0.055, dur: 0.5, dy: 62, s: 0.86 })
    const badge = root.querySelector('#rvbadge')
    const bp = A(t, 1.28, 1.72, E.outBack)
    place(badge, { s: mix(0.2, 1, bp), rot: mix(18, 0, bp) })
    show(badge, clamp01(bp * 2))

    enter(root.querySelector('#rvsub'), A(t, 1.6, 2.2), { dy: 30 })
    const chips = [...root.querySelectorAll('#rvchips .chip')]
    chips.forEach((c, i) => {
      const p = A(t, 2.05 + i * 0.16, 2.5 + i * 0.16, E.outBack)
      place(c, { y: mix(50, 0, p), s: mix(0.9, 1, p) })
      show(c, clamp01(p * 2))
    })

    // 收尾推进
    const out = A(t, 5.5, 6.0, E.inCubic)
    place(root.querySelector('.rv'), { s: mix(1, 1.07, out) })
    show(root.querySelector('.rv'), 1 - out * 0.9)
  },
})

/* ============ S3 · 扫码签到 ============ */
P.SCENES.push({
  id: 'checkin', start: 13.4, end: 21.2,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div class="ck">
        <div class="screen-frame ck-screen" id="ckscreen" style="width:1120px;height:700px">
          <div class="viewport" id="ckvp"></div>
        </div>
        <div class="ck-right">
          <div class="phone-frame ck-phone" id="ckphone" style="width:340px;height:700px">
            <div class="notch"></div>
            <div class="viewport" id="ckpvp"></div>
          </div>
        </div>
      </div>
      <div class="cap-layer"><div class="caption ck-cap" id="ckcap"></div></div>
      <div class="ck-chip" id="ckchip">前三名 · 金银铜</div>`
    // 大屏
    const board = buildBoard()
    root.querySelector('#ckvp').appendChild(board)
    const names = students(36)
    const grid = board.querySelector('#grid')
    names.forEach((n) => {
      const b = mk('div', 'stu', n)
      grid.appendChild(b)
    })
    // 手机取景
    const pv = root.querySelector('#ckpvp')
    pv.innerHTML = `
      <div class="camera">
        <div class="cam-top">扫一扫 · 签到</div>
        <div class="finder">
          <span class="c tl"></span><span class="c tr"></span><span class="c bl"></span><span class="c br"></span>
          <div class="qr" id="qr"></div>
          <div class="scanline" id="scanline"></div>
        </div>
        <div class="cam-hint">对准教室大屏上的签到码</div>
        <div class="okcard" id="okcard">
          <div class="ok-ic">✓</div>
          <div class="ok-t">签到成功</div>
          <div class="ok-n">张小明 · 第 3 名</div>
        </div>
      </div>`
    // 伪二维码（确定性）
    const qr = root.querySelector('#qr')
    for (let i = 0; i < 21 * 21; i++) {
      const cell = mk('i')
      const r = Math.floor(i / 21), c = i % 21
      const finder = (r < 7 && c < 7) || (r < 7 && c > 13) || (r > 13 && c < 7)
      const on = finder ? ((r % 6 === 0 || c % 6 === 0) || (r > 1 && r < 5 && c > 1 && c < 5)) : hash(i * 1.7) > 0.52
      if (on) cell.className = 'on'
      qr.appendChild(cell)
    }
    const cap = root.querySelector('#ckcap')
    cap.innerHTML = '<span class="bar"></span><span class="cap-text"></span>'
  },
  update(t) {
    const root = this.root
    const total = 7.8
    // 大屏入场
    const sp = A(t, 0.15, 0.85, E.outCubic)
    const screen = root.querySelector('#ckscreen')
    enter(screen, sp, { dy: 60, s: 0.96 })

    // 打卡点亮
    const stus = [...root.querySelectorAll('.stu')]
    const order = [12, 5, 27, 19, 33, 2, 25, 8, 31, 15, 0, 22, 11, 29, 6, 34, 17, 3]
    order.forEach((idx, k) => {
      const el = stus[idx]
      if (!el) return
      const p = A(t, 0.95 + k * 0.088, 1.25 + k * 0.088, E.outBack)
      if (p <= 0) { el.classList.remove('on'); el.style.background = '#eef2f9'; el.style.color = '#8a9ab2'; return }
      el.classList.add('on')
      el.style.background = `linear-gradient(140deg, #4285f4, #6ba0f8)`
      el.style.color = '#fff'
      el.style.borderColor = 'transparent'
      el.style.boxShadow = `0 8px 20px rgba(66,133,244,${0.28 * p})`
      place(el, { s: mix(1.14, 1, p) })
      show(el, clamp01(0.35 + p * 0.65))
    })
    // 手机入场
    const ph = A(t, 1.5, 2.25, E.outBack)
    const phone = root.querySelector('#ckphone')
    place(phone, { x: mix(340, 0, ph), rot: mix(9, 0, ph), s: mix(0.94, 1, ph) })
    show(phone, clamp01(ph * 1.6))
    // 扫描线
    const sl = root.querySelector('#scanline')
    const sc = seg(t, 2.05, 3.05)
    show(sl, t > 2.0 && t < 3.15 ? 1 : 0)
    sl.style.top = mix(6, 88, sc) + '%'
    // 成功卡
    const ok = root.querySelector('#okcard')
    const op = A(t, 3.02, 3.5, E.outBack)
    place(ok, { y: mix(40, 0, op), s: mix(0.86, 1, op) })
    show(ok, clamp01(op * 1.6))
    const qr = root.querySelector('.qr')
    show(qr, 1 - A(t, 3.05, 3.4))
    const hl = root.querySelector('#qr')
    // 排名
    const rank = [
      ['m1', '1', '张小明', '08:01'],
      ['m2', '2', '李思远', '08:02'],
      ['m3', '3', '王雨桐', '08:02'],
    ]
    const rl = root.querySelector('#ranklist')
    if (!rl.dataset.built) {
      rl.dataset.built = '1'
      rank.forEach(([cls, n, nm, tm]) => {
        const row = mk('div', 'rank-row', `<div class="medal ${cls}">${n}</div><div class="nm">${nm}</div><div class="tm">${tm}</div>`)
        rl.appendChild(row)
      })
    }
    ;[...rl.children].forEach((row, i) => {
      const p = A(t, 3.35 + i * 0.55, 3.75 + i * 0.55, E.outBack)
      place(row, { x: mix(60, 0, p), s: mix(0.94, 1, p) })
      show(row, clamp01(p * 1.8))
    })
    // 字幕
    const cap = root.querySelector('#ckcap')
    const steps = [[0.5, '手机一扫，立即签到'], [2.6, '名字实时上大屏'], [3.6, '前三名 · 金银铜一目了然']]
    let cur = 0
    for (let i = 0; i < steps.length; i++) if (t >= steps[i][0]) cur = i
    const ct = root.querySelector('.cap-text')
    if (ct.dataset.k !== String(cur)) { ct.dataset.k = String(cur); ct.textContent = steps[cur][1] }
    const cp = A(t, steps[cur][0], steps[cur][0] + 0.4)
    show(cap, cp)
    place(cap, { y: mix(24, 0, cp) })
    const chip = root.querySelector('#ckchip')
    enter(chip, A(t, 3.9, 4.4, E.outBack), { dy: 24, s: 0.9 })

    // 收尾
    const out = A(t, 7.1, 7.8, E.inCubic)
    place(root.querySelector('.ck'), { s: mix(1, 1.05, out) })
    show(root.querySelector('.ck'), 1 - out)
  },
})

/* ============ S4 · 课堂日常 ============ */
P.SCENES.push({
  id: 'daily', start: 21.2, end: 28.8,
  build(root) {
    const ICON = {
      call: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 7l2 2 4-4"/></svg>',
      clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
      star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.8 5.9 6.2.9-4.5 4.4 1 6.4L12 17.8 6.5 20.6l1-6.4L3 9.8l6.2-.9z"/></svg>',
      broom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 4l6 6"/><path d="M11 7l6 6-4.5 4.5a4 4 0 01-5.7 0l-.3-.3a4 4 0 010-5.7z"/><path d="M4 20l3-3"/></svg>',
      seat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="13" width="7" height="7" rx="1.5"/><rect x="14" y="13" width="7" height="7" rx="1.5"/></svg>',
      cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    }
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div class="blob" style="width:760px;height:760px;left:60%;top:-180px;background:radial-gradient(circle,rgba(66,133,244,.42),transparent 65%)"></div>
      <div class="dl-grid" id="dlgrid"></div>
      <div class="cap-layer"><div class="caption dl-cap" id="dlcap"><span class="bar"></span><span>一个后台，全部搞定</span></div></div>`
    const cards = [
      { ic: ICON.call, t: '点名', s: '随机加权 · 三种场次', mini: '<div class="mini-name" id="mini-name">李思远</div>' },
      { ic: ICON.clock, t: '课时', s: '划消流水 · 欠课清晰', mini: '<div class="mini-num"><b id="mini-hours">24</b><span>剩余课时</span></div>' },
      { ic: ICON.star, t: '积分', s: '规则上限 · 修正留痕', mini: '<div class="mini-bar"><i id="mini-bar"></i></div><div class="mini-plus">+5</div>' },
      { ic: ICON.broom, t: '值日', s: '按周轮换 · 完成记录', mini: '<div class="mini-rows"><span>擦黑板</span><span>倒垃圾</span><span>整理讲台</span></div>' },
      { ic: ICON.seat, t: '座位', s: '拖拽调座 · 随机换座', mini: '<div class="mini-seat" id="mini-seat"></div>' },
      { ic: ICON.cal, t: '课表', s: '导入导出 · 一键推送到班', mini: '<div class="mini-tt" id="mini-tt"></div>' },
    ]
    const g = root.querySelector('#dlgrid')
    cards.forEach((c, i) => {
      const card = mk('div', 'dl-card', `
        <div class="dl-ic">${c.ic}</div>
        <div class="dl-tx"><div class="dl-t">${c.t}</div><div class="dl-s">${c.s}</div></div>
        <div class="dl-mini">${c.mini}</div>`)
      g.appendChild(card)
    })
    const seat = root.querySelector('#mini-seat')
    for (let i = 0; i < 12; i++) seat.appendChild(mk('i'))
    const tt = root.querySelector('#mini-tt')
    for (let i = 0; i < 15; i++) tt.appendChild(mk('i'))
  },
  update(t) {
    const root = this.root
    const cards = [...root.querySelectorAll('.dl-card')]
    cards.forEach((c, i) => {
      const col = i % 3, row = Math.floor(i / 3)
      const p = A(t, 0.45 + i * 0.15, 1.05 + i * 0.15, E.outBack)
      place(c, { x: mix(col % 2 ? 120 : -120, 0, p), y: mix(70, 0, p), s: mix(0.9, 1, p), rot: mix(col % 2 ? 4 : -4, 0, p) })
      show(c, clamp01(p * 1.7))
    })
    // 点名名字轮换
    const mn = root.querySelector('#mini-name')
    if (mn) {
      const names = ['李思远', '王雨桐', '陈嘉禾', '赵晨曦']
      const idx = Math.floor(clamp01(seg(t, 1.6, 4.6)) * 3.99)
      if (mn.dataset.i !== String(idx)) { mn.dataset.i = String(idx); mn.textContent = names[idx] }
      const flick = Math.abs(Math.sin(t * 9))
      show(mn, 0.75 + 0.25 * flick)
    }
    // 课时数字
    const mh = root.querySelector('#mini-hours')
    if (mh) rollNumber(mh, Math.round(mix(40, 24, A(t, 1.5, 2.6, E.outCubic))))
    // 积分条
    const mb = root.querySelector('#mini-bar')
    if (mb) mb.style.transform = `scaleX(${A(t, 1.8, 3.0, E.outCubic)})`
    // 座位洗牌
    const seats = [...root.querySelectorAll('#mini-seat i')]
    seats.forEach((s, i) => {
      const off = Math.sin(t * 2.4 + i * 1.3) * (1 - A(t, 4.6, 5.2)) * 6
      const on = hash(i * 3.3) > 0.5
      s.style.background = i >= 6 ? '#dbe7fb' : 'linear-gradient(140deg,#4285f4,#6ba0f8)'
      place(s, { x: off, y: off * 0.6 })
    })
    // 课表高亮
    const tts = [...root.querySelectorAll('#mini-tt i')]
    const hot = Math.floor(clamp01(seg(t, 2.2, 5.0)) * 14)
    tts.forEach((c, i) => { c.style.background = i === hot ? 'linear-gradient(120deg,#4285f4,#7c3aed)' : (i % 5 === 0 ? '#dbe7fb' : '#eef3fb') })
    // 字幕
    const cap = root.querySelector('#dlcap')
    const cp = A(t, 3.5, 4.0, E.outBack)
    place(cap, { y: mix(40, 0, cp), s: mix(0.94, 1, cp) })
    show(cap, cp)
    // 收尾
    const out = A(t, 7.0, 7.6, E.inCubic)
    show(root.querySelector('.dl-grid'), 1 - out * 0.9)
    show(root.querySelector('.dl-cap'), 1 - out * 0.9)
    show(root.querySelectorAll('.blob')[0], (1 - out * 0.9) * 0.55)
  },
})
})()
