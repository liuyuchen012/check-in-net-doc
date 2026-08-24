import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VideoShowcase from './components/video/VideoShowcase.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VideoShowcase', VideoShowcase)
  },
}
