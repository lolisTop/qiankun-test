import type { RegistrableApp } from 'qiankun'
console.log(import.meta.env)

export const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)

const microApps = [
  {
    name: 'sub-vue-cli-vue2',
    entry: '//localhost:8080',
    activeRule: '/sub/sub-vue-cli-vue2'
  },
  {
    name: 'sub-vue-cli-vue3',
    entry: '//localhost:8081',
    activeRule: '/sub/sub-vue-cli-vue3'
  }
]
const subApps = microApps.map<RegistrableApp<any>>((item) => ({
  ...item,
  container: '#subApp-viewport', // 子应用挂载的div
  props: {
    routerBase: item.activeRule // 下发基础路由
  }
}))
console.log('%c 😴: subApps ', 'font-size:16px;background-color:#97f821;color:black;', subApps)

export default subApps
