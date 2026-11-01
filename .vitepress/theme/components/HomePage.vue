<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'
import MarketingFooter from './MarketingFooter.vue'

const ICONS: Record<string, string> = {
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  screen: '<rect x="2.5" y="4" width="19" height="13" rx="2.5"/><path d="M8 21h8M12 17v4"/>',
  scan: '<path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><path d="M4 12h16"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 20c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2"/><path d="M16.5 6.6l1.8 1.8 3.4-3.4"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  cloud: '<path d="M7 18a4 4 0 010-8 5.6 5.6 0 0110.8-1.6A3.6 3.6 0 0118 18z"/><rect x="9.6" y="12.4" width="6" height="4.8" rx="1.2"/>',
  phone: '<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5A2.5 2.5 0 014 20.5z"/>',
  shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.1 8.4-7.5 9.5-4.4-1.1-7.5-4.9-7.5-9.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  spark: '<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/>',
  clock: '<circle cx="12" cy="12" r="8.6"/><path d="M12 7.4V12l3.4 2"/>',
  layers: '<path d="M12 3.4l8 4.2-8 4.2-8-4.2z"/><path d="M4 12l8 4.2 8-4.2"/><path d="M4 16.4l8 4.2 8-4.2"/>',
  camera: '<rect x="2.6" y="6.4" width="13" height="11" rx="2.4"/><path d="M15.6 10.6l5.8-3.2v9.2l-5.8-3.2z"/>',
  key: '<circle cx="8" cy="15" r="3.4"/><path d="M10.4 12.6L20 3M16.4 6.6l2.2 2.2M13.6 9.4l2.2 2.2"/>',
  lock: '<rect x="4.6" y="10.4" width="14.8" height="9.6" rx="2.4"/><path d="M8.4 10.4V8a3.6 3.6 0 017.2 0v2.4"/>',
  server: '<rect x="3.4" y="4.2" width="17.2" height="6" rx="2"/><rect x="3.4" y="13.8" width="17.2" height="6" rx="2"/><path d="M7 7.2h.01M7 16.8h.01"/>',
  board: '<rect x="2.8" y="4" width="18.4" height="12.4" rx="2.2"/><path d="M7 20.4l2.6-4M17 20.4l-2.6-4"/>',
}

const metrics = [
  { n: '161', u: '项', t: '自动化测试全绿' },
  { n: '171', u: '个', t: '/api/v4 接口端点' },
  { n: '6 + 5', u: '', t: '题型 / 答题卡纸型' },
  { n: '5', u: '端', t: '同一套账号与数据' },
]

type Point = { t: string; d: string }
type Block = {
  key: string
  tag: string
  title: string
  desc: string
  points: Point[]
  art: 'win' | 'paper' | 'phone' | 'region'
  src?: string
  path?: string
  alt?: string
  chips?: string[]
}

const blocks: Block[] = [
  {
    key: 'daily',
    tag: '# 课堂日常',
    title: '签到、点名、课时、积分、值日、座位、课表，一个后台全管',
    desc:
      '教师生成签到码，学生扫码或输码，签到经实时通道推上班级大屏，前三名金 / 银 / 铜高亮；课时划消留流水，点名支持随机加权，换座拖拽即生效。这些动作都在同一个后台里，数据落到同一张表。',
    points: [
      { t: '扫码签到', d: '签到码带教室、科目、密码与有效期，扫码即上屏' },
      { t: '课时划消', d: '账户 + 流水，谁欠课、欠多少一眼看清' },
      { t: '随机点名', d: '近期没点过的优先，答到 / 缺勤 / 迟到可联动积分' },
      { t: '积分留痕', d: '手工修正必须填原因，改不掉，可回溯到具体一次操作' },
    ],
    art: 'win',
    src: '/shots/dashboard.webp',
    path: '/dashboard',
    alt: 'AgoraIn 管理后台仪表盘',
    chips: ['实时上屏 · SignalR'],
  },
  {
    key: 'exam',
    tag: '# 考试与阅卷',
    title: '出卷到成绩统计，一条闭环跑完',
    desc:
      '六种题型出卷，可上传 docx / pdf 由 AI 自动识题、补答案；答题卡支持 A4 / B4 / 8K / 16K / A3 五种纸型，服务端精确分页，多页答卷自动归并且不串页。手机拍照、高拍仪、带进纸器的扫描仪都能扫卡，扫完进后台识别队列排队处理。',
    points: [
      { t: '五种纸型', d: '每页独立定位标记 + 页码标定框 + 页脚二维码' },
      { t: '批量生成', d: '按班级一人一张带条码，扫完自动归属到人' },
      { t: '本机判分', d: '客观题涂卡与填空手写本地识别，零 token' },
      { t: 'AI 辅助批改', d: '主观题按评分要点打分，教师复判确认后才计分' },
    ],
    art: 'paper',
    src: '/shots/answer-sheet.webp',
    alt: 'AgoraIn 答题卡',
    chips: ['客观题 0 token', '多页自动归并'],
  },
  {
    key: 'monitor',
    tag: '# 班级监视',
    title: '屏幕和摄像头，两路都在',
    desc:
      '教室端不需要额外装直播软件——桌面客户端自带 ffmpeg，屏幕与摄像头各自推流到服务端，再分发给后台与小程序。屏幕上正在放什么、教室里有没有人，在办公室的浏览器里就能看到。',
    points: [
      { t: '双路推流', d: '屏幕 + 摄像头同时在线，互不干扰' },
      { t: '三层鉴权', d: '登录 + devices.view + HttpOnly 直播 Cookie' },
      { t: '切片回放', d: '15 分钟一段，加密落远程磁盘，保留三天' },
      { t: '按班查看', d: '设备树按年级、班级、在线状态组织' },
    ],
    art: 'win',
    src: '/shots/monitoring.webp',
    path: '/monitoring',
    alt: '班级监视双路画面',
    chips: ['屏幕 · 摄像头双通道'],
  },
  {
    key: 'parent',
    tag: '# 家校沟通',
    title: '家长端与教师端，同一套数据',
    desc:
      '班主任按班级批量生成六位邀请码，家长输入即绑定孩子，支持多孩切换。通知带已读回执，成绩概览受隐私开关控制（默认关闭），值日、班级资源、与老师留言都在一个入口里。',
    points: [
      { t: '已读回执', d: '谁没看到一目了然，不用在群里反复问' },
      { t: '隐私开关', d: '成绩默认不对家长开放，学校开了才显示' },
      { t: '留言留痕', d: '沟通记录可追溯，不再依赖家长群刷屏' },
      { t: '双端对等', d: '微信小程序与移动端 App 功能一致' },
    ],
    art: 'phone',
    src: '/shots/miniprogram.webp',
    alt: '家长端小程序工作台',
    chips: [],
  },
  {
    key: 'platform',
    tag: '# 平台运营',
    title: '一套服务端，服务多所机构',
    desc:
      '机构自助注册后凭激活码开通，未激活前成员无法登录、受控功能停用；班级、学生、打卡、课表、试卷、成绩全部按区域过滤。登录名带区域后缀，一台一体机知道自己该拉哪个区的数据。',
    points: [
      { t: '多区域隔离', d: '数据按区域过滤，权限边界在服务端而不是界面' },
      { t: '激活码与额度', d: 'AGRR- 开通机构、AGRT- 充值平台 AI 额度' },
      { t: '认证加密', d: '远程存储用 AES-256-GCM，被篡改的文件读取即拒绝' },
      { t: '图像外发开关', d: '关闭后不向任何第三方发送作答图像' },
    ],
    art: 'region',
  },
]

const devices = [
  { icon: 'board', t: '教室一体机', d: 'Avalonia 桌面端，大屏 / 控制 / 教学三模式，断网也能打卡' },
  { icon: 'book', t: 'Web 管理面板', d: '20 个功能页，桌面与手机两套界面' },
  { icon: 'phone', t: '移动端 App', d: '学生扫码签到、教师拍照扫卡与逐题改分' },
  { icon: 'spark', t: '家长小程序', d: '通知、成绩、值日、留言，与 App 对等' },
  { icon: 'server', t: '服务端', d: '多租户、SignalR、本地识别、插件宿主' },
]

const security = [
  {
    icon: 'lock',
    t: '本地优先',
    d: '桌面端断网照常打卡；客观题涂卡与填空手写在本机识别，不上传、不花钱。',
  },
  {
    icon: 'shield',
    t: '认证加密',
    d: '答题卡原图与教学资料以 AES-256-GCM 加密后上传远程磁盘，按区域分目录。',
  },
  {
    icon: 'key',
    t: '隐私可控',
    d: 'AI 图像外发总开关、成绩默认不对家长开放、未成年人信息保护专章。',
  },
]

const nexusPoints = [
  ['一个进程', '外壳与后台服务跑在一起，不再有两个托盘图标、两次开机自启。'],
  ['一份账号', '两个程序读写同一个 account.json，登录、换区、退出只做一次。'],
  ['一个顶栏', '课表、倒计时、提醒常驻桌面最上面一条，不占窗口也不挡板书。'],
]
</script>

<template>
  <div class="mkt">
    <!-- ==================== HERO ==================== -->
    <section class="mkt-hero">
      <div class="mkt-wrap mkt-hero-grid">
        <div class="mkt-hero-text">
          <span class="mkt-kicker"><i class="dot" />v4.5.4 已发布 · 一体机只留一个程序</span>
          <h1 class="mkt-h1">把课堂的琐事，<br /><span class="grad">收进一块屏</span></h1>
          <p class="mkt-hero-lead">
            签到、点名、课时、积分、值日、座位、课表、电子答题卡与阅卷、家校沟通——AgoraIn
            把这些收进一套系统。桌面端断网可用，识别在本机完成，数据按机构隔离。
          </p>
          <div class="mkt-hero-actions">
            <a class="mkt-btn primary" href="/download">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v12M7.5 11l4.5 4.5L16.5 11"/><path d="M4 20h16"/></svg>
              立即下载
            </a>
            <a class="mkt-btn ghost" href="/guide">查看文档</a>
            <a class="mkt-btn ghost" href="https://agorain.615mc.cn" target="_blank" rel="noopener">进入平台</a>
          </div>
          <div class="mkt-hero-meta">
            <span>Windows 10 / 11</span>
            <span>Linux x64 · arm64</span>
            <span>macOS 12+</span>
            <span>Android 8+</span>
            <span>微信小程序</span>
          </div>
        </div>

        <div class="mkt-stage">
          <div class="mkt-stage-glow" />
          <div class="mkt-shot side b"><img src="/shots/points.webp" alt="积分管理" /></div>
          <div class="mkt-shot main"><img src="/shots/dashboard.webp" alt="AgoraIn 管理后台" /></div>
          <div class="mkt-shot side a"><img src="/shots/monitoring.webp" alt="班级监视" /></div>
          <span class="mkt-chip c1"><i class="dot" />客观题本机判分 · 零 token</span>
          <span class="mkt-chip c2"><i class="dot" />按机构隔离 · 加密存储</span>
        </div>
      </div>
    </section>

    <!-- ==================== 数据条 ==================== -->
    <section class="mkt-metrics">
      <div class="mkt-metrics-inner">
        <div v-for="m in metrics" :key="m.t" class="mkt-metric">
          <b><em>{{ m.n }}</em>{{ m.u }}</b>
          <span>{{ m.t }}</span>
        </div>
      </div>
    </section>

    <!-- ==================== 能力总览 ==================== -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <div class="mkt-head">
          <span class="mkt-kicker"><i class="dot" />产品能力</span>
          <h2 class="mkt-h2">一所学校要跑的系统，<span class="thin">其实是一件事</span></h2>
          <p class="mkt-p">
            面向中小学、培训机构与托管班：教师、班主任、教务、家长与平台运营方各有一块自己的界面，
            权限边界在服务端。下面是它实际长什么样。
          </p>
        </div>

        <div
          v-for="(b, i) in blocks"
          :key="b.key"
          class="mkt-block"
          :class="{ flip: i % 2 === 1 }"
        >
          <div class="mkt-block-text">
            <span class="mkt-tag">{{ b.tag }}</span>
            <h3 class="mkt-h3">{{ b.title }}</h3>
            <p class="mkt-p">{{ b.desc }}</p>
            <div class="mkt-block-points">
              <div v-for="p in b.points" :key="p.t" class="mkt-mini">
                <div class="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
                  {{ p.t }}
                </div>
                <div class="d">{{ p.d }}</div>
              </div>
            </div>
          </div>

          <div class="mkt-block-art">
            <!-- 窗口截图 -->
            <div v-if="b.art === 'win'" class="mkt-win">
              <div class="mkt-win-bar">
                <i /><i /><i />
                <span class="path">{{ b.path }}</span>
              </div>
              <img :src="b.src" :alt="b.alt" loading="lazy" />
            </div>

            <!-- 答题卡纸 -->
            <div v-else-if="b.art === 'paper'" class="mkt-paper">
              <img :src="b.src" :alt="b.alt" loading="lazy" />
            </div>

            <!-- 手机 -->
            <div v-else-if="b.art === 'phone'" class="mkt-phone">
              <div class="mkt-phone-inner">
                <img :src="b.src" :alt="b.alt" loading="lazy" />
              </div>
            </div>

            <!-- 区域隔离示意 -->
            <div v-else class="mkt-region">
              <div class="mkt-region-node primary">
                <span class="n">主区域</span>
                <span class="u">manager</span>
              </div>
              <div class="mkt-region-line" />
              <div class="mkt-region-row">
                <div class="mkt-region-node"><span class="n">A 机构</span><span class="u">user@regionA</span></div>
                <div class="mkt-region-node"><span class="n">B 机构</span><span class="u">user@regionB</span></div>
              </div>
              <p class="mkt-region-note">
                班级 · 学生 · 打卡 · 课表 · 试卷 · 成绩<br />全部按区域过滤
              </p>
            </div>

            <span v-if="b.chips && b.chips[0]" class="mkt-art-chip i1">{{ b.chips[0] }}</span>
            <span v-if="b.chips && b.chips[1]" class="mkt-art-chip i2">{{ b.chips[1] }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 多端 ==================== -->
    <section class="mkt-section tight">
      <div class="mkt-wrap">
        <div class="mkt-head">
          <span class="mkt-kicker"><i class="dot" />多端协同</span>
          <h2 class="mkt-h2">同一份数据，五种形态</h2>
          <p class="mkt-p">
            教室大屏、老师电脑、管理后台、手机 App 与家长小程序共享同一套账号与数据，改一处，处处生效。
          </p>
        </div>
        <div class="mkt-devices">
          <div v-for="d in devices" :key="d.t" class="mkt-device">
            <span class="ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" v-html="ICONS[d.icon]" />
            </span>
            <h4>{{ d.t }}</h4>
            <p>{{ d.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Nexus 高亮 ==================== -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <div class="mkt-spotlight">
          <div class="mkt-spotlight-grid">
            <div>
              <span class="mkt-kicker"><i class="dot" />v4.5.4 新增</span>
              <h2 class="mkt-h2" style="margin-top: 18px">一体机上，只留一个程序</h2>
              <p class="mkt-p">
                AgoraIn Nexus 把 AgoraIn 的后台服务与 ClassIsland 的课表外壳合成单进程：启动先挂后台，
                再把顶栏拉起来，三秒后自动打开工作台。两个程序从此认同一份账号。
              </p>
              <ul class="mkt-checklist">
                <li v-for="p in nexusPoints" :key="p[0]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
                  <b>{{ p[0] }}</b>　{{ p[1] }}
                </li>
              </ul>
            </div>
            <div class="mkt-win">
              <div class="mkt-win-bar">
                <i /><i /><i />
                <span class="path">桌面顶端 · 常驻顶栏</span>
              </div>
              <img src="/shots/nexus-desktop.webp" alt="AgoraIn Nexus 常驻桌面顶栏" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 安全 ==================== -->
    <section class="mkt-section tight">
      <div class="mkt-wrap">
        <div class="mkt-head">
          <span class="mkt-kicker"><i class="dot" />隐私与合规</span>
          <h2 class="mkt-h2">数据这条线，能说清楚</h2>
          <p class="mkt-p">
            教室里的数据不该成为负担。采集范围、存储位置、外发开关，都有明确开关与文档对应。
          </p>
        </div>
        <div class="mkt-grid3">
          <div v-for="s in security" :key="s.t" class="mkt-card">
            <span class="ico">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" v-html="ICONS[s.icon]" />
            </span>
            <h4>{{ s.t }}</h4>
            <p>{{ s.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 宣传片 ==================== -->
    <section class="mkt-section" id="promo">
      <div class="mkt-wrap">
        <div class="mkt-head">
          <span class="mkt-kicker"><i class="dot" />宣传片</span>
          <h2 class="mkt-h2">六十秒，看它怎么工作</h2>
          <p class="mkt-p">横屏用于官网、大屏与视频平台，竖屏用于手机与短视频，同一支片子两种画幅。</p>
        </div>
        <div class="mkt-video-wrap">
          <VideoPlayer />
        </div>
      </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="mkt-section tight">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <h2 class="mkt-h2">把时间还给课堂</h2>
          <p class="mkt-p" style="max-width: 560px; margin: 0 auto">
            机构可自助注册，凭激活码开通；也可以自配 AI 密钥，不受平台额度限制。需要演示或商业授权，欢迎联系我们。
          </p>
          <div class="mkt-cta-actions">
            <a class="mkt-btn primary" href="/download">下载中心</a>
            <a class="mkt-btn ghost" href="/guide">快速开始</a>
            <a class="mkt-btn ghost" href="/archive/">旧版文档</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== 页脚 ==================== -->
    <MarketingFooter />
  </div>
</template>
