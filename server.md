# 🖥 服务器端

> 本文档对应 **AgoraIn v3.2.5** 集控服务器。更多详情请参阅：
>
> - [部署指南 →](/deploy) — 集控服务器构建、部署与配置（`config.json`）
> - [API 文档 →](/api) — 服务器 REST API 参考
> - [功能特性 →](/features#集控服务器server) — 集控服务器功能说明

---

## 初始化设置向导

首次部署集控服务器时，系统会自动进入**设置向导**流程，引导管理员完成基础配置。

### 工作流程

1. **首次访问自动跳转**：当服务器检测到尚未完成初始化配置时，浏览器访问任意页面将自动重定向到设置向导页面（`/setup`）
2. **填写配置信息**：在向导页面中配置服务器名称、管理员密码等基本信息
3. **提交完成初始化**：配置信息提交后，服务器写入 `config.json` 并创建数据库，完成初始化

### 相关接口

| 接口 | 说明 |
| ---- | ---- |
| `GET /setup` | 设置向导页面（首次部署时自动跳转至此） |
| `POST /api/setup` | 提交初始化配置，完成服务器首次设置 |

> 💡 初始化完成后，再次访问服务器将正常进入 Web 管理面板，不再跳转到向导页面。

---

## 服务器离线激活

集控服务器支持**离线激活**功能，适用于无法直接联网的部署环境。通过硬件指纹绑定授权，确保服务器在无网络环境下也能完成授权验证。

### 激活流程

1. **获取服务器指纹**：调用 `GET /api/server/fingerprint` 接口获取当前服务器的唯一硬件指纹
2. **提交激活请求**：将指纹与授权码一起提交到 `POST /api/server/activate`，完成离线激活
3. **查看授权状态**：通过 `GET /api/server/license` 查询当前服务器的授权信息（授权状态、过期时间等）

### 相关接口

| 接口 | 说明 |
| ---- | ---- |
| `GET /api/server/fingerprint` | 获取服务器硬件指纹（用于离线激活绑定） |
| `POST /api/server/activate` | 提交激活码，完成服务器授权激活 |
| `GET /api/server/license` | 查询当前服务器授权状态与授权信息 |

### 典型使用场景

- **内网部署**：服务器部署在无互联网访问的内网环境中，通过离线方式完成授权
- **安全合规**：对网络访问有严格限制的机构，无需开放外网即可激活服务器
- **迁移部署**：更换服务器硬件时，可重新获取指纹并申请新的激活码

---

## 购买授权

如需购买 AgoraIn 集控服务器授权，可通过以下方式联系客服：

<div style="margin: 20px 0; padding: 20px; border-radius: 12px; background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(37,99,235,0.08)); border: 1px solid rgba(139,92,246,0.3);">

### 💬 购买授权咨询

欢迎通过**微信企业客服**咨询授权购买事宜，我们将为您提供专业的授权方案与技术支持。

<a href="https://work.weixin.qq.com/kfid/kfc4bf6fef5cfae527d" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; margin-top: 12px; border-radius: 10px; font-weight: 700; font-size: 0.95rem; color: #fff; background: linear-gradient(135deg, #7c3aed, #4f46e5 55%, #2563eb); text-decoration: none; transition: all 0.25s; box-shadow: 0 4px 16px rgba(124,58,237,0.3);">💬 联系微信企业客服</a>

</div>

---

## 相关文档

- [部署指南](/deploy) — 服务器构建、部署与 `config.json` 配置
- [API 文档](/api) — 完整 REST API 端点参考
- [功能特性](/features#集控服务器server) — 集控服务器功能总览
- [常见问题](/faq) — 常见问题解答
