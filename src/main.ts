import { createApp } from 'vue'
import './style.css'
import './main.css'

import App from './App.vue'
import router from './router'
import { store } from './store/index'
import icon from '@/components/Icon.vue'

const app = createApp(App)
//注册
app.component('Icon', icon)

app.use(store).use(router).mount('#app')
