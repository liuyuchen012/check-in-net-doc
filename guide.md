# 🚀 快速开始

本文档将帮助你在 5 分钟内完成 AgoraIn 的部署和运行。

## 环境要求

| 环境 | 版本/说明 |
|------|-----------|
| **.NET Runtime** | 10.0 或更高版本 |
| **操作系统（客户端）** | Windows 10/11 |
| **操作系统（服务器）** | Windows / Linux / macOS |
| **浏览器** | 现代浏览器（Chrome / Edge / Firefox） |

---

## 第一步：下载

前往 [GitHub Releases](https://github.com/liuyuchen012/check-in/releases) 下载最新版本：

- `CheckIn.Client.zip` — Windows 桌面客户端
- `CheckIn.Server.zip` — 跨平台服务器

解压到本地目录。

---

## 第二步：启动服务器

### Windows 上启动

```powershell
# 进入服务器目录
cd CheckIn.Server

# 启动服务器（默认端口 5000）
dotnet CheckIn.Server.dll --urls "http://0.0.0.0:5000"
```

### Linux / macOS 上启动

```bash
# 进入服务器目录
cd CheckIn.Server

# 启动服务器
./CheckIn.Server --urls "http://0.0.0.0:5000"
```

::: tip
服务器启动后，在浏览器中访问 `http://localhost:5000` 即可打开 Web 管理面板。
:::

---

## 第三步：启动客户端

```powershell
# 进入客户端目录
cd CheckIn.Client

# 启动客户端
dotnet CheckIn.Client.dll
```

或者在 Windows 上直接双击 `CheckIn.Client.exe`。

::: warning
请确保客户端已正确配置服务器地址。客户端默认连接 `http://localhost:5000`。
:::

---

## 第四步：开始打卡

### 桌面端打卡

1. 在客户端界面，点击学生姓名
2. **左键点击** 完成签到 ✅
3. **右键点击** 取消签到 ↩

### 远程签到

1. 教师通过 Web 管理面板创建签到任务
2. 系统生成短链接和二维码
3. 学生扫码或点击链接完成签到

---

## 项目结构

```
check-in/
├── Client/          # WPF 桌面客户端（MVVM 架构）
│   ├── Models/      # 数据模型
│   ├── ViewModels/  # 视图模型
│   ├── Views/       # XAML 视图
│   └── Services/    # 客户端服务层
├── Server/          # ASP.NET Core 服务器
│   ├── Program.cs   # Minimal API 端点
│   ├── Models/      # 数据模型
│   └── Services/    # 业务逻辑
└── Shared/          # 共享数据模型
    ├── CheckInModels.cs       # 签到数据模型
    ├── ClientConfig.cs        # 客户端配置
    └── DeviceInfo.cs          # 设备信息
```

## 下一步

- 了解完整的 [功能特性 →](/features)
- 查看 [部署指南 →](/deploy)
- 阅读 [常见问题 →](/faq)
