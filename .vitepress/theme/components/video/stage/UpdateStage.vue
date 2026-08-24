<script setup lang="ts">
import { faviconSvg } from '../windows'

const steps = ['下载更新包', '校验完整性', '安装核心组件', '配置本地服务', '界面初始化']
</script>

<template>
  <section class="vstage vs-upd">
    <div class="vs-upd-card">
      <div class="vs-upd-logo" v-html="faviconSvg"></div>
      <h2 class="vs-upd-title">正在更新 AgoraIn</h2>
      <p class="vs-upd-sub">v2.7 → v2.8 · 大屏签到 · 课时划消 · 集控平台 · 移动多端</p>
      <div class="vs-upd-bar">
        <div class="vs-upd-fill"></div>
      </div>
      <div class="vs-upd-steps">
        <span v-for="(s, i) in steps" :key="s" class="vs-upd-step" :style="{ '--s-delay': (2.4 + i * 1.1) + 's' }">{{ s }}</span>
      </div>
      <div class="vs-upd-done">
        <span class="vs-upd-check">✓</span>
        <span>核心组件已就绪，全新界面即将呈现</span>
      </div>
    </div>
  </section>
</template>

<style>
.vs-upd-card {
  width: min(560px, 88%);
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.85));
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: 22px;
  padding: 4.5% 6%;
  text-align: center;
  box-shadow: 0 30px 80px rgba(2, 6, 23, 0.55);
  opacity: 0;
  animation: v-show-in 0.9s ease 0.3s forwards;
}
.vs-upd-logo {
  width: 84px;
  margin: 0 auto 3%;
  filter: drop-shadow(0 12px 26px rgba(37, 99, 235, 0.5));
  opacity: 0;
  animation: v-fade-up 0.7s ease 0.8s forwards;
}
.vs-upd-title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 0 1%;
  opacity: 0;
  animation: v-fade-up 0.7s ease 1.1s forwards;
}
.vs-upd-sub {
  font-size: 15px;
  color: #94a3b8;
  margin: 0 0 4%;
  opacity: 0;
  animation: v-fade-up 0.7s ease 1.4s forwards;
}
.vs-upd-bar {
  height: 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.2);
  overflow: hidden;
  opacity: 0;
  animation: v-fade-up 0.5s ease 2.0s forwards;
}
.vs-upd-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #38bdf8, #34d399);
  width: 0;
  animation: v-upd-grow 7s cubic-bezier(0.4, 0, 0.2, 1) 2.4s forwards;
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
}
@keyframes v-upd-grow {
  from { width: 0; }
  to { width: 100%; }
}
.vs-upd-steps {
  margin-top: 3.5%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2% 3%;
  justify-content: center;
}
.vs-upd-step {
  font-size: 14px;
  color: #64748b;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  opacity: 0.5;
  animation: v-step-done 0.5s ease var(--s-delay, 3.6s) forwards;
}
@keyframes v-step-done {
  to { opacity: 1; color: #34d399; background: rgba(52, 211, 153, 0.14); }
}
.vs-upd-done {
  margin-top: 4.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #7dd3fc;
  opacity: 0;
  animation: v-show-in 0.7s ease 10s forwards;
}
.vs-upd-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #34d399, #22d3ee);
  color: #0b1220;
  font-size: 13px;
  font-weight: 800;
}
</style>
