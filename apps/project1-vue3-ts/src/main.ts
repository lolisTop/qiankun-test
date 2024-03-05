import { createApp, App as AppRoot } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
// import 'virtual:uno.css'
import './style.css'
import App from './App.vue'

// 引入状态管理
import { setupStore } from '@/store'
// import { useGlobalState } from '@/store/modules/global'

// 路由
import router, { setupRouter } from './router/index'

import { useGlobalState } from '@/store/modules/global'

let root: AppRoot

async function render(props: any = {}) {
  const { container, routerBase, defaultState, onStoreChange } = props
  root = createApp(App)
  const c = container ? container.querySelector('#app') : document.getElementById('app')

  setupStore(root)

  setupRouter(root, routerBase)

  // await router(routerBase).isReady()

  root.mount(c)

  const globalState = useGlobalState()

  globalState.state = defaultState

  onStoreChange((state) => {
    console.log(
      '%c 😪: render -> state ',
      'font-size:16px;background-color:#88584b;color:white;',
      state
    )
  })
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
