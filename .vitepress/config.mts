import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'AgoraIn | 课堂签到打卡系统',
  description: '课堂签到打卡系统 — 使用文档与指南',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  // 自动生成 sitemap.xml（构建时生成，包含所有页面）
  sitemap: {
    hostname: 'https://doc.615mc.cn'
  },

  themeConfig: {
    logo: '/favicon.svg',
    
    // 顶部导航栏
    nav: [
      {
        text: '项目',
        items: [
          { text: 'AgoraIn 桌面端', link: '/' },
          { text: '移动多端应用', link: '/miniprogram/' }
        ]
      },
      { text: '下载', link: '/download' },
      {
        text: '使用指南',
        items: [
          { text: '快速开始', link: '/guide' },
          { text: '功能特性', link: '/features' },
          { text: '连接插件端', link: '/plugin' },
          { text: 'API 文档', link: '/api' },
          { text: '部署指南', link: '/deploy' },
          { text: '常见问题', link: '/faq' },
        ]
      },
      {
        text: '旧版文档',
        items: [
          { text: 'v2.8 归档', link: '/v2.8/' },
          { text: 'v2.7 归档', link: '/v2.7/' }
        ]
      },
      {
        text: 'v3.2',
        items: [
          { text: '更新日志', link: 'https://github.com/liuyuchen012/AgoraIn/releases' },
          { text: 'GitHub 仓库', link: 'https://github.com/liuyuchen012/AgoraIn' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/miniprogram/': [
        {
          text: '移动多端应用',
          items: [
            { text: '项目简介', link: '/miniprogram/' },
            { text: '功能特性', link: '/miniprogram/features' },
            { text: '快速开始', link: '/miniprogram/quickstart' },
            { text: '目录结构', link: '/miniprogram/structure' }
          ]
        }
      ],
      '/download': [
        {
          text: '版本下载',
          items: [
            { text: 'Windows', link: '/download' },
            { text: 'Linux', link: '/download' },
            { text: 'macOS', link: '/download' },
          ]
        }
      ],
      '/guide': [
        {
          text: '快速开始',
          items: [
            { text: '环境要求', link: '/guide#环境要求' },
            { text: '第一步：下载安装', link: '/guide#第一步-下载安装' },
            { text: '第二步：启动集控服务器', link: '/guide#第二步-启动集控服务器可选' },
            { text: '第三步：启动桌面客户端', link: '/guide#第三步-启动桌面客户端' },
            { text: '第四步：配置服务器连接', link: '/guide#第四步-配置服务器连接' },
            { text: '使用指南', link: '/guide#使用指南' },
            { text: '项目结构', link: '/guide#项目结构' }
          ]
        }
      ],
      '/features': [
        {
          text: '功能特性',
          items: [
            { text: '大屏模式（打卡）', link: '/features#大屏模式打卡' },
            { text: '控制模式（控制中心）', link: '/features#控制模式控制中心' },
            { text: '集控服务器', link: '/features#集控服务器server' },
            { text: '移动端', link: '/features#移动端client-mobilemaui' },
            { text: '技术栈', link: '/features#技术栈' },
            { text: '版本历史', link: '/features#版本历史' }
          ]
        }
      ],
      '/plugin': [
        {
          text: '连接插件端',
          items: [
            { text: '插件端是什么', link: '/plugin#插件端是什么' },
            { text: '环境要求', link: '/plugin#环境要求' },
            { text: '安装插件', link: '/plugin#第一步-安装插件' },
            { text: '配置连接', link: '/plugin#第二步-配置连接' },
            { text: '验证连接', link: '/plugin#第三步-验证连接' },
            { text: '常见问题', link: '/plugin#常见问题' },
            { text: '相关链接', link: '/plugin#相关链接' }
          ]
        }
      ],
      '/deploy': [
        {
          text: '部署指南',
          items: [
            { text: '架构概览', link: '/deploy#架构概览' },
            { text: '构建', link: '/deploy#构建' },
            { text: '运行', link: '/deploy#运行' },
            { text: '服务器部署', link: '/deploy#服务器部署' },
            { text: '局域网部署', link: '/deploy#局域网部署推荐方案' },
            { text: '数据存储', link: '/deploy#数据存储' }
          ]
        }
      ],
      '/api': [
        {
          text: 'API 文档',
          items: [
            { text: '基础信息', link: '/api#基础信息' },
            { text: '端点一览', link: '/api#端点一览' },
            { text: '认证机制', link: '/api#认证机制' },
            { text: '配置说明', link: '/api#配置说明' }
          ]
        }
      ],
      '/faq': [
        {
          text: '常见问题',
          items: [
            { text: '构建与运行', link: '/faq#构建与运行' },
            { text: '服务器与连接', link: '/faq#服务器与连接' },
            { text: '排课与课时', link: '/faq#排课与课时' },
            { text: '数据与安全', link: '/faq#数据与安全' },
            { text: '其他', link: '/faq#其他' }
          ]
        }
      ],
      '/sitemap': [
        {
          text: '站点地图',
          items: [
            { text: '最新版本（v2.8）', link: '/sitemap#最新版本v28' },
            { text: '旧版文档（v2.7）', link: '/sitemap#旧版文档v27' },
            { text: '移动多端应用', link: '/sitemap#移动多端应用' },
            { text: '外部链接', link: '/sitemap#外部链接' }
          ]
        }
      ],
      // v2.8 历史归档文档
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
            { text: '站点地图', link: '/v2.8/sitemap' }
          ]
        }
      ],
      // v2.7 旧版归档文档
      '/v2.7/': [
        {
          text: '旧版文档（v2.7）',
          collapsed: false,
          items: [
            { text: 'v2.7 主页', link: '/v2.7/' },
            { text: '快速开始', link: '/v2.7/guide' },
            { text: '功能特性', link: '/v2.7/features' },
            { text: 'API 文档', link: '/v2.7/api' },
            { text: '部署指南', link: '/v2.7/deploy' },
            { text: '常见问题', link: '/v2.7/faq' },
            { text: '站点地图', link: '/v2.7/sitemap' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuyuchen012/AgoraIn' }
    ],

    // 页脚
    footer: {
      message: '基于 GNU General Public License v3 发布',
      copyright: '© 2026 刘宇晨 · <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">津ICP备2026010061号-1</a> · <a href="https://beian.mps.gov.cn/" target="_blank" rel="noopener">津公网安备12011602301146号</a>'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/liuyuchen012/check-in-net-doc/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 大纲
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 上一页 / 下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    }
  }
})
