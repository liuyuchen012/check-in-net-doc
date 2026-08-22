<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed, watchEffect } from 'vue'
import MiniNavBar from './components/MiniNavBar.vue'

const route = useRoute()

// 多端应用路由：/miniprogram/ 前缀
const isMini = computed(() => route.path.startsWith('/miniprogram/'))

// 给 <html> 打标记，用于 CSS 隐藏默认的电脑端导航栏
watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('route-miniprogram', isMini.value)
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <MiniNavBar v-if="isMini" />
    </template>
  </DefaultTheme.Layout>
</template>
