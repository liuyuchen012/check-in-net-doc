<template>
  <section class="vstage vs-srv">
    <div class="vstage-title">集控服务器 · 多设备集中管理</div>
    <div class="vstage-sub">一台服务器集中管理所有教室设备 · 数据实时同步</div>
    <div class="vstage-chips srv">
      <span>设备注册</span>
      <span>任务下发</span>
      <span>签到数据同步</span>
      <span>Web 管理面板</span>
      <span>REST API</span>
      <span>SQLite 数据存储</span>
    </div>

    <div class="vs-srv-stage">
      <!-- 连线 + 数据包 -->
      <svg class="vs-srv-lines" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
        <line class="vs-srv-line" x1="140" y1="90" x2="700" y2="280" />
        <line class="vs-srv-line" x1="140" y1="280" x2="700" y2="280" />
        <line class="vs-srv-line" x1="140" y1="470" x2="700" y2="280" />
        <circle class="vs-srv-pkt p1" r="7" fill="#22d3ee">
          <animateMotion dur="1.6s" repeatCount="indefinite" begin="4s" path="M140,90 L700,280" />
        </circle>
        <circle class="vs-srv-pkt p2" r="7" fill="#34d399">
          <animateMotion dur="1.9s" repeatCount="indefinite" begin="4.5s" path="M140,280 L700,280" />
        </circle>
        <circle class="vs-srv-pkt p3" r="7" fill="#a78bfa">
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="5s" path="M140,470 L700,280" />
        </circle>
      </svg>

      <!-- 设备节点 -->
      <div class="vs-srv-node nd-a">
        <span class="ic">🖥️</span>
        <span class="nm">教室 A · 大屏</span>
        <span class="st on">在线</span>
      </div>
      <div class="vs-srv-node nd-b">
        <span class="ic">🖥️</span>
        <span class="nm">教室 B · 大屏</span>
        <span class="st on">在线</span>
      </div>
      <div class="vs-srv-node nd-c">
        <span class="ic">📱</span>
        <span class="nm">教室 C · 控制台</span>
        <span class="st on">在线</span>
      </div>

      <!-- 服务器 -->
      <div class="vs-srv-core">
        <div class="vs-srv-core-ic">
          <svg viewBox="0 0 48 48" width="100%" height="100%">
            <rect x="6" y="6" width="36" height="14" rx="4" fill="#38bdf8" />
            <rect x="6" y="26" width="36" height="14" rx="4" fill="#38bdf8" />
            <circle cx="14" cy="13" r="2.4" fill="#0b1220" />
            <circle cx="22" cy="13" r="2.4" fill="#0b1220" />
            <circle cx="14" cy="33" r="2.4" fill="#0b1220" />
            <circle cx="22" cy="33" r="2.4" fill="#0b1220" />
            <rect x="30" y="11" width="8" height="4" rx="2" fill="#fff" />
            <rect x="30" y="31" width="8" height="4" rx="2" fill="#fff" />
          </svg>
        </div>
        <div class="vs-srv-core-name">AgoraIn 集控服务器</div>
        <div class="vs-srv-core-port">端口 5250 · 数据实时同步</div>
        <div class="vs-srv-core-stats">
          <div class="st"><span class="v">6</span><span class="l">设备总数</span></div>
          <div class="st"><span class="v on2">6</span><span class="l">在线设备</span></div>
          <div class="st"><span class="v">12</span><span class="l">任务总数</span></div>
        </div>
      </div>

      <div class="vs-srv-tip">设备状态 · 任务下发 · 签到数据，统一汇聚</div>
    </div>
  </section>
</template>

<style>
.vstage-chips.srv span {
  color: #67e8f9 !important;
  background: rgba(6, 182, 212, 0.12) !important;
  border-color: rgba(34, 211, 238, 0.25) !important;
}
.vs-srv-stage {
  position: relative;
  width: min(92%, 1100px);
  aspect-ratio: 16 / 9;
}
.vs-srv-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.vs-srv-line {
  stroke: rgba(96, 165, 250, 0.5);
  stroke-width: 2;
  stroke-dasharray: 7 7;
  stroke-dashoffset: 0;
  animation: v-dash 1.4s linear infinite;
  opacity: 0;
  animation-name: v-dash, v-line-in;
  animation-duration: 1.4s, 0.6s;
  animation-delay: 0s, 3.2s;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: forwards, forwards;
}
@keyframes v-dash {
  to { stroke-dashoffset: -28; }
}
@keyframes v-line-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.vs-srv-pkt {
  opacity: 0;
  animation: v-pkt-glow 1s ease 5.2s forwards;
}
@keyframes v-pkt-glow {
  to { opacity: 1; }
}

/* 设备节点 */
.vs-srv-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 20px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(96, 165, 250, 0.3);
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.45);
  opacity: 0;
  animation: v-show-in 0.7s ease forwards;
}
.vs-srv-node .ic { font-size: 34px; line-height: 1; }
.vs-srv-node .nm { font-size: 13px; color: #e2e8f0; white-space: nowrap; }
.vs-srv-node .st {
  font-size: 11px;
  padding: 2px 12px;
  border-radius: 999px;
  font-weight: 600;
}
.vs-srv-node .st.on { color: #34d399; background: rgba(52, 211, 153, 0.14); }
.nd-a { left: 3%; top: 10%; animation-delay: 1.4s; }
.nd-b { left: 3%; top: 44%; animation-delay: 2s; }
.nd-c { left: 3%; top: 78%; animation-delay: 2.6s; }

/* 服务器核心 */
.vs-srv-core {
  position: absolute;
  left: 57%;
  top: 27%;
  width: 32%;
  text-align: center;
  padding: 22px 18px 18px;
  border-radius: 20px;
  background: linear-gradient(160deg, rgba(30, 58, 138, 0.9), rgba(12, 74, 110, 0.9));
  border: 1px solid rgba(56, 189, 248, 0.45);
  box-shadow: 0 0 40px rgba(56, 189, 248, 0.35), 0 18px 40px rgba(2, 6, 23, 0.5);
  opacity: 0;
  animation: v-show-in 0.8s ease 1s forwards;
}
.vs-srv-core-ic {
  width: 60px;
  height: auto;
  margin: 0 auto 8px;
}
.vs-srv-core-name {
  font-size: 19px;
  font-weight: 700;
  color: #e0f2fe;
}
.vs-srv-core-port {
  font-size: 12px;
  color: #7dd3fc;
  margin-top: 4px;
}
.vs-srv-core-stats {
  display: flex;
  justify-content: center;
  gap: 12%;
  margin-top: 12px;
}
.vs-srv-core-stats .st { display: flex; flex-direction: column; gap: 2px; }
.vs-srv-core-stats .v { font-size: 24px; font-weight: 800; color: #67e8f9; }
.vs-srv-core-stats .v.on2 { color: #34d399; }
.vs-srv-core-stats .l { font-size: 11px; color: #94a3b8; }

.vs-srv-tip {
  position: absolute;
  left: 50%;
  bottom: -9%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(96, 165, 250, 0.4);
  color: #bfdbfe;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.7s ease 6.2s forwards;
}
</style>