---
layout: home

hero:
  name: AgoraIn
  text: 课堂签到打卡系统（v3.2）
  tagline: 大屏签到 + 课时划消与排课 + 集控平台 + ClassIsland 联动<br>多端协同的现代化课堂管理解决方案
  image:
    src: /placeholder.svg
    alt: AgoraIn v3.2
  actions:
    - theme: brand
      text: 快速开始
      link: /guide
    - theme: alt
      text: 下载中心
      link: /download
    - theme: alt
      text: 历史版本
      link: /v2.8/

features:
  - icon: 🖥
    title: 大屏模式
    details: 课堂签到打卡，适配电子白板大屏，学生点击即签到
  - icon: 🎛
    title: 控制模式
    details: 呼叫面板（待下课/应急/传唤）、课时划消与排课、集控平台，一站式管理课堂事务
  - icon: 🧩
    title: ClassIsland 联动
    details: 教室一体机安装插件，接收呼叫置顶弹窗 + 中文语音朗读，结合课表提前提醒
  - icon: 📅
    title: 课时划消与排课
    details: 课时管理、排课表、自动销课时，培训机构必备
  - icon: 🌐
    title: 集控服务器
    details: 多设备集中控制，平台配置持久化自动重连，Web 管理面板远程管理
  - icon: 📱
    title: 移动端扩展
    details: 微信小程序、Android App 与 iOS / Mac Catalyst 客户端，随时随地签到与查看
---

## 项目简介

**AgoraIn v3.2**（AgoraInPro）是课堂签到打卡系统的重构版本，由 **大屏模式**（课堂签到打卡）、**控制模式**（课时划消与排课 + 集控平台 + 呼叫面板）和**移动端**（微信小程序 / Android / iOS / macOS）组成；并提供 **ClassIsland 联动插件**，让教室一体机接收教师端呼叫，以置顶弹窗和中文语音朗读提醒。

历史版本文档已归档：[v2.8 归档](/v2.8/)、[v2.7 归档](/v2.7/)。

## 核心模块

| 模块 | 说明 |
| ---- | ---- |
| 大屏模式 | 班级电子白板大屏签到，点击学生姓名完成打卡 |
| 控制模式 | 呼叫面板、课时划消与排课、集控平台（多设备集中控制） |
| 集控服务器 | 多设备数据集中管理，Web 管理面板，平台配置持久化自动重连 |
| ClassIsland 插件 | 一体机端接收呼叫，置顶弹窗 + 中文语音朗读 |
| 移动端 | 微信小程序 + Android + iOS / Mac Catalyst 客户端 |

## 适用场景

- 🏫 中小学班级课堂签到
- 🎓 培训机构课时划消与排课
- 📣 教室一体机播报呼叫（下课提醒 / 应急通知 / 传唤）
- 📱 移动端远程签到与查看

## 技术栈

| 组件 | 技术 |
| ---- | ---- |
| 桌面客户端 | WPF（.NET 10） |
| 移动端 | .NET MAUI（Android / iOS / Mac Catalyst） |
| 集控服务器 | ASP.NET Core（.NET 10） |
| ClassIsland 插件 | .NET 8 + Avalonia + System.Speech |
| 数据库 | SQLite |
| 架构模式 | MVVM |
