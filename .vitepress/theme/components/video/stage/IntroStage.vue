<script setup lang="ts">
import { faviconSvg } from '../windows'
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 缓慢推进
  [12, 50, 50, 1.18],
])
</script>

<template>
  <section class="vstage vs-intro" :style="{ transform: lens }">
    <div class="vs-intro-logo" v-html="faviconSvg"></div>
  </section>
</template>

<style>
.vs-intro {
  text-align: center;
}
.vs-intro-logo {
  width: 230px;
  height: auto;
  aspect-ratio: 1;
  opacity: 0;
  animation: v-logo-in 1.2s cubic-bezier(0.22, 0.68, 0.35, 1) 0.1s forwards;
  filter: drop-shadow(0 16px 40px rgba(37, 99, 235, 0.55));
}
@keyframes v-logo-in {
  from { opacity: 0; transform: scale(0.55) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
