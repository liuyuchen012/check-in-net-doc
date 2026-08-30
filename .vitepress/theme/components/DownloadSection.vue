<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const activePlatform = ref('windows')
const loading = ref(true)
const version = ref('V3.2')
const publishedAt = ref('')
const releaseUrl = ref('https://github.com/liuyuchen012/AgoraIn/releases/latest')

interface AssetInfo { size: number; url: string }

const platforms = [
  { key: 'windows', label: 'Windows', icon: '⊞', glow: '#7c3aed' },
  { key: 'linux', label: 'Linux', icon: '🐧', glow: '#10b981' },
  { key: 'macos', label: 'macOS', icon: '🍎', glow: '#f97316' },
  { key: 'android', label: 'Android', icon: '🤖', glow: '#22c55e' },
]

// 从 GitHub API 获取最新版本信息
const assets = ref<Record<string, AssetInfo>>({
  'AgoraIn-Setup-v3.2.0.exe': { size: 0, url: '' },
  'AgoraIn-Server-Setup-v3.2.0.exe': { size: 0, url: '' },
  'Client.win-x64.zip': { size: 0, url: '' },
  'Server.win-x64.zip': { size: 0, url: '' },
  'Server.linux-x64.zip': { size: 0, url: '' },
  'Server.osx-x64.zip': { size: 0, url: '' },
  'Server.osx-arm64.zip': { size: 0, url: '' },
  'Mobile.Android.zip': { size: 0, url: '' },
  'Mobile.macOS.zip': { size: 0, url: '' },
  'ClassIsland.Plugin.cipx': { size: 0, url: '' },
})

function fmtSize(bytes: number) {
  if (!bytes) return ''
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(1) + ' MB'
}

async function fetchRelease() {
  try {
    const res = await fetch('https://api.github.com/repos/liuyuchen012/AgoraIn/releases/latest')
    if (!res.ok) throw new Error('API error')
    const data = await res.json()
    version.value = data.tag_name || 'V3.2'
    publishedAt.value = new Date(data.published_at).toLocaleDateString('zh-CN')
    releaseUrl.value = data.html_url || releaseUrl.value

    const map: Record<string, { size: number; url: string }> = {}
    for (const a of data.assets) {
      map[a.name] = { size: a.size, url: a.browser_download_url }
    }
    assets.value = { ...assets.value, ...map }
  } catch (_) {
    // 使用默认值，页面正常展示
  } finally {
    loading.value = false
  }
}

onMounted(fetchRelease)

const downloads = computed(() => {
  const a = assets.value
  return {
    windows: [
      {
        title: '桌面客户端（安装包）',
        desc: 'Inno Setup 安装程序，推荐！自动安装到开始菜单并可创建桌面快捷方式，升级安装不会覆盖你的配置数据。',
        filename: 'AgoraIn-Setup-v3.2.0.exe',
        ext: 'exe',
        url: a['AgoraIn-Setup-v3.2.0.exe']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['AgoraIn-Setup-v3.2.0.exe']?.size || 0,
        icon: '🖥',
        tag: '推荐',
      },
      {
        title: '桌面客户端（便携版）',
        desc: 'WPF 桌面应用，适用于班级电子白板。解压后运行 AgoraIn.exe 即可。',
        filename: 'Client.win-x64.zip',
        ext: 'zip',
        url: a['Client.win-x64.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Client.win-x64.zip']?.size || 0,
        icon: '📦',
        tag: '便携',
      },
      {
        title: '服务器端（安装包）',
        desc: 'Inno Setup 安装程序，一键部署集控服务器（含自动升级能力），升级不覆盖 config.json 与数据库。',
        filename: 'AgoraIn-Server-Setup-v3.2.0.exe',
        ext: 'exe',
        url: a['AgoraIn-Server-Setup-v3.2.0.exe']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['AgoraIn-Server-Setup-v3.2.0.exe']?.size || 0,
        icon: '⚙',
        tag: '推荐',
      },
      {
        title: '服务器端（便携版）',
        desc: 'ASP.NET Core 服务，Windows x64 独立部署包。如需使用多设备管理、扫码打卡功能必须部署此包。',
        filename: 'Server.win-x64.zip',
        ext: 'zip',
        url: a['Server.win-x64.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Server.win-x64.zip']?.size || 0,
        icon: '📦',
        tag: '便携',
      },
      {
        title: 'ClassIsland 插件',
        desc: 'AgoraIn 与 ClassIsland 联动插件：接收教师端呼叫并置顶弹窗 + 中文语音朗读，结合课表在下课前自动提醒。详见《连接插件端》。',
        filename: 'ClassIsland.Plugin.cipx',
        ext: 'cipx',
        url: a['ClassIsland.Plugin.cipx']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['ClassIsland.Plugin.cipx']?.size || 0,
        icon: '🧩',
        tag: '联动',
      },
    ],
    linux: [
      {
        title: '服务器端',
        desc: 'ASP.NET Core 服务，Linux x64 独立部署包。如需使用多设备管理、扫码打卡功能必须部署此包。',
        filename: 'Server.linux-x64.zip',
        ext: 'zip',
        url: a['Server.linux-x64.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Server.linux-x64.zip']?.size || 0,
        icon: '⚙',
        tag: '必装',
      },
    ],
    macos: [
      {
        title: '桌面客户端（Mac Catalyst）',
        desc: 'macOS 客户端 .pkg 安装包（Mac Catalyst）。若安装后被 Gatekeeper 拦截，请到 系统设置 → 隐私与安全性 点击"仍要打开"。',
        filename: 'Mobile.macOS.zip',
        ext: 'zip',
        url: a['Mobile.macOS.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Mobile.macOS.zip']?.size || 0,
        icon: '🖥',
        tag: '必装',
      },
      {
        title: '服务器端（Intel）',
        desc: 'ASP.NET Core 服务，macOS x64 独立部署包，适用于 Intel 芯片的 Mac。',
        filename: 'Server.osx-x64.zip',
        ext: 'zip',
        url: a['Server.osx-x64.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Server.osx-x64.zip']?.size || 0,
        icon: '⚙',
        tag: '必装',
      },
      {
        title: '服务器端（Apple Silicon）',
        desc: 'ASP.NET Core 服务，macOS ARM64 独立部署包，适用于 M 系列芯片的 Mac。',
        filename: 'Server.osx-arm64.zip',
        ext: 'zip',
        url: a['Server.osx-arm64.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Server.osx-arm64.zip']?.size || 0,
        icon: '⚙',
        tag: '推荐',
      },
    ],
    android: [
      {
        title: '安卓客户端（APK）',
        desc: '移动端独立 App，支持课堂签到、课堂打卡与课时划消，功能与微信小程序一致。',
        filename: 'com.tencent.weauth-1.0.0.apk',
        ext: 'apk',
        url: 'https://github.com/liuyuchen012/AgoraIn-weixin-amp/releases/download/V1.0/com.tencent.weauth-1.0.0.apk',
        filesize: 0,
        icon: '🤖',
        tag: '安卓',
      },
      {
        title: '安卓构建包（.aab）',
        desc: '面向开发者的 Play 商店上传包，内含签名版与未签名版 .aab，普通用户请使用上方 APK。',
        filename: 'Mobile.Android.zip',
        ext: 'zip',
        url: a['Mobile.Android.zip']?.url || 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
        filesize: a['Mobile.Android.zip']?.size || 0,
        icon: '📦',
        tag: '开发者',
      },
    ],
  }
})
</script>

<template>
  <div class="download-section">
    <!-- 动态光斑背景 -->
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    <div class="glow glow-3"></div>
    <div class="grain"></div>

    <div class="inner">
      <div class="download-hero">
        <div class="hero-badge">🚀 全新 V3.2 构建 · 多重平台</div>
        <h1 class="hero-title">AgoraIn <span>资源库</span></h1>
        <p class="subtitle">选择你的平台，一键直达最新构建物</p>
        <div class="version-info">
          <span class="version-badge">{{ version }}</span>
          <span v-if="publishedAt" class="pub-date">发布于 {{ publishedAt }}</span>
          <a class="release-link" :href="releaseUrl" target="_blank" rel="noopener">查看更新详情 →</a>
        </div>
      </div>

      <!-- 平台选择 -->
      <div class="platform-tabs">
        <button
          v-for="p in platforms"
          :key="p.key"
          type="button"
          :class="['platform-tab', { active: activePlatform === p.key }]"
          :style="{ '--glow': p.glow }"
          @click="activePlatform = p.key"
        >
          <span class="tab-icon">{{ p.icon }}</span>
          <span>{{ p.label }}</span>
        </button>
      </div>

      <TransitionGroup name="cards" tag="div" class="download-cards">
        <div
          v-for="item in downloads[activePlatform]"
          :key="item.title"
          class="download-card"
        >
          <span class="card-tag">{{ item.tag }}</span>
          <div class="card-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
          <div class="file-meta">
            <span class="ext-badge">.{{ item.ext }}</span>
            <span class="fname">{{ item.filename }}</span>
            <span v-if="item.filesize" class="file-size">{{ fmtSize(item.filesize) }}</span>
          </div>
          <a class="download-btn" :href="item.url" target="_blank" rel="noopener">
            <span class="btn-icon">⬇</span>
            <span>立即下载</span>
          </a>
        </div>
      </TransitionGroup>

      <div class="git-entry">
        <a class="release-link big" :href="releaseUrl" target="_blank" rel="noopener">
          <span class="gh-icon">🐙</span> 前往 GitHub Release 查看全部更新
        </a>
      </div>

      <div class="download-footer">
        <p>Designed &amp; Maintained by 刘宇晨</p>
        <p>
          <a href="https://github.com/liuyuchen012/AgoraIn" target="_blank" rel="noopener">GitHub 仓库</a>
          &nbsp;·&nbsp;
          <a href="/guide">安装指南</a>
          &nbsp;·&nbsp;
          <a href="/faq">常见问题</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-section {
  position: relative;
  overflow: hidden;
  background: radial-gradient(1200px 600px at 20% -10%, #1a1440 0%, transparent 60%),
    radial-gradient(1000px 500px at 90% 20%, #0d2a4a 0%, transparent 55%),
    linear-gradient(160deg, #0b0b1c 0%, #101226 45%, #0b1220 100%);
  min-height: 100%;
  border-radius: 12px;
}

.inner { position: relative; z-index: 2; max-width: 960px; margin: 0 auto; padding: 0 24px 32px; }

/* 动态光斑 */
.glow {
  position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.35;
  animation: floatGlow 12s ease-in-out infinite alternate; z-index: 1; pointer-events: none;
}
.glow-1 { width: 480px; height: 480px; left: -10%; top: 8%; background: #7c3aed; }
.glow-2 { width: 420px; height: 420px; right: -8%; top: 30%; background: #2563eb; animation-delay: -4s; }
.glow-3 { width: 380px; height: 380px; left: 30%; bottom: -16%; background: #0891b2; animation-delay: -8s; }
@keyframes floatGlow {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(40px, -30px) scale(1.15); }
}
.grain {
  position: absolute; inset: 0; z-index: 1; pointer-events: none; opacity: 0.05;
  background-image: radial-gradient(rgba(255,255,255,0.6) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
}

/* Hero */
.download-hero { text-align: center; padding: 56px 0 24px; }
.hero-badge {
  display: inline-block; padding: 6px 18px; margin-bottom: 18px; font-size: 0.8rem; font-weight: 600;
  color: #e9d5ff; letter-spacing: 0.5px;
  background: linear-gradient(90deg, rgba(124,58,237,0.25), rgba(37,99,235,0.25));
  border: 1px solid rgba(139,92,246,0.45); border-radius: 999px;
  box-shadow: 0 0 18px rgba(124,58,237,0.35);
}
.hero-title {
  font-size: 3rem; font-weight: 800; line-height: 1.15; margin: 0; color: #fff;
  filter: drop-shadow(0 4px 24px rgba(124,58,237,0.45));
}
.hero-title span {
  background: linear-gradient(90deg, #a78bfa, #60a5fa, #22d3ee, #a78bfa);
  background-size: 300% 100%;
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  animation: shimmer 6s linear infinite;
}
@keyframes shimmer { from { background-position: 0% 0; } to { background-position: 300% 0; } }
.subtitle { margin-top: 10px; color: rgba(226,232,240,0.72); font-size: 1.02rem; }
.version-info {
  display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 16px; flex-wrap: wrap;
}
.version-badge {
  padding: 5px 18px; font-size: 0.92rem; font-weight: 700; color: #fff;
  background: linear-gradient(90deg, #7c3aed, #4f46e5); border-radius: 999px;
  box-shadow: 0 0 22px rgba(124,58,237,0.55);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse { 50% { box-shadow: 0 0 34px rgba(124,58,237,0.85); } }
.pub-date { font-size: 0.85rem; color: rgba(148,163,184,0.9); }
.release-link {
  color: #a5b4fc; font-size: 0.85rem; text-decoration: none; border-bottom: 1px dashed rgba(165,180,252,0.5);
  transition: color 0.2s;
}
.release-link:hover { color: #c4b5fd; }
.release-link.big {
  font-size: 0.95rem; padding: 12px 26px; border: 1px solid rgba(139,92,246,0.4); border-radius: 12px;
  background: rgba(124,58,237,0.12); backdrop-filter: blur(8px);
}
.release-link.big:hover { background: rgba(124,58,237,0.22); border-color: rgba(167,139,250,0.7); }

/* 平台选择器 */
.platform-tabs { display: flex; justify-content: center; gap: 10px; margin: 30px 0 38px; flex-wrap: wrap; }
.platform-tab {
  --glow: #7c3aed;
  display: flex; align-items: center; gap: 8px; padding: 10px 30px; cursor: pointer;
  font-family: inherit; font-size: 1rem; font-weight: 600; color: rgba(203,213,225,0.85);
  background: rgba(255,255,255,0.04); border: 1px solid rgba(148,163,184,0.25); border-radius: 14px;
  transition: all 0.25s; backdrop-filter: blur(6px);
}
.platform-tab .tab-icon { font-size: 1.15rem; transition: transform 0.25s; }
.platform-tab:hover { border-color: color-mix(in srgb, var(--glow) 60%, white); color: #fff; transform: translateY(-1px); }
.platform-tab:hover .tab-icon { transform: scale(1.2) rotate(-6deg); }
.platform-tab.active {
  color: #fff; border-color: transparent;
  background: linear-gradient(135deg, color-mix(in srgb, var(--glow) 80%, black), var(--glow));
  box-shadow: 0 6px 26px color-mix(in srgb, var(--glow) 55%, transparent);
}

/* 卡片 */
.download-cards {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px; max-width: 860px; margin: 0 auto;
}
.download-card {
  position: relative; display: flex; flex-direction: column; overflow: hidden;
  padding: 26px 24px 24px; border-radius: 18px;
  background: linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
  border: 1px solid rgba(148,163,184,0.22); backdrop-filter: blur(14px);
  transition: all 0.3s;
}
.download-card::before {
  content: ''; position: absolute; inset: 0; border-radius: 18px; padding: 1px;
  background: linear-gradient(135deg, rgba(167,139,250,0.8), transparent 40%, transparent 60%, rgba(56,189,248,0.7));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.3s;
  pointer-events: none;
}
.download-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 18px 48px rgba(0,0,0,0.45), 0 0 24px rgba(124,58,237,0.18);
}
.download-card:hover::before { opacity: 1; }

.card-tag {
  position: absolute; top: 16px; right: 16px; padding: 3px 12px; border-radius: 999px;
  font-size: 0.72rem; font-weight: 700; color: #fff;
  background: linear-gradient(90deg, #7c3aed, #4f46e5);
  box-shadow: 0 0 12px rgba(124,58,237,0.5);
}
.card-icon {
  width: 54px; height: 54px; display: flex; align-items: center; justify-content: center;
  font-size: 1.7rem; border-radius: 14px; margin-bottom: 14px;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
}
.download-card h3 { font-size: 1.15rem; font-weight: 700; margin: 0 0 6px; color: #fff; }
.download-card .desc {
  color: rgba(203,213,225,0.75); font-size: 0.9rem; line-height: 1.6; margin-bottom: auto;
}
.file-meta {
  display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin: 15px 0;
  font-size: 0.8rem; color: rgba(148,163,184,0.9);
}
.ext-badge {
  padding: 2px 8px; border-radius: 6px; font-family: monospace; font-size: 0.76rem;
  background: rgba(56,189,248,0.15); color: #7dd3fc; border: 1px solid rgba(56,189,248,0.3);
}
.fname { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 260px; }
.file-size { margin-left: auto; color: #93c5fd; font-weight: 600; }

.download-btn {
  position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 11px 28px; border-radius: 12px; font-weight: 700; font-size: 0.95rem; color: #fff !important;
  background: linear-gradient(135deg, #7c3aed, #4f46e5 55%, #2563eb); overflow: hidden;
  text-decoration: none !important; transition: all 0.25s; cursor: pointer; width: 100%; box-sizing: border-box;
}
.download-btn::after {
  content: ''; position: absolute; top: 0; left: -120%; width: 60%; height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent);
  transform: skewX(-20deg); animation: sweep 2.8s ease-in-out infinite;
}
@keyframes sweep { 0%, 55% { left: -120%; } 90%, 100% { left: 160%; } }
.download-btn:hover { background: linear-gradient(135deg, #8b5cf6, #6366f1 55%, #3b82f6); box-shadow: 0 8px 26px rgba(124,58,237,0.5); transform: translateY(-1px); }
.btn-icon { font-size: 1.05rem; }

.git-entry { text-align: center; margin-top: 28px; }
.download-footer { text-align: center; margin-top: 40px; padding: 18px 0 8px; color: rgba(148,163,184,0.6); font-size: 0.88rem; border-top: 1px solid rgba(148,163,184,0.12); }
.download-footer a { color: #a5b4fc; font-weight: 500; text-decoration: none; }
.download-footer a:hover { color: #c4b5fd; }

/* 切换动画 */
.cards-enter-active, .cards-leave-active { transition: all 0.28s ease; }
.cards-enter-from { opacity: 0; transform: translateY(16px) scale(0.96); }
.cards-leave-to { opacity: 0; transform: translateY(-10px) scale(0.97); }
.cards-move { transition: transform 0.28s ease; }

@media (max-width: 640px) {
  .hero-title { font-size: 2.1rem; }
  .platform-tabs { flex-direction: column; align-items: center; }
  .download-cards { grid-template-columns: 1fr; }
}
</style>
