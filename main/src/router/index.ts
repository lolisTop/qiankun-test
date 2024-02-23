// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{ path: '/', component: () => import('../view/home.vue') },
	{ path: '/about', component: () => import('../view/about.vue') }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
