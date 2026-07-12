import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'AgoraIn | 课堂签到打卡系统',
  description: '课堂签到打卡系统 — 使用文档与指南',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  themeConfig: {
    logo: '/favicon.svg',
    
    // 顶部导航栏
    nav: [
      { text: '使用指南', link: '/guide' },
      { text: '功能特性', link: '/features' },
      { text: 'API 文档', link: '/api' },
      { text: '部署指南', link: '/deploy' },
      { text: '常见问题', link: '/faq' },
      { text: '站点地图', link: '/sitemap' },
      {
        text: 'v2.7',
        items: [
          { text: '更新日志', link: 'https://github.com/liuyuchen012/AgoraIn/releases' },
          { text: 'GitHub 仓库', link: 'https://github.com/liuyuchen012/AgoraIn' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/guide': [
        {
          text: '快速开始',
          items: [
            { text: '环境要求', link: '/guide#环境要求' },
            { text: '第一步：下载', link: '/guide#第一步-下载' },
            { text: '第二步：启动服务器', link: '/guide#第二步-启动服务器' },
            { text: '第三步：启动客户端', link: '/guide#第三步-启动客户端' },
            { text: '第四步：开始打卡', link: '/guide#第四步-开始打卡' },
            { text: '项目结构', link: '/guide#项目结构' }
          ]
        }
      ],
      '/features': [
        {
          text: '功能特性',
          items: [
            { text: '签到操作', link: '/features#签到操作' },
            { text: '数据统计', link: '/features#数据统计' },
            { text: '多任务管理', link: '/features#多任务管理' },
            { text: '远程签到', link: '/features#远程签到' },
            { text: 'Web 管理面板', link: '/features#web-管理面板' },
            { text: '数据管理', link: '/features#数据管理' },
            { text: '安全机制', link: '/features#安全机制' },
            { text: '技术架构一览', link: '/features#技术架构一览' }
          ]
        }
      ],
      '/deploy': [
        {
          text: '部署指南',
          items: [
            { text: '架构概览', link: '/deploy#架构概览' },
            { text: 'Windows 部署', link: '/deploy#windows-部署' },
            { text: 'Linux 部署', link: '/deploy#linux-部署' },
            { text: 'macOS 部署', link: '/deploy#macos-部署' },
            { text: '局域网部署', link: '/deploy#局域网部署' },
            { text: '数据库管理', link: '/deploy#数据库管理' },
            { text: '版本升级', link: '/deploy#版本升级' }
          ]
        }
      ],
      '/api': [
        {
          text: 'API 文档',
          items: [
            { text: '概述', link: '/api#1-概述' },
            { text: '配置说明', link: '/api#2-配置说明' },
            { text: '认证机制', link: '/api#3-认证机制' },
            { text: '数据模型', link: '/api#4-数据模型' },
            { text: 'API 接口一览', link: '/api#5-api-接口一览' },
            { text: '客户端 API', link: '/api#6-客户端-api-详解' },
            { text: 'Web 面板 API', link: '/api#7-web-面板-api-详解' },
            { text: '签到功能 API', link: '/api#8-签到功能-api-详解v27-新增' },
            { text: '认证页面接口', link: '/api#9-认证页面接口' },
            { text: '管理面板页面', link: '/api#10-web-管理面板页面' },
            { text: '调用示例', link: '/api#11-调用示例' }
          ]
        }
      ],
      '/faq': [
        {
          text: '常见问题',
          items: [
            { text: '服务器相关', link: '/faq#服务器相关' },
            { text: '客户端相关', link: '/faq#客户端相关' },
            { text: '数据相关', link: '/faq#数据相关' },
            { text: '远程签到', link: '/faq#远程签到' },
            { text: '版本与更新', link: '/faq#版本与更新' },
            { text: '其他', link: '/faq#其他' }
          ]
        }
      ],
      '/sitemap': [
        {
          text: '站点地图',
          items: [
            { text: '首页', link: '/sitemap#首页' },
            { text: '使用指南', link: '/sitemap#使用指南' },
            { text: '功能特性', link: '/sitemap#功能特性' },
            { text: 'API 文档', link: '/sitemap#api-文档' },
            { text: '部署指南', link: '/sitemap#部署指南' },
            { text: '常见问题', link: '/sitemap#常见问题' },
            { text: '外部链接', link: '/sitemap#外部链接' }
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
      copyright: '© 2026 刘宇晨'
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
