import { createPinia } from 'pinia'
import router from './router'
import './styles/index.scss'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont.css'
const app = createApp(App)
app.config.globalProperties.$ELEMENT = { size: 'mini' }
app
  .use(createPinia())
  .use(router)
  .mount('#app')
