import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashBoard from '../modules/app/views/DashBoard.vue'
import LoginView from '../modules/Auth/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: DashBoard
  },
  {
    path: '/auth',
    name: 'auth',
    component:LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
