import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

const safelist = [
  'i-ri-home-2-line',
  'i-ri-guide-line',
  'i-ri-stack-line',
  'i-ri-rocket-line',
  'i-ri-question-line',
  'i-ri-github-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  // GitHub Pages 部署路径（仓库名作 base）
  base: '/check-in-net-doc/',
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'SignWave',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '快速开始',
        url: '/guide',
        icon: 'i-ri-guide-line',
      },
      {
        name: '功能特性',
        url: '/features',
        icon: 'i-ri-stack-line',
      },
      {
        name: '部署指南',
        url: '/deploy',
        icon: 'i-ri-rocket-line',
      },
      {
        name: '常见问题',
        url: '/faq',
        icon: 'i-ri-question-line',
      },
    ],

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/liuyuchen012/check-in',
        icon: 'i-ri-github-line',
      },
    ],

    footer: {
      since: 2026,
      beian: {
        enable: false,
      },
    },
  },

  unocss: {
    safelist,
  },
})
