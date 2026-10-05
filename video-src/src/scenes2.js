/* 场景 5-8：考试阅卷 / 家校沟通 / 平台能力 / 片尾 */
;(function () {
const { mk, seg, A, E, place, show, enter, leave, charsIn, hlSweep, clamp01, mix, hash, LOGO_SVG } = P

/* ============ S5 · 考试与阅卷 ============ */
P.SCENES.push({
  id: 'exam', start: 28.8, end: 39.2,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-bright"></div>
      <div class="layer grid-lines"></div>
      <div class="ex-paper" id="expaper">
        <div class="paper" style="width:660px;height:860px">
          <span class="anchor tl"></span><span class="anchor tr"></span><span class="anchor bl"></span><span class="anchor br"></span>
          <div class="paper-title">数学 · 单元检测 答题卡</div>
          <div class="paper-meta">高一(2)班　姓名：张小明　考号：20261012</div>
          <div class="omr" id="omr"></div>
          <div class="answer-box" style="height:150px"><span>17. 解答题</span></div>
          <div class="ex-checks" id="exchecks"></div>
        </div>
      </div>
      <div class="ex-phone phone-frame" id="exphone" style="width:320px;height:640px">
        <div class="notch"></div>
        <div class="viewport" id="exvp"></div>
      </div>
      <div class="ex-queue card" id="exqueue">
        <div class="q-title">扫卡识别队列</div>
        <div class="q-bar"><i id="qbar"></i></div>
        <div class="q-rows" id="qrows"></div>
      </div>
      <div class="ex-grade card" id="exgrade">
        <div class="grade-panel">
          <div class="gp-head"><div class="gp-title">第 17 题 · 主观题</div><div class="gp-tag">AI 建议分 <b id="aiScore">8.5</b></div></div>
          <div class="gp-body">
            <div class="gp-answer">解：由 2x² − 5x + 3 = 0 得　Δ = 25 − 24 = 1<br>∴ x = (5 ± 1) / 4，即 x₁ = 1.5，x₂ = 1<br>经检验，两解均符合题意。</div>
            <div class="gp-keys" id="gpkeys"></div>
          </div>
          <div class="gp-foot"><span class="ok-ic-sm">✓</span> 教师已复判 · 留痕可追溯</div>
        </div>
        <div class="stamp" id="stamp">已确认</div>
      </div>
      <div class="ex-stats card" id="exstats">
        <div class="st-head">
          <div><div class="st-t">成绩统计</div><div class="st-s">高一(2)班 · 数学单元检测</div></div>
          <div class="st-num"><span class="num-roll" id="avgNum">0</span><span class="st-unit">平均分</span></div>
        </div>
        <div class="bars" id="exbars"></div>
        <div class="st-foot"><span class="chip-mini">按题得分率</span><span class="chip-mini">CSV 导出</span></div>
      </div>
      <div class="ex-zero" id="exzero"><b>0</b><span>token · 本地判分</span></div>
      <div class="cap-layer"><div class="caption ex-cap" id="excap"><span class="bar"></span><span class="cap-text"></span></div></div>`
    // 答题卡 OMR
    const omr = root.querySelector('#omr')
    const filled = {}
    for (let c = 0; c < 3; c++) {
      const col = mk('div', 'omr-col')
      for (let i = 0; i < 8; i++) {
        const no = c * 8 + i + 1
        const pick = [0, 2, 1, 3, 0, 1, 2, 0][(no - 1) % 8]
        const item = mk('div', 'omr-item', `<span class="no">${no}.</span>`)
        'ABCD'.split('').forEach((ch, k) => {
          const b = mk('div', 'bub', `<i>${ch}</i>`)
          b.dataset.k = String(no * 10 + k)
          b.dataset.pick = k === pick ? '1' : '0'
          item.appendChild(b)
        })
        col.appendChild(item)
      }
      omr.appendChild(col)
    }
    // 判分对勾
    const checks = root.querySelector('#exchecks')
    for (let i = 0; i < 10; i++) {
      const c = mk('div', 'chk', '✓')
      c.style.left = (60 + (i % 3) * 210) + 'px'
      c.style.top = (250 + Math.floor(i / 3) * 62) + 'px'
      checks.appendChild(c)
    }
    // 记分键
    const keys = root.querySelector('#gpkeys')
    ;['0', '4', '8.5', '10'].forEach((k, i) => keys.appendChild(mk('div', 'key' + (i === 2 ? ' hot' : ''), k)))
    // 统计柱
    const bars = root.querySelector('#exbars')
    const vals = [58, 72, 64, 81, 69, 76, 61, 88, 74, 67]
    vals.forEach((v, i) => {
      const b = mk('div', 'bar' + (v === 88 ? ' hot' : ''))
      b.dataset.h = String(v)
      bars.appendChild(b)
    })
    // 扫卡队列行
    const rows = root.querySelector('#qrows')
    ;['张小明', '李思远', '王雨桐'].forEach((n, i) => rows.appendChild(mk('div', 'q-row', `<span>${n} · 2 页</span><b class="q-ok">✓</b>`)))
    // 手机取景
    root.querySelector('#exvp').innerHTML = `
      <div class="ex-cam">
        <div class="ex-sheet-mini"><div class="msheet"></div></div>
        <div class="ex-flash" id="exflash"></div>
        <div class="ex-cam-t">拍照上传 · 自动归页</div>
      </div>`
    const cap = root.querySelector('#excap')
    cap.innerHTML = '<span class="bar"></span><span class="cap-text"></span>'
  },
  update(t) {
    const root = this.root
    const paper = root.querySelector('#expaper')
    const phone = root.querySelector('#exphone')
    const queue = root.querySelector('#exqueue')
    const grade = root.querySelector('#exgrade')
    const stats = root.querySelector('#exstats')
    const zero = root.querySelector('#exzero')

    /* 阶段 A：出卷 / 印卡 */
    const ap = A(t, 0.2, 0.85, E.outBack)
    place(paper, { y: mix(-70, 0, ap), s: mix(0.88, 1, ap), rot: mix(-7, 0, ap) })
    show(paper, clamp01(ap * 1.8))
    const bubs = [...root.querySelectorAll('.bub')]
    bubs.forEach((b, i) => {
      const on = b.dataset.pick === '1'
      const p = on ? A(t, 0.75 + (i % 24) * 0.05, 1.0 + (i % 24) * 0.05, E.outQuart) : 0
      b.classList.toggle('on', on && p > 0.5)
      if (on) place(b, { s: mix(0.6, 1, p) })
    })
    /* 阶段 B：拍照扫卡 */
    const phIn = A(t, 1.75, 2.35, E.outBack)
    place(phone, { x: mix(300, 0, phIn), s: mix(0.92, 1, phIn) })
    show(phone, clamp01(phIn * 1.7))
    // 纸张：飞入手机 → 回到左位展示判分结果（竖屏无手机，改为原地脉冲）
    const V = P.V
    const flyIn = V ? 0 : 630
    const a1 = A(t, 2.0, 2.55, E.outCubic)
    const a2 = A(t, 2.75, 3.3, E.outCubic)
    let px = mix(0, flyIn, a1)
    let ps = mix(1, V ? 0.9 : 0.4, a1)
    px = mix(px, V ? 0 : -170, a2)
    ps = mix(ps, 0.9, a2)
    const py = mix(0, 18, a1) * (1 - a2)
    // 阶段 C/D：让位给批改卡与统计卡
    const dim = 1 - (V ? 0.22 : 0.62) * A(t, 4.4, 4.95)
    place(paper, { x: px, y: py, s: ps * mix(1, 0.94, A(t, 4.4, 4.95)), rot: mix(0, V ? 0 : 4, a1 * (1 - a2)) })
    show(paper, clamp01(ap * 1.8) * dim)
    const fl = root.querySelector('#exflash')
    const fp = seg(t, 2.32, 2.75)
    show(fl, t > 2.3 && t < 2.8 ? 0.85 * (1 - fp) : 0)
    const qIn = A(t, 2.55, 3.05, E.outCubic)
    place(queue, { x: mix(80, 0, qIn), s: mix(0.95, 1, qIn) })
    show(queue, clamp01(qIn * 1.6) * (1 - A(t, 4.1, 4.5)))
    const qb = root.querySelector('#qbar')
    if (qb) qb.style.transform = `scaleX(${seg(t, 2.6, 4.0)})`
    ;[...root.querySelectorAll('.q-row')].forEach((r, i) => {
      const p = A(t, 2.8 + i * 0.35, 3.15 + i * 0.35, E.outBack)
      show(r, clamp01(p * 1.8))
      place(r, { x: mix(40, 0, p) })
    })

    /* 阶段 C：本机判分 + 主观题复判 */
    const zIn = A(t, 2.78, 3.3, E.outBack)
    place(zero, { s: mix(0.7, 1, zIn), y: mix(20, 0, zIn) })
    show(zero, zIn * (1 - A(t, 4.5, 4.9)))
    const checks = [...root.querySelectorAll('.chk')]
    checks.forEach((c, i) => {
      const p = A(t, 3.02 + i * 0.075, 3.32 + i * 0.075, E.outBack)
      place(c, { s: mix(0.2, 1, p), rot: mix(-24, 0, p) })
      show(c, clamp01(p * 1.6) * (1 - A(t, 4.55, 4.95)))
    })
    const gIn = A(t, 4.55, 5.25, E.outCubic)
    place(grade, { y: mix(70, 0, gIn), s: mix(0.94, 1, gIn) })
    show(grade, clamp01(gIn * 1.7) * (1 - A(t, 7.9, 8.3)))
    const keys = [...root.querySelectorAll('.key')]
    keys.forEach((k, i) => {
      const hi = i === 2
      const p = hi ? A(t, 5.9, 6.25, E.outBack) : 0
      place(k, { s: mix(1, 1.09, p * (1 - A(t, 6.35, 6.6))) })
    })
    const stamp = root.querySelector('#stamp')
    const stp = A(t, 6.55, 6.9, E.outBack)
    place(stamp, { s: mix(2.0, 1, stp), rot: mix(-24, -12, stp) })
    show(stamp, clamp01(stp * 1.5))
    const scoreEl = root.querySelector('#aiScore')
    if (scoreEl) rollNumber(scoreEl, mix(0, 8.5, A(t, 5.1, 5.75, E.outCubic)), 1)

    /* 阶段 D：成绩统计 */
    const sIn = A(t, 7.9, 8.5, E.outCubic)
    place(stats, { y: mix(80, 0, sIn), s: mix(0.95, 1, sIn) })
    show(stats, clamp01(sIn * 1.7))
    ;[...root.querySelectorAll('.bar')].forEach((b, i) => {
      const h = Number(b.dataset.h)
      const p = A(t, 8.0 + i * 0.075, 8.7 + i * 0.075, E.outCubic)
      b.style.height = mix(6, h * 2.5, p) + 'px'
    })
    rollNumber(root.querySelector('#avgNum'), mix(0, 83.5, A(t, 8.3, 9.5, E.outCubic)), 1)

    /* 字幕 */
    const steps = [
      [0.3, '出卷 · 印答题卡 · 拍照扫卡'],
      [2.95, '客观题本机秒判 · 零 token'],
      [4.7, '主观题 AI 批改 + 人工复判'],
      [7.5, '成绩一键统计 · CSV 导出'],
    ]
    let cur = 0
    for (let i = 0; i < steps.length; i++) if (t >= steps[i][0]) cur = i
    const ct = root.querySelector('.cap-text')
    if (ct.dataset.k !== String(cur)) { ct.dataset.k = String(cur); ct.textContent = steps[cur][1] }
    const cap = root.querySelector('#excap')
    const cp = A(t, steps[cur][0], steps[cur][0] + 0.4, E.outBack)
    show(cap, cp)
    place(cap, { y: mix(26, 0, cp), s: mix(0.96, 1, cp) })

    /* 收尾 */
    const out = A(t, 9.9, 10.4, E.inCubic)
    place(root.querySelector('.scene-inner') || root, { s: mix(1, 1.04, out) })
  },
})

/* ============ S6 · 家校沟通 ============ */
P.SCENES.push({
  id: 'parent', start: 39.2, end: 46.4,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-soft"></div>
      <div class="layer grid-lines"></div>
      <div class="blob" style="width:820px;height:820px;left:-220px;bottom:-300px;background:radial-gradient(circle,rgba(6,182,212,.4),transparent 65%)"></div>
      <div class="pr-phone phone-frame" id="prphone" style="width:400px;height:800px">
        <div class="notch"></div>
        <div class="viewport" id="prvp"></div>
      </div>
      <div class="pr-cards" id="prcards"></div>
      <div class="pr-bubble" id="prbubble">老师，孩子最近课堂表现怎么样？</div>
      <div class="pr-chip" id="prchip">6 位邀请码 · 一码绑定 · 可导出打印</div>
      <div class="cap-layer"><div class="caption pr-cap" id="prcap"><span class="bar"></span><span>家长端小程序 · 与 App 功能对等</span></div></div>`
    const pv = root.querySelector('#prvp')
    pv.innerHTML = `
      <div class="mp">
        <div class="statusbar"><span>9:41</span><span>家长中心</span></div>
        <div class="mp-head"><div class="t">张小明 家长</div><div class="s">高一(2)班 · 班主任 李老师</div></div>
        <div class="mp-tabs" id="mptabs"><div class="mp-tab on">通知</div><div class="mp-tab">成绩</div><div class="mp-tab">值日</div><div class="mp-tab">留言</div></div>
        <div class="mp-body" id="mpbody"></div>
      </div>`
    const cards = [
      ['通知与已读回执', '发布即送达，谁没看一目了然'],
      ['成绩概览', '受隐私开关控制，默认关闭'],
      ['与老师留言', '沟通留痕，不再刷屏家长群'],
    ]
    const box = root.querySelector('#prcards')
    cards.forEach(([t, s]) => box.appendChild(mk('div', 'pr-card card', `<div class="pc-t">${t}</div><div class="pc-s">${s}</div>`)))
  },
  update(t) {
    const root = this.root
    const ph = A(t, 0.15, 0.85, E.outBack)
    const phone = root.querySelector('#prphone')
    place(phone, { x: mix(-120, 0, ph), rot: mix(-6, 0, ph) })
    show(phone, clamp01(ph * 1.6))

    // 小程序内容轮换
    const tabs = [...root.querySelectorAll('.mp-tab')]
    const bodies = [
      `<div class="mp-card"><div class="h">明天 8:00 期中考试<span class="read">已读 12/46</span></div><div class="b">考场：3 楼 305　请携带 2B 铅笔与黑色签字笔。</div></div>
       <div class="mp-card"><div class="h">本周值日安排<span class="read">已读 9/46</span></div><div class="b">张小明：擦黑板、整理讲台。</div></div>`,
      `<div class="mp-card"><div class="h">数学 · 单元检测<span class="read">92 分</span></div><div class="b">班级排名 6 / 46　班级平均 83.5</div></div>
       <div class="mp-card"><div class="h">错题分布</div><div class="b">函数图像 2 题　解方程 1 题</div></div>`,
      `<div class="mp-card"><div class="h">今日值日<span class="read">进行中</span></div><div class="b">擦黑板 ✓　倒垃圾 ✓　整理讲台 ···</div></div>
       <div class="mp-card"><div class="h">本周轮换</div><div class="b">周三：擦黑板　周五：倒垃圾</div></div>`,
      `<div class="mp-bubble in">老师，孩子最近课堂表现怎么样？</div>
       <div class="mp-bubble out">上课专注，回答问题很积极，作业也能按时完成 👍</div>
       <div class="mp-card"><div class="h">留言已送达<span class="read">已读</span></div></div>`,
    ]
    const idx = Math.max(0, Math.min(3, Math.floor(clamp01(seg(t, 0.6, 5.4)) * 3.999)))
    const body = root.querySelector('#mpbody')
    if (body.dataset.i !== String(idx)) { body.dataset.i = String(idx); body.innerHTML = bodies[idx] }
    const bp = A(t, 0.6 + idx * 1.25, 0.9 + idx * 1.25, E.outCubic)
    show(body, bp)
    place(body, { y: mix(18, 0, bp) })
    tabs.forEach((tab, i) => tab.classList.toggle('on', i === idx))

    // 右侧卡片
    const pcards = [...root.querySelectorAll('.pr-card')]
    pcards.forEach((c, i) => {
      const p = A(t, 1.1 + i * 0.5, 1.65 + i * 0.5, E.outBack)
      place(c, { x: mix(110, 0, p), y: mix(22, 0, p) })
      show(c, clamp01(p * 1.6))
    })
    // 对话气泡飞入
    const bub = root.querySelector('#prbubble')
    const fbp = A(t, 4.5, 5.3, E.outCubic)
    place(bub, { x: mix(-320, 0, fbp), y: mix(90, 0, fbp), s: mix(0.8, 1, fbp), rot: mix(-6, 0, fbp) })
    show(bub, clamp01(fbp * 1.5) * (1 - A(t, 6.9, 7.2)))
    // 邀请码
    const chip = root.querySelector('#prchip')
    enter(chip, A(t, 3.4, 3.95, E.outBack), { dy: 30, s: 0.9 })
    // 字幕
    const cap = root.querySelector('#prcap')
    const cp = A(t, 0.5, 0.95, E.outCubic)
    show(cap, cp)
    place(cap, { y: mix(26, 0, cp) })

    const out = A(t, 6.8, 7.2, E.inCubic)
    show(root.querySelectorAll('.blob')[0], 0.5 * (1 - out))
    place(root.querySelector('.pr-phone'), { x: mix(0, -60, out), s: mix(1, 1.03, out) })
  },
})

/* ============ S7 · 平台能力（多区域 / 加密 / 隐私） ============ */
P.SCENES.push({
  id: 'platform', start: 46.4, end: 52.6,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-dark"></div>
      <div class="layer grid-lines dark"></div>
      <svg class="pf-lines" width="1920" height="1080">
        <path class="link-line" id="ln1" d="M 700 448 C 700 560, 400 570, 400 660"/>
        <path class="link-line" id="ln2" d="M 700 448 C 700 560, 750 570, 750 660"/>
        <path class="link-line" id="ln3" d="M 700 448 C 700 560, 1100 570, 1100 660"/>
      </svg>
      <div class="pf-server" id="pfserver">
        <div class="pf-logo">${LOGO_SVG(112)}</div>
        <div class="pf-t">AgoraIn 平台服务端</div>
        <div class="pf-s">一套系统 · 多机构</div>
      </div>
      <div class="pf-school" id="sch1" style="left:250px;top:660px"><div class="ps-t">育才中学</div><div class="ps-s">独立区域</div><div class="ps-lock">🔒</div></div>
      <div class="pf-school" id="sch2" style="left:600px;top:660px"><div class="ps-t">启明培训</div><div class="ps-s">独立区域</div><div class="ps-lock">🔒</div></div>
      <div class="pf-school" id="sch3" style="left:950px;top:660px"><div class="ps-t">博雅学堂</div><div class="ps-s">独立区域</div><div class="ps-lock">🔒</div></div>
      <div class="pf-aes glass" id="pfaes">
        <div class="aes-head">加密远程存储</div>
        <div class="aes-stage">
          <div class="aes-file" id="aesfile">答题卡原图</div>
          <div class="aes-cipher" id="aescipher">AGENC1 9f3c…</div>
          <div class="aes-cloud" id="aescloud">
            <svg viewBox="0 0 24 24" width="86" height="86" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M7 18a4 4 0 010-8 5.5 5.5 0 0110.6-1.5A3.5 3.5 0 0118 18z"/><rect x="9.5" y="12" width="6" height="5" rx="1.2" fill="currentColor" stroke="none"/><path d="M11 12v-1.4a1.6 1.6 0 013.2 0V12" stroke-width="1.4"/></svg>
          </div>
        </div>
        <div class="aes-foot">AES-256-GCM · 认证加密 · 按区域分目录</div>
      </div>
      <div class="pf-toggle-row" id="pftoggle">
        <div class="tg-label">AI 图像外发</div>
        <div class="toggle" id="tgl"><div class="knob" id="knob"></div></div>
        <div class="tg-state" id="tgstate">开启</div>
      </div>
      <div class="cap-layer"><div class="caption pf-cap" id="pfcap"><span class="bar"></span><span class="cap-text"></span></div></div>`
  },
  update(t) {
    const root = this.root
    const sIn = A(t, 0.15, 0.8, E.outBack)
    const server = root.querySelector('#pfserver')
    place(server, { y: mix(-40, 0, sIn), s: mix(0.9, 1, sIn) })
    show(server, clamp01(sIn * 1.6))
    ;[1, 2, 3].forEach((i) => {
      const el = root.querySelector('#sch' + i)
      const p = A(t, 0.7 + i * 0.22, 1.25 + i * 0.22, E.outBack)
      place(el, { y: mix(50, 0, p), s: mix(0.9, 1, p) })
      show(el, clamp01(p * 1.6))
      const ln = root.querySelector('#ln' + i)
      const lp = A(t, 0.35 + i * 0.22, 1.35 + i * 0.22, E.outCubic)
      ln.style.strokeDashoffset = String(600 * (1 - lp))
      ln.style.strokeDasharray = '10 8'
      ln.style.opacity = String(lp)
    })
    ;[...root.querySelectorAll('.ps-lock')].forEach((l, i) => {
      const p = A(t, 1.35 + i * 0.18, 1.7 + i * 0.18, E.outBack)
      show(l, clamp01(p * 1.6))
    })

    // 加密可视化
    const aes = root.querySelector('#pfaes')
    enter(aes, A(t, 2.1, 2.7), { dy: 50, s: 0.95 })
    const file = root.querySelector('#aesfile')
    const cipher = root.querySelector('#aescipher')
    const cloud = root.querySelector('#aescloud')
    const enc = A(t, 2.5, 2.95, E.outQuart)
    show(file, 1 - enc)
    show(cipher, enc * (1 - A(t, 3.5, 3.8)))
    if (cipher) cipher.textContent = 'AGENC1 ' + Array.from({ length: 8 }, (_, i) => ('0123456789abcdef'[Math.floor(hash(i + Math.floor(t * 6)) * 16)])).join('') + '…'
    const mv = A(t, 3.5, 4.1, E.inOutCubic)
    place(cloud, { y: mix(60, 0, mv), s: mix(0.7, 1, mv), x: mix(-160, 0, mv) })
    show(cloud, clamp01(mv * 1.4))

    // 隐私开关
    const row = root.querySelector('#pftoggle')
    enter(row, A(t, 4.15, 4.7), { dy: 40, s: 0.95 })
    const off = A(t, 4.75, 5.15, E.inOutCubic)
    const knob = root.querySelector('#knob')
    const tgl = root.querySelector('#tgl')
    tgl.style.background = off > 0.5 ? 'rgba(52,168,83,.55)' : 'rgba(255,255,255,.16)'
    knob.style.left = mix(6, 74, off) + 'px'
    const st = root.querySelector('#tgstate')
    const on = off < 0.5
    st.textContent = on ? '开启' : '已关闭 · 不外发图像'
    st.className = 'tg-state ' + (on ? '' : 'off')

    // 字幕
    const steps = [[0.3, '多机构 · 数据按区域隔离'], [2.3, '文件加密上云 · 服务器只留缓存'], [3.9, '隐私自己说了算']]
    let cur = 0
    for (let i = 0; i < steps.length; i++) if (t >= steps[i][0]) cur = i
    const ct = root.querySelector('.cap-text')
    if (ct.dataset.k !== String(cur)) { ct.dataset.k = String(cur); ct.textContent = steps[cur][1] }
    const cap = root.querySelector('#pfcap')
    const cp = A(t, steps[cur][0], steps[cur][0] + 0.4, E.outBack)
    show(cap, cp)
    place(cap, { y: mix(24, 0, cp) })

    const out = A(t, 5.9, 6.2, E.inCubic)
    show(root.querySelector('.pf-server'), 1)
  },
})

/* ============ S8 · 片尾 CTA ============ */
P.SCENES.push({
  id: 'cta', start: 52.6, end: 62.0,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-brand"></div>
      <div class="cta-streaks" id="streaks"></div>
      <div class="cta-glow"></div>
      <div class="center-layer"><div class="cta-wrap">
        <div class="cta-top">
          <div class="cta-logo" id="ctlogo">${LOGO_SVG(190)}</div>
          <div class="cta-name"><span class="cta-word" id="ctword">AgoraIn</span><span class="cta-num">4</span></div>
        </div>
        <div class="cta-slogan" id="ctaslogan">把时间还给课堂</div>
        <div class="cta-chips" id="ctachips"></div>
        <div class="cta-devices" id="ctadev">服务端 · 桌面端 · Web 管理后台 · 移动端 App · 家长小程序</div>
      </div></div>
      <div class="cap-layer" style="bottom:64px"><div class="cta-foot" id="ctafoot">doc.615mc.cn　|　agorain.615mc.cn</div></div>`
    const chips = ['课堂签到 · 课时 · 点名', '电子答题卡 · AI 阅卷', '家校沟通 · 多机构平台']
    const box = root.querySelector('#ctachips')
    chips.forEach((c) => box.appendChild(mk('div', 'chip ghost', c)))
    const st = root.querySelector('#streaks')
    for (let i = 0; i < 9; i++) {
      const s = mk('i')
      s.style.top = (i * 11 + hash(i) * 6) + '%'
      s.style.opacity = String(0.06 + hash(i + 9) * 0.12)
      st.appendChild(s)
    }
  },
  update(t) {
    const root = this.root
    const logo = root.querySelector('#ctlogo')
    const lp = A(t, 0.25, 0.95, E.outBack)
    place(logo, { s: mix(0.4, 1, lp), rot: mix(-14, 0, lp) })
    show(logo, clamp01(lp * 1.8))
    const word = root.querySelector('#ctword')
    charsIn(word, t, { start: 0.55, per: 0.06, dur: 0.55, dy: 70, s: 0.86 })
    const num = root.querySelector('.cta-num')
    const np = A(t, 1.15, 1.6, E.outBack)
    place(num, { s: mix(0.3, 1, np), rot: mix(20, 0, np) })
    show(num, clamp01(np * 2))
    const sl = root.querySelector('#ctaslogan')
    const sp = A(t, 1.55, 2.25, E.outBack)
    place(sl, { y: mix(46, 0, sp), s: mix(0.94, 1, sp) })
    show(sl, clamp01(sp * 1.6))
    ;[...root.querySelectorAll('#ctachips .chip')].forEach((c, i) => {
      const p = A(t, 2.15 + i * 0.2, 2.7 + i * 0.2, E.outBack)
      place(c, { y: mix(46, 0, p), s: mix(0.9, 1, p) })
      show(c, clamp01(p * 1.7))
    })
    enter(root.querySelector('#ctadev'), A(t, 2.9, 3.5), { dy: 26 })
    enter(root.querySelector('#ctafoot'), A(t, 3.3, 3.9), { dy: 22 })
    // 光带流动
    ;[...root.querySelectorAll('.cta-streaks i')].forEach((s, i) => {
      const x = ((t * 90 + i * 260) % 2600) - 500
      place(s, { x, rot: -18 })
    })
    place(root.querySelector('.cta-glow'), { x: Math.sin(t * 0.5) * 80, y: Math.cos(t * 0.42) * 50 })
    // 缓慢推近 + 收尾
    const hold = A(t, 3.6, 9.4, E.linear)
    place(root.querySelector('.cta-wrap'), { s: mix(1, 1.045, hold) })
    const fade = A(t, 8.9, 9.4, E.inOutCubic)
    show(root, 1 - fade)
  },
})
})()
