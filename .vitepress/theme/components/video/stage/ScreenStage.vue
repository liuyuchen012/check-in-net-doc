<script setup lang="ts">
import { screenWindowSvg } from '../windows'
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 全景：窗口淡入
  [5, 50, 50, 1],
  [7, 61.2, 40.9, 2],  // 学生网格
  [12, 61.2, 40.9, 2],
  [13.5, 34, 35.6, 2.6], // 排行榜
  [17, 34, 35.6, 2.6],
  [18.5, 61.1, 29.1, 2.9], // 统计条
  [21, 61.1, 29.1, 2.9],
  [23, 50, 50, 1],     // 回全景
  [25, 50, 50, 1],
])
</script>

<template>
  <section class="vstage vs-scr" :style="{ transform: lens }">
    <div class="vs-scr-wrap">
      <div v-html="screenWindowSvg"></div>
    </div>
  </section>
</template>

<style>
.vs-scr-wrap {
  position: relative;
  width: min(94%, 1220px);
}
.vs-scr-wrap .hs-win {
  display: block;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 26px 60px rgba(2, 6, 23, 0.5);
}
</style>
