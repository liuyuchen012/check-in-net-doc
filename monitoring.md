---
title: 班级监视
description: 每台教室设备屏幕/摄像头两路直播，15 分钟录像切片，WebDAV 保留 3 天
---

# 班级监视

> v4.1 新增。每台教室设备提供 **2 个端点**（屏幕 / 摄像头），支持 **3 天回放**，
> 录像按 **15 分钟**切片后存入 WebDAV。直播层使用开源 [livego](https://github.com/gwuhaolin/livego)（MIT）。

## 需要什么

- **livego**：接收 RTMP、分发 HLS/HTTP-FLV；管理 API 只绑 `127.0.0.1:8090`；
  **v4.1 起随服务端发布目录内置**（`tools/linux-x64/livego`），由服务端自动启动/守护；
- **ffmpeg**：服务端从 livego 拉流并切成 15 分钟 MP4；同样内置（`tools/linux-x64/ffmpeg`），无需目标机安装；
- **WebDAV**：在「设置 → 存储」启用，录像上传到 `agorain/{区域}/monitoring/...`；
- 设备端推流：可用 `monitoring/agent/agent.py` 或自定义 ffmpeg 命令（Windows 屏幕/摄像头、Linux X11、macOS AVFoundation）。

## 快速配置

```json
"Monitoring": {
  "Enabled": true,
  "AutoStartLiveGo": true,
  "UseBundledTools": true,
  "LiveGoApiUrl": "http://127.0.0.1:8090",
  "RtmpBase": "rtmp://<内网IP>:1935/live",
  "HlsBase": "http://<内网IP>:7002/live",
  "FlvBase": "http://<内网IP>:7001/live",
  "FfmpegPath": "",
  "SegmentMinutes": 15,
  "RetentionDays": 3,
  "DeleteLocalAfterUpload": true
}
```

重启 AgoraIn 服务端（会自动拉起内置 livego），然后用管理面板
「教学日常 → 班级监视」查看设备、直播与回放。

## 端点与地址

| 通道 | 推流地址 | 播放 |
| --- | --- | --- |
| 屏幕 | `rtmp://<host>:1935/live/{区域}-{设备UUID}-screen` | `http://<host>:7002/live/{流键}.m3u8` |
| 摄像头 | `rtmp://<host>:1935/live/{区域}-{设备UUID}-camera` | 同上 |

服务端提供鉴权接口：

- `GET /api/v4/monitoring/devices`：设备与两路流地址、在线状态；
- `GET /api/v4/monitoring/segments`：最近 3 天分段；
- `GET /api/v4/monitoring/segments/{id}/file`：回放（Range，支持拖动）。

## 注意

- livego 的 HLS 本身不带鉴权，生产应把 7002 限制在内网或反代后；
- 录像目前不加密存 WebDAV（视频体量大），WebDAV 账号必须专用且最小权限；
- 15 分钟分段之间会有 1–2 秒空档，不是连续时间轴；
- 设备端关键帧间隔建议 `-g 30`，否则切片边界会漂移。
