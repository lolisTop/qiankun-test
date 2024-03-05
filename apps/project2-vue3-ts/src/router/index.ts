import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { viewRouter } from './modules/index'

// 创建路由实例
const router = (base: string = '/') =>
  createRouter({
    history: createWebHistory(base), // createWebHashHistory URL带#，createWebHistory URL不带#
    strict: true,
    routes: viewRouter as RouteRecordRaw[],
    scrollBehavior: () => ({ left: 0, top: 0 })
  })

export const setupRouter = (app: App<Element>, routerBase: string) => {
  app.use(router(routerBase))
}

export default router
