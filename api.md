---
title: API 文档
description: AgoraIn v4 服务端 /api/v4 接口概览、鉴权与实时通道
---

# API 文档

服务端为 ASP.NET Core 10 应用，全部接口挂在 **`/api/v4`** 前缀下，共 **19 个控制器、171 个端点**。
线上环境开启 Swagger（`/swagger`）可直接查阅与调试。

## 基础信息

| 项目 | 值 |
| --- | --- |
| 基础地址 | `https://agorain.615mc.cn/api/v4` |
| 默认端口 | `5250` |
| 数据格式 | JSON（UTF-8）；上传使用 `multipart/form-data` |
| 鉴权 | `Authorization: Bearer <JWT>`；下载类接口额外支持 `?token=` |
| 实时通道 | SignalR `/hub/live`（按班级分组） |
| 错误约定 | `400` 参数错误 · `401` 未认证 · `403` 无权限或区域未激活 · `402` AI 额度不足 · `404` 不存在 |

## 端点分组

| 控制器 | 路由前缀 | 职责 |
| --- | --- | --- |
| Auth | `/auth` | 登录、初始化、当前用户、令牌续期 |
| Account | `/account` | 机构注册（region）、家长加入（join）、忘记密码 |
| Users | `/users` | 子账户 CRUD、重置密码、角色与权限点 |
| Regions | `/regions` | 区域列表与创建、激活码签发 / 激活、区域协议、AI 额度与兑换 |
| Classes / Students | `/classes` `/students` | 班级与学生名单、学号条码、批量导入 |
| Checkin | `/checkin` | 签到码生成、扫码签到（匿名）、签到任务与结果 |
| Api | `/classhours` `/devices` | 课时划消流水、设备注册与心跳 |
| Classroom | `/points` `/duty` `/notices` `/resources` `/messages` | 积分规则与流水、值日轮换、通知（含已读）、资源、留言 |
| Timetable | `/timetable` | 课表 CRUD、ClassIsland 档案导入导出与推送 |
| Exams | `/exams` | 试卷与题目、文件导题、AI 生成答案、扫卡上传、批改、成绩与导出 |
| AnswerSheet | `/sheet` | 答题卡 HTML 渲染（匿名，供打印与 iframe 预览） |
| Parent | `/parent` | 家长端：绑定 / 概览 / 通知 / 留言 / 成绩 / 值日 / 资源 |
| Dashboard | `/dashboard` | 仪表盘统计 |
| License | `/license` | 服务器授权状态与激活 |
| Smtp | `/smtp` | 邮件服务配置与测试 |
| AiSettings | `/ai-settings` | AI 地址 / 密钥 / 模型 / 提示词模板 / 调用日志 |
| Update | `/update` | 版本检查（GitHub Releases 代理） |
| ClassIslandCompat | `/api/profile_pull` 等 | 一体机插件兼容接口（无 `/v4` 前缀，密码鉴权） |

## 鉴权

### 登录

```bash
curl -X POST https://agorain.615mc.cn/api/v4/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"teacher@yucai","password":"******"}'
```

返回 `token`（JWS）与 `permissions` 权限点数组；用户名支持 **`用户名@区域`** 形式，不带 `@` 时按主区域处理。

### 调用受保护接口

```bash
curl https://agorain.615mc.cn/api/v4/classes \
  -H "Authorization: Bearer <token>"
```

### 下载类接口的令牌

浏览器 `window.open` 打开的新标签**带不上 Authorization 头**，因此文件下载类接口
（成绩 CSV、资源文件、课表导出）允许把令牌放在查询串里：

```
GET /api/v4/exams/papers/{paperId}/export?token=<JWT>
GET /api/v4/resources/{id}/file?token=<JWT>
```

答题卡渲染接口本就是匿名接口（`/api/v4/sheet/...`），带 `?download=1` 会返回附件下载头。

## 实时通道（SignalR）

```js
const conn = new signalR.HubConnectionBuilder()
  .withUrl('https://agorain.615mc.cn/hub/live', { accessTokenFactory: () => token })
  .withAutomaticReconnect()
  .build()
await conn.start()
conn.on('checkin', (payload) => { /* 班级签到实时上屏 */ })
```

- 连接按**班级分组**，只推送本班事件
- 断线自动重连；桌面端断网时本地打卡，恢复后由同步引擎补传

## 典型流程

### 生成签到码并扫码签到

```bash
# 1) 教师创建签到（鉴权）
POST /api/v4/checkin/tasks            # { classId, room, subject, password, ttlMinutes }
# 2) 学生扫码（匿名，凭短码）
POST /api/v4/checkin/scan             # { code, name | studentId }
# 3) 查看任务与结果
GET  /api/v4/checkin/tasks
```

### 扫卡识别与批改

```bash
# 上传答卷（支持多页，服务端按页码归并）
POST /api/v4/exams/papers/{paperId}/submissions        # multipart: files[]
# 逐题结果与 AI 建议分
GET  /api/v4/exams/submissions/{submissionId}/results
# 教师复判
POST /api/v4/exams/submissions/{submissionId}/review   # { questionId, score, comment }
# 确认出分（只有已确认才计入成绩）
POST /api/v4/exams/submissions/{submissionId}/confirm
# 成绩统计 / 导出
GET  /api/v4/exams/papers/{paperId}/statistics
GET  /api/v4/exams/papers/{paperId}/export?token=<JWT>
```

## 相关阅读

- [部署指南](/deploy) · [服务端与授权](/server) · [常见问题](/faq)
- 历史版本 API：[v3.2 API 文档](/v3.2/api)
