# 📦 部署指南（v2.8）

> 本文档对应 **AgoraIn v2.8**（AgoraInPro）。旧版 v2.7 文档已归档：[v2.7 部署指南](/v2.7/deploy)。

本指南介绍 AgoraIn v2.8 的构建、部署与配置。

---

## 架构概览

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  大屏客户端 #1   │     │  大屏客户端 #2   │     │  移动端 App     │
│  (AgoraIn.exe)  │─▶  │  (教室白板)     │─▶  │  (MAUI)         │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │    集控服务器 (Server)  │
                    │   ASP.NET + SQLite      │
                    │   端口: 5250            │
                    └────────────────────────┘
```

---

## 构建

### 桌面客户端（输出 AgoraIn.exe）

```powershell
dotnet build AgoraInPro\CheckIn.Client.csproj
```

### 集控服务器

```powershell
dotnet build Server\CheckIn.Server.csproj
```

### 移动端

```powershell
# 需先安装 MAUI 工作负载
dotnet workload install maui

dotnet build Client.Mobile\AgoraIn.Client.Mobile.csproj
```

> 提示：构建前如输出文件被占用，请先结束旧进程：
> `Stop-Process -Name AgoraIn -Force`

---

## 运行

### 桌面客户端

```powershell
.\AgoraInPro\bin\Debug\net10.0-windows\AgoraIn.exe
```

### 集控服务器

```powershell
dotnet run --project Server\CheckIn.Server.csproj
```

首次运行自动创建 SQLite 数据库与表结构，默认端口 **5250**。

### 自测模式

```powershell
& .\AgoraInPro\bin\Debug\net10.0-windows\AgoraIn.exe --selftest
```

退出码 0 表示全部通过。

---

## 服务器部署

1. 将 `Server` 发布产物复制到目标机器
2. 编辑 `config.json` 设置 `Port`、`ServerName`、`ServerPassword`
3. 运行服务器程序，首次启动自动创建 SQLite 数据库与表结构
4. 局域网内客户端「远程 → 远程服务器设置」填入 IP、端口与密码即可连接

### 服务器 `config.json`

```json
{
  "Port": 5250,
  "ServerName": "集控服务器",
  "ServerPassword": "自动生成或手动填写",
  "DebugMode": false
}
```

| 字段 | 默认值 | 说明 |
| ---- | ---- | -- |
| `Port` | `5250` | 监听端口 |
| `ServerName` | `""` | 服务器名称 |
| `ServerPassword` | `""` | 服务器连接密码（未配置时首次运行自动生成随机密码并回写） |
| `DebugMode` | `false` | 调试模式开关 |

---

## 局域网部署（推荐方案）

```
┌──────────────────────────────────────────────────────┐
│                    学校局域网                          │
│                                                       │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│  │ 教室白板  │    │ 教师电脑  │    │ 学生手机  │        │
│  │ 192.168.1.10│  │192.168.1.11│  │192.168.1.x│       │
│  └─────┬─────┘    └─────┬─────┘    └─────┬─────┘    │
│        │               │               │             │
│        └───────────────┼───────────────┘             │
│                        │                             │
│                 ┌──────┴──────┐                      │
│                 │  集控服务器  │                      │
│                 │ 192.168.1.5 │                      │
│                 │   :5250     │                      │
│                 └─────────────┘                      │
└──────────────────────────────────────────────────────┘
```

### 配置步骤

1. **服务器电脑**：运行集控服务器（端口 5250）
2. **客户端电脑**：菜单「远程 → 远程服务器设置」，填入服务器 IP、端口（5250）与密码
3. **开放防火墙端口**（如需跨设备访问）：

```powershell
# Windows 防火墙
netsh advfirewall firewall add rule name="AgoraIn" dir=in action=allow protocol=TCP localport=5250
```

---

## 数据存储

| 数据 | 位置 | 说明 |
| ---- | -- | -- |
| 工作区状态 | `workspace.json`（客户端目录） | 打开的标签页列表、活动标签页（自动恢复） |
| 打卡数据 / 学生名单 | 任务数据目录 | 打卡记录与学生名单 |
| 课时数据 | `data/classhours.json`（客户端目录） | 学生课时、流水、排课、不排课日、自动划消设置 |
| 服务器数据 | SQLite 数据库（服务器目录） | 设备、任务、考勤、用户、签到任务、设备分配 |

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

### 备份

直接复制对应数据文件即可完成备份；恢复时覆盖原文件（恢复前建议停止程序）。
