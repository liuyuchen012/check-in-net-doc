---
title: 下载中心
description: AgoraIn v4 分平台下载 —— Windows / Linux / macOS / 移动端 / 服务端
---

# 下载中心

按平台选择安装包。**客户端 + 定制版 ClassIsland + 更新器已合并为“课堂端完整包”**，
每个平台只有一个主按钮；扫卡工作站已拆分为独立程序，不再内置在客户端或 ClassIsland 中。

<div class="ag-grid c3" style="margin-top:24px">
  <a class="ag-card ag-dl-platform" href="/download/windows">
    <div class="ag-icon">🪟</div>
    <div class="ag-h3">Windows</div>
    <p>Windows 10 1809+ / 11 · x64 · 完整包含客户端、定制版 ClassIsland、更新器</p>
    <span class="ag-btn primary">进入 Windows 下载</span>
  </a>
  <a class="ag-card ag-dl-platform" href="/download/linux">
    <div class="ag-icon">🐧</div>
    <div class="ag-h3">Linux</div>
    <p>x64 / arm64 · X11 桌面 · .deb 与 tar.gz · 自包含免装 .NET</p>
    <span class="ag-btn primary">进入 Linux 下载</span>
  </a>
  <a class="ag-card ag-dl-platform" href="/download/macos">
    <div class="ag-icon">🍎</div>
    <div class="ag-h3">macOS</div>
    <p>macOS 12+ · Apple Silicon 与 Intel 分开 · .dmg / .app</p>
    <span class="ag-btn primary">进入 macOS 下载</span>
  </a>
</div>

## 其他下载

- **移动端 App（Android）**：在平台下载中心的「移动端」条目下载 APK；
- **家长端小程序**：微信搜索或扫码，免安装，见[家长端说明](/miniprogram/quickstart)；
- **服务端 / 集控插件**：由部署方从平台下载中心获取，安装说明见[部署指南](/deploy)；
- 所有文件仍由 **agorain.615mc.cn** 统一分发，带单连接限速与并发保护，下载后可用平台清单里的 SHA256 校验。

## 平台要求

| 端 | 要求 |
| --- | --- |
| Windows | Windows 10 1809+（推荐 Windows 11），x64；扫描仪取图/进纸器为 Windows 专属 |
| Linux | x64/arm64，X11 桌面；自包含，不需要 .NET；扫描仪取图用「从文件选择」 |
| macOS | macOS 12+，Apple Silicon / Intel 各一版；未签名，首次需右键打开 |
| 移动端 | Android 8.0+ |
| 浏览器 | 管理面板推荐 Chrome / Edge 最新版 |

## 更新方式

- **客户端**：设置 → 更新检查 → 下载并安装（独立更新器等待退出后覆盖文件并重启，保留 `data/`）；
- **定制版 ClassIsland**：设置 → 关于/更新（沿用 ClassIsland 内置更新器）；
- 完整包内的更新器同时适用于客户端与合并安装目录，升级不会覆盖 `data/`、`logs/`、`settings/`。
