<script setup lang="ts">
import { faviconOutroSvg } from '../windows'
</script>

<template>
  <section class="vstage vs-out">
    <div class="vs-out-logo" v-html="faviconOutroSvg"></div>
    <h2 class="vs-out-title">让课堂管理更简单</h2>
    <p class="vs-out-sub">AgoraIn v2.8 全新发布</p>
    <div class="vs-out-links">
      <span class="l">doc.615mc.cn</span>
      <span class="sep">·</span>
      <span class="l">文档中心</span>
      <span class="sep">·</span>
      <span class="l">下载中心</span>
    </div>
    <p class="vs-out-copy">© 2026 AgoraIn · GNU GPL v3</p>
  </section>
</template>

<style>
.vs-out {
  text-align: center;
}
.vs-out-logo {
  width: 120px;
  aspect-ratio: 1;
  margin: 0 auto;
  opacity: 0;
  animation: v-logo-pop 1s cubic-bezier(0.22, 0.68, 0.35, 1) 0.6s forwards;
  filter: drop-shadow(0 16px 38px rgba(37, 99, 235, 0.55));
}
@keyframes v-logo-pop {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
.vs-out-title {
  font-size: 52px;
  font-weight: 800;
  letter-spacing: 3px;
  line-height: 1.2;
  padding-bottom: 0.05em;
  margin: 1.6% 0 0;
  background: linear-gradient(135deg, #93c5fd, #ffffff 55%, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: v-fade-up 0.9s ease 1.8s forwards;
}
.vs-out-sub {
  font-size: 18px;
  color: #cbd5e1;
  margin: 1% 0 0;
  letter-spacing: 2px;
  opacity: 0;
  animation: v-fade-up 0.8s ease 3s forwards;
}
.vs-out-links {
  margin-top: 2.6%;
  display: flex;
  gap: 2%;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #7dd3fc;
  opacity: 0;
  animation: v-fade-up 0.8s ease 4.4s forwards;
}
.vs-out-links .sep { color: #475569; }
.vs-out-copy {
  margin-top: 3.4%;
  font-size: 12px;
  color: #64748b;
  letter-spacing: 1px;
  opacity: 0;
  animation: v-fade-up 0.8s ease 6.2s forwards;
}
</style>
