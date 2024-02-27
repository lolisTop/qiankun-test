<template>
  <div>
    <el-card shadow="never">
      <el-button @click="routerTo('/sub/sub-vue-cli-vue2')">/sub/sub-vue-cli-vue2</el-button>
      <el-button @click="routerTo('/sub/sub-vue-cli-vue3')">/sub/sub-vue-cli-vue3</el-button>
      <div id="subApp-viewport">1111111111111</div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { registerMicroApps, start } from 'qiankun'
import microApps from '../../micro-app'
const router = useRouter() // 路由对象

function routerTo(path) {
  router.push(path)
}
onMounted(() => {
  nextTick(() => {
    registerMicroApps(microApps, {
      beforeLoad: async (app) => {
        console.log('before load app.name====>>>>>', app.name)
      },
      beforeMount: async (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
      afterMount: async (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      },
      afterUnmount: async (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      }
    })
    start({
      prefetch: 'all',
      sandbox: {
        // strictStyleIsolation: true,
        // experimentalStyleIsolation: true
      }
    })
  })
})
</script>
