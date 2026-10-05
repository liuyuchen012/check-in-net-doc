# AgoraIn v4 宣传片 · 源码

本目录是官网宣传片（`public/video/agorain-v4-promo-*.mp4`）的**完整可复现源码**：
一支 62 秒的动效短片，横屏 16:9 与竖屏 9:16 双版本，全部由 HTML/CSS/JS 时间轴驱动、
逐帧截图后用 ffmpeg 编码；音乐、音效与旁白均为自制。

## 结构

```
video-src/
├── src/                # 动画舞台（浏览器里打开 index.html 即可预览）
│   ├── index.html      # 1920×1080 舞台（?v=1 切换为 1080×1920 竖屏）
│   ├── promo.css       # 设计令牌、设备 mockup、通用动效
│   ├── scenes.css      # 各场景专属样式（含竖屏适配）
│   ├── utils.js        # 确定性动画工具（缓动/逐字/seek 时间轴）
│   ├── scenes1.js      # 场景 1-4：钩子 / 亮相 / 扫码签到 / 课堂日常
│   ├── scenes2.js      # 场景 5-8：考试阅卷 / 家校沟通 / 平台能力 / 片尾
│   └── boot.js         # 引擎：场景注册、seek、转场特效（闪白 / 擦除 / 收尾淡出）
├── audio/
│   ├── gen_vo.py       # 旁白（edge-tts，8 段，输出 vo/*.mp3 + vo.json 时间表）
│   ├── gen_music.mjs   # 原创背景音乐合成器（Node 生成 44.1k 立体声 WAV）
│   └── gen_sfx.mjs     # 音效合成（铃音 / whoosh / 快门 / 滴答 / 弹入 / 翻页）
└── render/
    ├── build.mjs       # 逐帧渲染（Playwright + CDP）→ ffmpeg 编码；音频总线混音
    └── shots.mjs       # 抽帧检查（在指定时间点截图，人工核对版面）
```

## 依赖

| 依赖 | 说明 |
| --- | --- |
| Node 20+ | 运行渲染与音频合成脚本 |
| `playwright-core` | 复用系统安装的 Chrome（`channel: 'chrome'`），无需下载浏览器 |
| ffmpeg / ffprobe | 逐帧编码、混音、抽帧 |
| Python + `edge-tts` | 生成中文旁白（微软 Edge 语音合成） |
| 字体 | `src/fonts/NotoSansSC-VF.ttf`（思源黑体简体，从 Windows 字体目录复制，未入库） |

> 字体未随仓库分发：把 `NotoSansSC-VF.ttf`（或任意思源黑体/Noto Sans SC 可变字体）
> 放到 `src/fonts/` 即可，`promo.css` 中的 `@font-face` 会自动引用。

## 重新出片

```bash
# 0) 预览：在 src 下起一个静态服务，浏览器打开 http://127.0.0.1:8791/index.html（空格播放，方向键逐帧）
python -m http.server 8791 --bind 127.0.0.1     # 在 video-src/src 目录执行

# 1) 旁白（需要联网）
python audio/gen_vo.py

# 2) 原创音乐与音效
node audio/gen_music.mjs && node audio/gen_sfx.mjs

# 3) 音频总线（旁白 + 音效 + 音乐侧链闪避 + 母带限幅），MASTER_GAIN 校准到 -15 LUFS
MASTER_GAIN=1.32 node render/build.mjs audio

# 4) 逐帧渲染 + 编码（h = 横屏，v = 竖屏）
MASTER_GAIN=1.32 node render/build.mjs h
MASTER_GAIN=1.32 node render/build.mjs v
```

产物在 `out/`：`agorain-v4-promo-1920x1080.mp4`、`agorain-v4-promo-vertical-1080x1920.mp4`、
`audio-master.wav`。把两个 mp4 与海报图拷到官网 `public/video/` 即可。

## 时间轴

| 场景 | 起止（秒） | 旁白 |
| --- | --- | --- |
| 钩子 | 0.0–7.4 | 点名、签到、批改、发成绩——琐碎的日常，正在偷走课堂时间 |
| 亮相 | 7.4–13.4 | AgoraIn 4，课堂签到与教学管理一体化平台 |
| 扫码签到 | 13.4–21.2 | 手机一扫就签到，名字实时上大屏；前三名，金银铜，一目了然 |
| 课堂日常 | 21.2–28.8 | 点名、课时、积分、值日、座位、课表——一个后台，全部搞定 |
| 考试阅卷 | 28.8–39.2 | 出卷、印答题卡、拍照扫卡；客观题本机秒判，主观题 AI 批改加人工复判，成绩一键统计 |
| 家校沟通 | 39.2–46.4 | 家长在小程序里看通知、看成绩、看值日，还能直接给老师留言 |
| 平台能力 | 46.4–52.6 | 多机构数据隔离，文件加密上云，隐私自己说了算 |
| 片尾 | 52.6–62.0 | AgoraIn 4，把时间还给课堂 |

帧率 30fps，总长 62.0 秒（1860 帧）。渲染是**确定性**的：所有动画只由时间 `t` 计算，
不含 `Date.now()` / `Math.random()`，因此可重复出片、可单帧复查。

## 合规说明

- 画面中的班级、学生姓名、成绩均为**演示数据与化名**，不含真实学生信息
- 音乐、音效为脚本合成的原创音频，旁白为语音合成，**不含任何第三方版权素材**
- 文案不承诺提分、不称替代老师；AI 相关表述均为「辅助」，且与隐私政策口径一致
