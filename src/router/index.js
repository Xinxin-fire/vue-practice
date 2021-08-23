import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/overview',
    component: Home,
    title: '首页',
    children: [
      {
        path: '/overview',
        name: 'OverviewData',
        title: '数据总览',
        component: () => import('../views/overview/OverviewData.vue')
      },
      {
        path: '/table',
        name: 'Table',
        title: '表格',
        component: () => import('../views/table/Table.vue')
      },
      {
        path: '/map',
        name: 'Map',
        title: '地图',
        component: () => import('../views/map/Map.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    component: () => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
