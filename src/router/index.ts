import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashBoard from '../modules/app/views/DashBoard.vue'
import LoginView from '../modules/Auth/LoginView.vue'
import { authGuard } from './auth-guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    component: DashBoard,
    beforeEnter:[authGuard]
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
