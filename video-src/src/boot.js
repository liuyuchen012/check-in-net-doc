/* 引擎：构建场景、seek 渲染、转场特效 */
(function () {
  const P = window.P
  const params = new URLSearchParams(location.search)
  P.V = params.get('v') === '1'
  if (P.V) document.body.classList.add('v')

  const stage = document.getElementById('stage')
  const host = document.getElementById('scenes')
  const fx = document.getElementById('fx')

  P.SCENES.sort((a, b) => a.start - b.start)
  P.SCENES.forEach((s) => {
    const root = P.mk('div', 'scene')
    root.dataset.id = s.id
    host.appendChild(root)
    s.root = root
    s.build(root)
  })

  /* ---------- 转场 FX ---------- */
  const TRANS = [
    { t: 7.4, type: 'flash', dur: 0.8 },
    { t: 13.4, type: 'wipe', dur: 0.72, color: 'linear-gradient(115deg, rgba(66,133,244,.96), rgba(124,58,237,.94))' },
    { t: 21.2, type: 'wipe', dur: 0.72, color: 'linear-gradient(115deg, rgba(6,182,212,.94), rgba(66,133,244,.94))' },
    { t: 28.8, type: 'wipe', dur: 0.66, color: 'linear-gradient(115deg, rgba(23,78,166,.96), rgba(15,23,43,.94))' },
    { t: 39.2, type: 'wipe', dur: 0.66, color: 'linear-gradient(115deg, rgba(66,133,244,.94), rgba(6,182,212,.94))' },
    { t: 46.4, type: 'wipe', dur: 0.66, color: 'linear-gradient(115deg, rgba(10,23,48,.96), rgba(29,78,216,.92))' },
    { t: 52.6, type: 'wipe', dur: 0.74, color: 'linear-gradient(115deg, rgba(29,78,216,.96), rgba(124,58,237,.96))' },
  ]
  const flashEl = P.mk('div', 'flash')
  fx.appendChild(flashEl)
  const wipeEls = TRANS.filter((x) => x.type === 'wipe').map((x) => {
    const w = P.mk('div', 'wipe')
    w.style.background = x.color
    w.style.transform = 'translateX(-170%) skewX(-10deg)'
    fx.appendChild(w)
    return { el: w, cfg: x }
  })
  const blackEl = P.mk('div', 'flash')
  blackEl.style.background = '#05080f'
  fx.appendChild(blackEl)

  function fxUpdate(t) {
    let flash = 0
    for (const x of TRANS) {
      if (x.type !== 'flash') continue
      const p = P.seg(t, x.t - x.dur / 2, x.t + x.dur / 2)
      if (p > 0 && p < 1) flash = Math.max(flash, Math.pow(1 - Math.abs(p - 0.5) * 2, 1.4))
    }
    // 开场白闪 + 揭秘白闪
    flashEl.style.opacity = String(flash)
    for (const { el, cfg } of wipeEls) {
      const p = P.seg(t, cfg.t - cfg.dur / 2, cfg.t + cfg.dur / 2)
      const x = p <= 0 || p >= 1 ? -170 : P.mix(-170, 170, p)
      el.style.transform = `translateX(${x}%) skewX(-10deg)`
      el.style.opacity = p > 0 && p < 1 ? '1' : '0'
    }
    blackEl.style.opacity = String(P.A(t, 61.35, 61.95, P.E.inOutCubic))
  }

  /* ---------- seek ---------- */
  function seek(t) {
    P.CLOCK = t
    for (const s of P.SCENES) {
      const active = t >= s.start - 0.02 && t <= s.end + 0.14
      s.root.style.visibility = active ? 'visible' : 'hidden'
      if (!active) continue
      s.root.style.opacity = '1'
      s.update.call(s, Math.max(0, t - s.start), t)
    }
    fxUpdate(t)
  }
  window.__seek = seek
  window.__SCENES = P.SCENES
  seek(0)

  /* ---------- 预览缩放（渲染时 stage 原尺寸，不做缩放） ---------- */
  function fit() {
    if (params.get('nofit') === '1') { stage.style.transform = 'none'; return }
    const k = Math.min(window.innerWidth / P.W, window.innerHeight / P.H)
    stage.style.transform = `scale(${k})`
  }
  window.addEventListener('resize', fit)
  fit()

  /* ---------- 空格播放（人工预览） ---------- */
  let playing = false
  let raf = 0
  let last = 0
  window.__play = function () {
    if (playing) { playing = false; cancelAnimationFrame(raf); return }
    playing = true
    last = performance.now()
    const loop = (now) => {
      if (!playing) return
      const dt = (now - last) / 1000
      last = now
      P.CLOCK = (P.CLOCK + dt) % P.TOTAL
      seek(P.CLOCK)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
  }
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { e.preventDefault(); window.__play() }
    if (e.code === 'ArrowRight') seek(P.CLOCK + 0.5)
    if (e.code === 'ArrowLeft') seek(P.CLOCK - 0.5)
  })
})()
