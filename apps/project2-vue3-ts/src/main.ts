import { createApp, App as AppType } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
// import 'virtual:uno.css'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from './router/index'

let root: AppType

async function render(props: any = {}) {
  // debugger
  const { container, routerBase, faRouter } = props
  root = createApp(App)
  const c = container ? container.querySelector('#app') : document.getElementById('app')

  setupRouter(root, routerBase)

  // await router(routerBase).isReady()

  root.config.globalProperties.$faRouter = faRouter

  root.mount(c)
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {},
  unmount(props: any) {
    root?.unmount()
  },
  update(props: any) {
    console.log(props)
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  // debugger
  render()
}
