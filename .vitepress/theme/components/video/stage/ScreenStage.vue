<script setup lang="ts">
import { screenWindowSvg } from '../windows'
</script>

<template>
  <section class="vstage vs-scr">
    <div class="vstage-title">大屏模式 · 课堂签到打卡</div>
    <div class="vstage-sub">学生点击即签到 · 实时排名 · 迟到一目了然</div>
    <div class="vstage-chips">
      <span>多任务标签</span>
      <span>金/银/铜排行榜</span>
      <span>二维码签到</span>
      <span>Web 签到</span>
      <span>实时统计</span>
      <span>缺勤提醒</span>
    </div>

    <div class="vs-scr-wrap">
      <div v-html="screenWindowSvg"></div>

      <!-- 演示叠加层：签到点亮（学生26-30） -->
      <div class="vs-over s26"><span class="vs-chk">✓</span></div>
      <div class="vs-over s27"><span class="vs-chk">✓</span></div>
      <div class="vs-over s28"><span class="vs-chk">✓</span></div>
      <div class="vs-over s29"><span class="vs-chk">✓</span></div>
      <div class="vs-over s30"><span class="vs-chk">✓</span></div>

      <!-- 统计条更新 -->
      <div class="vs-stat">总人数: 40 &nbsp;|&nbsp; 已打卡: 30 &nbsp;(75%)</div>

      <!-- 排名新增 -->
      <div class="vs-rank">9 &nbsp; 王小明 &nbsp; 08:25:01</div>

      <!-- 底部提示 -->
      <div class="vs-tip">签到实时同步至排名与统计</div>
    </div>
  </section>
</template>

<style>
.vstage-chips {
  margin-top: 1.2%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  opacity: 0;
  animation: v-fade-up 0.7s ease 1.6s forwards;
}
.vstage-chips span {
  font-size: 13px;
  color: #93c5fd;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.25);
  padding: 4px 12px;
  border-radius: 999px;
  white-space: nowrap;
}
.vs-scr-wrap {
  position: relative;
  width: min(94%, 1120px);
}
.vs-scr-wrap .hs-win {
  display: block;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 26px 60px rgba(2, 6, 23, 0.5);
}

/* 学生按钮点亮叠加层（坐标按窗口 viewBox 1530x850 换算百分比） */
.vs-over {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  box-shadow: 0 0 24px rgba(6, 182, 212, 0.65);
  opacity: 0;
}
.vs-over .vs-chk {
  color: #fff;
  font-size: 26px;
  font-weight: 800;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.s26 { left: 47.03%; top: 49.65%; width: 9.8%; height: 6.12%; animation: v-pop-in 0.7s ease 6s forwards; }
.s27 { left: 57.42%; top: 49.65%; width: 9.8%; height: 6.12%; animation: v-pop-in 0.7s ease 7s forwards; }
.s28 { left: 67.81%; top: 49.65%; width: 9.8%; height: 6.12%; animation: v-pop-in 0.7s ease 8s forwards; }
.s29 { left: 78.2%; top: 49.65%; width: 9.8%; height: 6.12%; animation: v-pop-in 0.7s ease 9s forwards; }
.s30 { left: 88.59%; top: 49.65%; width: 9.8%; height: 6.12%; animation: v-pop-in 0.7s ease 10s forwards; }

/* 统计条更新 */
.vs-stat {
  position: absolute;
  left: 36.34%;
  top: 14.35%;
  width: 62.35%;
  height: 4.7%;
  display: flex;
  align-items: center;
  padding-left: 1.2%;
  border-radius: 8px;
  background: #dbeafe;
  border: 1px solid #93c5fd;
  color: #2563eb;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  animation: v-show-in 0.7s ease 11s forwards;
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.45);
}

/* 排名新增行 */
.vs-rank {
  position: absolute;
  left: 15.16%;
  top: 44.47%;
  display: flex;
  align-items: center;
  padding: 0.5% 1.4%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.18);
  color: #334155;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.7s ease 12s forwards;
}
.vs-rank::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #34d399;
  margin-right: 8px;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.7);
}

/* 底部提示 */
.vs-tip {
  position: absolute;
  left: 50%;
  bottom: -9%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(96, 165, 250, 0.4);
  color: #bfdbfe;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.7s ease 14s forwards;
}
</style>