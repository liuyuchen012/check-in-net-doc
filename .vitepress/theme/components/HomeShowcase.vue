<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Phase = 'update' | 'screen' | 'control' | 'final'

const phase = ref<Phase>('update')
const pct = ref(0)
const steps = ['下载更新包', '校验完整性', '安装核心组件', '配置本地服务', '界面初始化']

const timers: number[] = []
let pctTimer: number | undefined

const clearAll = () => {
  timers.forEach((t) => window.clearTimeout(t))
  timers.length = 0
  if (pctTimer) window.clearInterval(pctTimer)
}

const play = () => {
  clearAll()
  phase.value = 'update'
  pct.value = 0
  pctTimer = window.setInterval(() => {
    pct.value = Math.min(100, pct.value + 2)
  }, 45)
  // 更新界面 3.2s
  timers.push(window.setTimeout(() => {
    if (pctTimer) window.clearInterval(pctTimer)
    phase.value = 'screen'
  }, 3200))
  // 大屏模式窗口 6.4s
  timers.push(window.setTimeout(() => { phase.value = 'control' }, 9600))
  // 控制模式窗口 6.4s
  timers.push(window.setTimeout(() => { phase.value = 'final' }, 16000))
  // 3 svg 并排停留 7.6s 后循环
  timers.push(window.setTimeout(play, 23600))
}

onMounted(play)
onBeforeUnmount(clearAll)

// ---------- 内联 SVG ----------
const faviconUp = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="hsUpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="72" fill="url(#hsUpGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const faviconFinal = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="100%" height="100%">
  <defs>
    <linearGradient id="hsFinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <circle cx="75" cy="75" r="72" fill="url(#hsFinGrad)"/>
  <path d="M20,60 C35,45 50,75 65,60 C80,45 95,75 110,60 C125,45 140,75 155,60" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M20,75 C35,60 50,90 65,75 C80,60 95,90 110,75 C125,60 140,90 155,75" fill="none" stroke="white" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <path d="M20,90 C35,75 50,105 65,90 C80,75 95,105 110,90 C125,75 140,105 155,90" fill="none" stroke="white" stroke-width="3" opacity="0.2" stroke-linecap="round"/>
  <path d="M48,72 L66,90 L102,52" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

// 大屏模式主窗口（元素按 UI 区域分组，逐个出现）
const screenSvg = `
<svg class="hs-win hs-win-screen" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏（左 + 右） -->
  <g class="ui-seg" style="--d:.15s">
    <path d="M0,12 A12,12 0 0 1 12,0 L200,0 L200,48 L0,48 Z" fill="#4285f4"/>
    <circle cx="26" cy="24" r="5" fill="#ffffff" opacity="0.9"/>
    <text x="38" y="29" font-size="13" font-weight="600" fill="#ffffff">AgoraIn</text>
    <path d="M200,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L200,48 Z" fill="#4285f4"/>
    <rect x="212" y="9" width="106" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="224" y="26" font-size="13" fill="#ffffff">大屏模式</text>
    <path d="M300,24 L305,29 L310,24" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <g font-size="13" fill="#ffffff">
      <text x="330" y="26">文件</text>
      <text x="376" y="26">远程</text>
      <text x="422" y="26">设置</text>
      <text x="468" y="26">帮助</text>
    </g>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 左侧栏：任务树背景 + 任务树 -->
  <g class="ui-seg" style="--d:.3s">
    <path d="M0,48 L200,48 L200,838 A12,12 0 0 1 188,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <g font-size="13">
      <g class="ui-seg" style="--d:.42s">
        <path d="M20,66 C20,65.3 20.7,64.6 21.4,64.6 L25.2,64.6 L27.2,67 L33.6,67 C34.3,67 35,67.7 35,68.4 L35,73 C35,73.7 34.3,74.3 33.6,74.3 L21.4,74.3 C20.7,74.3 20,73.7 20,73 Z" fill="#666"/>
        <text x="44" y="75" font-weight="600" fill="#333">数学打卡</text>
      </g>
      <g class="ui-seg" style="--d:.5s">
        <rect x="12" y="84" width="176" height="24" rx="4" fill="#d2e3fc"/>
        <path d="M30,89 L38,89 L42,93 L42,104 L30,104 Z" fill="#4285f4"/>
        <path d="M38,89 L38,93 L42,93 Z" fill="#4285f4"/>
        <text x="47" y="101" font-weight="600" fill="#333">2026秋季班</text>
      </g>
      <g class="ui-seg" style="--d:.58s">
        <path d="M20,116 C20,115.3 20.7,114.6 21.4,114.6 L25.2,114.6 L27.2,117 L33.6,117 C34.3,117 35,117.7 35,118.4 L35,123 C35,123.7 34.3,124.3 33.6,124.3 L21.4,124.3 C20.7,124.3 20,123.7 20,123 Z" fill="#666"/>
        <text x="44" y="125" font-weight="600" fill="#333">英语打卡</text>
      </g>
      <g class="ui-seg" style="--d:.66s">
        <path d="M30,139 L38,139 L42,143 L42,154 L30,154 Z" fill="#4285f4"/>
        <path d="M38,139 L38,143 L42,143 Z" fill="#4285f4"/>
        <text x="47" y="151" font-weight="600" fill="#333">周末班</text>
      </g>
      <g class="ui-seg" style="--d:.74s">
        <path d="M20,166 C20,165.3 20.7,164.6 21.4,164.6 L25.2,164.6 L27.2,167 L33.6,167 C34.3,167 35,167.7 35,168.4 L35,173 C35,173.7 34.3,174.3 33.6,174.3 L21.4,174.3 C20.7,174.3 20,173.7 20,173 Z" fill="#666"/>
        <text x="44" y="175" font-weight="600" fill="#333">物理打卡</text>
      </g>
      <g class="ui-seg" style="--d:.82s">
        <path d="M20,194 C20,193.3 20.7,192.6 21.4,192.6 L25.2,192.6 L27.2,195 L33.6,195 C34.3,195 35,195.7 35,196.4 L35,201 C35,201.7 34.3,202.3 33.6,202.3 L21.4,202.3 C20.7,202.3 20,201.7 20,201 Z" fill="#666"/>
        <text x="44" y="203" font-weight="600" fill="#333">化学打卡</text>
      </g>
    </g>
  </g>
  <!-- 标签栏 -->
  <g class="ui-seg" style="--d:.7s">
    <rect x="200" y="48" width="1330" height="36" fill="#f0f0f0"/>
    <rect x="200" y="83" width="1330" height="1" fill="#e0e0e0"/>
    <rect x="200" y="48" width="180" height="36" fill="#ffffff"/>
    <text x="212" y="68" font-size="12" font-weight="600" fill="#333">数学打卡 - 2026秋季</text>
    <line x1="356" y1="61" x2="366" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="366" y1="61" x2="356" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="392" y="68" font-size="12" fill="#555">英语打卡 - 周末班</text>
    <line x1="520" y1="61" x2="530" y2="71" stroke="#999" stroke-width="1.2"/>
    <line x1="530" y1="61" x2="520" y2="71" stroke="#999" stroke-width="1.2"/>
    <text x="1512" y="73" font-size="18" font-weight="300" fill="#666" text-anchor="middle">+</text>
  </g>
  <!-- 左侧：打卡排名 -->
  <g class="ui-seg" style="--d:.9s">
    <rect x="220" y="96" width="320" height="718" rx="8" fill="#f8f9fa"/>
    <text x="232" y="122" font-size="16" font-weight="600" fill="#333">打卡排名</text>
    <text x="232" y="143" font-size="12" fill="#888">最早打卡</text>
    <g font-size="13">
      <text x="232" y="170" font-weight="700" fill="#FFD700">1</text><text x="272" y="170" fill="#333">张三</text><text x="528" y="170" font-size="12" fill="#888" text-anchor="end">07:58:12</text>
      <text x="232" y="196" font-weight="700" fill="#C0C0C0">2</text><text x="272" y="196" fill="#333">李四</text><text x="528" y="196" font-size="12" fill="#888" text-anchor="end">08:01:03</text>
      <text x="232" y="222" font-weight="700" fill="#CD7F32">3</text><text x="272" y="222" fill="#333">王五</text><text x="528" y="222" font-size="12" fill="#888" text-anchor="end">08:05:47</text>
      <text x="232" y="248" font-weight="700" fill="#333">4</text><text x="272" y="248" fill="#333">赵六</text><text x="528" y="248" font-size="12" fill="#888" text-anchor="end">08:12:30</text>
      <text x="232" y="274" font-weight="700" fill="#333">5</text><text x="272" y="274" fill="#333">钱七</text><text x="528" y="274" font-size="12" fill="#888" text-anchor="end">08:15:22</text>
      <text x="232" y="300" font-weight="700" fill="#333">6</text><text x="272" y="300" fill="#333">孙八</text><text x="528" y="300" font-size="12" fill="#888" text-anchor="end">08:17:05</text>
      <text x="232" y="326" font-weight="700" fill="#333">7</text><text x="272" y="326" fill="#333">周九</text><text x="528" y="326" font-size="12" fill="#888" text-anchor="end">08:19:44</text>
      <text x="232" y="352" font-weight="700" fill="#333">8</text><text x="272" y="352" fill="#333">吴十</text><text x="528" y="352" font-size="12" fill="#888" text-anchor="end">08:22:18</text>
    </g>
  </g>
  <!-- 右侧：状态行 + 统计条 -->
  <g class="ui-seg" style="--d:1.05s">
    <text x="556" y="110" font-size="13" fill="#666">就绪</text>
    <circle cx="1442" cy="106" r="4" fill="#34a853"/>
    <text x="1454" y="110" font-size="12" fill="#777">服务器在线</text>
    <rect x="556" y="122" width="954" height="40" rx="8" fill="#e8f0fe"/>
    <text x="570" y="148" font-size="14" font-weight="500" fill="#4285f4">总人数: 40  |  已打卡: 25  (62.5%)</text>
  </g>
  <!-- 学生按钮网格（逐行出现） -->
  <g class="ui-seg" style="--d:1.2s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="214" fill="#fff">学生1</text>
    <rect x="719.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="214" fill="#fff">学生2</text>
    <rect x="878.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="214" fill="#fff">学生3</text>
    <rect x="1037.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="214" fill="#fff">学生4</text>
    <rect x="1196.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="214" fill="#fff">学生5</text>
    <rect x="1355.5" y="182" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="214" fill="#fff">学生6</text>
  </g>
  <g class="ui-seg" style="--d:1.35s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="274" fill="#fff">学生7</text>
    <rect x="719.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="274" fill="#fff">学生8</text>
    <rect x="878.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="274" fill="#fff">学生9</text>
    <rect x="1037.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="274" fill="#fff">学生10</text>
    <rect x="1196.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="274" fill="#fff">学生11</text>
    <rect x="1355.5" y="242" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="274" fill="#fff">学生12</text>
  </g>
  <g class="ui-seg" style="--d:1.5s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="334" fill="#fff">学生13</text>
    <rect x="719.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="334" fill="#fff">学生14</text>
    <rect x="878.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="334" fill="#fff">学生15</text>
    <rect x="1037.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="334" fill="#fff">学生16</text>
    <rect x="1196.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="334" fill="#fff">学生17</text>
    <rect x="1355.5" y="302" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="334" fill="#fff">学生18</text>
  </g>
  <g class="ui-seg" style="--d:1.65s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="394" fill="#fff">学生19</text>
    <rect x="719.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="794.5" y="394" fill="#fff">学生20</text>
    <rect x="878.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="953.5" y="394" fill="#fff">学生21</text>
    <rect x="1037.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1112.5" y="394" fill="#fff">学生22</text>
    <rect x="1196.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1271.5" y="394" fill="#fff">学生23</text>
    <rect x="1355.5" y="362" width="150" height="52" rx="8" fill="#4285f4"/><text x="1430.5" y="394" fill="#fff">学生24</text>
  </g>
  <g class="ui-seg" style="--d:1.8s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="422" width="150" height="52" rx="8" fill="#4285f4"/><text x="635.5" y="454" fill="#fff">学生25</text>
    <rect x="719.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="454" fill="#333">学生26</text>
    <rect x="878.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="454" fill="#333">学生27</text>
    <rect x="1037.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="454" fill="#333">学生28</text>
    <rect x="1196.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="454" fill="#333">学生29</text>
    <rect x="1355.5" y="422" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="454" fill="#333">学生30</text>
  </g>
  <g class="ui-seg" style="--d:1.95s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="514" fill="#333">学生31</text>
    <rect x="719.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="514" fill="#333">学生32</text>
    <rect x="878.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="514" fill="#333">学生33</text>
    <rect x="1037.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="514" fill="#333">学生34</text>
    <rect x="1196.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1271.5" y="514" fill="#333">学生35</text>
    <rect x="1355.5" y="482" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1430.5" y="514" fill="#333">学生36</text>
  </g>
  <g class="ui-seg" style="--d:2.1s" font-size="15" font-weight="500" text-anchor="middle">
    <rect x="560.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="635.5" y="574" fill="#333">学生37</text>
    <rect x="719.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="794.5" y="574" fill="#333">学生38</text>
    <rect x="878.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="953.5" y="574" fill="#333">学生39</text>
    <rect x="1037.5" y="542" width="150" height="52" rx="8" fill="#e8e8e8" stroke="#d0d0d0"/><text x="1112.5" y="574" fill="#333">学生40</text>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:2.6s">
    <path d="M200,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L200,850 Z" fill="#f5f5f5"/>
    <text x="214" y="840" font-size="11" fill="#888">就绪</text>
    <text x="1518" y="840" font-size="11" fill="#aaa" text-anchor="end">右键点击已打卡学生可取消打卡</text>
  </g>
</svg>`

// 控制模式主窗口
const controlSvg = `
<svg class="hs-win hs-win-control" viewBox="0 0 1530 850" width="100%" font-family="Microsoft YaHei, 'Segoe UI', sans-serif">
  <rect class="ui-seg" style="--d:0s" x="0" y="0" width="1530" height="850" rx="12" fill="#ffffff"/>
  <!-- 标题栏 -->
  <g class="ui-seg" style="--d:.15s">
    <path d="M0,12 A12,12 0 0 1 12,0 L1518,0 A12,12 0 0 1 1530,12 L1530,48 L0,48 Z" fill="#4285f4"/>
    <text x="20" y="28" font-size="13" font-weight="600" fill="#ffffff">控制中心</text>
    <rect x="104" y="9" width="110" height="30" rx="8" fill="rgba(255,255,255,0.15)"/>
    <text x="116" y="26" font-size="13" fill="#ffffff">控制模式</text>
    <path d="M200,25 L205,30 L210,25" stroke="#ffffff" stroke-width="1.5" fill="none"/>
    <line x1="1405" y1="24" x2="1425" y2="24" stroke="#ffffff" stroke-width="1.5"/>
    <rect x="1451" y="17" width="14" height="14" rx="1" fill="none" stroke="#ffffff" stroke-width="1.3"/>
    <line x1="1497" y1="17" x2="1517" y2="31" stroke="#ffffff" stroke-width="1.4"/>
    <line x1="1517" y1="17" x2="1497" y2="31" stroke="#ffffff" stroke-width="1.4"/>
  </g>
  <!-- 统计条 -->
  <g class="ui-seg" style="--d:.35s">
    <rect x="0" y="48" width="1530" height="36" fill="#f5f7fa"/>
    <text x="20" y="62" font-size="11" fill="#888">总设备数量</text>
    <text x="20" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="150" y="62" font-size="11" fill="#888">总任务数量</text>
    <text x="150" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
    <text x="280" y="62" font-size="11" fill="#888">在线设备数量</text>
    <text x="280" y="81" font-size="18" font-weight="600" fill="#4285f4">0</text>
  </g>
  <!-- 左侧导航 -->
  <g class="ui-seg" style="--d:.5s">
    <rect x="220" y="84" width="1" height="738" fill="#e0e0e0"/>
    <rect x="10" y="86" width="200" height="44" rx="8" fill="#e8f0fe"/>
    <text x="32" y="113" font-size="13" font-weight="600" fill="#4285f4">划课</text>
    <g font-size="13" fill="#888">
      <text x="32" y="159">设备列表</text>
      <text x="32" y="205">任务中心</text>
      <text x="32" y="251">集控平台列表</text>
    </g>
  </g>
  <!-- 学生列表 -->
  <g class="ui-seg" style="--d:.7s">
    <rect x="220" y="84" width="280" height="738" fill="#f8f9fa"/>
    <rect x="500" y="84" width="1" height="738" fill="#e8e8e8"/>
    <text x="232" y="108" font-size="15" font-weight="600" fill="#333">学生列表</text>
    <rect x="232" y="118" width="236" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <text x="238" y="137" font-size="12" fill="#aaa">学生姓名</text>
    <rect x="232" y="156" width="160" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="404" y="156" width="64" height="30" rx="8" fill="#4285f4"/>
    <text x="436" y="176" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">添加</text>
    <g font-size="13">
      <g class="ui-seg" style="--d:.82s">
        <rect x="224" y="200" width="248" height="26" rx="6" fill="#e8f0fe"/>
        <text x="232" y="218" font-weight="600" fill="#333">张三</text>
        <rect x="424" y="206" width="48" height="14" rx="7" fill="#ffffff"/>
        <text x="448" y="217" font-size="11" fill="#4285f4" text-anchor="middle">剩12</text>
      </g>
      <g class="ui-seg" style="--d:.9s">
        <text x="232" y="248" fill="#333">李四</text>
        <rect x="424" y="236" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="247" font-size="11" fill="#4285f4" text-anchor="middle">剩8</text>
      </g>
      <g class="ui-seg" style="--d:.98s">
        <text x="232" y="278" fill="#333">王五</text>
        <rect x="424" y="266" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="277" font-size="11" fill="#4285f4" text-anchor="middle">剩20</text>
      </g>
      <g class="ui-seg" style="--d:1.06s">
        <text x="232" y="308" fill="#333">赵六</text>
        <rect x="424" y="296" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="307" font-size="11" fill="#4285f4" text-anchor="middle">剩6</text>
      </g>
      <g class="ui-seg" style="--d:1.14s">
        <text x="232" y="338" fill="#333">钱七</text>
        <rect x="424" y="326" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="337" font-size="11" fill="#4285f4" text-anchor="middle">剩15</text>
      </g>
      <g class="ui-seg" style="--d:1.22s">
        <text x="232" y="368" fill="#333">孙八</text>
        <rect x="424" y="356" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="367" font-size="11" fill="#4285f4" text-anchor="middle">剩10</text>
      </g>
      <g class="ui-seg" style="--d:1.3s">
        <text x="232" y="398" fill="#333">周九</text>
        <rect x="424" y="386" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="397" font-size="11" fill="#4285f4" text-anchor="middle">剩18</text>
      </g>
      <g class="ui-seg" style="--d:1.38s">
        <text x="232" y="428" fill="#333">吴十</text>
        <rect x="424" y="416" width="48" height="14" rx="7" fill="#e8f0fe"/>
        <text x="448" y="427" font-size="11" fill="#4285f4" text-anchor="middle">剩4</text>
      </g>
    </g>
  </g>
  <!-- Tab + 划课操作区 -->
  <g class="ui-seg" style="--d:.95s">
    <rect x="508" y="90" width="132" height="28" rx="8" fill="#e8f0fe"/>
    <text x="522" y="109" font-size="13" font-weight="600" fill="#4285f4">课时划消与排课</text>
    <text x="652" y="109" font-size="13" fill="#555">设置</text>
    <rect x="516" y="126" width="998" height="110" rx="8" fill="#f8f9fa"/>
    <text x="530" y="148" font-size="14" font-weight="600" fill="#333">张三 · 剩余课时 12</text>
    <text x="530" y="184" font-size="13" fill="#555">课时数：</text>
    <rect x="590" y="168" width="90" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
    <rect x="690" y="168" width="88" height="30" rx="8" fill="#4285f4"/>
    <text x="734" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">划消课时</text>
    <rect x="786" y="168" width="88" height="30" rx="8" fill="#34a853"/>
    <text x="830" y="189" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">增加课时</text>
    <text x="530" y="224" font-size="13" fill="#555">备注：</text>
    <rect x="584" y="208" width="320" height="30" rx="6" fill="#ffffff" stroke="#d0d6dd"/>
  </g>
  <!-- 课时记录 -->
  <g class="ui-seg" style="--d:1.1s">
    <text x="1172" y="148" font-size="13" font-weight="600" fill="#333">课时记录</text>
    <g font-size="11">
      <text x="1172" y="170" fill="#888">2026-08-20</text><text x="1250" y="170" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="170" fill="#666">补课</text>
      <text x="1172" y="192" fill="#888">2026-08-18</text><text x="1250" y="192" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="192" fill="#666">数学课</text>
      <text x="1172" y="214" fill="#888">2026-08-15</text><text x="1250" y="214" font-size="12" font-weight="600" fill="#d32f2f">-1</text><text x="1302" y="214" fill="#666">请假</text>
      <text x="1172" y="236" fill="#888">2026-08-12</text><text x="1250" y="236" font-size="12" font-weight="600" fill="#34a853">+2</text><text x="1302" y="236" fill="#666">数学课</text>
      <text x="1172" y="258" fill="#888">2026-08-10</text><text x="1250" y="258" font-size="12" font-weight="600" fill="#d32f2f">-2</text><text x="1302" y="258" fill="#666">补课</text>
    </g>
  </g>
  <!-- 排课区：月份导航 + 星期表头 -->
  <g class="ui-seg" style="--d:1.25s">
    <rect x="516" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="532" y="275" font-size="16" fill="#333" text-anchor="middle">‹</text>
    <rect x="554" y="256" width="32" height="28" rx="8" fill="#f0f0f0"/>
    <text x="570" y="275" font-size="16" fill="#333" text-anchor="middle">›</text>
    <rect x="592" y="256" width="52" height="28" rx="8" fill="#e8f0fe"/>
    <text x="618" y="275" font-size="12" font-weight="600" fill="#4285f4" text-anchor="middle">今天</text>
    <text x="660" y="278" font-size="16" font-weight="600" fill="#333">2026年8月</text>
    <text x="1138" y="276" font-size="12" fill="#666" text-anchor="end">2026-08-23</text>
    <g font-size="11" text-anchor="middle">
      <text x="560.4" y="300" fill="#888">一</text><text x="649.3" y="300" fill="#888">二</text><text x="738.1" y="300" fill="#888">三</text><text x="827.0" y="300" fill="#888">四</text><text x="915.9" y="300" fill="#888">五</text><text x="1004.7" y="300" fill="#e57373">六</text><text x="1093.6" y="300" fill="#e57373">日</text>
    </g>
  </g>
  <!-- 日历（逐行出现） -->
  <g class="ui-seg" style="--d:1.4s" font-size="12">
    <text x="560.4" y="332" fill="#ccc" text-anchor="middle">27</text><text x="649.3" y="332" fill="#ccc" text-anchor="middle">28</text><text x="738.1" y="332" fill="#ccc" text-anchor="middle">29</text><text x="827.0" y="332" fill="#ccc" text-anchor="middle">30</text><text x="915.9" y="332" fill="#ccc" text-anchor="middle">31</text>
    <rect x="517.3" y="310" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="334" fill="#e57373" text-anchor="middle">1</text><text x="559.8" y="358" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="332" fill="#666" text-anchor="middle">2</text>
  </g>
  <g class="ui-seg" style="--d:1.55s" font-size="12">
    <text x="560.4" y="417.7" fill="#666" text-anchor="middle">3</text><text x="560.4" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="417.7" fill="#666" text-anchor="middle">4</text>
    <text x="738.1" y="417.7" fill="#666" text-anchor="middle">5</text><text x="738.1" y="441.7" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="417.7" fill="#666" text-anchor="middle">6</text>
    <text x="915.9" y="417.7" fill="#666" text-anchor="middle">7</text>
    <text x="1004.7" y="417.7" fill="#666" text-anchor="middle">8</text>
    <text x="1093.6" y="417.7" fill="#666" text-anchor="middle">9</text>
  </g>
  <g class="ui-seg" style="--d:1.7s" font-size="12">
    <text x="560.4" y="503.4" fill="#666" text-anchor="middle">10</text><text x="560.4" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="649.3" y="503.4" fill="#666" text-anchor="middle">11</text>
    <text x="738.1" y="503.4" fill="#666" text-anchor="middle">12</text><text x="738.1" y="527.4" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="827.0" y="503.4" fill="#666" text-anchor="middle">13</text>
    <text x="915.9" y="503.4" fill="#666" text-anchor="middle">14</text>
    <rect x="517.3" y="481.4" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="505.4" fill="#e57373" text-anchor="middle">15</text><text x="559.8" y="529.4" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="503.4" fill="#666" text-anchor="middle">16</text>
  </g>
  <g class="ui-seg" style="--d:1.85s" font-size="12">
    <text x="560.4" y="589.1" fill="#666" text-anchor="middle">17</text><text x="560.4" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="589.1" fill="#666" text-anchor="middle">18</text>
    <text x="738.1" y="589.1" fill="#666" text-anchor="middle">19</text><text x="738.1" y="613.1" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="589.1" fill="#666" text-anchor="middle">20</text>
    <text x="915.9" y="589.1" fill="#666" text-anchor="middle">21</text>
    <rect x="517.3" y="567.1" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="591.1" fill="#e57373" text-anchor="middle">22</text><text x="559.8" y="615.1" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <rect x="1051.2" y="567.1" width="84.9" height="81.7" rx="6" fill="#f8f9fa" stroke="#4285f4" stroke-width="1.5"/>
    <text x="1093.6" y="591.1" font-weight="700" fill="#4285f4" text-anchor="middle">23</text>
    <rect x="1101.6" y="581.1" width="18" height="14" rx="4" fill="#4285f4"/>
    <text x="1110.6" y="592.1" font-size="9" fill="#ffffff" text-anchor="middle">今</text>
    <text x="1093.6" y="615.1" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
  </g>
  <g class="ui-seg" style="--d:2s" font-size="12">
    <text x="560.4" y="674.8" fill="#666" text-anchor="middle">24</text><text x="560.4" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">2节</text>
    <text x="649.3" y="674.8" fill="#666" text-anchor="middle">25</text>
    <text x="738.1" y="674.8" fill="#666" text-anchor="middle">26</text><text x="738.1" y="698.8" font-size="11" fill="#34a853" text-anchor="middle">1节</text>
    <text x="827.0" y="674.8" fill="#666" text-anchor="middle">27</text>
    <text x="915.9" y="674.8" fill="#666" text-anchor="middle">28</text>
    <rect x="517.3" y="652.8" width="84.9" height="81.7" rx="6" fill="#fce4ec"/>
    <text x="559.8" y="676.8" fill="#e57373" text-anchor="middle">29</text><text x="559.8" y="700.8" font-size="11" font-weight="600" fill="#e57373" text-anchor="middle">休</text>
    <text x="1093.6" y="674.8" fill="#666" text-anchor="middle">30</text>
  </g>
  <g class="ui-seg" style="--d:2.15s" font-size="12">
    <text x="560.4" y="760.5" fill="#666" text-anchor="middle">31</text>
    <text x="649.3" y="760.5" fill="#ccc" text-anchor="middle">1</text><text x="738.1" y="760.5" fill="#ccc" text-anchor="middle">2</text><text x="827.0" y="760.5" fill="#ccc" text-anchor="middle">3</text><text x="915.9" y="760.5" fill="#ccc" text-anchor="middle">4</text><text x="1004.7" y="760.5" fill="#ccc" text-anchor="middle">5</text><text x="1093.6" y="760.5" fill="#ccc" text-anchor="middle">6</text>
  </g>
  <!-- 右侧：当日排课面板 -->
  <g class="ui-seg" style="--d:1.5s">
    <rect x="1150" y="256" width="360" height="566" rx="8" fill="#f8f9fa"/>
    <text x="1162" y="278" font-size="13" font-weight="600" fill="#333">2026年8月23日</text>
    <text x="1498" y="278" font-size="11" fill="#888" text-anchor="end">2 节课</text>
    <rect x="1162" y="288" width="132" height="28" rx="8" fill="#fff3e0"/>
    <text x="1228" y="307" font-size="12" font-weight="600" fill="#e65100" text-anchor="middle">设为不排课日/恢复</text>
    <rect x="1300" y="288" width="72" height="28" rx="8" fill="#fdecea"/>
    <text x="1336" y="307" font-size="12" font-weight="600" fill="#d32f2f" text-anchor="middle">清空排课</text>
    <rect x="1378" y="288" width="80" height="28" rx="8" fill="#4285f4"/>
    <text x="1418" y="307" font-size="12" font-weight="600" fill="#ffffff" text-anchor="middle">复制排课…</text>
    <text x="1162" y="340" font-size="12" font-weight="600" fill="#555">选择学生（点击添加，需填写上课/下课时间）</text>
    <g font-size="12">
      <rect x="1162" y="350" width="336" height="22" rx="6" fill="#e8f0fe" stroke="#4285f4"/><text x="1172" y="366" fill="#333">张三</text>
      <rect x="1162" y="376" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="392" fill="#333">李四</text>
      <rect x="1162" y="402" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="418" fill="#333">王五</text>
      <rect x="1162" y="428" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="444" fill="#333">赵六</text>
      <rect x="1162" y="454" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="470" fill="#333">钱七</text>
      <rect x="1162" y="480" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="496" fill="#333">孙八</text>
      <rect x="1162" y="506" width="336" height="22" rx="6" fill="#ffffff"/><text x="1172" y="522" fill="#333">周九</text>
    </g>
    <text x="1162" y="544" font-size="12" font-weight="600" fill="#555">已排课学生（可改时间 / 移除）</text>
    <g font-size="12">
      <text x="1162" y="571" font-weight="600" fill="#333">张三</text>
      <rect x="1200" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="572" fill="#333" text-anchor="middle">09:00</text>
      <rect x="1266" y="554" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="572" fill="#333" text-anchor="middle">10:00</text>
      <rect x="1332" y="554" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="572" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="607" font-weight="600" fill="#333">李四</text>
      <rect x="1200" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="608" fill="#333" text-anchor="middle">09:30</text>
      <rect x="1266" y="590" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="608" fill="#333" text-anchor="middle">10:30</text>
      <rect x="1332" y="590" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="608" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="643" font-weight="600" fill="#333">王五</text>
      <rect x="1200" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="644" fill="#333" text-anchor="middle">14:00</text>
      <rect x="1266" y="626" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="644" fill="#333" text-anchor="middle">15:00</text>
      <rect x="1332" y="626" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="644" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
      <text x="1162" y="679" font-weight="600" fill="#333">赵六</text>
      <rect x="1200" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1231" y="680" fill="#333" text-anchor="middle">15:30</text>
      <rect x="1266" y="662" width="62" height="26" rx="6" fill="#ffffff" stroke="#d0d6dd"/><text x="1297" y="680" fill="#333" text-anchor="middle">16:30</text>
      <rect x="1332" y="662" width="52" height="26" rx="8" fill="#fdecea"/><text x="1358" y="680" font-size="11" fill="#d32f2f" text-anchor="middle">移除</text>
    </g>
  </g>
  <!-- 底部状态栏 -->
  <g class="ui-seg" style="--d:2.6s">
    <path d="M0,822 L1518,822 A12,12 0 0 1 1530,834 L1530,850 L12,850 A12,12 0 0 1 0,838 Z" fill="#f5f5f5"/>
    <text x="20" y="840" font-size="11" fill="#888">就绪</text>
  </g>
</svg>`
</script>

<template>
  <div class="hs-showcase">
    <button class="hs-replay" type="button" @click="play">↻ 重播动画</button>

    <Transition name="hs-fade" mode="out-in">
      <!-- 阶段一：软件更新动画 -->
      <div v-if="phase === 'update'" key="update" class="hs-update">
        <div class="hs-update-card">
          <div class="hs-update-logo" v-html="faviconUp"></div>
          <h3 class="hs-update-title">正在更新 AgoraIn</h3>
          <p class="hs-update-sub">v2.7 → v2.8 · 课堂签到打卡系统</p>
          <div class="hs-update-bar">
            <div class="hs-update-fill" :style="{ width: pct + '%' }"></div>
          </div>
          <div class="hs-update-pct">{{ pct }}%</div>
          <div class="hs-update-steps">
            <span v-for="(s, i) in steps" :key="s" :class="{ done: pct >= (i + 1) * 20 }">{{ pct >= (i + 1) * 20 ? '✓' : '·' }} {{ s }}</span>
          </div>
        </div>
      </div>

      <!-- 阶段二：大屏模式窗口逐个元素出现 -->
      <div v-else-if="phase === 'screen'" key="screen" class="hs-stage">
        <div class="hs-stage-tag"><span class="hs-dot"></span>大屏模式 · 课堂签到打卡</div>
        <div v-html="screenSvg"></div>
      </div>

      <!-- 阶段三：控制模式窗口逐个元素出现 -->
      <div v-else-if="phase === 'control'" key="control" class="hs-stage">
        <div class="hs-stage-tag"><span class="hs-dot"></span>控制模式 · 课时划消与排课 + 集控平台</div>
        <div v-html="controlSvg"></div>
      </div>

      <!-- 阶段四：3 个 svg 并排（主页 logo） -->
      <div v-else key="final" class="hs-final">
        <div class="hs-final-title">AgoraIn v2.8 · 全新界面已就绪</div>
        <div class="hs-final-row">
          <div class="hs-final-card hs-final-logo" style="--d:0s">
            <div class="hs-final-icon" v-html="faviconFinal"></div>
            <div class="hs-final-name">AgoraIn 主标识</div>
            <div class="hs-final-desc">SignWave · 课堂签到</div>
          </div>
          <div class="hs-final-card hs-final-wide" style="--d:.25s">
            <div v-html="screenSvg"></div>
            <div class="hs-final-name">大屏模式</div>
          </div>
          <div class="hs-final-card hs-final-wide" style="--d:.5s">
            <div v-html="controlSvg"></div>
            <div class="hs-final-name">控制模式</div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
/* ===== HomeShowcase：软件更新动画 + 窗口逐个元素出现 ===== */
.hs-showcase {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: 8px 24px 0;
}

.hs-replay {
  position: absolute;
  top: 0;
  right: 24px;
  z-index: 5;
  font-size: 12px;
  line-height: 1;
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}
.hs-replay:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.hs-fade-enter-active,
.hs-fade-leave-active {
  transition: opacity 0.55s ease;
}
.hs-fade-enter-from,
.hs-fade-leave-to {
  opacity: 0;
}

/* ---- 更新界面 ---- */
.hs-update {
  display: flex;
  justify-content: center;
  padding: 34px 0 44px;
}
.hs-update-card {
  width: min(540px, 100%);
  background: linear-gradient(160deg, #0f172a 0%, #1e3a8a 55%, #0c4a6e 100%);
  border-radius: 22px;
  padding: 42px 46px 38px;
  text-align: center;
  color: #fff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
}
.hs-update-logo {
  width: 76px;
  height: 76px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 10px 22px rgba(37, 99, 235, 0.45));
}
.hs-update-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 6px;
  letter-spacing: 0.5px;
}
.hs-update-sub {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 28px;
}
.hs-update-bar {
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.hs-update-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #38bdf8, #34d399);
  transition: width 0.1s linear;
}
.hs-update-pct {
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  color: #7dd3fc;
}
.hs-update-steps {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  justify-content: center;
}
.hs-update-steps span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s;
}
.hs-update-steps span.done {
  color: #34d399;
}

/* ---- 窗口阶段 ---- */
.hs-stage {
  padding: 26px 0 10px;
  max-width: 1020px;
  margin: 0 auto;
}
.hs-stage-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 14px;
}
.hs-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  animation: hs-pulse 1.6s ease infinite;
}
@keyframes hs-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.75); }
}
.hs-win {
  display: block;
  width: 100%;
  border-radius: 12px;
  filter: drop-shadow(0 18px 40px rgba(15, 23, 42, 0.18));
}

/* SVG 内元素逐个出现 */
.hs-win .ui-seg {
  opacity: 0;
  transform-box: fill-box;
  animation: hs-seg-in 0.5s cubic-bezier(0.22, 0.68, 0.35, 1) forwards;
  animation-delay: var(--d, 0s);
}
@keyframes hs-seg-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---- 3 svg 并排 ---- */
.hs-final {
  padding: 34px 0 14px;
  text-align: center;
}
.hs-final-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #1d4ed8, #06b6d4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hs-final-row {
  display: flex;
  gap: 20px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}
.hs-final-card {
  flex: 1 1 280px;
  max-width: 440px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 22px 22px 18px;
  opacity: 0;
  animation: hs-card-in 0.6s ease forwards;
  animation-delay: var(--d, 0s);
}
@keyframes hs-card-in {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
.hs-final-logo {
  flex: 1 1 240px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
}
.hs-final-icon {
  width: 108px;
  height: 108px;
  margin-bottom: 14px;
  filter: drop-shadow(0 12px 26px rgba(37, 99, 235, 0.35));
}
.hs-final-name {
  margin-top: 14px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.hs-final-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 4px;
}
.hs-final-wide .hs-win {
  border-radius: 10px;
  filter: drop-shadow(0 10px 24px rgba(15, 23, 42, 0.12));
}

/* 响应式 */
@media (max-width: 960px) {
  .hs-update-card { padding: 34px 26px 30px; }
  .hs-final-row { gap: 14px; }
  .hs-final-logo { min-height: auto; }
}
@media (max-width: 640px) {
  .hs-showcase { padding: 4px 12px 0; }
  .hs-replay { right: 12px; }
  .hs-stage-tag { font-size: 12px; }
}
</style>
