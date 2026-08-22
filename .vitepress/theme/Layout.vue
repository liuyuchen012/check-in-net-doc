<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { computed, watchEffect } from 'vue'
import type { DefaultTheme as Theme } from 'vitepress/theme'

const route = useRoute()
const { site, theme, frontmatter } = useData()

// 首页（home 布局）默认不显示 VitePress 页脚，需单独挂备案号
const isHome = computed(() => frontmatter.value.layout === 'home')

const icpText = '津ICP备2026010061号-1'
const gonganText = '津公网安备12011602301146号'

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
      { text: '使用指南', link: '/guide' },
      { text: 'API 文档', link: '/api' },
      { text: '部署指南', link: '/deploy' },
      { text: '常见问题', link: '/faq' },
    ],
  },
  { text: '功能特性', link: '/features' },
  { text: '站点地图', link: '/sitemap' },
  {
    text: 'v2.7',
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
    <template #layout-bottom>
      <div v-if="isHome" class="home-footer">
        <span>© 2026 刘宇晨</span>
        <span class="home-footer-sep">·</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">{{ icpText }}</a>
        <span class="home-footer-sep">·</span>
        <a href="https://beian.mps.gov.cn/" target="_blank" rel="noopener">{{ gonganText }}</a>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
