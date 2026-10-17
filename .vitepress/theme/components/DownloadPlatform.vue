<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

/**
 * 分平台下载页（2026-10 改版）。
 *
 * 产品形态：客户端 + 定制版 ClassIsland + 更新器打成一个“完整包”，
 * 每个平台只有一个主按钮；需要单独部署的机器再展开下方的独立安装包。
 * 文件仍由平台下载中心 /api/v4/downloads 统一分发（反多线程 + SHA256）。
 */
const props = defineProps<{ platform: 'windows' | 'linux' | 'macos' }>()

const PLATFORM = 'https://agorain.615mc.cn'
const ENDPOINT = PLATFORM + '/api/v4/downloads'

type Item = {
  slug: string; name: string; version?: string | null; size: number
  updated_at?: string; sha256?: string; note?: string | null; platform?: string
}

type Card = {
  slug: string; icon: string; title: string; desc: string; tag: string
  primary?: boolean; steps?: string[]
}

const CATALOG: Record<string, { title: string; subtitle: string; cards: Card[] }> = {
  windows: {
    title: 'Windows 下载',
    subtitle: 'Windows 10 1809+ / Windows 11 · 推荐使用完整包：客户端 + 定制版 ClassIsland + 更新器',
    cards: [
      {
        slug: 'bundle-win-x64', icon: '🧰', primary: true,
        title: '课堂端完整包（Windows x64）',
        desc: '客户端 + 定制版 ClassIsland + 更新器。一次安装，教室大屏、集控、教学模式、自动更新全部就绪。',
        tag: '推荐 · Windows x64',
        steps: ['下载后运行安装程序（或解压绿色版）', '首次打开按向导登录平台账号', '已装过旧版会保留 data/ 数据'],
      },
      { slug: 'desktop-win-x64-setup', icon: '🖥️', title: '仅客户端（安装版）', desc: '只需要打卡/控制台、不需要 ClassIsland 的办公电脑。', tag: 'Windows x64' },
      { slug: 'desktop-win-x64', icon: '📦', title: '仅客户端（绿色版）', desc: '解压即用，适合机房批量拷贝。', tag: 'Windows x64' },
      { slug: 'classisland-custom-win-x64', icon: '🎛️', title: '仅定制版 ClassIsland', desc: '已单独装过客户端、只补装教室大屏客户端时使用。', tag: 'GPL-3.0 · Windows' },
      { slug: 'scanstation-win-x64', icon: '🖨️', title: '扫卡工作站（独立版）', desc: '扫描仪 / 进纸器批量扫答题卡。客户端与 ClassIsland 已不再内置扫卡入口。', tag: '独立程序 · Windows' },
      { slug: 'android-apk', icon: '📱', title: '移动端 App（Android）', desc: '扫码签到 / 拍照扫卡 / 逐题改分 / 家长中心。', tag: 'Android 8.0+' },
    ],
  },
  linux: {
    title: 'Linux 下载',
    subtitle: 'x64 / arm64 · 需要 X11 桌面 · 完整包内含客户端 + 定制版 ClassIsland + 更新器',
    cards: [
      {
        slug: 'bundle-linux-x64', icon: '🧰', primary: true,
        title: '课堂端完整包（Linux x64）',
        desc: '客户端 + 定制版 ClassIsland + 更新器；自包含运行，不需要另装 .NET。',
        tag: '推荐 · Linux x64',
        steps: ['下载 .deb 双击安装，或解压 tar.gz', '终端运行 AgoraIn（或桌面图标）', '缺少 X11 库时按包内 README 安装依赖'],
      },
      { slug: 'desktop-linux-x64', icon: '🐧', title: '仅客户端（Linux x64）', desc: '自包含，解压运行 ./AgoraIn。', tag: 'Linux x64' },
      { slug: 'classisland-custom-linux-x64', icon: '🎛️', title: '仅定制版 ClassIsland（Linux x64）', desc: '教室大屏客户端，GPL-3.0 开源。', tag: 'GPL-3.0 · Linux' },
      { slug: 'scanstation-linux-x64', icon: '🖨️', title: '扫卡工作站（Linux x64）', desc: '从文件选择图片的扫卡流程；扫描仪取图仅 Windows。', tag: '独立程序 · Linux' },
    ],
  },
  macos: {
    title: 'macOS 下载',
    subtitle: 'macOS 12+ · Apple Silicon 与 Intel 分开 · 完整包内含客户端 + 定制版 ClassIsland + 更新器',
    cards: [
      {
        slug: 'bundle-macos-arm64', icon: '🧰', primary: true,
        title: '课堂端完整包（Apple Silicon）',
        desc: '客户端 + 定制版 ClassIsland + 更新器，拖进「应用程序」即可。',
        tag: '推荐 · M 系列',
        steps: ['下载并打开 .dmg / 解压 tar.gz', '把 AgoraIn.app 拖到「应用程序」', '首次打开若提示未验证开发者：右键 →「打开」'],
      },
      { slug: 'bundle-macos-x64', icon: '🧰', primary: true, title: '课堂端完整包（Intel）', desc: '同上，Intel 芯片版。', tag: '推荐 · Intel' },
      { slug: 'desktop-macos-arm64', icon: '🍎', title: '仅客户端（Apple Silicon）', desc: '自包含 .app，不依赖 .NET。', tag: 'macOS · M 系列' },
      { slug: 'desktop-macos-x64', icon: '🍎', title: '仅客户端（Intel）', desc: '自包含 .app，不依赖 .NET。', tag: 'macOS · Intel' },
      { slug: 'classisland-custom-macos-arm64', icon: '🎛️', title: '仅定制版 ClassIsland（Apple Silicon）', desc: 'GPL-3.0 开源。', tag: 'GPL-3.0 · macOS' },
      { slug: 'classisland-custom-macos-x64', icon: '🎛️', title: '仅定制版 ClassIsland（Intel）', desc: 'GPL-3.0 开源。', tag: 'GPL-3.0 · macOS' },
      { slug: 'scanstation-macos-arm64', icon: '🖨️', title: '扫卡工作站（Apple Silicon）', desc: '独立程序；扫描仪取图仅 Windows。', tag: '独立程序 · macOS' },
    ],
  },
}

const data = ref<Record<string, Item>>({})
const loading = ref(true)
const online = ref(false)
const catalog = computed(() => CATALOG[props.platform])

function sizeText(bytes: number) {
  if (!bytes) return '—'
  const mb = bytes / 1024 / 1024
  return mb >= 1 ? mb.toFixed(1) + ' MB' : (bytes / 1024).toFixed(0) + ' KB'
}
function dateText(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function missing(slug: string) { return online.value && !data.value[slug] }

onMounted(async () => {
  try {
    const res = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(String(res.status))
    const json = (await res.json()) as { items?: Item[] }
    const map: Record<string, Item> = {}
    for (const it of json.items || []) map[it.slug] = it
    data.value = map
    online.value = Object.keys(map).length > 0
  } catch { online.value = false }
  finally { loading.value = false }
})
</script>

<template>
  <div class="platform-download">
    <div class="head">
      <h1>{{ catalog.title }}</h1>
      <p>{{ catalog.subtitle }}</p>
    </div>

    <div class="bundle-grid">
      <div v-for="c in catalog.cards.filter(x => x.primary)" :key="c.slug" class="bundle-card">
        <div class="bundle-badge">推荐</div>
        <div class="bundle-title">{{ c.icon }} {{ c.title }}</div>
        <p class="bundle-desc">{{ c.desc }}</p>
        <div class="facts">
          <span>{{ c.tag }}</span>
          <span v-if="data[c.slug]?.version">v{{ data[c.slug].version }}</span>
          <span v-if="data[c.slug]?.size">{{ sizeText(data[c.slug].size) }}</span>
        </div>
        <a v-if="!missing(c.slug)" class="download-btn" :href="`${PLATFORM}/api/v4/downloads/${c.slug}`">下载完整包</a>
        <span v-else class="download-btn disabled">安装包暂未上传</span>
        <ol v-if="c.steps" class="steps"><li v-for="s in c.steps" :key="s">{{ s }}</li></ol>
      </div>
    </div>

    <h2>单独安装包</h2>
    <div class="card-grid">
      <div v-for="c in catalog.cards.filter(x => !x.primary)" :key="c.slug" class="mini-card">
        <div class="mini-title">{{ c.icon }} {{ c.title }}</div>
        <p>{{ c.desc }}</p>
        <div class="facts">
          <span>{{ c.tag }}</span>
          <span v-if="data[c.slug]?.size">{{ sizeText(data[c.slug].size) }}</span>
          <span v-if="data[c.slug]?.updated_at">更新 {{ dateText(data[c.slug].updated_at) }}</span>
        </div>
        <div class="mini-actions">
          <a v-if="!missing(c.slug)" class="small-btn" :href="`${PLATFORM}/api/v4/downloads/${c.slug}`">下载</a>
          <span v-else class="small-btn disabled">暂未上传</span>
          <a v-if="data[c.slug]?.sha256" class="sha" :href="`${PLATFORM}/api/v4/downloads/${c.slug}`" :title="`SHA256: ${data[c.slug].sha256}`">SHA256</a>
        </div>
      </div>
    </div>

    <p class="status">
      <template v-if="loading">正在读取平台下载中心…</template>
      <template v-else-if="online">大小/版本为实时数据；下载请用浏览器单线程，多线程工具会被限速。SHA256 可在下载后校验。</template>
      <template v-else>平台下载中心暂时不可达，请稍后重试或联系客服。</template>
    </p>
  </div>
</template>

<style scoped>
.platform-download { margin-top: 20px; }
.head h1 { font-size: 30px; margin-bottom: 8px; }
.head p { color: var(--ag-muted); max-width: 780px; line-height: 1.7; }
.bundle-grid { margin: 24px 0 10px; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px; }
.bundle-card { position: relative; padding: 24px; border: 1px solid var(--ag-line); border-radius: 16px; background: linear-gradient(145deg, #f7faff, #fff); box-shadow: 0 10px 30px rgba(40, 80, 160, 0.07); }
.bundle-badge { position: absolute; top: 16px; right: 16px; padding: 4px 10px; border-radius: 999px; background: #4285f4; color: #fff; font-size: 12px; font-weight: 700; }
.bundle-title { font-size: 20px; font-weight: 800; margin-bottom: 10px; }
.bundle-desc { color: var(--ag-muted); line-height: 1.7; min-height: 48px; }
.facts { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0; font-size: 12px; color: var(--ag-muted); }
.facts span { padding: 5px 10px; border-radius: 999px; background: var(--ag-bg-soft); border: 1px solid var(--ag-line); }
.download-btn { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 22px; border-radius: 10px; background: #4285f4; color: #fff; font-weight: 800; text-decoration: none; }
.download-btn:hover { background: #3367d6; }
.download-btn.disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
.steps { margin: 16px 0 0 18px; color: var(--ag-muted); font-size: 13px; line-height: 1.9; }
h2 { margin: 34px 0 14px; font-size: 22px; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
.mini-card { padding: 18px; border: 1px solid var(--ag-line); border-radius: 12px; background: var(--ag-card, #fff); display: flex; flex-direction: column; }
.mini-title { font-weight: 800; margin-bottom: 8px; }
.mini-card p { color: var(--ag-muted); font-size: 13px; line-height: 1.7; flex: 1; }
.mini-actions { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
.small-btn { padding: 8px 16px; border-radius: 8px; border: 1px solid #4285f4; color: #4285f4; text-decoration: none; font-weight: 700; font-size: 13px; }
.small-btn.disabled { border-color: #e5e7eb; color: #9ca3af; }
.sha { font-size: 12px; color: var(--ag-muted); }
.status { margin-top: 20px; color: var(--ag-muted); font-size: 13px; }
</style>
