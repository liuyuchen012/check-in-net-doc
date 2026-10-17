---
title: macOS 下载
description: AgoraIn 课堂端完整包（Apple Silicon / Intel）与独立安装包
---

<script setup>
import DownloadPlatform from '../.vitepress/theme/components/DownloadPlatform.vue'
</script>

<DownloadPlatform platform="macos" />

## 安装说明

1. 下载对应芯片的 `.dmg` / `.tar.gz`（Apple Silicon 选 arm64，Intel 选 x64）；
2. 把 `AgoraIn.app` 拖进「应用程序」；
3. 未做 Apple 签名/公证，首次打开请右键 →「打开」，或执行：
   `xattr -dr com.apple.quarantine /Applications/AgoraIn.app`；
4. 更新：客户端「设置 → 更新检查」，更新器会等待应用退出后替换并重启。

> 扫描仪取图仅 Windows；macOS 版用「从文件选择」，扫卡工作站请单独下载。
