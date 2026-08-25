<script setup lang="ts">
import { controlWindowSvg } from '../windows'
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 50, 1],      // 全景：窗口淡入
  [4.5, 50, 50, 1],
  [6.5, 60.2, 30.6, 2.2], // 划课操作区 + 课时记录
  [10.5, 60.2, 30.6, 2.2],
  [12, 33.2, 41.9, 2.4], // 学生列表课时
  [15.5, 33.2, 41.9, 2.4],
  [17, 52.6, 56.1, 1.9], // 月历排课
  [20.5, 52.6, 56.1, 1.9],
  [22, 73.4, 58.4, 2.2], // 右侧排课面板
  [23.5, 73.4, 58.4, 2.2],
  [24.5, 50, 50, 1],   // 回全景
  [25, 50, 50, 1],
])
</script>

<template>
  <section class="vstage vs-ctl" :style="{ transform: lens }">
    <div class="vs-ctl-wrap">
      <div v-html="controlWindowSvg"></div>
    </div>
  </section>
</template>

<style>
.vs-ctl-wrap {
  position: relative;
  width: min(94%, 1220px);
}
.vs-ctl-wrap .hs-win {
  display: block;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 26px 60px rgba(2, 6, 23, 0.5);
}
</style>
