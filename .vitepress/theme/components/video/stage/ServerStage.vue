<script setup lang="ts">
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 全景
  [3.5, 50, 50, 1],
  [5.5, 20, 28, 2.8],  // 设备节点
  [9, 20, 28, 2.8],
  [10.5, 58, 45, 2.2], // 服务器核心
  [14, 58, 45, 2.2],
  [15.5, 45, 50, 1.9], // 连线中段
  [18, 45, 50, 1.9],
  [20, 50, 50, 1],     // 回全景
])
</script>

<template>
  <section class="vstage vs-srv" :style="{ transform: lens }">
    <div class="vs-srv-stage">
      <!-- 连线：虚线流动示意数据同步 -->
      <svg class="vs-srv-lines" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
        <line class="vs-srv-line" x1="150" y1="90" x2="640" y2="280" />
        <line class="vs-srv-line" x1="150" y1="281" x2="640" y2="281" />
        <line class="vs-srv-line" x1="150" y1="472" x2="640" y2="281" />
      </svg>

      <!-- 设备节点（仅图标） -->
      <div class="vs-srv-node nd-a">
        <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2.5" y="3.5" width="19" height="14" rx="2.5" />
          <path d="M9.5 21h5M12 17.5V21" />
        </svg>
      </div>
      <div class="vs-srv-node nd-b">
        <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2.5" y="3.5" width="19" height="14" rx="2.5" />
          <path d="M9.5 21h5M12 17.5V21" />
        </svg>
      </div>
      <div class="vs-srv-node nd-c">
        <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
      </div>

      <!-- 服务器（仅图标） -->
      <div class="vs-srv-core">
        <svg viewBox="0 0 48 48" width="96" height="96" aria-hidden="true">
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
    </div>
  </section>
</template>

<style>
.vs-srv-stage {
  position: relative;
  width: min(94%, 1240px);
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
  opacity: 0;
  animation: v-line-in 0.6s ease forwards, v-dash 1.4s linear infinite;
}
.vs-srv-line:nth-of-type(1) { animation-delay: 1s, 2.4s; }
.vs-srv-line:nth-of-type(2) { animation-delay: 1.6s, 3s; }
.vs-srv-line:nth-of-type(3) { animation-delay: 2.2s, 3.6s; }
@keyframes v-dash {
  to { stroke-dashoffset: -28; }
}
@keyframes v-line-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.vs-srv-node {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 108px;
  border-radius: 26px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(96, 165, 250, 0.3);
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.45);
  opacity: 0;
  animation: v-show-in 0.7s ease forwards;
}
.nd-a { left: 3.5%; top: 8%; animation-delay: 1.3s; }
.nd-b { left: 3.5%; top: 40.5%; animation-delay: 1.9s; }
.nd-c { left: 3.5%; top: 73%; animation-delay: 2.5s; }
.vs-srv-core {
  position: absolute;
  left: 54%;
  top: 29%;
  padding: 30px;
  border-radius: 28px;
  background: linear-gradient(160deg, rgba(30, 58, 138, 0.92), rgba(12, 74, 110, 0.92));
  border: 1px solid rgba(56, 189, 248, 0.45);
  box-shadow: 0 0 44px rgba(56, 189, 248, 0.35), 0 18px 40px rgba(2, 6, 23, 0.5);
  opacity: 0;
  animation: v-show-in 0.8s ease 0.9s forwards;
}
</style>
