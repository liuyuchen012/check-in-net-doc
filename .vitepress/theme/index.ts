import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomePage from './components/HomePage.vue'
import DownloadCenter from './components/DownloadCenter.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import './style.css'
import './mkt.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('DownloadCenter', DownloadCenter)
    app.component('VideoPlayer', VideoPlayer)
  },
}
