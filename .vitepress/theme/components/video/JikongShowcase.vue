<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { faviconSvg } from './windows'

/* ================= 演播状态 ================= */
const cursor = ref({ x: 0, y: 0, visible: false, pressed: false })
const sub = ref('')
const subKey = ref(0)
const zoomed = ref('')
const mode = ref<'screen' | 'control'>('screen')     // 大屏模式 / 控制模式
const nav = ref('hours')                              // 控制中心左侧导航
const typed = ref<Record<string, string>>({ name: '', url: '', user: '', pass: '', lurl: '', luser: '', lpass: '' })
const connected = ref(false)                          // 集控平台已连接
const consoleOpen = ref(false)                        // 远程控制台
const loggedIn = ref(false)                           // 控制台已登录
const tab = ref('dash')                               // 控制台 Tab
const showLogo = ref(false)                           // 结尾 Logo
const logoFreeze = ref(false)                         // Logo 定格

let timers: number[] = []
let intervals: number[] = []

/* ================= 工具函数 ================= */
const setSub = (t: string) => { sub.value = t; subKey.value++ }
const after = (sec: number, fn: () => void) => { timers.push(window.setTimeout(fn, sec * 1000)) }

function moveTo(sel: string) {
  const el = document.querySelector(sel) as HTMLElement | null
  if (!el) return
  const r = el.getBoundingClientRect()
  cursor.value.visible = true
  cursor.value.pressed = false
  cursor.value.x = r.left + r.width / 2
  cursor.value.y = r.top + r.height / 2
}

function zoom(sel: string) { zoomed.value = sel; after(0.42, () => { zoomed.value = '' }) }

// 点击步骤：延迟等待目标渲染 → 移动鼠标 → 按下 → 目标放大 → 松开 → 恢复
function clickStep(sel: string, text: string, onHit?: () => void, delay = 0) {
  after(delay, () => {
    moveTo(sel)
    setSub(text)
    after(0.7, () => {
      cursor.value.pressed = true
      zoom(sel)
      onHit?.()
      after(0.32, () => { cursor.value.pressed = false })
    })
  })
}

function typeInto(field: string, text: string) {
  let i = 0
  const iv = window.setInterval(() => {
    i++
    typed.value[field] = text.slice(0, i)
    if (i >= text.length) window.clearInterval(iv)
  }, 42)
  intervals.push(iv)
}

function reset() {
  timers.forEach((t) => window.clearTimeout(t))
  intervals.forEach((i) => window.clearInterval(i))
  timers = []; intervals = []
  mode.value = 'screen'; nav.value = 'hours'; connected.value = false
  consoleOpen.value = false; loggedIn.value = false; tab.value = 'dash'
  typed.value = { name: '', url: '', user: '', pass: '', lurl: '', luser: '', lpass: '' }
  zoomed.value = ''; showLogo.value = false; logoFreeze.value = false
  cursor.value = { x: 0, y: 0, visible: false, pressed: false }
}

/* ================= 演播时间轴 ================= */
function play() {
  reset()
  setSub('集控平台 · 全局掌控')

  // delay 需覆盖前一步"移动+按下+松开"（约 1.2s），并等目标元素渲染完成
  clickStep('#mode-combo', '一键切换 控制模式', () => { mode.value = 'control' }, 0)
  clickStep('#nav-platforms', '进入 集控平台列表', () => { nav.value = 'platforms' }, 1.6)
  clickStep('#f-name', '填写平台名称', () => typeInto('name', '集控平台'), 3.0)
  clickStep('#f-url', '指定服务器地址', () => typeInto('url', 'http://192.168.1.100:5250'), 4.4)
  clickStep('#f-user', '管理员账号', () => typeInto('user', 'admin'), 5.8)
  clickStep('#f-pass', '输入连接密码', () => typeInto('pass', '••••••••'), 7.2)
  clickStep('#btn-connect', '连接并加入！', () => { connected.value = true }, 8.6)
  clickStep('#platform-item', '连接成功 ✓', () => {}, 10.0)
  clickStep('#btn-open', '打开远程控制台', () => { consoleOpen.value = true }, 11.4)
  clickStep('#login-url', '服务器地址', () => typeInto('lurl', 'http://192.168.1.100:5250'), 12.8)
  clickStep('#login-user', '管理员账号', () => typeInto('luser', 'admin'), 14.2)
  clickStep('#login-pass', '输入密码', () => typeInto('lpass', '••••••••'), 15.6)
  clickStep('#btn-login', '登 录', () => { loggedIn.value = true }, 17.0)
  clickStep('#card-devices', '仪表盘 · 数据一览', () => {}, 18.4)
  clickStep('#tab-devices', '设备管理 · 一目了然', () => { tab.value = 'devices' }, 19.8)
  clickStep('#tab-tasks', '任务中心 · 短码签到', () => { tab.value = 'tasks' }, 21.2)
  clickStep('#tab-attendance', '考勤记录 · 实时同步', () => { tab.value = 'attendance' }, 22.6)
  clickStep('#tab-users', '用户管理 · 权限可控', () => { tab.value = 'users' }, 24.0)

  // 结尾：Logo 右侧 3D 入场晃动定格
  after(30, () => { showLogo.value = true; setSub('让课堂管理更简单') })
  after(34, () => { logoFreeze.value = true; setSub('') })
}

onMounted(() => {
  play()
  // 持续 3D 浮动由 CSS 动画驱动
})
onBeforeUnmount(() => {
  timers.forEach((t) => window.clearTimeout(t))
  intervals.forEach((i) => window.clearInterval(i))
})
</script>

<template>
  <div class="jk-root">
    <!-- ===== 3D 场景（透视 + 持续浮动） ===== -->
    <div class="jk-stage3d">
      <div class="jk-scene3d">
        <!-- ========== 主窗口：大屏模式（初始） ========== -->
        <div v-if="mode === 'screen'" class="jk-win">
          <div class="jk-title">
            <span class="jk-dot" />
            <b class="jk-title-t">AgoraIn · 大屏模式</b>
            <span id="mode-combo" class="jk-combo tgt" :class="{ zoom: zoomed === '#mode-combo' }">控制模式 ▾</span>
            <span class="jk-winbtn">— □ ✕</span>
          </div>
          <div class="jk-body">
            <div class="jk-tree">
              <div class="jk-tree-item on">三（1）班</div>
              <div class="jk-tree-item">三（2）班</div>
              <div class="jk-tree-item">五（1）班</div>
            </div>
            <div class="jk-grid">
              <span v-for="(s, i) in 30" :key="i" class="jk-cell" :class="{ blue: i < 13 }">学{{ i + 1 }}</span>
            </div>
            <div class="jk-rank">
              <div class="jk-rank-item gold">1 张同学 · 08:00</div>
              <div class="jk-rank-item silver">2 李同学 · 08:01</div>
              <div class="jk-rank-item bronze">3 王同学 · 08:02</div>
            </div>
          </div>
        </div>

        <!-- ========== 主窗口：控制中心 ========== -->
        <div v-else class="jk-win">
          <div class="jk-title">
            <span class="jk-dot" />
            <b class="jk-title-t">AgoraIn · 控制中心</b>
            <span class="jk-combo on">控制模式 ▾</span>
            <span class="jk-winbtn">— □ ✕</span>
          </div>
          <div class="jk-stats">
            <div class="jk-stat"><i>总设备数量</i><b>12</b></div>
            <div class="jk-stat"><i>总任务数量</i><b>3</b></div>
            <div class="jk-stat"><i>在线设备数量</i><b>10</b></div>
          </div>
          <div class="jk-body">
            <div class="jk-nav">
              <div class="jk-nav-item" :class="{ on: nav === 'hours' }" @click="nav = 'hours'">划课</div>
              <div class="jk-nav-item" :class="{ on: nav === 'devices' }" @click="nav = 'devices'">设备列表</div>
              <div class="jk-nav-item" :class="{ on: nav === 'tasks' }" @click="nav = 'tasks'">任务中心</div>
              <div id="nav-platforms" class="jk-nav-item tgt" :class="{ on: nav === 'platforms', zoom: zoomed === '#nav-platforms' }" @click="nav = 'platforms'">集控平台列表</div>
            </div>

            <!-- 集控平台列表页 -->
            <div class="jk-content">
              <template v-if="nav === 'platforms'">
                <div class="jk-platform">
                  <h3 class="jk-h3">连接集控平台</h3>
                  <label class="jk-label">平台名称</label>
                  <input id="f-name" class="jk-input tgt" :class="{ zoom: zoomed === '#f-name' }" v-model="typed.name" placeholder="集控平台" readonly />
                  <label class="jk-label">平台地址</label>
                  <input id="f-url" class="jk-input tgt" :class="{ zoom: zoomed === '#f-url' }" v-model="typed.url" placeholder="http://192.168.1.100:5250" readonly />
                  <label class="jk-label">用户名</label>
                  <input id="f-user" class="jk-input tgt" :class="{ zoom: zoomed === '#f-user' }" v-model="typed.user" placeholder="admin" readonly />
                  <label class="jk-label">密码</label>
                  <input id="f-pass" class="jk-input tgt" :class="{ zoom: zoomed === '#f-pass' }" v-model="typed.pass" type="password" readonly />
                  <button id="btn-connect" class="jk-btn tgt" :class="{ done: connected, zoom: zoomed === '#btn-connect' }">连接并加入列表</button>
                  <div v-if="connected" class="jk-plist">
                    <div id="platform-item" class="jk-plist-item tgt" :class="{ zoom: zoomed === '#platform-item' }">集控平台 · 在线</div>
                    <button id="btn-open" class="jk-btn tgt" :class="{ zoom: zoomed === '#btn-open' }">打开远程控制台</button>
                  </div>
                </div>
              </template>

              <!-- 划课/设备/任务占位 -->
              <div v-else class="jk-placeholder">
                {{ nav === 'hours' ? '课时划消与排课面板' : nav === 'devices' ? '设备列表（集控聚合）' : '任务中心' }}
              </div>
            </div>
          </div>
        </div>

        <!-- ========== 远程控制台（覆盖层窗口） ========== -->
        <div v-if="consoleOpen" class="jk-console">
          <div class="jk-title">
            <span class="jk-dot" />
            <b class="jk-title-t">AgoraIn · 远程控制</b>
            <span class="jk-winbtn">— ✕</span>
          </div>

          <!-- 登录面板 -->
          <div v-if="!loggedIn" class="jk-login">
            <h3 class="jk-h3">远程打卡服务器控制</h3>
            <p class="jk-login-sub">登录后即可查看设备、任务与考勤</p>
            <label class="jk-label">服务器地址</label>
            <input id="login-url" class="jk-input tgt" :class="{ zoom: zoomed === '#login-url' }" v-model="typed.lurl" placeholder="http://192.168.1.100:5250" readonly />
            <label class="jk-label">用户名</label>
            <input id="login-user" class="jk-input tgt" :class="{ zoom: zoomed === '#login-user' }" v-model="typed.luser" placeholder="admin" readonly />
            <label class="jk-label">密码</label>
            <input id="login-pass" class="jk-input tgt" :class="{ zoom: zoomed === '#login-pass' }" v-model="typed.lpass" type="password" readonly />
            <button id="btn-login" class="jk-btn tgt jk-btn-login" :class="{ zoom: zoomed === '#btn-login' }">登 录</button>
          </div>

          <!-- 主面板：Tabs -->
          <div v-else class="jk-tabs">
            <div class="jk-tabbar">
              <span id="tab-dash" class="jk-tab tgt" :class="{ on: tab === 'dash' }" @click="tab = 'dash'">仪表盘</span>
              <span id="tab-devices" class="jk-tab tgt" :class="{ on: tab === 'devices', zoom: zoomed === '#tab-devices' }" @click="tab = 'devices'">设备管理</span>
              <span id="tab-tasks" class="jk-tab tgt" :class="{ on: tab === 'tasks', zoom: zoomed === '#tab-tasks' }" @click="tab = 'tasks'">任务管理</span>
              <span id="tab-attendance" class="jk-tab tgt" :class="{ on: tab === 'attendance', zoom: zoomed === '#tab-attendance' }" @click="tab = 'attendance'">考勤</span>
              <span id="tab-users" class="jk-tab tgt" :class="{ on: tab === 'users', zoom: zoomed === '#tab-users' }" @click="tab = 'users'">用户管理</span>
            </div>

            <!-- 仪表盘 -->
            <div v-if="tab === 'dash'" class="jk-pane">
              <div class="jk-cards">
                <div id="card-devices" class="jk-card tgt c1" :class="{ zoom: zoomed === '#card-devices' }"><i>设备总数</i><b>12</b></div>
                <div class="jk-card c2"><i>在线设备</i><b>10</b></div>
                <div class="jk-card c3"><i>今日签到</i><b>86</b></div>
                <div class="jk-card c4"><i>活跃任务</i><b>3</b></div>
                <div class="jk-card c5"><i>用户总数</i><b>5</b></div>
              </div>
              <div class="jk-cols">
                <div class="jk-col">
                  <b class="jk-col-h">设备列表</b>
                  <div class="jk-row2"><span>三（1）班 大屏</span><em>在线</em></div>
                  <div class="jk-row2"><span>三（2）班 大屏</span><em>在线</em></div>
                  <div class="jk-row2 off"><span>办公室 主机</span><em>离线</em></div>
                </div>
                <div class="jk-col">
                  <b class="jk-col-h">活跃签到任务</b>
                  <div class="jk-row2"><span>数学 · 三（1）班</span><em>45/38</em></div>
                  <div class="jk-row2"><span>语文 · 三（2）班</span><em>42/40</em></div>
                  <div class="jk-row2"><span>英语 · 五（1）班</span><em>48/30</em></div>
                </div>
              </div>
            </div>

            <!-- 设备管理 -->
            <div v-else-if="tab === 'devices'" class="jk-pane">
              <table class="jk-table">
                <tr><th>设备名称</th><th>状态</th><th>最近在线</th><th>UUID</th></tr>
                <tr><td>三（1）班 大屏</td><td class="on">在线</td><td>刚刚</td><td>a1b2-c3d4-e5f6</td></tr>
                <tr><td>三（2）班 大屏</td><td class="on">在线</td><td>刚刚</td><td>11aa-22bb-33cc</td></tr>
                <tr><td>办公室 主机</td><td class="off">离线</td><td>昨天 17:20</td><td>9988-7766-5544</td></tr>
              </table>
            </div>

            <!-- 任务管理 -->
            <div v-else-if="tab === 'tasks'" class="jk-pane">
              <table class="jk-table">
                <tr><th>科目</th><th>教室</th><th>短码</th><th>状态</th><th>学生/已签</th></tr>
                <tr><td>数学</td><td>三（1）班</td><td class="blue">a8x2</td><td class="on">进行中</td><td>45 / 38</td></tr>
                <tr><td>语文</td><td>三（2）班</td><td class="blue">k9q7</td><td class="on">进行中</td><td>42 / 40</td></tr>
                <tr><td>英语</td><td>五（1）班</td><td class="blue">m3n1</td><td>已关闭</td><td>48 / 48</td></tr>
              </table>
            </div>

            <!-- 考勤 -->
            <div v-else-if="tab === 'attendance'" class="jk-pane">
              <div class="jk-att">
                <div class="jk-att-h"><b>三（1）班 大屏 · 数学</b><span class="jk-rate">84%</span></div>
                <div class="jk-att-sub">应到 45 人 · 已到 38 人 · 未到 7 人</div>
                <div class="jk-att-chips">
                  <span v-for="(s, i) in 20" :key="i" :class="{ miss: i >= 17 }">{{ i + 1 }}号 {{ i >= 17 ? '✗' : '✓' }}</span>
                </div>
              </div>
            </div>

            <!-- 用户管理 -->
            <div v-else class="jk-pane">
              <table class="jk-table">
                <tr><th>用户名</th><th>显示名</th><th>角色</th><th>状态</th></tr>
                <tr><td>admin</td><td>系统管理员</td><td>超级管理员</td><td class="on">启用</td></tr>
                <tr><td>teacher01</td><td>张老师</td><td>教师</td><td class="on">启用</td></tr>
                <tr><td>parent08</td><td>王妈妈</td><td>家长</td><td class="on">启用</td></tr>
              </table>
            </div>
          </div>

          <div class="jk-statusbar">远程打卡服务器控制 · 已连接 1 个集控平台</div>
        </div>
      </div>
    </div>

    <!-- ===== 结尾 Logo（3D 晃动定格，右侧） ===== -->
    <div v-if="showLogo" class="jk-logo" :class="{ freeze: logoFreeze }">
      <div class="jk-logo-svg" v-html="faviconSvg"></div>
    </div>

    <!-- ===== 底部状态条（不参与 3D 与缩放） ===== -->
    <div class="jk-statusbar jk-statusbar-b">
      <span class="jk-green-dot" /> AgoraIn · 集控平台演示　已连接 1 个平台 · 12 台设备 · 10 台在线
    </div>

    <!-- ===== 左下角字幕（纯绿色快速闪现，固定层级） ===== -->
    <div class="jk-subtitle">
      <span :key="subKey" class="jk-sub-text">{{ sub }}</span>
    </div>

    <!-- ===== 模拟鼠标箭头 ===== -->
    <div class="jk-cursor" :class="{ hidden: !cursor.visible, pressed: cursor.pressed }"
         :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }">
      <svg viewBox="0 0 24 24" width="26" height="26">
        <path d="M4 1 L4 20 L9.5 16.5 L12 23 L15 21.5 L12.5 15 L20 13 Z" fill="#fff" stroke="#1e293b" stroke-width="1.4" />
      </svg>
    </div>
  </div>
</template>

<style>
/* ================= 根容器：纯黑全屏 ================= */
.jk-root {
  position: fixed;
  inset: 0;
  background: #000;
  overflow: hidden;
  font-family: "Segoe UI", "Microsoft YaHei", system-ui, sans-serif;
  user-select: none;
}

/* ================= 3D 场景：透视 + 持续浮动 ================= */
.jk-stage3d {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
  z-index: 10;
}
.jk-scene3d {
  transform-style: preserve-3d;
  animation: jk-float 16s ease-in-out infinite;
}
@keyframes jk-float {
  0%, 100% { transform: rotateX(1.6deg) rotateY(-3.2deg) translateZ(0); }
  25%      { transform: rotateX(-2deg) rotateY(2.6deg) translateZ(20px); }
  50%      { transform: rotateX(1.1deg) rotateY(-1.4deg) translateZ(-14px); }
  75%      { transform: rotateX(-1.6deg) rotateY(3deg) translateZ(16px); }
}

/* ================= 主窗口 / 控制台窗口 ================= */
.jk-win,
.jk-console {
  width: 1180px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 40px 110px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}
.jk-win { height: 640px; }
.jk-console {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 660px;
  z-index: 40;
  box-shadow: 0 60px 160px rgba(0, 0, 0, 0.8);
}
.jk-title {
  height: 46px;
  background: #4285f4;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 10px;
  color: #fff;
}
.jk-dot { width: 10px; height: 10px; border-radius: 50%; background: #fff; opacity: 0.9; }
.jk-title-t { font-size: 13px; font-weight: 600; letter-spacing: 0.5px; }
.jk-winbtn { margin-left: auto; font-size: 14px; color: rgba(255,255,255,0.9); letter-spacing: 4px; }
.jk-combo {
  font-size: 12px;
  padding: 3px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
}
.jk-combo.on { background: rgba(255, 255, 255, 0.32); font-weight: 600; }

/* 统计条 */
.jk-stats {
  height: 44px;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8ecf1;
}
.jk-stat { margin: 0 22px; display: flex; flex-direction: column; }
.jk-stat i { font-style: normal; font-size: 11px; color: #7d8a9c; }
.jk-stat b { font-size: 17px; font-weight: 600; color: #4285f4; }

/* 主体：导航 + 内容 */
.jk-body { display: flex; height: calc(100% - 90px); }
.jk-nav {
  width: 220px;
  border-right: 1px solid #e0e4e8;
  padding-top: 8px;
  flex: none;
}
.jk-nav-item {
  padding: 11px 18px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: all 0.2s;
}
.jk-nav-item:hover { background: #f3f6fb; }
.jk-nav-item.on {
  background: #e8f0fe;
  color: #4285f4;
  font-weight: 600;
  border-left-color: #4285f4;
}
.jk-content { flex: 1; overflow: hidden; }

/* 集控平台表单 */
.jk-platform { padding: 26px 30px; }
.jk-h3 { font-size: 20px; font-weight: 600; color: #222; margin: 0 0 18px; }
.jk-label { display: block; font-size: 12px; color: #7d8a9c; margin: 8px 0 4px; }
.jk-input {
  width: 360px;
  height: 32px;
  border: 1px solid #d4d9e0;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 13px;
  color: #222;
  outline: none;
  background: #fafbfc;
}
.jk-btn {
  display: block;
  margin-top: 16px;
  height: 34px;
  padding: 0 18px;
  border: 0;
  border-radius: 8px;
  background: #4285f4;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.jk-btn:hover { background: #5b95f5; }
.jk-btn.done { background: #34a853; }
.jk-btn-login { width: 100%; height: 38px; margin-top: 22px; font-size: 14px; }
.jk-plist { margin-top: 18px; }
.jk-plist-item {
  padding: 10px 14px;
  border: 1px solid #d0e7d6;
  border-radius: 8px;
  background: #f0faf2;
  color: #1e7b3c;
  font-size: 13px;
  font-weight: 600;
}
.jk-placeholder {
  padding: 40px;
  color: #9aa5b3;
  font-size: 14px;
}

/* 控制台登录面板 */
.jk-login {
  width: 380px;
  margin: 52px auto 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(30, 60, 140, 0.12);
  padding: 30px 30px 34px;
}
.jk-login-sub { font-size: 12px; color: #9aa5b3; margin: -12px 0 18px; text-align: center; }

/* 控制台 Tabs */
.jk-tabbar {
  display: flex;
  gap: 4px;
  padding: 10px 16px 0;
  border-bottom: 1px solid #eceff3;
}
.jk-tab {
  padding: 8px 18px;
  font-size: 13px;
  color: #555;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.2s;
}
.jk-tab.on { background: #e8f0fe; color: #4285f4; font-weight: 600; }
.jk-pane { padding: 18px; }

/* 仪表盘卡片 */
.jk-cards { display: flex; gap: 12px; margin-bottom: 16px; }
.jk-card {
  flex: 1;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
}
.jk-card i { font-style: normal; font-size: 11px; }
.jk-card b { font-size: 26px; font-weight: 700; margin-top: 4px; }
.jk-card.c1 { background: #e8f0fe; } .jk-card.c1 i { color: #5b7fb5; } .jk-card.c1 b { color: #4285f4; }
.jk-card.c2 { background: #e6f4ea; } .jk-card.c2 i { color: #5b8f68; } .jk-card.c2 b { color: #34a853; }
.jk-card.c3 { background: #fff8e1; } .jk-card.c3 i { color: #a0895b; } .jk-card.c3 b { color: #f9a825; }
.jk-card.c4 { background: #fce8e6; } .jk-card.c4 i { color: #b06a64; } .jk-card.c4 b { color: #d93025; }
.jk-card.c5 { background: #f3e8fd; } .jk-card.c5 i { color: #8a6ab5; } .jk-card.c5 b { color: #7b1fa2; }

.jk-cols { display: flex; gap: 16px; }
.jk-col {
  flex: 1;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px 14px;
}
.jk-col-h { display: block; font-size: 14px; color: #333; margin-bottom: 8px; }
.jk-row2 {
  display: flex;
  justify-content: space-between;
  padding: 7px 2px;
  font-size: 13px;
  border-bottom: 1px solid #eceff3;
  color: #333;
}
.jk-row2 em { font-style: normal; color: #34a853; font-size: 12px; }
.jk-row2.off em { color: #ccc; }

/* 表格 */
.jk-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.jk-table th {
  text-align: left;
  font-size: 12px;
  color: #7d8a9c;
  padding: 8px 10px;
  border-bottom: 1px solid #e4e8ee;
  font-weight: 600;
}
.jk-table td { padding: 9px 10px; color: #333; border-bottom: 1px solid #f0f2f5; }
.jk-table .on { color: #34a853; }
.jk-table .off { color: #bbb; }
.jk-table .blue { color: #4285f4; font-weight: 600; }

/* 考勤 */
.jk-att {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 16px;
}
.jk-att-h { display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: #333; }
.jk-rate {
  background: #e8f0fe;
  color: #4285f4;
  font-weight: 600;
  font-size: 13px;
  border-radius: 12px;
  padding: 4px 12px;
}
.jk-att-sub { font-size: 11px; color: #9aa5b3; margin: 4px 0 12px; }
.jk-att-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.jk-att-chips span {
  font-size: 11px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 3px 8px;
  color: #333;
}
.jk-att-chips span.miss { color: #d93025; }

/* 大屏模式示意 */
.jk-tree {
  width: 180px;
  border-right: 1px solid #e4e8ee;
  padding: 14px 0;
  flex: none;
}
.jk-tree-item { padding: 8px 18px; font-size: 13px; color: #555; }
.jk-tree-item.on { background: #e8f0fe; color: #4285f4; font-weight: 600; border-left: 3px solid #4285f4; }
.jk-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 18px;
  align-content: start;
}
.jk-cell {
  aspect-ratio: 1.6;
  border-radius: 8px;
  background: #eef1f5;
  display: grid;
  place-items: center;
  font-size: 12px;
  color: #7d8a9c;
}
.jk-cell.blue { background: #4285f4; color: #fff; font-weight: 600; }
.jk-rank { width: 210px; border-left: 1px solid #e4e8ee; padding: 16px 14px; flex: none; }
.jk-rank-item { font-size: 12px; border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; font-weight: 600; }
.jk-rank-item.gold { background: #fff6e0; color: #b8860b; }
.jk-rank-item.silver { background: #f0f2f5; color: #6b7280; }
.jk-rank-item.bronze { background: #fbeede; color: #a0522d; }

/* ================= 点击放大特效（仅窗口内元素） ================= */
.tgt {
  transform-origin: center center;
  transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  z-index: 60;
  position: relative;
}
.tgt.zoom { transform: scale(1.14); }

/* ================= 底部状态条（固定层级，防误伤） ================= */
.jk-statusbar-b {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  background: rgba(8, 12, 20, 0.85);
  color: #8fa1b8;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  border-top: 1px solid rgba(66, 133, 244, 0.35);
  z-index: 999;
}
.jk-green-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 8px #34d399;
  animation: jk-blink 1.2s infinite;
}
@keyframes jk-blink { 50% { opacity: 0.35; } }
.jk-statusbar { font-size: 11px; color: #7d8a9c; height: 28px; display: flex; align-items: center; padding: 0 14px; border-top: 1px solid #eef1f5; }

/* ================= 左下角字幕（纯绿色快速闪现，固定层级） ================= */
.jk-subtitle {
  position: fixed;
  left: 30px;
  bottom: 58px;
  z-index: 1000;
  font-size: 30px;
  font-weight: 800;
  color: #00ff00;
  letter-spacing: 3px;
  text-shadow: 0 0 12px rgba(0, 255, 0, 0.85), 0 0 34px rgba(0, 255, 0, 0.4);
  font-family: "Microsoft YaHei", sans-serif;
  pointer-events: none;
}
.jk-sub-text {
  display: inline-block;
  animation: jk-sub-flash 0.4s steps(2, end) 3;
}
@keyframes jk-sub-flash {
  0% { opacity: 0; transform: translateX(-16px) scale(0.9); }
  50% { opacity: 1; }
  100% { opacity: 1; }
}

/* ================= 模拟鼠标箭头 ================= */
.jk-cursor {
  position: fixed;
  z-index: 2000;
  transform: translate(-4px, -4px);
  transition: left 0.55s cubic-bezier(0.3, 0.8, 0.3, 1), top 0.55s cubic-bezier(0.3, 0.8, 0.3, 1);
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.55));
}
.jk-cursor.hidden { opacity: 0; }
.jk-cursor.pressed svg { transform: scale(0.78); }
.jk-cursor svg { transition: transform 0.12s; }

/* ================= 结尾 Logo：右侧 3D 晃动定格 ================= */
.jk-logo {
  position: fixed;
  right: 90px;
  top: 50%;
  z-index: 900;
  width: 210px;
  transform: translateY(-50%);
  perspective: 900px;
}
.jk-logo-svg {
  transform-style: preserve-3d;
  animation: jk-logo-swing 3.4s cubic-bezier(0.3, 0.9, 0.4, 1) forwards;
  filter: drop-shadow(0 0 36px rgba(56, 189, 248, 0.65));
}
.jk-logo.freeze .jk-logo-svg {
  animation: none;
  transform: rotateY(0deg) rotateX(0deg) scale(1);
}
@keyframes jk-logo-swing {
  0%   { opacity: 0; transform: translateX(120px) rotateY(50deg) rotateX(14deg) scale(0.5); }
  18%  { opacity: 1; transform: translateX(-16px) rotateY(-12deg) rotateX(-6deg) scale(1.1); }
  34%  { transform: translateX(8px) rotateY(8deg) rotateX(3deg) scale(1); }
  50%  { transform: translateX(-5px) rotateY(-6deg) rotateX(-2deg) scale(1.03); }
  66%  { transform: translateX(3px) rotateY(4deg) rotateX(1.5deg) scale(1); }
  82%  { transform: translateX(-1.5px) rotateY(-2deg) rotateX(-0.8deg) scale(1.01); }
  100% { transform: translateX(0) rotateY(0) rotateX(0) scale(1); }
}
</style>
