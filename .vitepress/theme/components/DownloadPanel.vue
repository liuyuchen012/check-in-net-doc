<script setup lang="ts">
import { onMounted, ref } from 'vue'

/** 平台下载中心基址（安装包统一由 agorain.615mc.cn 分发，带反多线程限速） */
const PLATFORM = 'https://agorain.615mc.cn'
const ENDPOINT = PLATFORM + '/api/v4/downloads'

type Item = {
  slug: string
  name: string
  version?: string | null
  size: number
  updated_at?: string
  url: string
  note?: string | null
  platform?: string
}

const CATALOG: Array<{ slug: string; icon: string; title: string; desc: string; tag: string }> = [
  {
    slug: 'desktop-win-x64-setup',
    icon: '🖥️',
    title: '桌面端 · Windows 安装版',
    desc: '推荐：双击安装，自动建快捷方式，可在「应用和功能」里卸载 · 三模式 + 扫卡工作站（扫描仪 / 进纸器批量 / 作文格纸）',
    tag: 'Windows 10 1809+',
  },
  {
    slug: 'desktop-win-x64',
    icon: '📦',
    title: '桌面端 · Windows 绿色版',
    desc: '解压即用、免安装（适合机房批量拷贝 / U 盘带走）· 功能与安装版一致，含进纸器批量扫描',
    tag: 'Windows 10 1809+',
  },
  {
    slug: 'desktop-linux-x64',
    icon: '🐧',
    title: '桌面端 · Linux',
    desc: '解压运行 ./AgoraIn（自包含，已内置中文字体）· 需 X11 桌面；扫描仪与内嵌网页面板为 Windows 专属',
    tag: 'Linux x64',
  },
  {
    slug: 'desktop-macos-arm64',
    icon: '🍎',
    title: '桌面端 · macOS（Apple Silicon）',
    desc: '把 AgoraIn.app 拖进「应用程序」· 未做 Apple 签名，首次打开需右键 →「打开」',
    tag: 'macOS · M 系列',
  },
  {
    slug: 'desktop-macos-x64',
    icon: '🍎',
    title: '桌面端 · macOS（Intel）',
    desc: '同上，Intel 芯片版 · 未做 Apple 签名，首次打开需右键 →「打开」',
    tag: 'macOS · Intel',
  },
  {
    slug: 'android-apk',
    icon: '📱',
    title: '移动端 App（Android）',
    desc: '.NET MAUI · 扫码签到 / 拍照扫卡 / 逐题改分 / 家长中心',
    tag: 'Android 8.0+',
  },
  {
    slug: 'classisland-plugin',
    icon: '🧩',
    title: '一体机插件（ClassIsland）',
    desc: '教室一体机接收教师呼叫（置顶弹窗 + 语音朗读）与课表同步',
    tag: 'Windows 一体机',
  },
  {
    slug: 'classisland-custom-win-x64',
    icon: '🎛️',
    title: '定制版 ClassIsland（AgoraIn 集控客户端）',
    desc: '内置 AgoraIn 集控客户端：接收通知 / 语音播报 / 锁屏 / 电源控制 / 课表推送与呼叫提醒 · 解压即用，无需装 .NET · GPL-3.0 开源',
    tag: 'Windows 教室一体机',
  },
  {
    slug: 'classisland-management-plugin',
    icon: '🔌',
    title: '集控插件包（服务端 · GPL-3.0）',
    desc: 'AgoraIn 服务端插件：把 15 类集控指令（通知 / 播报 / 锁屏 / 电源 / 应用控制 / 档案推送 / 日志上传 / 设置下发）接到平台 · 在「教学模式 → 插件」页上传安装',
    tag: '服务端插件 · .agp',
  },
]

const live = ref<Record<string, Item>>({})
const online = ref(false)
const loading = ref(true)

function sizeText(bytes: number) {
  if (!bytes) return '—'
  const mb = bytes / 1024 / 1024
  return mb >= 1 ? mb.toFixed(1) + ' MB' : (bytes / 1024).toFixed(0) + ' KB'
}

/** 平台可达但清单里没有这个 slug：说明安装包还没上传，按钮不要误导点击 */
function missing(slug: string) {
  return online.value && !live.value[slug]
}

function dateText(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

onMounted(async () => {
  try {
    const res = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(String(res.status))
    const data = (await res.json()) as { items?: Item[] }
    const map: Record<string, Item> = {}
    for (const it of data.items || []) map[it.slug] = it
    live.value = map
    online.value = Object.keys(map).length > 0
  } catch {
    online.value = false
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="ag-dl-panel">
    <div class="ag-grid c2">
      <div v-for="c in CATALOG" :key="c.slug" class="ag-card ag-dl-card">
        <div class="ag-dl-head">
          <span class="ag-icon">{{ c.icon }}</span>
          <div>
            <div class="ag-h3" style="margin: 0">{{ c.title }}</div>
            <div class="ag-dl-meta">{{ c.desc }}</div>
          </div>
        </div>

        <div class="ag-dl-facts">
          <span>{{ c.tag }}</span>
          <span v-if="live[c.slug]?.version">版本 {{ live[c.slug].version }}</span>
          <span v-if="live[c.slug]?.size">{{ sizeText(live[c.slug].size) }}</span>
          <span v-if="live[c.slug]?.updated_at">更新 {{ dateText(live[c.slug].updated_at) }}</span>
        </div>

        <div class="ag-dl-links">
          <a
            v-if="!missing(c.slug)"
            class="ag-btn primary ag-dl-btn"
            :href="`${PLATFORM}/api/v4/downloads/${c.slug}`"
          >
            下载安装包
          </a>
          <span v-else class="ag-btn ghost ag-dl-btn is-off">安装包暂未上传</span>
          <a class="ag-btn ghost ag-dl-btn" href="/guide">安装说明</a>
        </div>
      </div>
    </div>

    <p class="ag-dl-status">
      <template v-if="loading">正在读取平台下载中心…</template>
      <template v-else-if="online">
        已连接 <a :href="ENDPOINT" target="_blank" rel="noopener">平台下载中心</a>，大小与版本为实时数据。
        <span v-if="CATALOG.some((c) => !live[c.slug])">暂未上传的安装包会显示为灰态，上传后自动出现。</span>
      </template>
      <template v-else>
        下载由 <a :href="PLATFORM" target="_blank" rel="noopener">agorain.615mc.cn</a> 统一分发；
        若平台暂时不可达，请稍后重试或联系客服获取安装包。
      </template>
    </p>
  </div>
</template>

<style scoped>
.ag-dl-panel { margin-top: 28px; }
.ag-dl-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ag-muted);
}
.ag-dl-facts span {
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--ag-bg-soft);
  border: 1px solid var(--ag-line);
}
.ag-dl-btn { height: 46px; padding: 0 22px; font-size: 15px; }
.ag-dl-btn.is-off {
  cursor: not-allowed;
  color: var(--ag-muted) !important;
  background: var(--ag-bg-soft);
  box-shadow: none;
  opacity: 0.85;
}
.ag-dl-status {
  margin-top: 18px;
  font-size: 14px;
  color: var(--ag-muted);
}
</style>
