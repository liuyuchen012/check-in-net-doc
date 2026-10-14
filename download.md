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

## 一体机插件（ClassIsland）

教室一体机安装插件后，可接收教师端呼叫（**置顶弹窗 + 中文语音朗读**）并同步班级课表；
插件为 `.cipx` 包，在 ClassIsland 里「安装插件 → 选择文件」导入即可。详见[一体机联动](/plugin)。

## 定制版 ClassIsland（集控客户端）

下载中心里的 **定制版 ClassIsland** 是一个完整的 ClassIsland 客户端（解压即用、自包含），
内置 AgoraIn 集控客户端：可接收**通知 / 语音播报 / 锁屏 / 解锁 / 电源控制 / 课表推送 / 呼叫提醒**，
关于页显示 AgoraIn 品牌与定制版本号。安装与接入步骤见[定制版 ClassIsland](/custom-classisland)。

> 该定制版基于 ClassIsland（GPL-3.0）修改，**以 GPL-3.0 开源并随包提供源码**；
> 与服务端（闭源商业授权）之间只通过 HTTP 协议对接。详见[开源许可声明](/license)。

## 集控插件包（服务端）

**集控插件包**（`.agp`）是给 AgoraIn 服务端用的插件：安装后即可在「教学模式 → 集控平台」下发
13 类集控指令。安装方式：登录教学模式 →「插件」页 → 上传插件包 → 启用
（GPL 系插件安装时需勾选开源合规确认）。该插件同样以 **GPL-3.0 开源**。

## 平台与设备要求

| 端 | 要求 |
| --- | --- |
| 桌面端（Windows） | Windows 10 1809+（推荐 Windows 11）；双核以上、4GB 内存；电子白板 / 一体机 / 普通 PC 均可 |
| 桌面端（Linux） | x64，X11 桌面（Ubuntu 22.04+ / Fedora 等）；自包含免装 .NET。精简系统若启动即崩，通常是缺 X11 基础库：`sudo apt install -y libice6 libsm6 libx11-6 libxext6 libxi6 libxrandr2 libxcursor1 libxrender1 libfontconfig1 libgl1` |
| 桌面端（macOS） | macOS 12+，Apple Silicon 与 Intel 各有一版；未做签名公证，首次打开请右键 →「打开」（或 `xattr -dr com.apple.quarantine`） |
| 移动端 | Android 8.0 及以上 |
| 家长端 | 微信最新版本（小程序，免安装；绑定方式见 [家长端说明](/miniprogram/quickstart)） |
| 服务端 | Linux x64（推荐 Ubuntu 22.04+ / 宝塔环境），由平台方或机构自行部署，详见 [部署指南](/deploy) |
| 浏览器 | 管理面板推荐 Chrome / Edge 最新版 |

## 桌面端各平台功能对照

三平台的核心功能一致（打卡、点名、课时、积分、值日、座位、课表、扫卡工作站、内嵌管理面板会话），差异只在这些系统专属能力：

| 能力 | Windows | Linux | macOS |
| --- | --- | --- | --- |
| 扫描仪取图（WIA，调系统扫描界面） | ✅ | ❌ 用「从文件选择」 | ❌ 用「从文件选择」 |
| **进纸器（ADF）批量扫描**：整叠纸一次扫完、逐页自动入队 | ✅ | ❌ 用「从文件选择」 | ❌ 用「从文件选择」 |
| 内嵌网页管理面板（WebView2） | ✅ | ❌ 用浏览器打开管理面板 | ❌ 用浏览器打开管理面板 |
| 大屏打卡 / 控制 / 教师三模式 | ✅ | ✅ | ✅ |
| 扫卡工作站（答题卡 / 作文格纸） | ✅ | ✅（从文件选择） | ✅（从文件选择） |

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
