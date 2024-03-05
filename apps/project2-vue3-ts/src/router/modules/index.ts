import type { RouteRecordRaw } from 'vue-router'

export const viewRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/view/Home.vue'),
    name: 'Home'
  },
  {
    path: '/about',
    component: () => import('@/view/About.vue'),
    name: 'About'
  }
]
