import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import "amfe-flexible/index.js"
import '@/style/base-style.scss'
import '@/assets/icons'
import SvgIcon from '@/components/SvgIcon';// svg component

const Vue = createApp(App)
Vue.use(ElementPlus)
Vue.use(router)
Vue.use(store)
Vue.component('svg-icon', SvgIcon);
// router.push('/login')
Vue.mount('#app')
