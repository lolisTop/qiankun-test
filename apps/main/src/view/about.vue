<script setup lang="ts">
import { registerMicroApps, start } from 'qiankun';
import type { RegistrableApp } from 'qiankun';

const microApps = [
	{
		name: 'sub-vue-cli-vue2',
		entry: '//localhost:8080',
		activeRule: '/about/sub-vue-cli-vue2'
	},
	{
		name: 'sub-vue-cli-vue3',
		entry: '//localhost:8081',
		activeRule: '/about/sub-vue-cli-vue3'
	}
];
const subApps = microApps.map<RegistrableApp<any>>((item) => ({
	...item,
	container: '#subApp-viewport', // 子应用挂载的div
	props: {
		routerBase: item.activeRule // 下发基础路由
	}
}));
registerMicroApps(subApps, {
	beforeLoad: async (app) => {
		console.log('before load app.name====>>>>>', app.name);
	},
	beforeMount: async (app) => {
		console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
	},
	afterMount: async (app) => {
		console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
	},
	afterUnmount: async (app) => {
		console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
	}
});

start();
</script>

<template>
	<div>about</div>
	<!-- 挂在微前端页面 -->
	<div id="subApp-viewport"></div>
</template>

<style scoped></style>
