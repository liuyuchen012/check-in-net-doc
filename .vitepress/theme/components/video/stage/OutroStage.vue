<script setup lang="ts">
import { faviconOutroSvg } from '../windows'
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 缓慢推进
  [14, 50, 50, 1.18],
])
</script>

<template>
  <section class="vstage vs-out" :style="{ transform: lens }">
    <div class="vs-out-logo" v-html="faviconOutroSvg"></div>
  </section>
</template>

<style>
.vs-out {
  text-align: center;
}
.vs-out-logo {
  width: 230px;
  aspect-ratio: 1;
  margin: 0 auto;
  opacity: 0;
  animation: v-logo-pop 1s cubic-bezier(0.22, 0.68, 0.35, 1) 0.3s forwards;
  filter: drop-shadow(0 16px 38px rgba(37, 99, 235, 0.55));
}
@keyframes v-logo-pop {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
</style>
