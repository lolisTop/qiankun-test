import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

let instance = null;
function render(props = {}) {
	const { container, routerBase } = props;
	const baseUrl = window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL;
	console.log('%c 💎: /sub/sub-vue-cli-vue3 - baseUrl ', 'font-size:16px;background-color:#2feec0;color:black;', baseUrl);
	instance = createApp(App)
		.use(router(baseUrl))
		.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
	console.log('[vue] props from main framework', props);
	render(props);
}
export async function unmount() {
	if (instance) {
		// instance.unmount();
		instance.$el.innerHTML = '';
		instance = null;
	}
}
