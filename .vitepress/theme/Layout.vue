<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()

/** 营销页：强制深色 + 隐藏文档布局元素 */
const MARKETING = new Set(['/', '/download'])

const norm = (p: string) => {
  const cleaned = p.replace(/index\.html$/, '').replace(/\.html$/, '')
  return cleaned === '' ? '/' : cleaned
}

const isMarketing = computed(() => MARKETING.has(norm(route.path)))

function applyTheme(path: string) {
  if (typeof document === 'undefined') return
  const root = document.documentElement

  if (MARKETING.has(norm(path))) {
    root.classList.add('dark', 'mkt-dark')
    return
  }

  root.classList.remove('mkt-dark')
  // 回到文档页时恢复用户自己的主题偏好
  const pref = localStorage.getItem('vitepress-theme-appearance') || 'auto'
  const preferDark =
    pref === 'dark' ||
    (pref === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  root.classList.toggle('dark', preferDark)
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
