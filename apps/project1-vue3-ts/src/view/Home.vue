<template>
  <div> App1 - Home </div>
  <div>{{ globalState.state }}</div>
  <!-- <div>{{ stateC.state }}</div> -->
</template>

<script lang="ts" setup>
// import utils, { testObj } from '@common/utils'
// import useGlobalState from '@common/store'
import { useGlobalState } from '@/store/modules/global'
const globalState = useGlobalState()
console.log(
  '%c 🇨🇿: globalState ',
  'font-size:16px;background-color:#c6099b;color:white;',
  globalState
)
// let index: number = Number((globalState.state.name || '').match(/\-foo(\d+)/)?.[1]) || 0
// let timer
// if (typeof index === 'number') {
//   timer = setInterval(() => {
//     console.log('done')

//     index++
//     globalState.state.name = `home-foo${index}`
//   }, 1000)
// }

onUnmounted(() => {
  // clearInterval(timer)
})
</script>

<style scoped></style>
