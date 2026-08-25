<script setup lang="ts">
import { faviconSvg } from '../windows'
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 全景
  [3, 50, 45, 1.9],    // 推近卡片（Logo + 进度条）
  [10, 50, 45, 1.9],
  [14, 50, 50, 1],     // 回全景
  [18, 50, 50, 1],
])
</script>

<template>
  <section class="vstage" :style="{ transform: lens }">
    <div class="vs-upd-card">
      <div class="vs-upd-logo" v-html="faviconSvg"></div>
      <div class="vs-upd-bar">
        <div class="vs-upd-fill"></div>
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
  width: 96px;
  margin: 0 auto 5%;
  filter: drop-shadow(0 12px 26px rgba(37, 99, 235, 0.5));
  opacity: 0;
  animation: v-fade-up 0.7s ease 0.8s forwards;
}
.vs-upd-bar {
  height: 14px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.2);
  overflow: hidden;
  opacity: 0;
  animation: v-fade-up 0.5s ease 1.8s forwards;
}
.vs-upd-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #38bdf8, #34d399);
  width: 0;
  animation: v-upd-grow 7s cubic-bezier(0.4, 0, 0.2, 1) 2.2s forwards;
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
}
@keyframes v-upd-grow {
  from { width: 0; }
  to { width: 100%; }
}
</style>
