// 引入unocss css
import '@/plugins/unocss'

// 导入全局的svg图标
import '@/plugins/svgIcon'

// 引入qiankun
import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'

// 引入状态管理
import { setupStore } from '@/store'

// 全局组件
import { setupGlobCom } from '@/components'

// 引入 element-plus
import { setupElementPlus } from '@/plugins/elementPlus'

// 引入 form-create
import { setupFormCreate } from '@/plugins/formCreate'

// 引入全局样式
import '@/styles/index.scss'

// 引入动画
import '@/plugins/animate.css'

// 路由
import router, { setupRouter } from '@/router'

// 权限
import { setupAuth } from '@/directives'

import { createApp } from 'vue'

import App from './App.vue'

import './permission'

// import '@/plugins/tongji' // 百度统计
import Logger from '@/utils/Logger'

import VueDOMPurifyHTML from 'vue-dompurify-html' // 解决v-html 的安全隐患

// 创建实例
const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupGlobCom(app)

  setupElementPlus(app)

  setupFormCreate(app)

  setupRouter(app)

  setupAuth(app)

  await router.isReady()

  app.use(VueDOMPurifyHTML)

  app.mount('#app')
}

setupAll()

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

Logger.prettyPrimary(`欢迎使用`, import.meta.env.VITE_APP_TITLE)
