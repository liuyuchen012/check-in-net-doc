<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src16?: string
    src9?: string
    poster16?: string
    poster9?: string
    ratio?: '16x9' | '9x16'
    tabs?: boolean
    label?: string
    meta?: string
  }>(),
  {
    src16: '/video/agorain-v4-promo-16x9.mp4',
    src9: '/video/agorain-v4-promo-9x16.mp4',
    poster16: '/video/poster-16x9.jpg',
    poster9: '/video/poster-9x16.jpg',
    ratio: '16x9',
    tabs: true,
    label: '观看 AgoraIn v4 宣传片',
    meta: '62 秒 · 1080P · 竖屏版同步提供',
  },
)

const current = ref<'16x9' | '9x16'>(props.ratio)
const playing = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

const src = computed(() => (current.value === '16x9' ? props.src16 : props.src9))
const poster = computed(() => (current.value === '16x9' ? props.poster16 : props.poster9))

async function start() {
  playing.value = true
  await nextTick()
  const v = videoEl.value
  if (!v) return
  try {
    v.currentTime = 0
    await v.play()
  } catch {
    /* 浏览器可能拦截自动播放，用户再点一次即可 */
  }
}

function switchRatio(r: '16x9' | '9x16') {
  if (current.value === r) return
  current.value = r
  playing.value = false
  nextTick(() => {
    videoEl.value?.load()
  })
}
</script>

<template>
  <div class="vp-video">
    <div v-if="tabs" class="vp-video-tabs">
      <div class="ag-tabs">
        <button :class="{ on: current === '16x9' }" @click="switchRatio('16x9')">横屏 16:9</button>
        <button :class="{ on: current === '9x16' }" @click="switchRatio('9x16')">竖屏 9:16</button>
      </div>
      <span class="vp-video-hint">竖屏版适合手机、视频号与短视频平台</span>
    </div>

    <div class="ag-player" :class="current === '16x9' ? 'ratio-16x9' : 'ratio-9x16'">
      <video
        v-if="playing"
        ref="videoEl"
        :src="src"
        :poster="poster"
        controls
        playsinline
        preload="metadata"
      />
      <button v-else class="ag-player-poster" @click="start">
        <img :src="poster" :alt="label" />
        <span class="overlay">
          <span class="big">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
          <span class="label">{{ label }}</span>
          <span class="meta">{{ meta }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.vp-video-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.vp-video-hint {
  font-size: 14px;
  color: var(--ag-muted);
  font-weight: 600;
}
</style>
