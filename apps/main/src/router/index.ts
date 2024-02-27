// router/index.js
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: () => import('../view/home.vue') },
	{ path: '/about/:path*', component: () => import('../view/about.vue') }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
