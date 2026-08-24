<template>
  <div class="vs-mobile">
    <div class="vs-mobile-title" aria-label="移动多端协同">移动多端协同</div>
    <div class="vs-mobile-sub">教师、学生、家长多角色随时随地接入课堂</div>

    <div class="vs-mobile-grid">
      <div class="vs-mobile-card android">
        <div class="vs-card-icon android-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.523 15.341c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm-11.046 0c-.5 0-.906-.405-.906-.905s.406-.906.906-.906c.5 0 .906.406.906.906s-.406.905-.906.905Zm11.41-6.168 1.73-2.995a.408.408 0 0 0-.706-.408l-1.752 3.033c-1.316-.602-2.797-.946-4.37-.946-1.573 0-3.055.344-4.37.946L6.09 5.77a.408.408 0 0 0-.706.408l1.73 2.995C4.577 10.871 2.75 13.78 2.75 17.104h18.5c0-3.324-1.827-6.233-4.363-7.931ZM6.167 18.917c0 .506.41.916.916.916h.917v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h2.25v2.75c0 .76.615 1.375 1.375 1.375s1.375-.615 1.375-1.375v-2.75h.917a.917.917 0 0 0 .916-.916V8.583H6.167v10.334Z"/>
          </svg>
        </div>
        <div class="vs-card-title">Android 管理员端</div>
        <ul class="vs-card-list">
          <li>实时签到：学生扫码/人脸核验，结果秒级同步</li>
          <li>任务管理：教师随时创建、暂停、结束签到任务</li>
          <li>班级统计：应到/实到/缺勤一目了然，支持导出</li>
          <li>本地缓存：弱网环境先存后传，数据不丢失</li>
          <li>推送通知：缺勤/课时不足自动提醒</li>
        </ul>
      </div>

      <div class="vs-mobile-card web">
        <div class="vs-card-icon web-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <div class="vs-card-title">Web 多端协同</div>
        <ul class="vs-card-list">
          <li>学生扫码签到：微信/浏览器直接打开，无需安装</li>
          <li>教师大屏展示：实时榜单、随机点名、课堂氛围</li>
          <li>家长课消查询：剩余课时、上课记录透明可见</li>
          <li>数据实时同步：手机、PC、大屏三端一致</li>
        </ul>
      </div>
    </div>

    <div class="vs-mobile-sync">
      <span class="vs-sync-dot" />
      与集控服务器实时同步，离线数据自动补发
    </div>
  </div>
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
  padding: 3%;
}
.vs-mobile-title {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e2e8f0;
  opacity: 0;
  animation: v-fade-up 0.8s ease 0.2s forwards;
}
.vs-mobile-sub {
  font-size: 16px;
  color: #94a3b8;
  margin: 0.6% 0 0;
  opacity: 0;
  animation: v-fade-up 0.7s ease 0.6s forwards;
}
.vs-mobile-grid {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3%;
  width: min(86%, 1100px);
}
.vs-mobile-card {
  position: relative;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(26px);
}
.vs-mobile-card.android { animation: v-card-in 0.8s ease 0.9s forwards; }
.vs-mobile-card.web { animation: v-card-in 0.8s ease 1.4s forwards; }
@keyframes v-card-in {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: translateY(0); }
}
.vs-card-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 12px;
}
.vs-card-icon svg { width: 24px; height: 24px; }
.android-icon { background: rgba(16, 185, 129, 0.16); color: #34d399; }
.web-icon { background: rgba(37, 99, 235, 0.16); color: #60a5fa; }
.vs-card-title {
  font-size: 20px;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 10px;
}
.vs-card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.vs-card-list li {
  position: relative;
  padding-left: 16px;
  font-size: 14px;
  color: #cbd5e1;
  line-height: 1.45;
  opacity: 0;
  animation: v-fade-up 0.5s ease forwards;
}
.vs-mobile-card.android .vs-card-list li:nth-child(1) { animation-delay: 1.3s; }
.vs-mobile-card.android .vs-card-list li:nth-child(2) { animation-delay: 1.6s; }
.vs-mobile-card.android .vs-card-list li:nth-child(3) { animation-delay: 1.9s; }
.vs-mobile-card.android .vs-card-list li:nth-child(4) { animation-delay: 2.2s; }
.vs-mobile-card.android .vs-card-list li:nth-child(5) { animation-delay: 2.5s; }
.vs-mobile-card.web .vs-card-list li:nth-child(1) { animation-delay: 1.8s; }
.vs-mobile-card.web .vs-card-list li:nth-child(2) { animation-delay: 2.1s; }
.vs-mobile-card.web .vs-card-list li:nth-child(3) { animation-delay: 2.4s; }
.vs-mobile-card.web .vs-card-list li:nth-child(4) { animation-delay: 2.7s; }
.vs-card-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #60a5fa;
}
.vs-mobile-sync {
  margin-top: 2.6%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #7dd3fc;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.3);
  padding: 8px 18px;
  border-radius: 999px;
  opacity: 0;
  animation: v-fade-up 0.7s ease 3.2s forwards;
}
.vs-sync-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
  animation: v-pulse 1.6s infinite;
}
@keyframes v-pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}
@media (max-width: 720px) {
  .vs-mobile-grid { grid-template-columns: 1fr; width: 96%; gap: 16px; }
  .vs-mobile-card { padding: 18px; }
}
</style>
