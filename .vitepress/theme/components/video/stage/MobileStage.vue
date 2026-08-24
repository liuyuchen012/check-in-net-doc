<template>
  <section class="vstage vs-mob">
    <div class="vstage-title">移动多端应用</div>
    <div class="vstage-sub">随时随地签到与管理 · 与桌面端数据实时同步</div>

    <div class="vs-mob-row">
      <!-- 微信小程序 -->
      <div class="vs-mob-card mp">
        <div class="vs-mob-icon mp-ic">
          <svg viewBox="0 0 48 48" width="100%" height="100%">
            <circle cx="17" cy="19" r="6" fill="#fff" opacity="0.95" />
            <circle cx="31" cy="19" r="6" fill="#fff" opacity="0.95" />
            <path d="M13 34 Q 9 28 13 25 Q 17 22 21 25 L 27 28 Q 31 31 27 34 Z" fill="#fff" />
            <path d="M14 17 a1.8 1.8 0 1 0 0.01 0 M28 17 a1.8 1.8 0 1 0 0.01 0" stroke="#07c160" stroke-width="2" fill="none" />
          </svg>
        </div>
        <div class="vs-mob-name">微信小程序</div>
        <p class="vs-mob-desc">学生扫码即签到<br>无需安装</p>
      </div>

      <!-- Android -->
      <div class="vs-mob-card apk">
        <div class="vs-mob-icon apk-ic">
          <svg viewBox="0 0 48 48" width="100%" height="100%">
            <path d="M8 22 C8 14 14 8 24 8 C34 8 40 14 40 22 L40 34 C40 37 38 40 34 40 L14 40 C10 40 8 37 8 34 Z" fill="#34d399" />
            <path d="M14 16 L34 16 M14 16 C13 20 13 24 14 28 M34 16 C35 20 35 24 34 28" stroke="#0b1220" stroke-width="2.4" stroke-linecap="round" />
            <circle cx="17" cy="24" r="1.8" fill="#0b1220" />
            <circle cx="31" cy="24" r="1.8" fill="#0b1220" />
            <path d="M20 36 L24 30 L28 36" stroke="#0b1220" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="vs-mob-name">Android 客户端</div>
        <p class="vs-mob-desc">设备控制与集控管理<br>随身携带</p>
      </div>
    </div>

    <div class="vs-mob-feats">
      <div class="f f1"><span class="dot"></span>学生移动端签到打卡</div>
      <div class="f f2"><span class="dot"></span>课时余额与排课查看</div>
      <div class="f f3"><span class="dot"></span>设备状态实时监控</div>
    </div>

    <div class="vs-mob-sync">桌面端 / 小程序 / Android 数据实时同步</div>
  </section>
</template>

<style>
.vs-mob-row {
  display: flex;
  gap: 4%;
  justify-content: center;
  align-items: stretch;
}
.vs-mob-card {
  width: min(30%, 260px);
  padding: 4% 2.5%;
  border-radius: 20px;
  text-align: center;
  opacity: 0;
  animation: v-show-in 0.8s ease forwards;
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.45);
}
.vs-mob-card.mp {
  background: linear-gradient(165deg, #065f46, #059669);
  border: 1px solid rgba(52, 211, 153, 0.4);
  animation-delay: 2.2s;
}
.vs-mob-card.apk {
  background: linear-gradient(165deg, #164e63, #0891b2);
  border: 1px solid rgba(34, 211, 238, 0.4);
  animation-delay: 3.2s;
}
.vs-mob-icon {
  width: clamp(52px, 5vw, 70px);
  height: auto;
  margin: 0 auto 3%;
}
.vs-mob-icon svg { filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)); }
.vs-mob-name {
  font-size: clamp(14px, 1.5vw, 19px);
  font-weight: 700;
  color: #f0fdfa;
}
.vs-mob-desc {
  font-size: clamp(10px, 1vw, 13px);
  color: #a7f3d0;
  line-height: 1.7;
  margin: 4% 0 0;
}

.vs-mob-feats {
  margin-top: 3.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4%;
}
.vs-mob-feats .f {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: clamp(12px, 1.25vw, 16px);
  color: #e2e8f0;
  opacity: 0;
  animation: v-fade-up 0.7s ease forwards;
}
.vs-mob-feats .f1 { animation-delay: 5s; }
.vs-mob-feats .f2 { animation-delay: 6.4s; }
.vs-mob-feats .f3 { animation-delay: 7.8s; }
.vs-mob-feats .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #34d399, #22d3ee);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
}

.vs-mob-sync {
  margin-top: 4%;
  padding: 8px 26px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(96, 165, 250, 0.4);
  color: #bfdbfe;
  font-size: clamp(11px, 1.1vw, 14px);
  font-weight: 600;
  letter-spacing: 1px;
  opacity: 0;
  animation: v-show-in 0.7s ease 12s forwards;
}
</style>
