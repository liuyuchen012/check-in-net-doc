<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import MarketingFooter from './MarketingFooter.vue'

/**
 * 官网下载中心（深色营销页）。
 * 文件清单来自平台下载中心 /api/v4/downloads，避免站点里硬编码版本号。
 */
const PLATFORM = 'https://agorain.615mc.cn'
const ENDPOINT = PLATFORM + '/api/v4/downloads'

/** 下载先进入服务器的“下载进行页”，由页面自动开始下载并展示 SHA256 / 安装步骤。 */
const RELEASE_ID = 'a6f0c4d2-8b1e-4c7a-9d35-2e8f7b6a1c90'
const ARTIFACT: Record<string, string> = {
  'bundle-win-x64': 'windows_x64_full_folder',
  'desktop-win-x64': 'windows_x64_folder',
  'desktop-win-x64-setup': 'windows_x64_setup',
  'classisland-custom-win-x64': 'windows_x64_classisland',
  'scanstation-win-x64': 'windows_x64_scanstation',
  'android-apk': 'android',
}

type Item = {
  slug: string
  name: string
  version?: string | null
  size: number
  updated_at?: string
  sha256?: string
}

const items = ref<Record<string, Item>>({})
const loading = ref(true)
const online = ref(false)
const error = ref('')
const CACHE_KEY = 'agorain.downloads.v1'

const link = (slug: string) =>
  `${PLATFORM}/download/thank_you/v2/${RELEASE_ID}/${ARTIFACT[slug] || slug}`

function readCache(): Record<string, Item> | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { items?: Item[] }
    const map: Record<string, Item> = {}
    for (const it of parsed.items || []) map[it.slug] = it
    return Object.keys(map).length ? map : null
  } catch {
    return null
  }
}

function writeCache(map: Record<string, Item>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), items: Object.values(map) }))
  } catch {
    /* 隐私模式/配额不足时不影响下载 */
  }
}

function meta(slug: string) {
  const it = items.value[slug]
  if (!it) return ''
  const parts: string[] = []
  if (it.version) parts.push('v' + it.version)
  if (it.size) parts.push(sizeText(it.size))
  return parts.join(' · ')
}

function sizeText(bytes: number) {
  if (!bytes) return ''
  const mb = bytes / 1024 / 1024
  return mb >= 1 ? mb.toFixed(1) + ' MB' : (bytes / 1024).toFixed(0) + ' KB'
}

const ready = (slug: string) => !loading.value && online.value && !!items.value[slug]

/** 取当前完整包的版本号做页头展示 */
const currentVersion = computed(() => {
  for (const s of ['bundle-win-x64', 'bundle-linux-x64-deb', 'bundle-macos-arm64']) {
    const v = items.value[s]?.version
    if (v) return v
  }
  return ''
})

const platforms = [
  {
    key: 'windows',
    name: 'Windows',
    req: 'Windows 10 1809+ / 11 · x64；Win7 SP1 可用课堂大屏兼容模式',
    fmt: 'setup.exe · 绿色免安装 zip',
    primary: { slug: 'bundle-win-x64', text: '下载安装包' },
    extra: [{ slug: 'bundle-win-x64-portable', text: '绿色免安装版' }],
    icon: '<path d="M3.2 5.6l7.4-1v7.1H3.2zM11.8 4.5L21 3.2v8.5h-9.2zM3.2 12.9h7.4v7.1l-7.4-1zM11.8 12.9H21v8.5l-9.2-1.3z"/>',
  },
  {
    key: 'linux',
    name: 'Linux',
    req: 'x64 / arm64 · 需要 X11 桌面',
    fmt: '.deb 安装包 · tar.gz 免安装',
    primary: { slug: 'bundle-linux-x64-deb', text: '下载 .deb' },
    extra: [{ slug: 'bundle-linux-x64', text: 'tar.gz 版' }],
    icon: '<path d="M12 2.6c2.4 0 3.4 2 3.3 4.2-.1 1.9.4 3.2 1.3 4.6 1.2 1.8 2 3.2 2 5.1 0 2.6-2.1 4.9-6.6 4.9s-6.6-2.3-6.6-4.9c0-1.9.8-3.3 2-5.1.9-1.4 1.4-2.7 1.3-4.6C8.6 4.6 9.6 2.6 12 2.6z"/><path d="M10 8.4h.01M14 8.4h.01"/>',
  },
  {
    key: 'macos',
    name: 'macOS',
    req: 'macOS 12+ · Apple Silicon / Intel',
    fmt: '.dmg · 未签名，首次右键打开',
    primary: { slug: 'bundle-macos-arm64', text: 'Apple Silicon' },
    extra: [{ slug: 'bundle-macos-x64', text: 'Intel' }],
    icon: '<path d="M16.4 12.6c0-2 1.6-2.9 1.7-3-.9-1.3-2.2-1.5-2.7-1.5-1.1-.1-2.1.6-2.7.6-.6 0-1.5-.6-2.4-.6-1.2 0-2.4.7-3 1.8-1.3 2.3-.3 5.6.9 7.5.6.9 1.4 1.9 2.4 1.9.9 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.3-1.8c.7-1 1-2 1-2.1-.1 0-2.5-.9-2.5-2.8z"/><path d="M14.8 6.1c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.7-.5 2.2-1.2z"/>',
  },
]

const subLinks = [
  { slug: 'android-apk', text: '移动端 App（Android）' },
  { slug: 'scanstation-win-x64', text: '扫卡工作站（Windows）' },
  { href: '/miniprogram/quickstart', text: '家长端小程序' },
  { href: PLATFORM, text: '服务端与集控插件' },
]

const requirements = [
  ['Windows', 'Windows 10 1809+（推荐 11）· x64；Windows 7 SP1 可通过包内 Win7 启动器运行课堂大屏；扫描仪取图与进纸器仅 Windows'],
  ['Linux', 'x64 / arm64 · X11 桌面 · 自包含免装 .NET'],
  ['macOS', 'macOS 12+ · Apple Silicon 与 Intel 分别打包，未签名'],
  ['Android', 'Android 8.0+（移动端 App）'],
  ['浏览器', '管理面板推荐 Chrome / Edge 最新版'],
]

const steps = [
  ['下载完整包', '每个平台一个主按钮：客户端 + 定制版 ClassIsland + 更新器一次装齐。'],
  ['登录', '首次打开按向导用平台账号登录（用户名@区域）。'],
  ['后续更新', '客户端「设置 → 更新检查」；ClassIsland 在「设置 → 关于/更新」。升级不覆盖 data/。'],
]

async function load() {
  loading.value = true
  error.value = ''
  online.value = false
  items.value = {}

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 12000)
  try {
    const res = await fetch(ENDPOINT, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = (await res.json()) as { items?: Item[] }
    const map: Record<string, Item> = {}
    for (const it of json.items || []) map[it.slug] = it
    items.value = map
    online.value = Object.keys(map).length > 0
    writeCache(map)
    if (!online.value) error.value = '更新服务器暂未发布任何安装包'
  } catch (e) {
    const cached = readCache()
    if (cached) {
      items.value = cached
      online.value = true
      error.value = '更新服务器连接失败，当前显示上次读取的版本数据'
    } else {
      online.value = false
      error.value = '无法读取更新服务器中的版本数据，请检查网络后重试'
    }
  } finally {
    clearTimeout(timer)
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <div class="mkt">
    <!-- ==================== 页头 ==================== -->
    <section class="mkt-dl-hero">
      <div class="mkt-wrap">
        <span class="mkt-kicker"><i class="dot" />下载中心</span>
        <h1>下载 <span class="grad">AgoraIn</span></h1>
        <p class="mkt-p" style="max-width: 560px; margin: 0 auto">
          首先，选择适合你的平台和安装方式。每个平台只有一个主按钮——客户端、定制版 ClassIsland 与更新器已经打成一包。
        </p>
        <div class="mkt-channel" style="margin-top: 26px">
          <span class="on">稳定版{{ currentVersion ? ' v' + currentVersion : '' }}</span>
          <span>桌面端 · 移动端</span>
          <span v-if="loading">读取清单…</span>
          <span v-else-if="!online">离线清单</span>
        </div>
      </div>
    </section>

    <!-- ==================== 版本数据加载态 ==================== -->
    <section v-if="loading" class="mkt-dl-loading" aria-live="polite" aria-busy="true">
      <div class="mkt-dl-loading-card">
        <span class="mkt-dl-spinner" aria-hidden="true"></span>
        <strong>正在读取更新服务器中的版本数据</strong>
        <p>读取完成前不会显示下载按钮，请稍候。</p>
      </div>
    </section>

    <section v-else-if="!online" class="mkt-dl-loading" aria-live="polite">
      <div class="mkt-dl-loading-card">
        <strong>暂时无法显示下载</strong>
        <p>{{ error || '更新服务器没有返回可用的版本数据。' }}</p>
        <button type="button" class="mkt-btn primary sm" @click="load">重新读取</button>
      </div>
    </section>

    <!-- ==================== 平台卡 ==================== -->
    <template v-else>
    <section style="padding: 8px 0 64px">
      <div class="mkt-wrap">
        <p v-if="error" class="mkt-dl-cache-note">{{ error }}</p>
        <div class="mkt-platforms">
          <div v-for="p in platforms" :key="p.key" class="mkt-platform">
            <span class="pico">
              <svg width="46" height="46" viewBox="0 0 24 24" fill="currentColor" v-html="p.icon" />
            </span>
            <h3>{{ p.name }}</h3>
            <p class="req">{{ p.req }}</p>

            <a
              v-if="ready(p.primary.slug)"
              class="mkt-btn primary"
              :href="link(p.primary.slug)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v12M7.5 11l4.5 4.5L16.5 11"/><path d="M4 20h16"/></svg>
              {{ p.primary.text }}
            </a>
            <span v-else class="mkt-btn primary" style="opacity: 0.45; cursor: not-allowed">暂未上传</span>

            <div v-if="p.extra.length" style="display: flex; gap: 8px; width: 100%; margin-top: 8px">
              <a
                v-for="e in p.extra"
                :key="e.slug"
                class="mkt-btn ghost sm"
                :href="link(e.slug)"
                style="flex: 1"
              >
                {{ e.text }}
              </a>
            </div>

            <div class="fmt">{{ p.fmt }}</div>
            <div v-if="meta(p.primary.slug)" class="fmt" style="color: #8fb4f5">
              {{ meta(p.primary.slug) }}
            </div>
          </div>
        </div>

        <div class="mkt-sub-dl">
          <a v-for="s in subLinks" :key="s.text" :href="s.href || link(s.slug!)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7.5 10.5L12 15l4.5-4.5"/><path d="M4 19h16"/></svg>
            {{ s.text }}
          </a>
        </div>

        <p class="mkt-p" style="text-align: center; font-size: 13px; margin-top: 22px; color: #66788f">
          所有文件由 agorain.615mc.cn 统一分发，带单连接限速与并发保护；下载后可用清单里的 SHA256 校验。
        </p>
      </div>
    </section>

    <!-- ==================== 要求与更新 ==================== -->
    <section class="mkt-section tight" style="border-top: 1px solid rgba(255, 255, 255, 0.055)">
      <div class="mkt-wrap">
        <div class="mkt-info-grid">
          <div class="mkt-panel">
            <h3>平台要求</h3>
            <table class="mkt-table">
              <thead>
                <tr><th>端</th><th>要求</th></tr>
              </thead>
              <tbody>
                <tr v-for="r in requirements" :key="r[0]">
                  <td>{{ r[0] }}</td>
                  <td>{{ r[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mkt-panel">
            <h3>装完之后</h3>
            <ol class="mkt-steps">
              <li v-for="s in steps" :key="s[0]"><b>{{ s[0] }}</b>　{{ s[1] }}</li>
            </ol>
            <p style="margin-top: 16px; font-size: 13px">
              扫卡工作站是<strong style="color: #e6eefb">独立程序</strong>，需要扫卡的电脑单独下载；
              客户端与 ClassIsland 不再内置扫卡入口。
            </p>
            <p style="font-size: 13px">
              完整包内含 GPL-3.0 的定制版 ClassIsland，源码随包提供，详见
              <a href="/license" style="color: #9dc0fb">开源许可声明</a>。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 帮助 ==================== -->
    <section class="mkt-section tight">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <h2 class="mkt-h2">装不上、连不通、扫不出卡？</h2>
          <p class="mkt-p" style="max-width: 560px; margin: 0 auto">
            各平台的安装说明、常见报错与排障步骤都写在文档里；也可以直接看部署指南。
          </p>
          <div class="mkt-cta-actions">
            <a class="mkt-btn primary" href="/guide">快速开始</a>
            <a class="mkt-btn ghost" href="/faq">常见问题</a>
            <a class="mkt-btn ghost" href="/deploy">部署指南</a>
          </div>
        </div>
      </div>
    </section>

    </template>

    <MarketingFooter />
  </div>
</template>
