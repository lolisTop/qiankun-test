import { createApp } from 'vue';
import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';
import './style.css';
import App from './App.vue';
// import router from './router';
import store from './store';

createApp(App).use(store).mount('#app');

registerMicroApps(microApps, {
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
