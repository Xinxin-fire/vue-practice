import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import "amfe-flexible/index.js"

const Vue = createApp(App)
Vue.use(ElementPlus)
Vue.use(router)
Vue.use(store)
// router.push('/login')
Vue.mount('#app')
