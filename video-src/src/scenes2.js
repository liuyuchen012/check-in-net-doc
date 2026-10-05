/* 场景 5-8：考试阅卷（真实答题卡 + 真实页面）/ 家校 / 平台 / 片尾 */
;(function () {
const { mk, seg, A, E, place, show, enter, leave, charsIn, clamp01, mix, hash, LOGO_SVG } = P

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
  // transform-origin 默认是中心：把 (fx,fy) 处的像素推到视口中心；spot 在同一层里一起动
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
  return cp
}

/* ============ S5 · 考试与阅卷 ============ */
P.SCENES.push({
  id: 'exam', start: 28.8, end: 39.2,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-bright"></div>
      <div class="layer grid-lines"></div>
      <div id="exPaper" class="ex-paper-real">
        <img src="img/sheet-filled.png" alt="">
        <div class="ex-checks" id="exchecks"></div>
      </div>
      <div id="exPanelQ" style="position:absolute;left:470px;top:110px"></div>
      <div id="exPanelS" style="position:absolute;left:460px;top:150px"></div>
      <div class="ex-zero" id="exzero" style="left:110px;top:170px"><b>0</b><span>token · 本机判分</span></div>
      <div class="ex-cam" id="excam">
        <div class="ex-cam-frame">
          <img src="img/sheet-filled.png" alt="">
          <div class="ex-cam-line"></div>
        </div>
        <div class="ex-cam-t">拍摄答题卡 · 自动归页</div>
        <div class="ex-flash" id="exflash"></div>
      </div>
      <div class="cap-layer"><div class="caption ex-cap" id="excap"><span class="bar"></span><span class="cap-text"></span></div></div>`
    root.querySelector('#exPanelQ').appendChild(shotCard('img/p-exam-questions.png', '/exams · 题目编辑与评分要点', 780))
    root.querySelector('#exPanelS').appendChild(shotCard('img/p-scores.png', '/scores · 成绩统计', 1000))
    const checks = root.querySelector('#exchecks')
    for (let i = 0; i < 12; i++) {
      const c = mk('div', 'chk', '✓')
      c.style.left = 12 + (i % 3) * 30 + '%'
      c.style.top = 44 + Math.floor(i / 3) * 4.4 + '%'
      checks.appendChild(c)
    }
  },
  update(t) {
    const root = this.root
    const paper = root.querySelector('#exPaper')
    const panelQ = root.querySelector('#exPanelQ')
    const panelS = root.querySelector('#exPanelS')
    const zero = root.querySelector('#exzero')
    const cam = root.querySelector('#excam')

    /* A. 出卷 / 印卡：真实答题卡落下 */
    const ap = A(t, 0.2, 0.9, E.outBack)
    place(paper, { y: mix(-80, 0, ap), s: mix(0.9, 1, ap), rot: mix(-7, 0, ap) })
    show(paper, clamp01(ap * 1.8))

    /* B. 拍照扫卡：手机取景 + 快门 */
    const cp = A(t, 1.9, 2.5, E.outBack)
    place(cam, { x: mix(380, 0, cp), s: mix(0.9, 1, cp), rot: mix(7, 0, cp) })
    show(cam, clamp01(cp * 1.7) * (1 - A(t, 4.1, 4.5)))
    const line = root.querySelector('.ex-cam-line')
    line.style.top = mix(6, 88, seg(t, 2.0, 3.1)) + '%'
    const fp = seg(t, 2.45, 2.9)
    show(root.querySelector('#exflash'), t > 2.42 && t < 2.95 ? 0.9 * (1 - fp) : 0)

    /* C. 客观题本机判分：对勾 + 0 token（答题卡淡出，标签浮出） */
    const zIn = A(t, 2.7, 3.3, E.outBack)
    place(zero, { s: mix(0.7, 1, zIn), y: mix(20, 0, zIn) })
    show(zero, zIn * (1 - A(t, 4.7, 5.1)))
    const paperDim = 1 - 0.72 * A(t, 2.9, 3.6, E.outCubic)
    show(paper, clamp01(ap * 1.8) * paperDim * (1 - A(t, 5.0, 5.4)))
    ;[...root.querySelectorAll('.chk')].forEach((c, i) => {
      const p = A(t, 2.9 + i * 0.06, 3.2 + i * 0.06, E.outBack)
      place(c, { s: mix(0.2, 1, p), rot: mix(-22, 0, p) })
      show(c, clamp01(p * 1.6) * (1 - A(t, 4.9, 5.3)))
    })

    /* D. 主观题批改（真实题目/评分要点页） */
    const gIn = A(t, 4.7, 5.4, E.outCubic)
    place(panelQ, { y: mix(80, 0, gIn), s: mix(0.94, 1, gIn) })
    show(panelQ, clamp01(gIn * 1.7) * (1 - A(t, 7.7, 8.1)))
    focusShot(panelQ, mix(1, 1.12, A(t, 6.0, 7.6, E.linear)), 0.45, 0.4)

    /* E. 成绩一键统计（真实 87/98/73 数据） */
    const sIn = A(t, 7.7, 8.4, E.outCubic)
    place(panelS, { y: mix(70, 0, sIn), s: mix(0.95, 1, sIn) })
    show(panelS, clamp01(sIn * 1.7))
    focusShot(panelS, mix(1, 1.06, A(t, 8.4, 10.0, E.linear)), 0.5, 0.35)

    capText(root, t, [[0.3, '出卷 · 印答题卡 · 拍照扫卡'], [2.7, '客观题本机秒判 · 零 token'], [4.7, '主观题 AI 批改 + 人工复判'], [7.5, '成绩一键统计 · CSV 导出']])
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
      <div id="prNotices" style="position:absolute;left:110px;top:150px"></div>
      <div id="prMsgs" style="position:absolute;left:1010px;top:300px"></div>
      <div class="pr-chip" id="prchip" style="left:110px;top:850px">6 位邀请码 · 一码绑定 · 可导出打印</div>
      <div class="cap-layer"><div class="caption pr-cap" id="prcap"><span class="bar"></span><span>家长端与教师端，同一套数据</span></div></div>`
    root.querySelector('#prNotices').appendChild(shotCard('img/p-notices.png', '/notices · 通知公告与已读回执', 840))
    root.querySelector('#prMsgs').appendChild(shotCard('img/p-messages.png', '/messages · 家长消息', 780))
  },
  update(t) {
    const root = this.root
    const n = root.querySelector('#prNotices')
    const m = root.querySelector('#prMsgs')
    const p1 = A(t, 0.2, 0.95, E.outBack)
    place(n, { x: mix(-160, 0, p1), rot: mix(-4, 0, p1), s: mix(0.92, 1, p1) })
    show(n, clamp01(p1 * 1.6))
    focusShot(n, mix(1, 1.13, A(t, 1.6, 6.6, E.linear)), 0.5, 0.4)
    const p2 = A(t, 1.1, 1.85, E.outBack)
    place(m, { x: mix(180, 0, p2), rot: mix(4, 0, p2), s: mix(0.92, 1, p2) })
    show(m, clamp01(p2 * 1.6))
    focusShot(m, mix(1, 1.12, A(t, 2.2, 6.8, E.linear)), 0.45, 0.5)
    spot(n, { x: 60, y: 20, w: 34, h: 14, p: A(t, 2.4, 3.0) * (1 - A(t, 6.5, 6.9)) })
    enter(root.querySelector('#prchip'), A(t, 3.4, 3.95, E.outBack), { dy: 30, s: 0.9 })
    const cp = A(t, 0.5, 0.95, E.outCubic)
    const cap = root.querySelector('#prcap')
    show(cap, cp)
    place(cap, { y: mix(26, 0, cp) })
    const out = A(t, 6.8, 7.2, E.inCubic)
    show(n, (1 - out) * clamp01(p1 * 1.6))
    show(m, (1 - out) * clamp01(p2 * 1.6))
  },
})

/* ============ S7 · 平台能力 ============ */
P.SCENES.push({
  id: 'platform', start: 46.4, end: 52.6,
  build(root) {
    root.innerHTML = `
      <div class="layer bg-dark"></div>
      <div class="layer grid-lines dark"></div>
      <div id="pfReg" style="position:absolute;left:90px;top:150px"></div>
      <div id="pfAi" style="position:absolute;left:90px;top:600px"></div>
      <div class="pf-aes glass" id="pfaes" style="left:1010px;top:150px;width:700px">
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
      <div class="pf-toggle-row" id="pftoggle" style="left:1010px;top:760px">
        <div class="tg-label">AI 图像外发</div>
        <div class="toggle" id="tgl"><div class="knob" id="knob"></div></div>
        <div class="tg-state" id="tgstate">开启</div>
      </div>
      <div class="cap-layer"><div class="caption pf-cap" id="pfcap"><span class="bar"></span><span class="cap-text"></span></div></div>`
    root.querySelector('#pfReg').appendChild(shotCard('img/p-regions.png', '/regions · 区域管理（多机构）', 840))
    root.querySelector('#pfAi').appendChild(shotCard('img/p-ai.png', '/ai-settings · AI 设置与调用日志', 840))
  },
  update(t) {
    const root = this.root
    const reg = root.querySelector('#pfReg')
    const ai = root.querySelector('#pfAi')
    const p1 = A(t, 0.2, 0.9, E.outBack)
    place(reg, { x: mix(-140, 0, p1), rot: mix(-3, 0, p1), s: mix(0.93, 1, p1) })
    show(reg, clamp01(p1 * 1.6))
    focusShot(reg, mix(1, 1.1, A(t, 1.4, 5.8, E.linear)), 0.45, 0.45)
    const p2 = A(t, 1.0, 1.7, E.outBack)
    place(ai, { x: mix(160, 0, p2), rot: mix(3, 0, p2), s: mix(0.93, 1, p2) })
    show(ai, clamp01(p2 * 1.6))
    focusShot(ai, mix(1, 1.08, A(t, 2.0, 6.0, E.linear)), 0.5, 0.5)
    spot(reg, { x: 12, y: 20, w: 62, h: 16, p: A(t, 1.6, 2.2) * (1 - A(t, 5.6, 6.0)) })
    const aes = root.querySelector('#pfaes')
    enter(aes, A(t, 2.2, 2.8), { dy: 50, s: 0.95 })
    const file = root.querySelector('#aesfile')
    const cipher = root.querySelector('#aescipher')
    const cloud = root.querySelector('#aescloud')
    const enc = A(t, 2.6, 3.0, E.outQuart)
    show(file, 1 - enc)
    show(cipher, enc * (1 - A(t, 3.6, 3.9)))
    cipher.textContent = 'AGENC1 ' + Array.from({ length: 8 }, (_, i) => '0123456789abcdef'[Math.floor(hash(i + Math.floor(t * 6)) * 16)]).join('') + '…'
    const mv = A(t, 3.6, 4.2, E.inOutCubic)
    place(cloud, { y: mix(60, 0, mv), s: mix(0.7, 1, mv), x: mix(-160, 0, mv) })
    show(cloud, clamp01(mv * 1.4))
    const row = root.querySelector('#pftoggle')
    enter(row, A(t, 4.3, 4.8), { dy: 40, s: 0.95 })
    const off = A(t, 4.85, 5.25, E.inOutCubic)
    root.querySelector('#tgl').style.background = off > 0.5 ? 'rgba(52,168,83,.55)' : 'rgba(255,255,255,.16)'
    root.querySelector('#knob').style.left = mix(6, 74, off) + 'px'
    const st = root.querySelector('#tgstate')
    st.textContent = off < 0.5 ? '开启' : '已关闭 · 不外发图像'
    st.className = 'tg-state ' + (off < 0.5 ? '' : 'off')
    capText(root, t, [[0.3, '多机构 · 数据按区域隔离'], [2.3, '文件加密上云 · 服务器只留缓存'], [3.9, '隐私自己说了算']])
    const out = A(t, 5.9, 6.2, E.inCubic)
    show(reg, (1 - out) * clamp01(p1 * 1.6))
    show(ai, (1 - out) * clamp01(p2 * 1.6))
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
      s.style.top = i * 11 + hash(i) * 6 + '%'
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
    charsIn(root.querySelector('#ctword'), t, { start: 0.55, per: 0.06, dur: 0.55, dy: 70, s: 0.86 })
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
    ;[...root.querySelectorAll('.cta-streaks i')].forEach((s, i) => {
      place(s, { x: ((t * 90 + i * 260) % 2600) - 500, rot: -18 })
    })
    place(root.querySelector('.cta-glow'), { x: Math.sin(t * 0.5) * 80, y: Math.cos(t * 0.42) * 50 })
    place(root.querySelector('.cta-wrap'), { s: mix(1, 1.045, A(t, 3.6, 9.4, E.linear)) })
    show(root, 1 - A(t, 8.9, 9.4, E.inOutCubic))
  },
})
})()
