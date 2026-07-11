# ❓ 常见问题

## 服务器相关

### Q: 服务器启动后无法访问？

**排查步骤：**

1. 确认服务器正常启动，终端没有报错
2. 检查端口是否被占用：`netstat -an | findstr 5000`
3. 检查防火墙是否阻止了端口访问
4. 确认客户端配置的服务器地址正确

### Q: 如何更改服务器端口？

在启动命令中修改 `--urls` 参数：

```bash
# 改为 8080 端口
./CheckIn.Server --urls "http://0.0.0.0:8080"
```

同时更新客户端 `appsettings.json` 中的 `ServerUrl`。

### Q: 服务器支持 HTTPS 吗？

当前版本仅支持 HTTP。如需 HTTPS，建议配合 Nginx 反向代理：

```nginx
server {
    listen 443 ssl;
    server_name signwave.example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 客户端相关

### Q: 客户端连接不上服务器？

1. 确认服务器已启动并正常运行
2. 检查 `appsettings.json` 中 `ServerUrl` 是否正确
3. 确认网络连通性：`ping 服务器IP`
4. 检查防火墙设置

### Q: 客户端可以安装在 Linux 上吗？

WPF 客户端仅支持 **Windows** 平台。Linux / macOS 用户可以通过浏览器访问 Web 管理面板进行操作。

### Q: 多个教室可以同时使用吗？

可以。每个教室运行一个客户端实例，所有客户端连接到同一个服务器。服务器通过设备 UUID 自动分组管理。

---

## 数据相关

### Q: 签到数据存储在哪里？

所有数据存储在服务器端的 SQLite 数据库文件中，位于 `CheckIn.Server/data/signwave.db`。

### Q: 如何迁移数据到新服务器？

1. 停止旧服务器
2. 复制 `data/signwave.db` 文件
3. 粘贴到新服务器的相同目录下
4. 启动新服务器

### Q: 数据会自动备份吗？

当前版本不包含自动备份功能。建议通过定时任务（cron / 计划任务）定期备份数据库文件。

---

## 远程签到

### Q: 学生扫码签到需要安装 App 吗？

不需要。学生使用手机浏览器扫描二维码或点击短链接即可完成签到，无需安装任何应用。

### Q: 短链接有效期是多久？

签到短链接在签到任务有效期内均可使用。任务结束后链接自动失效。

### Q: 如何防止学生代签到？

- 远程签到时，服务器会记录设备的 IP 地址和签到时间
- 教师可通过 Web 面板查看异常签到行为
- 推荐主要使用桌面端大屏打卡模式

---

## 版本与更新

### Q: 当前最新版本是什么？

当前最新稳定版是 **v2.6**（2026年6月25日发布）。README 中已介绍 v2.7 的新功能（多任务管理）。

### Q: 如何更新版本？

参考 [部署指南 - 版本升级](/deploy#版本升级) 章节。记得先备份数据！

### Q: 从哪里获取帮助？

- 📖 本使用文档
- 🐛 [GitHub Issues](https://github.com/liuyuchen012/check-in/issues)
- 📧 联系项目作者：刘宇晨

---

## 其他

### Q: 项目是什么开源协议？

本项目采用 **GNU General Public License v3** 协议。允许自由使用、修改和分发，但修改后的版本也需开源。

### Q: 可以用于商业用途吗？

GPL v3 协议允许商业使用，但如果您对代码做了修改并分发，必须也以 GPL v3 协议开源您的修改。

### Q: 学生名单如何导入？

通过 CSV 文件导入：在 Web 管理面板中选择 CSV 文件上传即可。CSV 格式要求：

```csv
姓名,学号
张三,2024001
李四,2024002
王五,2024003
```

::: tip
你也可以直接使用 Excel 编辑学生名单，然后导出为 CSV 格式。
:::
