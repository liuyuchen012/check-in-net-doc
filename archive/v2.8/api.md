# 📡 API 参考（v2.8）

> 本文档对应 **AgoraIn v2.8** 集控服务器。旧版 v2.7 文档已归档：[v2.7 API 文档](/v2.7/api)。

所有接口返回 JSON。非登录接口需携带服务器密码（`ServerPassword`）校验，管理类接口需 JWT 令牌。

---

## 基础信息

| 项目 | 值 |
| ---- | -- |
| 服务器 | ASP.NET Core + EF Core + SQLite |
| 默认端口 | 5250（`config.json` 可改） |
| 数据格式 | JSON |
| 认证 | 服务器密码 / JWT 令牌 |

---

## 端点一览

### 状态与版本

| 接口 | 说明 |
| ---- | -- |
| `GET /api/status` | 服务器状态与设备/任务统计 |
| `GET /api/version` | 服务器版本号 |
| `GET /api/server_update` | 集控平台新版本检查（后台轮询 GitHub） |

### 设备管理

| 接口 | 说明 |
| ---- | -- |
| `POST /api/register` | 设备注册 |
| `GET /api/machines/{uuid}/tasks` | 获取设备关联任务 |
| `POST /api/delete_machine` | 删除设备 |

### 数据同步

| 接口 | 说明 |
| ---- | -- |
| `POST /api/sync_data` | 打卡数据同步 |
| `POST /api/load_data` | 从服务器加载数据 |

### 配置管理

| 接口 | 说明 |
| ---- | -- |
| `POST /api/get_config` | 获取服务器配置 |
| `POST /api/update_config` | 更新服务器配置（版本号 +1，触发客户端推送） |
| `POST /api/update_machine_config` | 更新设备配置 |
| `POST /api/config_applied` | 客户端确认配置已应用 |

### 打卡与考勤

| 接口 | 说明 |
| ---- | -- |
| `POST /api/web_punch` | Web 端打卡 |
| `POST /api/web_cancel_punch` | Web 端取消打卡 |
| `POST /api/clear_attendance` | 清空考勤记录 |

### 签到任务

| 接口 | 说明 |
| ---- | -- |
| `POST /api/create_signin` | 创建签到任务（短码 + 密码 + 教室/科目） |
| `POST /api/signin_result` | 签到结果回写 |

### 用户与认证

| 接口 | 说明 |
| ---- | -- |
| `GET/POST /api/users` | 用户列表 / 创建用户 |
| `POST /api/users/change-password` | 修改密码 |
| `POST /api/auth/login` | 管理员登录（JWT） |
| `POST /api/auth/verify` | 验证令牌 |

### 二维码签到

| 接口 | 说明 |
| ---- | -- |
| `POST /api/qrcode/generate` | 生成签到二维码 |
| `POST /api/qrcode/checkin` | 扫码签到 |

### 移动端 API

| 接口 | 说明 |
| ---- | -- |
| `GET /api/mobile/dashboard` | 管理员仪表盘 |
| `GET /api/mobile/attendance` | 考勤记录 |
| `GET /api/mobile/tasks`、`POST /api/mobile/tasks/{id}/close` | 任务列表 / 关闭任务 |
| `GET /api/mobile/tasks/{id}/qrcode` | 任务二维码 |
| `GET /api/mobile/devices`、`POST /api/mobile/devices/{uuid}/tasks` | 设备列表 / 设备分配任务 |
| `GET /api/mobile/students/history` | 学生打卡历史 |
| `GET/POST /api/mobile/assignments` | 排课（设备分配）管理 |
| `GET /api/mobile/teachers` | 教师列表 |

### 调试接口

| 接口 | 说明 |
| ---- | -- |
| `GET /api/debug/status`、`/api/debug/token`、`POST /api/debug/login` | 调试模式（`DebugMode: true` 时生效） |

---

## 认证机制

### 服务器密码校验

非登录接口需在请求中携带服务器密码（`config.json` 中的 `ServerPassword`）。

### JWT 令牌

管理类接口（Web 管理面板、移动端管理员）通过登录获取 JWT 令牌：

```json
POST /api/auth/login
{
  "username": "admin",
  "password": "********"
}
```

响应中返回 `token`，后续请求在 `Authorization: Bearer <token>` 头中携带。

### 密码哈希

用户密码采用**加盐 SHA256** 哈希存储；管理员密码通过 SHA256 哈希校验。

---

## 配置说明

### 服务器 `config.json`

| 字段 | 默认值 | 说明 |
| ---- | ---- | -- |
| `Port` | `5250` | 监听端口 |
| `ServerName` | `""` | 服务器名称 |
| `ServerPassword` | `""` | 服务器连接密码（首次运行自动生成） |
| `DebugMode` | `false` | 调试模式开关 |

### 客户端 `config.json`（全局配置）

| 字段 | 默认值 | 说明 |
| ---- | ---- | -- |
| `School` | `""` | 学校名称 |
| `Nj` | `""` | 年级（年份） |
| `ClassId` | `""` | 班级编号 |
| `Km` | `""` | 课程名称（如"数学"） |
| `ButtonRows` | `6` | 学生按钮网格行数 |
| `ButtonCols` | `6` | 学生按钮网格列数 |
| `OnlineMode` | `true` | 是否启用在线模式 |
| `ServerIp` | `""` | 远程服务器 IP |
| `ServerPort` | `5250` | 远程服务器端口 |
| `ServerPassword` | `""` | 远程服务器连接密码 |
| `AdminPasswordHash` | `""` | 管理员密码 SHA256 哈希（空表示无密码） |

### 课时数据 `data/classhours.json`（版本 v3）

| 字段 | 说明 |
| ---- | -- |
| `Version` | 数据版本号（v3：排课细分时间 + 自动划消设置） |
| `Students` | 学生列表（姓名、总课时、已划课时、备注、创建时间） |
| `Records` | 课时记录流水（日期、课时数正负、备注、SlotKey 去重键） |
| `Schedule` | 排课数据：日期 → 排课条目（学生 + 上课/下课时间，支持跨天） |
| `OffDays` | 不排课日集合 |
| `HoursPerHour` | 每小时上课消耗课时（支持小数，默认 1） |
| `AutoDeduct` | 是否自动划消课时 |
