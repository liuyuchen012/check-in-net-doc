<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import IntroStage from './stage/IntroStage.vue'
import UpdateStage from './stage/UpdateStage.vue'
import ScreenStage from './stage/ScreenStage.vue'
import ControlStage from './stage/ControlStage.vue'
import ServerStage from './stage/ServerStage.vue'
import MobileStage from './stage/MobileStage.vue'
import OutroStage from './stage/OutroStage.vue'

// 时间线（秒）：总长 130s ≈ 2:10，节奏更紧凑、不人为拖长
const timeline = [
  { id: 'intro', dur: 12 },
  { id: 'update', dur: 18 },
  { id: 'screen', dur: 25 },
  { id: 'control', dur: 25 },
  { id: 'server', dur: 20 },
  { id: 'mobile', dur: 16 },
  { id: 'outro', dur: 14 },
]
const totalSec = timeline.reduce((s, t) => s + t.dur, 0)

// 每阶段起始秒
const starts: number[] = []
let acc = 0
timeline.forEach((t) => { starts.push(acc); acc += t.dur })

const idx = ref(0)
const now = ref(0)
const showTool = ref(true)
const timers: number[] = []
let clock: number | undefined

// 舞台基准尺寸 1920x1080，按视口等比缩放：
// 4K / 1080p（16:9）满屏等大，1920x1280 等非 16:9 屏幕居中并等比缩放
const BASE_W = 1920
const BASE_H = 1080
const scale = ref(1)
function updateScale() {
  const w = window.innerWidth
  const h = window.innerHeight
  scale.value = Math.min(w / BASE_W, h / BASE_H)
}

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`

const play = () => {
  timers.forEach((t) => window.clearTimeout(t))
  timers.length = 0
  if (clock) window.clearInterval(clock)
  idx.value = 0
  now.value = 0
  clock = window.setInterval(() => {
    now.value = Math.min(now.value + 1, totalSec)
  }, 1000)
  timeline.forEach((t, i) => {
    if (i === 0) return
    timers.push(window.setTimeout(() => { idx.value = i }, starts[i] * 1000))
  })
}

onMounted(() => {
  play()
  updateScale()
  window.addEventListener('resize', updateScale)
})
onBeforeUnmount(() => {
  timers.forEach((t) => window.clearTimeout(t))
  if (clock) window.clearInterval(clock)
  window.removeEventListener('resize', updateScale)
})
</script>

<template>
  <div class="vshow">
    <!-- 深色背景 -->
    <div class="vshow-bg"></div>
    <!-- 漂浮粒子 -->
    <div class="vshow-particles" aria-hidden="true">
      <i v-for="n in 14" :key="n" :style="{ '--p-delay': (n * 0.9) + 's', '--p-x': (n * 7.3) % 100 + '%', '--p-size': (3 + (n % 5) * 2) + 'px' }"></i>
    </div>

    <!-- 16:9 舞台：固定 1920x1080 基准，整容器等比缩放适配任意分辨率 -->
    <div class="vshow-scale" :style="{ transform: 'scale(' + scale + ')' }">
      <div class="vshow-stage">
        <Transition name="v-fade" mode="out-in">
          <IntroStage v-if="idx === 0" key="intro" />
          <UpdateStage v-else-if="idx === 1" key="update" />
          <ScreenStage v-else-if="idx === 2" key="screen" />
          <ControlStage v-else-if="idx === 3" key="control" />
          <ServerStage v-else-if="idx === 4" key="server" />
          <MobileStage v-else-if="idx === 5" key="mobile" />
          <OutroStage v-else key="outro" />
        </Transition>
      </div>
    </div>

    <!-- 录制辅助工具（可隐藏） -->
    <div v-if="showTool" class="vshow-tool">
      <span class="vshow-clock">{{ fmt(now) }} / {{ fmt(totalSec) }}</span>
      <button class="vshow-btn" type="button" @click="play">↻ 重播</button>
      <button class="vshow-btn" type="button" @click="showTool = false">隐藏</button>
    </div>
  </div>
</template>

<style>
/* ===== 宣传片舞台（全屏深色，16:9 内容区） ===== */
.vshow {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0b1220;
  color: #fff;
  font-family: "Microsoft YaHei", "PingFang SC", "Segoe UI", sans-serif;
}

.vshow-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 600px at 20% 0%, rgba(37, 99, 235, 0.22), transparent 60%),
    radial-gradient(1000px 500px at 85% 15%, rgba(6, 182, 212, 0.16), transparent 55%),
    radial-gradient(900px 700px at 50% 110%, rgba(124, 58, 237, 0.18), transparent 60%),
    linear-gradient(180deg, #0b1220 0%, #0f1a33 100%);
}

.vshow-particles i {
  position: absolute;
  width: var(--p-size);
  height: var(--p-size);
  border-radius: 50%;
  background: rgba(125, 211, 252, 0.55);
  left: var(--p-x);
  top: 90%;
  animation: v-part 22s linear infinite;
  animation-delay: var(--p-delay);
  opacity: 0;
}
@keyframes v-part {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  8% { opacity: 0.9; }
  100% { transform: translateY(-90vh) translateX(40px); opacity: 0; }
}

/* 等比缩放容器：将 1920x1080 舞台缩放适配任意视口，内容比例始终一致 */
.vshow-scale {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;
  will-change: transform;
}
.vshow-stage {
  position: relative;
  width: 1920px;
  height: 1080px;
  flex: none;
}

.v-fade-enter-active,
.v-fade-leave-active {
  transition: opacity 0.7s ease;
}
.v-fade-enter-from,
.v-fade-leave-to {
  opacity: 0;
}

/* 录制工具条 */
.vshow-tool {
  position: absolute;
  right: 14px;
  bottom: 12px;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 999px;
  padding: 5px 10px 5px 14px;
  backdrop-filter: blur(6px);
}
.vshow-clock {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #93c5fd;
}
.vshow-btn {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: transparent;
  color: #cbd5e1;
  cursor: pointer;
}
.vshow-btn:hover {
  border-color: #60a5fa;
  color: #60a5fa;
}

/* 阶段通用 */
.vstage {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 5%;
  /* 镜头推近：以舞台左上角为原点缩放/平移 */
  transform-origin: 0 0;
  will-change: transform;
}
@keyframes v-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 窗口 SVG 逐元素动画（宣传片内自包含定义） */
.vstage .hs-win .ui-seg {
  opacity: 0;
  transform-box: fill-box;
  animation: v-seg-in 0.45s cubic-bezier(0.22, 0.68, 0.35, 1) forwards;
  animation-delay: var(--d, 0s);
}
@keyframes v-seg-in {
  from { opacity: 0; transform: translateY(9px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 通用淡入 */
@keyframes v-show-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
