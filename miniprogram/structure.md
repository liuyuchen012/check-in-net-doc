---
title: 目录结构
---

# 目录结构

```
miniprogram-1/
├── app.js                  # 小程序入口
├── app.json                # 全局配置（页面路由、分包、组件）
├── app.wxss                # 全局样式
├── theme.json              # 深色模式主题变量
├── behaviors/              # 自定义 behaviors（Skyline 相关）
├── components/             # 自定义组件（demo 展示用）
├── pages/
│   ├── index/              # 入口页
│   ├── home/               # 首页
│   ├── checkin/            # AgoraIn 课堂签到业务
│   │   ├── login/          #   登录页
│   │   ├── dashboard/      #   管理端仪表盘
│   │   ├── tasks/          #   签到任务列表
│   │   ├── qrcode/         #   生成签到二维码
│   │   ├── scan/           #   学生签到（扫码 / 输码）
│   │   ├── attendance/     #   考勤详情
│   │   ├── history/        #   个人签到历史
│   │   ├── users/          #   用户管理
│   │   └── settings        #   设置页
│   ├── classhours/         # 课时划消业务
│   │   ├── classhours      #   课时列表页（含课时设置 / 数据导入导出）
│   │   ├── schedule        #   排课管理页（时间段 / 自动销课时 / 排课数据导入导出）
│   │   └── student         #   学生课时详情页
│   └── ...                 # TDesign 组件演示页（button、tabs、icon 等）
├── utils/
│   ├── api.js              # 网络请求封装（AgoraIn 服务器）
│   ├── auth.js             # 登录认证 / 角色管理 / Token 持久化
│   ├── checkin.js          # 课堂打卡本地数据逻辑（ck_）
│   ├── classhours.js       # 课时划消数据逻辑（ch_）
│   ├── mdns.js             # 局域网服务发现
│   └── xlsx.js             # Excel 文件解析 / 生成
├── miniprogram_npm/        # npm 依赖（tdesign-miniprogram）
├── i18n/                   # 国际化资源
└── project.config.json     # 项目配置
```
