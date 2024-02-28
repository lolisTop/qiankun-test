import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/home.vue';
import About from '../view/about.vue';
// TODO 无法动态引入，使用import找不到对应目录
const routes = [
	{ path: '/home', component: () => import('../view/home.vue') },
	{ path: '/about', component: () => import('../view/about.vue') }
];

const router = (baseUrl) =>
	createRouter({
		history: createWebHistory(baseUrl),
		routes
	});

export default router;
