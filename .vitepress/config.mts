import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  srcExclude: ['video-src/**', 'Android_init/**', 'node_modules/**'],
  lang: 'zh-CN',
  title: 'AgoraIn | 课堂签到与教学管理一体化平台',
  description: 'AgoraIn v4 —— 签到打卡、课时点名、电子答题卡与 AI 阅卷、家校沟通、多机构运营的一体化平台',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#4285f4' }],
    ['meta', { property: 'og:title', content: 'AgoraIn v4 · 把时间还给课堂' }],
    ['meta', { property: 'og:description', content: '签到、点名、阅卷、家校沟通，一套系统搞定' }],
    ['meta', { property: 'og:image', content: 'https://doc.615mc.cn/video/poster-16x9.jpg' }],
  ],

  sitemap: {
    hostname: 'https://doc.615mc.cn',
  },

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'AgoraIn',

    nav: [
      { text: '功能特性', link: '/features' },
      { text: '宣传片', link: '/video' },
      { text: '下载', link: '/download' },
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/guide' },
          { text: '使用手册', link: '/manual' },
          { text: '部署指南', link: '/deploy' },
          { text: 'API 文档', link: '/api' },
          { text: '一体机联动', link: '/plugin' },
          { text: '服务端与授权', link: '/server' },
          { text: '常见问题', link: '/faq' },
        ],
      },
      {
        text: '家长端',
        items: [
          { text: '小程序总览', link: '/miniprogram/' },
          { text: '功能特性', link: '/miniprogram/features' },
          { text: '快速开始', link: '/miniprogram/quickstart' },
        ],
      },
      {
        text: '归档',
        items: [
          { text: 'v3.2 文档', link: '/v3.2/' },
          { text: 'v2.8 文档', link: '/v2.8/' },
          { text: 'v2.7 文档', link: '/v2.7/' },
          { text: '站点地图', link: '/sitemap' },
        ],
      },
    ],

    sidebar: {
      '/miniprogram/': [
        {
          text: '家长端小程序',
          items: [
            { text: '项目简介', link: '/miniprogram/' },
            { text: '功能特性', link: '/miniprogram/features' },
            { text: '快速开始', link: '/miniprogram/quickstart' },
            { text: '目录结构', link: '/miniprogram/structure' },
          ],
        },
        {
          text: '相关',
          items: [
            { text: '下载中心', link: '/download' },
            { text: '常见问题', link: '/faq' },
          ],
        },
      ],
      '/v3.2/': [
        {
          text: '历史文档（v3.2）',
          collapsed: false,
          items: [
            { text: '归档首页', link: '/v3.2/' },
            { text: '功能特性', link: '/v3.2/features' },
            { text: '快速开始', link: '/v3.2/guide' },
            { text: '使用手册', link: '/v3.2/manual' },
            { text: 'API 文档', link: '/v3.2/api' },
            { text: '部署指南', link: '/v3.2/deploy' },
            { text: '服务器端', link: '/v3.2/server' },
            { text: '一体机插件', link: '/v3.2/plugin' },
            { text: '常见问题', link: '/v3.2/faq' },
            { text: '站点地图', link: '/v3.2/sitemap' },
          ],
        },
      ],
      '/v2.8/': [
        {
          text: '历史文档（v2.8）',
          collapsed: false,
          items: [
            { text: 'v2.8 主页', link: '/v2.8/' },
            { text: '快速开始', link: '/v2.8/guide' },
            { text: '功能特性', link: '/v2.8/features' },
            { text: 'API 文档', link: '/v2.8/api' },
            { text: '部署指南', link: '/v2.8/deploy' },
            { text: '常见问题', link: '/v2.8/faq' },
            { text: '站点地图', link: '/v2.8/sitemap' },
          ],
        },
      ],
      '/v2.7/': [
        {
          text: '历史文档（v2.7）',
          collapsed: false,
          items: [
            { text: 'v2.7 主页', link: '/v2.7/' },
            { text: '快速开始', link: '/v2.7/guide' },
            { text: '功能特性', link: '/v2.7/features' },
            { text: 'API 文档', link: '/v2.7/api' },
            { text: '部署指南', link: '/v2.7/deploy' },
            { text: '常见问题', link: '/v2.7/faq' },
            { text: '站点地图', link: '/v2.7/sitemap' },
          ],
        },
      ],
      '/': [
        {
          text: '开始使用',
          items: [
            { text: '下载中心', link: '/download' },
            { text: '快速开始', link: '/guide' },
            { text: '家长端小程序', link: '/miniprogram/' },
            { text: '常见问题', link: '/faq' },
          ],
        },
        {
          text: '产品',
          items: [
            { text: '功能特性', link: '/features' },
            { text: '宣传片', link: '/video' },
            { text: '使用手册', link: '/manual' },
          ],
        },
        {
          text: '运维与开发',
          items: [
            { text: '部署指南', link: '/deploy' },
            { text: 'API 文档', link: '/api' },
            { text: '一体机联动', link: '/plugin' },
            { text: '服务端与授权', link: '/server' },
          ],
        },
        {
          text: '历史版本',
          items: [
            { text: 'v3.2 归档', link: '/v3.2/' },
            { text: 'v2.8 归档', link: '/v2.8/' },
            { text: 'v2.7 归档', link: '/v2.7/' },
          ],
        },
      ],
    },

    footer: {
      message:
        'AgoraIn v4 · 课堂签到与教学管理一体化平台 · <a href="https://agorain.615mc.cn" target="_blank" rel="noopener">进入平台</a>',
      copyright:
        '© 2026 刘宇晨 · <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">津ICP备2026010061号-1</a> · <a href="https://beian.mps.gov.cn/" target="_blank" rel="noopener">津公网安备12011602301146号</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/liuyuchen012/check-in-net-doc/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    outline: { level: [2, 3], label: '页面导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    notFound: { title: '页面不存在', quote: '这里没有你要找的内容', linkText: '回到首页' },
  },
})
