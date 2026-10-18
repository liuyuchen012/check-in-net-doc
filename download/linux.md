---
title: Linux 下载
description: AgoraIn 课堂端完整包（Linux x64）与独立安装包
---

<script setup>
import DownloadPlatform from '../.vitepress/theme/components/DownloadPlatform.vue'
</script>

<DownloadPlatform platform="linux" />

## 安装说明

```bash
# .deb（推荐）
sudo apt install ./AgoraIn-4.1.0-linux-x64-bundle.deb

# 或 tar.gz 免安装
tar xzf AgoraIn-*-linux-x64.tar.gz
chmod +x AgoraIn && ./AgoraIn
```

- 需要 X11 桌面（Ubuntu 22.04+ / Fedora 等）；缺库时按包内 README 安装 `libice6 libsm6 libx11-6 ...`；
- 自包含发布，不需要安装 .NET 运行时；
- 扫描仪取图（WIA）仅 Windows，Linux 版用「从文件选择」；扫卡工作站请单独下载独立版。

## 桌面图标

完整包 `.deb` 会安装两个应用菜单项：

- **AgoraIn**：主客户端；
- **ClassIsland（AgoraIn 定制版）**：课表/集控客户端。

如果点击 AgoraIn 图标没有反应，请先运行一次：

```bash
/opt/agorain/AgoraIn/launch-agorain.sh
```

启动日志在 `~/.local/state/agorain/launch.log`；缺少 X11 库时会弹出错误提示，不会再静默失败。
