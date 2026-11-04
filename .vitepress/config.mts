import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  srcExclude: ['video-src/**', 'Android_init/**', 'node_modules/**', '.tmp/**'],
  lang: 'zh-CN',
  appearance: 'force-dark',
  title: 'AgoraIn | 课堂签到与教学管理一体化平台',
  description: 'AgoraIn v4 —— 签到打卡、课时点名、电子答题卡与 AI 阅卷、家校沟通、多机构运营的一体化平台',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#4285f4' }],
    ['meta', { property: 'og:title', content: 'AgoraIn v4 · 把课堂的琐事收进一块屏' }],
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
      { text: '首页', link: '/' },
      { text: '功能特性', link: '/features', activeMatch: '^/features' },
      { text: '下载', link: '/download', activeMatch: '^/download' },
      {
        text: '文档',
        activeMatch:
          '^/(guide|manual|teaching|monitoring|custom-classisland|classisland-management|miniprogram|deploy|api|plugin|server|license|faq|video|sitemap)',
        items: [
          {
            text: '上手',
            items: [
              { text: '快速开始', link: '/guide' },
              { text: '使用手册', link: '/manual' },
              { text: '家长端小程序', link: '/miniprogram/' },
              { text: '常见问题', link: '/faq' },
            ],
          },
          {
            text: '能力说明',
            items: [
              { text: '功能特性', link: '/features' },
              { text: '教学模式', link: '/teaching' },
              { text: '班级监视', link: '/monitoring' },
              { text: '定制版 ClassIsland', link: '/custom-classisland' },
              { text: 'AgoraIn Nexus 集控', link: '/classisland-management' },
              { text: '一体机联动插件', link: '/plugin' },
            ],
          },
          {
            text: '部署与开发',
            items: [
              { text: '部署指南', link: '/deploy' },
              { text: 'API 文档', link: '/api' },
              { text: '服务端与授权', link: '/server' },
              { text: '开源许可声明', link: '/license' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '宣传片', link: '/video' },
              { text: '站点地图', link: '/sitemap' },
            ],
          },
        ],
      },
      { text: '归档', link: '/archive/', activeMatch: '^/archive' },
      { text: '进入平台', link: 'https://agorain.615mc.cn' },
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

      '/archive/v3.2/': [
        {
          text: '历史文档（v3.2）',
          items: [
            { text: '归档首页', link: '/archive/v3.2/' },
            { text: '功能特性', link: '/archive/v3.2/features' },
            { text: '快速开始', link: '/archive/v3.2/guide' },
            { text: '使用手册', link: '/archive/v3.2/manual' },
            { text: 'API 文档', link: '/archive/v3.2/api' },
            { text: '部署指南', link: '/archive/v3.2/deploy' },
            { text: '服务器端', link: '/archive/v3.2/server' },
            { text: '一体机插件', link: '/archive/v3.2/plugin' },
            { text: '常见问题', link: '/archive/v3.2/faq' },
            { text: '站点地图', link: '/archive/v3.2/sitemap' },
          ],
        },
        {
          text: '归档区',
          items: [{ text: '返回归档总览', link: '/archive/' }],
        },
      ],

      '/archive/v2.8/': [
        {
          text: '历史文档（v2.8）',
          items: [
            { text: '归档首页', link: '/archive/v2.8/' },
            { text: '快速开始', link: '/archive/v2.8/guide' },
            { text: '功能特性', link: '/archive/v2.8/features' },
            { text: 'API 文档', link: '/archive/v2.8/api' },
            { text: '部署指南', link: '/archive/v2.8/deploy' },
            { text: '常见问题', link: '/archive/v2.8/faq' },
            { text: '站点地图', link: '/archive/v2.8/sitemap' },
          ],
        },
        {
          text: '归档区',
          items: [{ text: '返回归档总览', link: '/archive/' }],
        },
      ],

      '/archive/v2.7/': [
        {
          text: '历史文档（v2.7）',
          items: [
            { text: '归档首页', link: '/archive/v2.7/' },
            { text: '快速开始', link: '/archive/v2.7/guide' },
            { text: '功能特性', link: '/archive/v2.7/features' },
            { text: 'API 文档', link: '/archive/v2.7/api' },
            { text: '部署指南', link: '/archive/v2.7/deploy' },
            { text: '常见问题', link: '/archive/v2.7/faq' },
            { text: '站点地图', link: '/archive/v2.7/sitemap' },
          ],
        },
        {
          text: '归档区',
          items: [{ text: '返回归档总览', link: '/archive/' }],
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
          text: '产品功能',
          items: [
            { text: '功能特性', link: '/features' },
            { text: '使用手册', link: '/manual' },
            { text: '教学模式', link: '/teaching' },
            { text: '班级监视', link: '/monitoring' },
            { text: '定制版 ClassIsland', link: '/custom-classisland' },
            { text: 'AgoraIn Nexus 集控', link: '/classisland-management' },
            { text: '宣传片', link: '/video' },
          ],
        },
        {
          text: '部署与开发',
          items: [
            { text: '部署指南', link: '/deploy' },
            { text: 'API 文档', link: '/api' },
            { text: '一体机联动插件', link: '/plugin' },
            { text: '服务端与授权', link: '/server' },
            { text: '开源许可声明', link: '/license' },
          ],
        },
        {
          text: '归档',
          items: [
            { text: '文档归档总览', link: '/archive/' },
            { text: 'v3.2 归档', link: '/archive/v3.2/' },
            { text: 'v2.8 归档', link: '/archive/v2.8/' },
            { text: 'v2.7 归档', link: '/archive/v2.7/' },
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
