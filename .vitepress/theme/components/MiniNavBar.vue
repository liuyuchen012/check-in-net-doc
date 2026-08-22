<script setup lang="ts">
import { useData } from 'vitepress'
import { ref } from 'vue'

const { isDark, toggleAppearance } = useData()
const menuOpen = ref(false)
</script>

<template>
  <div class="mini-nav">
    <div class="mini-nav-inner">
      <a class="mini-nav-brand" href="/miniprogram/">
        <img class="mini-nav-logo" src="/favicon.svg" alt="logo" />
        <span class="mini-nav-title">移动多端应用</span>
      </a>

      <nav class="mini-nav-links">
        <!-- 项目切换 -->
        <div class="mini-nav-switch" @mouseenter="menuOpen = true" @mouseleave="menuOpen = false">
          <button class="mini-nav-btn" type="button" @click="menuOpen = !menuOpen">
            项目
            <span class="mini-nav-caret" :class="{ open: menuOpen }">▾</span>
          </button>
          <transition name="mini-drop">
            <div v-if="menuOpen" class="mini-nav-dropdown" @click="menuOpen = false">
              <a class="mini-nav-drop-item" href="/">AgoraIn 桌面端</a>
              <a class="mini-nav-drop-item active" href="/miniprogram/">移动多端应用</a>
            </div>
          </transition>
        </div>

        <!-- 独立下载区域 -->
        <a class="mini-nav-link" href="/download">下载</a>

        <!-- 明暗切换 -->
        <button
          class="mini-nav-theme"
          type="button"
          :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
          @click="toggleAppearance()"
        >
          <span v-if="isDark">☀</span>
          <span v-else>🌙</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.mini-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vp-nav-height);
  background: var(--vp-nav-bg-color);
  border-bottom: 1px solid var(--vp-c-divider);
  z-index: 30;
  display: flex;
  align-items: center;
  backdrop-filter: saturate(180%) blur(8px);
}

.mini-nav-inner {
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mini-nav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.mini-nav-logo {
  width: 24px;
  height: 24px;
}

.mini-nav-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

.mini-nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mini-nav-switch {
  position: relative;
}

.mini-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mini-nav-btn:hover {
  background: var(--vp-c-brand-soft);
}

.mini-nav-caret {
  font-size: 12px;
  color: var(--vp-c-text-2);
  transition: transform 0.2s;
}

.mini-nav-caret.open {
  transform: rotate(180deg);
}

.mini-nav-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 160px;
  padding: 6px;
  background: var(--vp-nav-dropdown-bg-color, var(--vp-c-bg));
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: var(--vp-shadow-2);
  display: flex;
  flex-direction: column;
}

.mini-nav-drop-item {
  display: block;
  padding: 8px 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;
}

.mini-nav-drop-item:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.mini-nav-drop-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.mini-nav-link {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;
}

.mini-nav-link:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.mini-nav-theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 15px;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mini-nav-theme:hover {
  background: var(--vp-c-brand-soft);
}

.mini-drop-enter-active,
.mini-drop-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}

.mini-drop-enter-from,
.mini-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 640px) {
  .mini-nav-inner {
    padding: 0 16px;
  }

  .mini-nav-title {
    display: none;
  }

  .mini-nav-dropdown {
    left: auto;
    right: 0;
  }
}
</style>
