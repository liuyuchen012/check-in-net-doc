<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { computed, watchEffect } from 'vue'
import type { DefaultTheme as Theme } from 'vitepress/theme'
import HomeShowcase from './components/HomeShowcase.vue'

const route = useRoute()
const { site, theme } = useData()

// 仅 v2.8 桌面端首页展示全新 UI（软件更新动画 + 3 svg logo）
const isHome = computed(() => route.path === '/')

// 项目切换栏（两端一致）
const projectSwitch = {
  text: '项目',
  items: [
    { text: 'AgoraIn 桌面端', link: '/' },
    { text: '移动多端应用', link: '/miniprogram/' },
  ],
}

// 电脑端导航
const desktopNav: Theme.NavItem[] = [
  { ...projectSwitch, activeMatch: '^/(?!miniprogram/)' },
  { text: '下载', link: '/download' },
  {
    text: '使用指南',
    items: [
      { text: '快速开始', link: '/guide' },
      { text: '功能特性', link: '/features' },
      { text: 'API 文档', link: '/api' },
      { text: '部署指南', link: '/deploy' },
      { text: '常见问题', link: '/faq' },
    ],
  },
  { text: '旧版文档（v2.7）', link: '/v2.7/' },
  {
    text: 'v2.8',
    items: [
      { text: '更新日志', link: 'https://github.com/liuyuchen012/AgoraIn/releases' },
      { text: 'GitHub 仓库', link: 'https://github.com/liuyuchen012/AgoraIn' },
    ],
  },
]

// 多端应用导航（布局一致，页面换成多端应用的）
const miniNav: Theme.NavItem[] = [
  { ...projectSwitch, activeMatch: '^/miniprogram/' },
  { text: '下载', link: '/download' },
  { text: '功能特性', link: '/miniprogram/features' },
  { text: '快速开始', link: '/miniprogram/quickstart' },
  { text: '目录结构', link: '/miniprogram/structure' },
]

watchEffect(() => {
  const isMini = route.path.startsWith('/miniprogram/')
  theme.value.nav = isMini ? miniNav : desktopNav
  site.value.title = isMini ? '移动多端应用 | 课堂管理与演示' : 'AgoraIn | 课堂签到打卡系统'
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- 首页功能模块前：全新 UI 展示区（软件更新动画 + 3 svg logo） -->
    <template #home-features-before>
      <HomeShowcase v-if="isHome" />
    </template>
  </DefaultTheme.Layout>
</template>
