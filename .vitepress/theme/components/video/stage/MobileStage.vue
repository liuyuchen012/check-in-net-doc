<script setup lang="ts">
import { useLens } from '../lens'

const { lens } = useLens([
  [0, 50, 45, 1],      // 全景
  [3, 50, 45, 1],
  [5, 38, 45, 2.2],    // Android 图标
  [8, 38, 45, 2.2],
  [10, 62, 45, 2.2],   // Web 图标
  [13, 62, 45, 2.2],
  [14.5, 50, 66, 2.5], // 同步指示
  [16, 50, 45, 1],     // 回全景
])
</script>

<template>
  <section class="vstage" :style="{ transform: lens }">
    <div class="vs-mobile">
      <div class="vs-mobile-icons">
        <div class="vs-mobile-icon android-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.523 15.341c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm-11.046 0c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm11.41-6.168 1.73-2.995a.408.408 0 0 0-.706-.408l-1.752 3.033c-1.316-.602-2.797-.946-4.37-.946-1.573 0-3.055.344-4.37.946L6.09 5.77a.408.408 0 0 0-.706.408l1.73 2.995C4.577 10.871 2.75 13.78 2.75 17.104h18.5c0-3.324-1.827-6.233-4.363-7.931ZM6.167 18.917c0 .506.41.916.916.916h.917v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h2.25v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h.917a.917.917 0 0 0 .916-.916V8.583H6.167v10.334Z"/>
          </svg>
        </div>
        <div class="vs-mobile-icon web-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
      </div>
      <div class="vs-mobile-sync"><span class="vs-sync-dot" /></div>
    </div>
  </section>
</template>

<style scoped>
.vs-mobile {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vs-mobile-icons {
  display: flex;
  gap: 7%;
  align-items: center;
}
.vs-mobile-icon {
  width: 132px;
  height: 132px;
  border-radius: 34px;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(26px);
}
.vs-mobile-icon svg {
  width: 70px;
  height: 70px;
}
.android-icon {
  background: rgba(16, 185, 129, 0.16);
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.35);
  animation: v-mob-in 0.8s ease 0.9s forwards;
}
.web-icon {
  background: rgba(37, 99, 235, 0.16);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.35);
  animation: v-mob-in 0.8s ease 1.4s forwards;
}
@keyframes v-mob-in {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: translateY(0); }
}
.vs-mobile-sync {
  margin-top: 4.5%;
  padding: 9px 22px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.3);
  opacity: 0;
  animation: v-fade-up 0.7s ease 2.4s forwards;
}
.vs-sync-dot {
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #34d399;
  animation: v-pulse 1.6s infinite;
}
@keyframes v-pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
  70% { box-shadow: 0 0 0 12px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
</style>
