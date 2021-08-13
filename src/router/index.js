import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    children: [
      {
        path: '/password',
        name: 'Password',
        component: () => import('../views/login/Password.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
