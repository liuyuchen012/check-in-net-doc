<script setup lang="ts">
import { faviconSvg } from '../windows'
</script>

<template>
  <section class="vstage vs-intro">
    <div class="vs-intro-logo" v-html="faviconSvg"></div>
    <h1 class="vs-intro-name">AgoraIn</h1>
    <div class="vs-intro-badge">v2.8 全新版本</div>
    <p class="vs-intro-tag t1">大屏签到 · 课时划消 · 集控平台</p>
    <p class="vs-intro-tag t2">多端协同的现代化课堂管理解决方案</p>
    <p class="vs-intro-hint">宣传片即将开始</p>
  </section>
</template>

<style>
.vs-intro {
  text-align: center;
}
.vs-intro-logo {
  width: clamp(90px, 11vw, 140px);
  height: auto;
  aspect-ratio: 1;
  opacity: 0;
  animation: v-logo-in 1.4s cubic-bezier(0.22, 0.68, 0.35, 1) 0.2s forwards;
  filter: drop-shadow(0 14px 34px rgba(37, 99, 235, 0.5));
}
@keyframes v-logo-in {
  from { opacity: 0; transform: scale(0.55) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.vs-intro-name {
  font-size: clamp(40px, 6vw, 76px);
  font-weight: 800;
  letter-spacing: 6px;
  margin: 1.5% 0 0;
  background: linear-gradient(135deg, #93c5fd, #ffffff 55%, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: v-fade-up 0.9s ease 1.8s forwards;
}
.vs-intro-badge {
  display: inline-block;
  margin-top: 1.2%;
  padding: 6px 20px;
  border-radius: 999px;
  font-size: clamp(12px, 1.2vw, 15px);
  font-weight: 600;
  letter-spacing: 2px;
  color: #bfdbfe;
  border: 1px solid rgba(96, 165, 250, 0.5);
  background: rgba(37, 99, 235, 0.18);
  opacity: 0;
  animation: v-fade-up 0.7s ease 3.2s forwards;
}
.vs-intro-tag {
  font-size: clamp(13px, 1.4vw, 18px);
  color: #cbd5e1;
  margin: 0.6% 0 0;
  opacity: 0;
}
.vs-intro-tag.t1 { animation: v-fade-up 0.8s ease 4.6s forwards; }
.vs-intro-tag.t2 { animation: v-fade-up 0.8s ease 5.6s forwards; }
.vs-intro-hint {
  margin-top: 3%;
  font-size: clamp(11px, 1vw, 13px);
  color: #64748b;
  letter-spacing: 3px;
  opacity: 0;
  animation: v-fade-up 0.8s ease 7.6s forwards;
}
</style>
