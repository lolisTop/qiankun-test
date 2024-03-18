<script lang="ts" setup>
import { registerMicroApps, start } from 'qiankun'
import type { RegistrableApp } from 'qiankun'
import { store } from '@/store'
import commonStore from '@common/store'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
const router = useRouter()
onMounted(() => {
  nextTick(() => {
    const microApps = [
      {
        name: 'sub-project1',
        entry: '//localhost:8080',
        activeRule: '/sub-project1/'
      },
      {
        name: 'sub-project2',
        entry: '//localhost:8081',
        activeRule: '/sub-project2'
      }
    ]
    const subApps = microApps.map<RegistrableApp<any>>((item) => ({
      ...item,
      container: '#subApp-viewport', // 子应用挂载的div
      props: {
        routerBase: item.activeRule, // 下发基础路由
        defaultState: store.state,
        onStoreChange: commonStore.eventDelegation,
        faRouter: router
      }
    }))
    registerMicroApps(subApps, {
      beforeLoad: async (app) => {
        console.log('before load app.name====>>>>>', app.name)
      },
      beforeMount: async (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
      afterMount: async (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
        // TEST 主应用传子应用状态
        const data = {
          setIsDark: (isDark) => {
            appStore.setIsDark(isDark)
            commonStore.mainToSub({ appStore })
          }
        }
        commonStore.mainToSub(data)
      },
      afterUnmount: async (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      }
    })
    start({
      prefetch: 'all',
      sandbox: {
        experimentalStyleIsolation: true
      }
    })
  })
})
</script>

<template>
  <div id="subApp-viewport">1111111111111</div>
</template>
