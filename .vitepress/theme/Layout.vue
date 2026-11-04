<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()

/**
 * 全站统一深色：营销页与文档页不再出现「一半深色、一半浅色」的割裂。
 * MARKETING 只控制营销页的铺满布局，不再单独控制主题。
 */
const MARKETING = new Set(['/', '/download'])

const norm = (p: string) => {
  const cleaned = p.replace(/index\.html$/, '').replace(/\.html$/, '')
  return cleaned === '' ? '/' : cleaned
}

const isMarketing = computed(() => MARKETING.has(norm(route.path)))

function applyTheme(path: string) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.add('dark')
  root.classList.toggle('mkt-dark', MARKETING.has(norm(path)))
}

watch(() => route.path, applyTheme, { immediate: true })
onMounted(() => applyTheme(route.path))
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <a v-if="isMarketing" class="mkt-nav-dl" href="/download">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3.5v12M7.5 11l4.5 4.5L16.5 11" />
          <path d="M4 20h16" />
        </svg>
        立即下载
      </a>
    </template>
  </DefaultTheme.Layout>
</template>
