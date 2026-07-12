<script setup>
import { ref } from 'vue'

const activePlatform = ref('windows')

const platforms = [
  { key: 'windows', label: 'Windows', icon: '⊞' },
  { key: 'linux', label: 'Linux', icon: '🐧' },
  { key: 'macos', label: 'macOS', icon: '🍎' },
]

const downloads = {
  windows: [
    {
      title: '桌面客户端',
      desc: 'WPF 桌面应用，适用于班级电子白板',
      file: 'AgoraIn-Client-win-x64.zip',
      link: 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
      icon: '🖥',
      tag: '推荐',
      tagColor: '#7c3aed',
    },
    {
      title: '服务器端',
      desc: 'ASP.NET Core 服务，Windows x64 独立部署包',
      file: 'AgoraIn-Server-win-x64.zip',
      link: 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
      icon: '⚙',
      tag: '必装',
      tagColor: '#10b981',
    },
  ],
  linux: [
    {
      title: '服务器端',
      desc: 'ASP.NET Core 服务，Linux x64 独立部署包',
      file: 'AgoraIn-Server-linux-x64.tar.gz',
      link: 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
      icon: '⚙',
      tag: '必装',
      tagColor: '#10b981',
    },
  ],
  macos: [
    {
      title: '服务器端',
      desc: 'ASP.NET Core 服务，macOS ARM64 独立部署包',
      file: 'AgoraIn-Server-osx-arm64.tar.gz',
      link: 'https://github.com/liuyuchen012/AgoraIn/releases/latest',
      icon: '⚙',
      tag: '必装',
      tagColor: '#10b981',
    },
  ],
}
</script>

<style>
.download-hero {
  text-align: center;
  padding: 48px 0 32px;
}
.download-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.download-hero .subtitle {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
}
.download-hero .version-badge {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 16px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* 平台选择器 */
.platform-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32px 0 40px;
}
.platform-tab {
  padding: 10px 28px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.platform-tab:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
}
.platform-tab.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* 下载卡片 */
.download-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 740px;
  margin: 0 auto;
}
.download-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px 24px;
  background: var(--vp-c-bg-soft);
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.download-card:hover {
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.1);
  transform: translateY(-2px);
}
.download-card .card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.download-card .card-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
}
.download-card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 6px;
}
.download-card .desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 12px;
}
.download-card .file-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-bottom: 16px;
}
.download-card .file-info .ext {
  padding: 1px 6px;
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.78rem;
}
.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 24px;
  border-radius: 10px;
  background: linear-gradient(135deg, #7c3aed, #6366f1);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s;
}
.download-btn:hover {
  background: linear-gradient(135deg, #8b5cf6, #818cf8);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);
  color: #fff;
  text-decoration: none;
}
.download-btn.git-btn {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}
.download-btn.git-btn:hover {
  border-color: var(--vp-c-text-2);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  color: var(--vp-c-text-1);
}

/* 底部提示 */
.download-footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0 8px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-size: 0.88rem;
}
.download-footer a {
  font-weight: 500;
}

/* 移动端适配 */
@media (max-width: 640px) {
  .platform-tabs {
    flex-direction: column;
    align-items: center;
  }
  .download-cards {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="download-hero">
  <h1>AgoraIn 资源库</h1>
  <p class="subtitle">请选择服务端平台，下载对应版本</p>
  <span class="version-badge">最新版本 v2.7</span>
</div>

<!-- 平台选择 -->
<div class="platform-tabs">
  <button
    v-for="p in platforms"
    :key="p.key"
    :class="['platform-tab', { active: activePlatform === p.key }]"
    @click="activePlatform = p.key"
  >
    <span>{{ p.icon }}</span>
    <span>{{ p.label }}</span>
  </button>
</div>

<!-- 下载卡片 -->
<div class="download-cards">
  <div
    v-for="item in downloads[activePlatform]"
    :key="item.title"
    class="download-card"
  >
    <span class="card-tag" :style="{ background: item.tagColor }">{{ item.tag }}</span>
    <div class="card-icon">{{ item.icon }}</div>
    <h3>{{ item.title }}</h3>
    <p class="desc">{{ item.desc }}</p>
    <div class="file-info">
      <span>📦</span>
      <span class="ext">{{ item.file.split('.').slice(-2).join('.') }}</span>
      <span>{{ item.file }}</span>
    </div>
    <a class="download-btn" :href="item.link" target="_blank" rel="noopener">
      前往下载 →
    </a>
  </div>
</div>

<!-- GitHub 入口 -->
<div style="text-align:center; margin-top: 24px;">
  <a
    class="download-btn git-btn"
    href="https://github.com/liuyuchen012/AgoraIn/releases"
    target="_blank"
    rel="noopener"
  >
    <span>查看所有历史版本 →</span>
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
