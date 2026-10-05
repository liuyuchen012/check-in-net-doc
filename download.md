---
title: 下载中心
description: AgoraIn v4 桌面端与移动端下载 —— 由 agorain.615mc.cn 统一分发
---

# 下载中心

安装包由平台服务器 **agorain.615mc.cn** 统一分发，下载链路带**单连接限速与并发保护**：

- 请使用浏览器或点击下方按钮**直接下载**（单线程）
- 迅雷、IDM 等多线程下载工具会被限制并发并临时拒绝，反而更慢
- 每个安装包提供 SHA256，可在下载后校验完整性

<script setup>
import DownloadPanel from './.vitepress/theme/components/DownloadPanel.vue'
</script>

<DownloadPanel />

## 平台与设备要求

| 端 | 要求 |
| --- | --- |
| 桌面端 | Windows 10 1809+（推荐 Windows 11）；双核以上、4GB 内存；电子白板 / 一体机 / 普通 PC 均可 |
| 移动端 | Android 8.0 及以上 |
| 家长端 | 微信最新版本（小程序，免安装；绑定方式见 [家长端说明](/miniprogram/quickstart)） |
| 服务端 | Linux x64（推荐 Ubuntu 22.04+ / 宝塔环境），由平台方或机构自行部署，详见 [部署指南](/deploy) |
| 浏览器 | 管理面板推荐 Chrome / Edge 最新版 |

## 校验下载

下载完成后可核对文件指纹（清单接口给出的 SHA256）：

```bash
# Windows PowerShell
Get-FileHash .\AgoraIn-Desktop-win-x64.zip -Algorithm SHA256

# Linux / macOS
sha256sum AgoraIn-Desktop-win-x64.zip
```

也可以直接读取平台清单：

```bash
curl https://agorain.615mc.cn/api/v4/downloads
```

## 购买与授权

AgoraIn v4 为**闭源商业软件**：机构可自助注册试用，正式使用需由平台方颁发激活码开通。
如需演示、报价或商业授权，欢迎通过企业微信客服咨询：

**[💬 联系企业微信客服](https://work.weixin.qq.com/kfid/kfc4bf6fef5cfae527d)**

## 关于历史版本

v3.2 及更早版本（AgoraInPro）以 **GPLv3** 开源发布，文档保留在归档区：

- [v3.2 归档文档](/v3.2/) · [v2.8 归档文档](/v2.8/) · [v2.7 归档文档](/v2.7/)

> v4 起产品转为闭源商业授权，全部代码为商业资产，不再以开源许可证分发。
> 旧版本安装包不再提供下载，如需迁移请联系客服。
