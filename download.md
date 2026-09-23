---
title: 资源下载
---

<script setup>
import DownloadSection from './.vitepress/theme/components/DownloadSection.vue'
</script>

<DownloadSection />

## LicenseTool 离线激活工具

AgoraIn v3.2.5 提供 **LicenseTool** 离线激活工具，用于在无法联网的服务器环境中完成授权验证。

**使用流程：**

1. 在目标服务器上获取硬件指纹（通过 `GET /api/server/fingerprint` 或 LicenseTool）
2. 将指纹提交给授权方，获取激活码
3. 使用 LicenseTool 或 API（`POST /api/server/activate`）完成激活
4. 通过 `GET /api/server/license` 验证授权状态

> 💡 LicenseTool 随服务器安装包一同发布，也可在 GitHub Release 页面单独下载。详见[服务器端文档 - 离线激活](/server#服务器离线激活)。

## 购买授权

如需购买 AgoraIn 集控服务器商业授权，欢迎通过企业微信客服咨询：

**[💬 联系企业微信客服购买授权](https://work.weixin.qq.com/kfid/kfc4bf6fef5cfae527d)**

我们将为您提供专业的授权方案与技术支持。

## 开源许可

本项目基于 **GNU 通用公共许可证 v3（GNU GPLv3）** 开源发布。

- ✅ 自由使用：任何机构与个人均可免费使用、研究、修改本软件；
- ✅ 自由分发：可分发原始版本或修改后的版本，无需支付授权费；
- ⚠️ 分发衍生作品时须：以同等许可（GPLv3）提供完整源代码、保留版权与许可声明、标注修改内容；
- © 版权人：刘宇晨（GitHub: `liuyuchen012`）。完整许可文本见仓库根目录 `LICENSE` 文件；详细使用说明请查阅[《AgoraIn 使用手册》](/manual)。
