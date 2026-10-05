---
title: 家长端目录结构
description: 家长端小程序的工程结构说明（开发者）
---

# 目录结构（开发者）

家长端小程序位于独立仓库 `AgoraIn-weixin-amp`，使用微信小程序原生框架 + TDesign 组件库。

```
AgoraIn-weixin-amp/
├── app.js / app.json / app.wxss     # 全局配置与样式
├── utils/
│   ├── request.js                   # 统一请求封装（携带 JWT、错误提示）
│   ├── auth.js                      # 登录态与路由守卫
│   └── parent.js                    # 家长端接口封装（绑定 / 概览 / 通知 / 成绩 …）
├── pages/
│   ├── login/                       # 登录（用户名@区域）
│   ├── parent/
│   │   ├── index/                   # 家长首页（孩子信息 + 快捷入口）
│   │   ├── bind/                    # 邀请码绑定与多孩切换
│   │   ├── notices/                 # 通知列表与已读上报
│   │   ├── messages/                # 与老师留言
│   │   ├── scores/                  # 成绩概览
│   │   ├── duty/                    # 值日安排
│   │   └── resources/               # 班级资源
│   └── …                            # 其余业务页
└── project.config.json
```

## 接口对接

- 全部请求走 `https://agorain.615mc.cn/api/v4/...`，登录使用 `/auth/login`
- 家长相关接口集中在 `/parent/*`：绑定、概览、通知、留言、成绩、值日、资源
- 令牌存于本地存储，过期后由 `auth.js` 引导重新登录

## 构建与发布

1. 用微信开发者工具打开仓库根目录
2. 在 `app.js` 中确认服务器地址（v4 起固定为 `https://agorain.615mc.cn`）
3. 上传体验版 → 提交审核 → 发布

## 相关阅读

- [小程序总览](/miniprogram/) · [API 文档](/api)
