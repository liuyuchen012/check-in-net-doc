/* 场景 9-11（加长版新增）：教学模式 / 定制版 ClassIsland / 开源许可声明 */
;(function () {
const { mk, seg, A, E, place, show, enter, clamp01, mix, hash, LOGO_SVG } = P

/* 与 scenes2.js 相同的截图卡片（本地复用一份小实现） */
function shotCard(img, url, w) {
  const el = mk('div', 'shot')
  if (w) el.style.width = w + 'px'
  el.innerHTML = `
    <div class="shot-bar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i>
      <span class="shot-url">${url}</span></div>
    <div class="shot-body"><div class="shot-zoom"><img class="shot-img" src="${img}" alt=""><div class="spot"></div></div></div>`
  return el
}
function focusShot(card, z, fx, fy) {
  const layer = card && card.querySelector('.shot-zoom')
  if (!layer) return
  const img = card.querySelector('.shot-img')
  const w = img.clientWidth || 1
  const h = img.clientHeight || 1
  place(layer, { s: z, x: -(w * z * (clamp01(fx) - 0.5)), y: -(h * z * (clamp01(fy) - 0.5)) })
}
function spot(card, { x, y, w, h, p }) {
  const el = card && card.querySelector('.spot')
  if (!el) return
  el.style.left = x + '%'; el.style.top = y + '%'
  el.style.width = w + '%'; el.style.height = h + '%'
  show(el, clamp01(p))
  place(el, { s: mix(1.16, 1, clamp01(p)) })
}
function capText(root, t, steps) {
  let cur = 0
  for (let i = 0; i < steps.length; i++) if (t >= steps[i][0]) cur = i
  const ct = root.querySelector('.cap-text')
  if (ct.dataset.k !== String(cur)) { ct.dataset.k = String(cur); ct.textContent = steps[cur][1] }
  const cap = root.querySelector('.caption')
  const cp = A(t, steps[cur][0], steps[cur][0] + 0.4, E.outBack)
  show(cap, cp)
  place(cap, { y: mix(24, 0, cp) })
}

/* ============ S9 · 教学模式（授课台） ============ */
P.SCENES.push({
  id: 'teaching', start: 52.6, end: 62.6,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div class="blob" style="width:760px;height:760px;right:-200px;top:-260px;background:radial-gradient(circle,rgba(124,58,237,.34),transparent 65%)"></div>
      <div id="tBoard" style="position:absolute;left:100px;top:140px"></div>
      <div id="tPhys" style="position:absolute;left:1040px;top:210px"></div>
      <div id="tCtrl" style="position:absolute;left:560px;top:560px"></div>
      <div class="ag-chip-row" id="tagchips" style="left:1040px;top:120px">
        <span class="chip">📄 课件批注</span><span class="chip">🧪 实验演示</span><span class="chip">🎛️ 教室集控</span>
      </div>
      <div class="cap-layer"><div class="caption"><span class="bar"></span><span class="cap-text"></span></div></div>`
    root.querySelector('#tBoard').appendChild(shotCard('img/teaching-whiteboard.png', '/teaching · 白板批注（自动保存 + 回放）', 900))
    root.querySelector('#tPhys').appendChild(shotCard('img/teaching-physics.png', '/teaching · 物理电路实时仿真', 760))
    root.querySelector('#tCtrl').appendChild(shotCard('img/teaching-control.png', '/teaching · 教室集控（带执行回执）', 780))
  },
  update(t) {
    const root = this.root
    const board = root.querySelector('#tBoard')
    const phys = root.querySelector('#tPhys')
    const ctrl = root.querySelector('#tCtrl')

    const p1 = A(t, 0.2, 0.95, E.outBack)
    place(board, { x: mix(-170, 0, p1), rot: mix(-3.5, 0, p1), s: mix(0.92, 1, p1) })
    show(board, clamp01(p1 * 1.6))
    focusShot(board, mix(1, 1.1, A(t, 1.4, 5.4, E.linear)), 0.5, 0.42)

    const p2 = A(t, 1.6, 2.35, E.outBack)
    place(phys, { x: mix(190, 0, p2), rot: mix(3.5, 0, p2), s: mix(0.92, 1, p2) })
    show(phys, clamp01(p2 * 1.6) * (1 - A(t, 5.6, 6.0)))
    focusShot(phys, mix(1, 1.1, A(t, 2.6, 5.4, E.linear)), 0.42, 0.5)

    enter(root.querySelector('#tagchips'), A(t, 1.0, 1.55, E.outBack), { dy: 30, s: 0.92 })

    const p3 = A(t, 5.9, 6.6, E.outBack)
    place(ctrl, { y: mix(120, 0, p3), s: mix(0.94, 1, p3) })
    show(ctrl, clamp01(p3 * 1.7))
    focusShot(ctrl, mix(1, 1.08, A(t, 6.8, 9.4, E.linear)), 0.5, 0.45)
    spot(ctrl, { x: 8, y: 30, w: 40, h: 20, p: A(t, 7.2, 7.8) })

    capText(root, t, [
      [0.3, '教学模式：一个页面，上完一节课'],
      [1.7, '课件批注自动保存 · 按书写顺序回放'],
      [4.0, '物理电路实时仿真 · 化学反应带方程式'],
      [6.4, '教室集控：指令下发，回执可查'],
    ])
    const out = A(t, 9.5, 9.9, E.inCubic)
    ;[board, phys, ctrl].forEach((el) => { if (el) el.style.opacity = String(clamp01(1 - out)) })
  },
})

/* ============ S10 · 定制版 ClassIsland ============ */
P.SCENES.push({
  id: 'custom', start: 62.6, end: 70.6,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-dark"></div>
      <div class="layer grid-lines dark"></div>
      <div class="blob" style="width:820px;height:820px;left:-240px;bottom:-320px;background:radial-gradient(circle,rgba(66,133,244,.38),transparent 65%)"></div>
      <div id="cuWin" style="position:absolute;left:130px;top:150px;width:860px"></div>
      <div id="cuCmds" style="position:absolute;right:120px;top:190px;width:620px"></div>
      <div class="cu-join" id="cujoin" style="right:120px;bottom:150px">
        <div class="cu-join-label">设置 → 集控 → 加入管理</div>
        <div class="cu-join-url">https://agorain.615mc.cn</div>
      </div>
      <div class="cap-layer"><div class="caption"><span class="bar"></span><span class="cap-text"></span></div></div>`

    // 「关于」窗口 mock：AgoraIn 定制版卡片
    const win = mk('div', 'cu-window glass')
    win.innerHTML = `
      <div class="cu-titlebar"><i class="dot r"></i><i class="dot y"></i><i class="dot g"></i><span>设置 · 关于</span></div>
      <div class="cu-about">
        <div class="cu-logo">${LOGO_SVG(120)}</div>
        <div class="cu-info">
          <div class="cu-name">AgoraIn 定制版</div>
          <div class="cu-sub">基于 ClassIsland · 集控客户端</div>
          <div class="cu-line">通知 / 语音播报 / 锁屏 / 电源控制 / 课表推送 / 呼叫提醒</div>
          <div class="cu-gpl">GPL-3.0 开源 · 源码随包提供</div>
        </div>
      </div>`
    root.querySelector('#cuWin').appendChild(win)

    // 指令清单（逐条点亮）
    const cmds = root.querySelector('#cuCmds')
    const list = ['🔔 通知弹窗', '🗣 语音播报', '🔒 锁定屏幕', '⏻ 电源控制', '🌐 打开网页', '📅 课表推送']
    list.forEach((c) => cmds.appendChild(mk('div', 'cu-cmd', c)))
  },
  update(t) {
    const root = this.root
    const winEl = root.querySelector('#cuWin')
    const wp = A(t, 0.2, 0.95, E.outBack)
    place(winEl, { x: mix(-160, 0, wp), rot: mix(-3, 0, wp), s: mix(0.93, 1, wp) })
    show(winEl, clamp01(wp * 1.6))

    const cmds = root.querySelector('#cuCmds')
    ;[...cmds.querySelectorAll('.cu-cmd')].forEach((c, i) => {
      const p = A(t, 1.3 + i * 0.22, 1.85 + i * 0.22, E.outBack)
      place(c, { x: mix(120, 0, p), s: mix(0.9, 1, p) })
      show(c, clamp01(p * 1.6))
    })
    enter(root.querySelector('#cujoin'), A(t, 3.4, 4.0, E.outBack), { dy: 30, s: 0.94 })
    place(root.querySelector('.cu-logo'), { s: mix(0.9, 1.05, A(t, 1.1, 2.0)) })
    capText(root, t, [
      [0.3, '定制版 ClassIsland · 内置集控客户端'],
      [2.0, '一条指令，直达教室大屏'],
      [4.2, '填入服务器地址，即可接入'],
    ])
    const out = A(t, 7.5, 7.9, E.inCubic)
    ;[winEl, cmds].forEach((el) => { el.style.opacity = String(clamp01(1 - out)) })
  },
})

/* ============ S11 · 开源许可声明 ============ */
P.SCENES.push({
  id: 'license', start: 70.6, end: 79.0,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-brand"></div>
      <div class="layer grid-lines dark"></div>
      <div class="lic-head" id="lichead">
        <div class="lic-kicker" id="lickick">OPEN SOURCE · 开源许可声明</div>
        <div class="lic-title" id="lict">开源，是我们的选择</div>
      </div>
      <div class="lic-grid" id="licgrid">
        <div class="lic-card">
          <div class="lic-badge gpl">GPL-3.0</div>
          <div class="lic-name">定制版 ClassIsland</div>
          <div class="lic-desc">衍生作品 · 完整开源<br>源码随安装包提供</div>
        </div>
        <div class="lic-card">
          <div class="lic-badge gpl">GPL-3.0</div>
          <div class="lic-name">服务端集控插件</div>
          <div class="lic-desc">独立程序集 · 动态加载<br>源码随安装包提供</div>
        </div>
        <div class="lic-card">
          <div class="lic-badge com">商业授权</div>
          <div class="lic-name">AgoraIn 平台</div>
          <div class="lic-desc">与开源部分仅以 HTTP 协议通信<br>不链接、不包含对方代码</div>
        </div>
      </div>
      <div class="lic-line" id="licline">边界清晰：<b>闭源是产品，开源是承诺。</b></div>
      <div class="lic-foot" id="licfoot">上游项目 ClassIsland（GPL-3.0）· 物理化学实验图形全部自绘 · 源码获取见官网「开源许可声明」</div>`
  },
  update(t) {
    const head = this.root.querySelector('#lichead')
    enter(head, A(t, 0.2, 0.9, E.outCubic), { dy: 50 })
    const kick = this.root.querySelector('#lickick')
    const kp = A(t, 0.5, 1.1)
    show(kick, kp)
    const grid = this.root.querySelector('#licgrid')
    enter(grid, A(t, 1.5, 2.3, E.outCubic), { dy: 60 })
    ;[...grid.querySelectorAll('.lic-card')].forEach((c, i) => {
      const p = A(t, 1.7 + i * 0.28, 2.4 + i * 0.28, E.outBack)
      place(c, { y: mix(70, 0, p), s: mix(0.92, 1, p) })
      show(c, clamp01(p * 1.7))
    })
    const line = this.root.querySelector('#licline')
    const lp = A(t, 4.2, 5.0, E.outBack)
    place(line, { y: mix(40, 0, lp), s: mix(0.95, 1, lp) })
    show(line, clamp01(lp * 1.8))
    enter(this.root.querySelector('#licfoot'), A(t, 5.6, 6.2), { dy: 24 })
    const out = A(t, 7.9, 8.3, E.inCubic)
    ;[head, grid, line].forEach((el) => { el.style.opacity = String(clamp01(1 - out * 1.2)) })
  },
})
})()
