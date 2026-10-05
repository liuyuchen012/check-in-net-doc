<script setup lang="ts">
import VideoPlayer from './VideoPlayer.vue'

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
}

const features = [
  {
    key: 'class',
    kicker: '课堂日常',
    title: '签到、点名、课时、积分、值日、座位、课表，一个后台全管',
    desc:
      '教师生成签到码，学生在手机或一体机扫码，签到通过实时通道推送到班级大屏，前三名金 / 银 / 铜高亮；课时划消留流水、点名支持随机加权、换座拖拽即生效，课表可导入导出并一键推送到教室一体机。',
    points: [
      '扫码签到实时上屏，支持签到密码与有效期',
      '课时账户 + 划消流水，谁欠课一目了然',
      '点名 / 积分 / 值日 / 座位 / 课表 全部留痕可查',
      '课表支持 ClassIsland 档案导入导出与推送',
    ],
    tags: ['扫码签到', '课时划消', '随机点名', '积分榜', '值日轮换', '拖拽调座', '课程表'],
    art: '/video/still-checkin.jpg',
    icon: 'screen',
  },
  {
    key: 'exam',
    kicker: '考试与阅卷',
    title: '出卷到成绩统计，一条闭环跑完',
    desc:
      '六种题型出卷，可上传 docx / pdf 由 AI 自动识题、补答案；答题卡支持 A4 / B4 / 8K / 16K / A3 五种纸型，服务端精确分页，多页答卷自动归并且不串页。拍照扫卡进入后台识别队列，客观题在本机判分，主观题由多模态模型按评分要点批改，教师复判后才计入成绩。',
    points: [
      '客观题涂卡与填空手写本地识别，零 token 成本',
      '主观题 AI 批改 + 人工复判，改分留痕可追溯',
      '批量生成一人一张带条码的答题卡',
      '成绩按总分与得分率分析，CSV 一键导出',
    ],
    tags: ['6 种题型', '5 种纸型', '服务端精确分页', '扫卡队列', '本地判分', 'AI 批改', '成绩统计'],
    art: '/video/still-exam.jpg',
    icon: 'scan',
  },
  {
    key: 'parent',
    kicker: '家校沟通',
    title: '家长端小程序与 App 功能对等，消息不再刷屏家长群',
    desc:
      '班主任按班级批量生成 6 位邀请码，家长输入即绑定孩子，支持多孩切换。通知带已读回执，成绩概览受隐私开关控制（默认关闭），值日、班级资源、与老师留言都在一个入口里。',
    points: [
      '通知已读回执，谁没看到一目了然',
      '成绩概览默认关闭，由学校按需开启',
      '留言沟通留痕，不再依赖家长群刷屏',
      '微信小程序与移动端 App 功能对等',
    ],
    tags: ['已读回执', '成绩隐私开关', '值日查看', '留言沟通', '多孩绑定'],
    art: '/video/still-parent.jpg',
    icon: 'users',
  },
  {
    key: 'platform',
    kicker: '平台运营',
    title: '一套服务端服务多所机构，数据按区域隔离',
    desc:
      '机构自助注册后凭激活码开通，未激活前成员无法登录、受控功能停用；班级、学生、打卡、课表、试卷、成绩全部按区域过滤。答题卡原图与教学资料经 AES-256-GCM 认证加密后上传远程磁盘，服务器只保留按需缓存。',
    points: [
      '多区域租户隔离，登录名支持 用户名@区域',
      '区域功能开关与账号启停由主区域统管',
      'AGRR- 激活码开通、AGRT- 额度码充值平台 AI',
      'AI 图像外发开关：关闭后不向第三方发送任何作答图像',
    ],
    tags: ['多区域隔离', '激活码', 'AI 额度', '加密远程存储', '图像外发开关'],
    art: '/video/still-platform.jpg',
    icon: 'shield',
  },
]

const stats = [
  { n: '171', t: '个 /api/v4 接口（19 个控制器）' },
  { n: '161', t: '项自动化测试全绿' },
  { n: '6 + 5', t: '种题型 / 答题卡纸型' },
  { n: '7', t: '项区域功能开关' },
]

const devices = [
  { icon: 'screen', t: '教室一体机 / 桌面端', d: '大屏签到、控制与教师三模式，断网也可离线打卡' },
  { icon: 'book', t: 'Web 管理面板', d: '20 个功能页：班级、试卷、答题卡、阅卷、成绩、区域' },
  { icon: 'phone', t: '移动端 App', d: '学生扫码签到、教师拍照扫卡与逐题改分、家长中心' },
  { icon: 'spark', t: '家长端小程序', d: '通知、成绩、值日、留言，与 App 功能对等' },
]

const pains = [
  ['点名签到靠喊、数据靠补', '二维码扫码签到，实时上屏并自动落库'],
  ['课时划消靠纸笔', '课时账户 + 划消流水，谁欠课一目了然'],
  ['考试批改一张张翻', '扫卡自动判分，AI 批改 + 人工复判留痕'],
  ['家长群里消息刷屏', '家长端通知带已读回执，沟通留痕'],
  ['数据散落、怕不合规', '按机构隔离、加密存储、图像外发可控'],
]
</script>

<template>
  <div class="ag-home">
    <!-- Hero -->
    <section class="ag-hero">
      <div class="ag-hero-inner">
        <div>
          <span class="ag-kicker"><span class="dot" /> AgoraIn v4.0 · 全量重构</span>
          <h1>课堂签到与教学管理<br /><span class="grad">一体化平台</span></h1>
          <p class="lead">
            签到、点名、课时、积分、值日、座位、课表、电子答题卡与 AI 阅卷、家校沟通 —— 一套系统收进一间教室，也管好一所学校。
            桌面端断网可用，识别在本机完成，数据按机构隔离。
          </p>
          <div class="ag-hero-actions">
            <a class="ag-btn primary" href="/download">下载与试用</a>
            <a class="ag-btn ghost" href="/features">浏览功能</a>
            <a class="ag-btn ghost" href="https://agorain.615mc.cn" target="_blank" rel="noopener">进入平台</a>
          </div>
          <div class="ag-hero-tags">
            <span class="ag-pill">服务端</span>
            <span class="ag-pill">桌面端</span>
            <span class="ag-pill">Web 管理面板</span>
            <span class="ag-pill">移动端 App</span>
            <span class="ag-pill">家长小程序</span>
          </div>
        </div>
        <div class="ag-hero-visual">
          <VideoPlayer :tabs="false" label="播放 62 秒宣传片" meta="横屏 1080P · 竖屏版见宣传片页" />
          <span class="ag-float-chip a"><span class="ico">⚡</span> 客观题本机判分 · 零 token</span>
          <span class="ag-float-chip b"><span class="ico">🔒</span> AES-256-GCM 加密存储</span>
        </div>
      </div>
    </section>

    <!-- 痛点对照 -->
    <section class="ag-strip">
      <div class="ag-strip-inner">
        <template v-for="(p, i) in pains" :key="p[0]">
          <span>{{ p[0] }}</span>
          <span class="sep">→</span>
          <strong style="color: var(--ag-ink-2)">{{ p[1] }}</strong>
          <span v-if="i < pains.length - 1" class="sep">·</span>
        </template>
      </div>
    </section>

    <!-- 四大板块 -->
    <section class="ag-section">
      <div class="ag-section-head center">
        <span class="ag-kicker"><span class="dot" />产品能力</span>
        <h2 class="ag-h2">从课堂日常到考试闭环，一套系统全部覆盖</h2>
        <p class="ag-p">
          面向中小学、培训机构与托管班；教师、班主任、教务、家长与平台运营方各有一块属于自己的界面，权限边界在服务端。
        </p>
      </div>

      <div
        v-for="(f, i) in features"
        :key="f.key"
        class="ag-feature-row"
        :class="{ flip: i % 2 === 1 }"
      >
        <div class="ag-fr-text">
          <span class="ag-kicker"><span class="dot" />{{ f.kicker }}</span>
          <h3 class="ag-h2" style="font-size: 30px">{{ f.title }}</h3>
          <p class="ag-p">{{ f.desc }}</p>
          <ul class="ag-list">
            <li v-for="p in f.points" :key="p">{{ p }}</li>
          </ul>
          <div class="ag-fr-tags">
            <span v-for="t in f.tags" :key="t" class="ag-pill">{{ t }}</span>
          </div>
        </div>
        <div class="ag-fr-art">
          <img :src="f.art" :alt="f.kicker" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- 宣传片 -->
    <section class="ag-section tight" id="promo">
      <div class="ag-section-head center">
        <span class="ag-kicker"><span class="dot" />宣传片</span>
        <h2 class="ag-h2">62 秒看懂 AgoraIn v4</h2>
        <p class="ag-p">横屏用于官网、大屏与视频平台，竖屏用于手机与短视频平台，同一支片子两种画幅。</p>
      </div>
      <VideoPlayer />
    </section>

    <!-- 数据 -->
    <section class="ag-stats">
      <div class="ag-stats-inner">
        <div v-for="s in stats" :key="s.t" class="ag-stat">
          <b>{{ s.n }}</b>
          <span>{{ s.t }}</span>
        </div>
      </div>
    </section>

    <!-- 多端形态 -->
    <section class="ag-section">
      <div class="ag-section-head center">
        <span class="ag-kicker"><span class="dot" />多端协同</span>
        <h2 class="ag-h2">同一份数据，五种形态</h2>
        <p class="ag-p">教室大屏、老师电脑、管理后台、手机 App 与家长小程序共享同一套账号与数据。</p>
      </div>
      <div class="ag-grid c4">
        <div v-for="d in devices" :key="d.t" class="ag-card">
          <span class="ag-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" v-html="ICONS[d.icon]" />
          </span>
          <h3 class="ag-h3" style="margin-top: 16px">{{ d.t }}</h3>
          <p class="ag-p" style="font-size: 15px">{{ d.d }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ag-cta">
      <div class="ag-cta-box">
        <div>
          <h2 class="ag-h2" style="margin-top: 0">把时间还给课堂</h2>
          <p class="ag-p" style="max-width: 520px">
            机构可自助注册，凭激活码开通；也可以自配 AI 密钥，不受平台额度限制。需要演示或商业授权，欢迎联系我们。
          </p>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 14px">
          <a class="ag-btn primary" href="/download">下载中心</a>
          <a class="ag-btn ghost" href="/guide">快速开始</a>
          <a class="ag-btn ghost" href="/video">宣传片</a>
        </div>
      </div>
    </section>
  </div>
</template>
