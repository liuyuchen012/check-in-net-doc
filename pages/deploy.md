---
title: 部署指南
layout: page
icon: i-ri-rocket-line
---

# 📦 部署指南

本指南详细介绍如何在不同环境下部署 SignWave 签到系统。

---

## 架构概览

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  WPF 客户端 #1  │     │  WPF 客户端 #2  │     │   Web 浏览器    │
│  (大屏白板)     │─▶  │  (教师电脑)     │─▶  │  (远程管理)     │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   ASP.NET Core 服务器   │
                    │   (SQLite 数据库)       │
                    │   端口: 5000            │
                    └────────────────────────┘
```

---

## Windows 部署

### 环境准备

1. 安装 [.NET 10.0 Runtime](https://dotnet.microsoft.com/download/dotnet/10.0)
2. 下载最新 Release 包

### 服务器部署

```powershell
# 解压服务器文件
Expand-Archive CheckIn.Server.zip -DestinationPath .\CheckIn.Server

# 进入目录
cd CheckIn.Server

# 启动服务器
dotnet CheckIn.Server.dll --urls "http://0.0.0.0:5000"
```

### 客户端部署

```powershell
# 解压客户端文件
Expand-Archive CheckIn.Client.zip -DestinationPath .\CheckIn.Client

# 进入目录
cd CheckIn.Client

# 启动客户端
dotnet CheckIn.Client.dll
```

### 配置说明

客户端配置文件位于 `CheckIn.Client/appsettings.json`：

```json
{
  "ServerUrl": "http://localhost:5000",
  "DeviceName": "一班白板",
  "AutoConnect": true
}
```

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `ServerUrl` | 服务器地址 | `http://localhost:5000` |
| `DeviceName` | 设备名称（用于分组） | 自动生成 |
| `AutoConnect` | 启动时自动连接 | `true` |

---

## Linux 部署

### 环境准备

```bash
# Ubuntu / Debian 安装 .NET Runtime
wget https://dot.net/v1/dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 10.0 --runtime aspnetcore

# 或使用包管理器
sudo apt update
sudo apt install dotnet-runtime-10.0
```

### 服务器部署

```bash
# 解压服务器文件
unzip CheckIn.Server.zip -d CheckIn.Server
cd CheckIn.Server

# 赋予执行权限
chmod +x CheckIn.Server

# 启动服务器
./CheckIn.Server --urls "http://0.0.0.0:5000"
```

### 使用 systemd 管理服务

创建服务文件 `/etc/systemd/system/signwave.service`：

```ini
[Unit]
Description=SignWave CheckIn Server
After=network.target

[Service]
WorkingDirectory=/opt/signwave/CheckIn.Server
ExecStart=/opt/signwave/CheckIn.Server/CheckIn.Server --urls "http://0.0.0.0:5000"
Restart=always
RestartSec=10
User=www-data

[Install]
WantedBy=multi-user.target
```

启用并启动服务：

```bash
sudo systemctl daemon-reload
sudo systemctl enable signwave
sudo systemctl start signwave
sudo systemctl status signwave
```

---

## macOS 部署

### 环境准备

```bash
# 安装 .NET Runtime
brew install dotnet-sdk
```

### 服务器部署

```bash
# 解压
unzip CheckIn.Server.zip -d CheckIn.Server
cd CheckIn.Server

# 启动
./CheckIn.Server --urls "http://0.0.0.0:5000"
```

---

## 局域网部署（推荐方案）

在学校局域网环境中，推荐以下部署方案：

```
┌──────────────────────────────────────────────────────┐
│                    学校局域网                          │
│                                                       │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│  │ 教室白板  │    │ 教师电脑  │    │ 学生手机  │        │
│  │ 192.168.1.10│  │192.168.1.11│  │192.168.1.x│       │
│  └─────┬─────┘    └─────┬─────┘    └─────┬─────┘        │
│        │               │               │              │
│        └───────────────┼───────────────┘              │
│                        │                              │
│                 ┌──────┴──────┐                       │
│                 │   服务器     │                       │
│                 │ 192.168.1.5 │                       │
│                 │   :5000     │                       │
│                 └─────────────┘                       │
└──────────────────────────────────────────────────────┘
```

### 配置步骤

1. **在服务器电脑上**：

```bash
./CheckIn.Server --urls "http://0.0.0.0:5000"
```

2. **在客户端电脑上**修改 `appsettings.json`：

```json
{
  "ServerUrl": "http://192.168.1.5:5000"
}
```

3. **开放防火墙端口**（如果需要）：

```powershell
# Windows 防火墙
netsh advfirewall firewall add rule name="SignWave" dir=in action=allow protocol=TCP localport=5000
```

```bash
# Linux (ufw)
sudo ufw allow 5000/tcp
```

---

## 数据库管理

SignWave 使用 SQLite 数据库，数据库文件位于服务器目录：

```
CheckIn.Server/
└── data/
    └── signwave.db
```

### 备份数据库

```powershell
# Windows
Copy-Item .\CheckIn.Server\data\signwave.db .\backup\signwave_$(Get-Date -Format yyyyMMdd).db
```

```bash
# Linux / macOS
cp ./CheckIn.Server/data/signwave.db ./backup/signwave_$(date +%Y%m%d).db
```

### 恢复数据库

将备份文件覆盖回 `data/signwave.db` 即可，恢复前请停止服务器。

---

## 版本升级

1. 备份当前数据库
2. 停止服务器
3. 下载新版本 Release 包
4. 解压覆盖服务器文件
5. 重启服务器

::: warning
升级前务必备份数据库文件！
:::
