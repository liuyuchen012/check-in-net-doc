<script setup lang="ts">
import { controlWindowSvg } from '../windows'
</script>

<template>
  <section class="vstage vs-ctl">
    <div class="vstage-title">控制模式 · 课时划消与排课</div>
    <div class="vstage-sub">选课划课 · 日历排课 · 课时记录自动留存</div>
    <div class="vstage-chips">
      <span>批量划消/增加</span>
      <span>课时流水记录</span>
      <span>月历排课</span>
      <span>不排课日</span>
      <span>自动扣减</span>
      <span>复制排课</span>
    </div>

    <div class="vs-ctl-wrap">
      <div v-html="controlWindowSvg"></div>

      <!-- 划消课时：张三 剩12 → 剩10 -->
      <div class="vs-c-lesson">剩10</div>
      <!-- 课时记录新增 -->
      <div class="vs-c-record">
        <span class="d">2026-08-24</span>
        <span class="m">-2</span>
        <span class="t">数学课</span>
      </div>
      <!-- 日历 24 号排课 -->
      <div class="vs-c-cal">2节</div>
      <!-- 排课面板新增王五 -->
      <div class="vs-c-sched">
        <span class="n">王五</span>
        <span class="tm">14:00</span>
        <span class="tm">15:00</span>
        <span class="rm">移除</span>
      </div>

      <div class="vs-tip">课时自动划消，排课一目了然</div>
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
  font-size: clamp(10px, 1vw, 13px);
  color: #a7f3d0;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.25);
  padding: 4px 12px;
  border-radius: 999px;
  white-space: nowrap;
}
.vs-ctl-wrap {
  position: relative;
  width: min(94%, 1120px);
}
.vs-ctl-wrap .hs-win {
  display: block;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 26px 60px rgba(2, 6, 23, 0.5);
}

/* 划消课时：覆盖“剩12” */
.vs-c-lesson {
  position: absolute;
  left: 27.71%;
  top: 24.24%;
  width: 3.14%;
  height: 1.65%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #2563eb;
  color: #fff;
  font-size: clamp(8px, 0.85vw, 11px);
  font-weight: 700;
  opacity: 0;
  animation: v-pop-in 0.6s ease 6s forwards;
  box-shadow: 0 0 12px rgba(37, 99, 235, 0.7);
}

/* 课时记录新增一行 */
.vs-c-record {
  position: absolute;
  left: 76.6%;
  top: 32.94%;
  display: flex;
  gap: 3%;
  align-items: center;
  font-size: clamp(8px, 0.9vw, 11.5px);
  background: #fff;
  padding: 0.4% 1.2%;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(2, 6, 23, 0.16);
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.6s ease 8s forwards;
}
.vs-c-record .d { color: #64748b; }
.vs-c-record .m { color: #d32f2f; font-weight: 800; }
.vs-c-record .t { color: #475569; }

/* 日历 24 号新增排课 */
.vs-c-cal {
  position: absolute;
  left: 33.8%;
  top: 82.21%;
  width: 5.55%;
  text-align: center;
  font-size: clamp(8px, 0.9vw, 11.5px);
  font-weight: 700;
  color: #16a34a;
  background: rgba(34, 197, 94, 0.16);
  border-radius: 4px;
  padding: 0.3% 0;
  opacity: 0;
  animation: v-pop-in 0.6s ease 10s forwards;
}

/* 排课面板新增王五 */
.vs-c-sched {
  position: absolute;
  left: 75.95%;
  top: 73.65%;
  width: 21.96%;
  height: 3.06%;
  display: flex;
  align-items: center;
  gap: 1.2%;
  padding: 0 1%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 6px 16px rgba(2, 6, 23, 0.2);
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.6s ease 12s forwards;
}
.vs-c-sched .n { color: #1e293b; font-weight: 700; font-size: clamp(8px, 0.9vw, 12px); }
.vs-c-sched .tm {
  color: #334155;
  font-size: clamp(7px, 0.8vw, 11px);
  border: 1px solid #d0d6dd;
  border-radius: 6px;
  padding: 0.3% 2.4%;
}
.vs-c-sched .rm {
  color: #d32f2f;
  font-size: clamp(7px, 0.8vw, 10px);
  background: #fdecea;
  border-radius: 8px;
  padding: 0.4% 2.6%;
}
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
  font-size: clamp(11px, 1.1vw, 14px);
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
  opacity: 0;
  animation: v-show-in 0.7s ease 14s forwards;
}
</style>