import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VideoShowcase from './components/video/VideoShowcase.vue'
import JikongShowcase from './components/video/JikongShowcase.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VideoShowcase', VideoShowcase)
    app.component('JikongShowcase', JikongShowcase)
  },
}
