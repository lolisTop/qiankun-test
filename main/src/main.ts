import { createApp } from 'vue';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import microApps from './micro-app';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

registerMicroApps(microApps);
setDefaultMountApp('/sub-vue-cli-vue2');
start();
