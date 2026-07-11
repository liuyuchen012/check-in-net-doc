---
layout: home

hero:
  name: SignWave
  text: 课堂签到打卡系统
  tagline: 大屏打卡程序，适用于班级电子白板<br>现代化桌面 + Web 双端打卡解决方案
  image:
    src: /favicon.svg
    alt: SignWave
  actions:
    - theme: brand
      text: 快速开始
      link: /guide
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/liuyuchen012/check-in

features:
  - icon: 🖥
    title: 桌面客户端
    details: WPF 原生应用，大屏适配，操作流畅
  - icon: 🌐
    title: Web 管理面板
    details: 浏览器访问即可远程管理数据
  - icon: 📱
    title: 远程签到
    details: 学生扫码或点击短链完成签到
  - icon: 🔐
    title: RSA 加密通信
    details: RSA-2048 签名验证，安全可靠
  - icon: 📊
    title: 实时统计
    details: 出勤率、排行榜、打卡时间一目了然
  - icon: 🏗
    title: 跨平台服务器
    details: Linux / macOS / Windows 均可运行
---

## 项目简介

**SignWave** 是一款专为班级课堂场景设计的签到打卡系统。教师可通过桌面客户端一键发起签到，学生通过电子白板完成打卡，同时支持远程扫码签到和浏览器管理面板。系统采用 C/S 架构，支持多任务并行管理和跨平台服务器部署。

## 适用场景

- 🏫 中小学班级课堂签到
- 🎓 培训机构考勤管理
- 📋 会议活动快速签到
- 👥 社团活动人员统计

## 技术栈

| 组件 | 技术 | 版本 |
|------|------|------|
| 桌面客户端 | WPF (.NET) | .NET 10.0 |
| 服务器 | ASP.NET Core Minimal API | .NET 10.0 |
| 数据库 | SQLite (via EF Core) | — |
| 通信安全 | RSA-2048 签名 (SHA256) + HMAC-SHA256 | — |
| 二维码 | QRCoder | 1.6.0 |
| 架构模式 | MVVM (MainViewModel + TaskTabViewModel) | — |

## 开源协议

本项目基于 **GNU General Public License v3** 协议开源。
