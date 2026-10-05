---
title: 部署指南
description: AgoraIn v4 服务端 / Web 面板 / 桌面端 / 移动端构建与部署
---

# 部署指南

AgoraIn v4 的部署分四块：**服务端（含 Web 面板）→ 桌面端 → 移动端 App → 家长端小程序**。
服务端是唯一的在线节点，其余各端都是客户端，服务器地址在客户端内固定为 `https://agorain.615mc.cn`。

## 一、架构概览

```
客户端                          服务端（Linux, 5250）
├── 桌面端 Avalonia  ─┐         ├── ASP.NET Core 10 REST /api/v4
├── Web 管理面板     ─┼─ HTTPS ─┤── SignalR /hub/live（签到实时上屏）
├── 移动端 App       ─┤         ├── SQLite 单文件库（data/server.db）
└── 家长端小程序     ─┘         ├── 本地识别（OMR / 手写 OCR）
                                └── wwwroot/ ← Web 管理面板产物
```

- 服务端数据目录默认 `<程序目录>/data`，可通过 `Data:Directory` 或环境变量 `Data__Directory` 改址
- 首次启动自动建库建表；升级时由 `DbSchemaPatch` 补列补表（生产库安全）
- 首次初始化：`POST /api/v4/auth/setup` 创建管理员，或在 Web 面板首次打开时按向导完成

## 二、服务端部署（Linux）

### 方式 A：一键脚本

```bash
bash v4/deploy-server.sh <host> <user> <password>
```

脚本会：本地 `dotnet publish -r linux-x64 --self-contained` → 构建 Web 面板并拷入 `wwwroot/`
→ `scp` 上传 → 安装 systemd 服务 → 重启并验证 `/api/v4/setup/status`。

### 方式 B：手动部署（宝塔等环境）

1. 发布服务端（自包含，无需目标机安装 .NET）：

   ```bash
   dotnet publish v4/src/AgoraIn.Server -c Release -r linux-x64 --self-contained true
   ```

2. 构建 Web 面板并拷入静态目录：

   ```bash
   cd v4/src/AgoraIn.WebAdmin && npm install && npm run build
   cp -r dist/* ../AgoraIn.Server/wwwroot/
   ```

3. 上传解压到目标目录（例如 `/www/wwwroot/agorain/`），确认存在 `data/` 可写目录：

   ```bash
   mkdir -p data && chown -R www:www data
   ```

4. 启动（建议 systemd 或宝塔守护）：

   ```bash
   nohup ./AgoraIn.Server --urls http://0.0.0.0:5250 > server.log 2>&1 &
   ```

5. 健康检查：`curl http://127.0.0.1:5250/api/v4/setup/status` → `{"needsSetup":false}`

### nginx / 宝塔反向代理

Web 面板是 history 路由的 SPA，静态文件之外的所有路径都要回退到 `index.html`：

```nginx
location / {
  root /www/wwwroot/agorain/wwwroot;
  try_files $uri $uri/ /index.html;
}
location ~ ^/(api|hub|assets|login|dashboard|classes|students|devices|classhours|notices|resources|exams|users|license|settings|index\.html) {
  proxy_pass http://127.0.0.1:5250;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;      # SignalR WebSocket
  proxy_set_header Connection "upgrade";
  proxy_read_timeout 86400s;
}
```

::: danger 注意
部分安全规则会拦截 `LICENSE`、`README.md` 等关键词，**大小写不敏感**，可能误伤 SPA 路由 `/license`。
把上面的 SPA 路由块放在安全规则**之前**即可（nginx 正则 location 优先于前缀匹配）。
:::

## 三、桌面端构建

```bash
dotnet build v4/src/AgoraIn.App/AgoraIn.App.csproj -c Release
# 单文件/自包含发布
dotnet publish v4/src/AgoraIn.App -c Release -r win-x64 --self-contained true \
  -p:DebugType=none -p:DebugSymbols=false
```

Windows 10 兼容：`v4/Directory.Build.props` 已统一设置 `CETCompat=false`，无需额外处理。

## 四、移动端构建（.NET MAUI）

多目标项目需要**按目标框架单独还原**，否则会报 `NETSDK1047 / NETSDK1005`：

```bash
# Android
dotnet restore v4/src/AgoraIn.Mobile -p:TargetFrameworks=net10.0-android -p:RuntimeIdentifier=android-arm64
dotnet publish v4/src/AgoraIn.Mobile -f net10.0-android -r android-arm64 --no-restore

# Windows
dotnet restore v4/src/AgoraIn.Mobile -p:TargetFramework=net10.0-windows10.0.19041.0 -p:RuntimeIdentifier=win-x64
dotnet build v4/src/AgoraIn.Mobile -f net10.0-windows10.0.19041.0 -r win-x64 --no-restore
```

Release APK 需配置签名（keystore + `AndroidSigningStorePass` / `AndroidSigningKeyPass`）。
中文路径下构建 Android 会触发 APT2265，把项目复制到纯 ASCII 路径即可绕过。

## 五、质量门禁与 CI

```powershell
powershell -ExecutionPolicy Bypass -File v4/scripts/gate.ps1
```

等价于：`dotnet build` → `dotnet test` → `AgoraIn.exe --selftest`（无头冒烟）。
CI（GitHub Actions）在 push / PR 时跑门禁与 Web 面板构建校验，打 tag 或手动触发时构建各端产物并附加到 Release。

## 六、升级与数据

| 主题 | 说明 |
| --- | --- |
| 数据库 | SQLite 单文件（`data/server.db`）；升级后由 `DbSchemaPatch` 自动补列补表，升级前建议备份 `data/` |
| 上传文件 | 答题卡原图与资源默认存本地；开启远程存储后加密上传 WebDAV，本机只保留 LRU 缓存 |
| 远程存储缓存 | 只淘汰**已确认上传成功**的本机副本，远程不可用时排队补传 |
| 前端缓存 | Web 面板已开启过期自愈：加载新版本后自动提示并刷新 |

## 相关阅读

- [快速开始](/guide) · [API 文档](/api) · [服务端与授权](/server) · [常见问题](/faq)
