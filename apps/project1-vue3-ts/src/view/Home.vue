<template>
  <div> App1 - Home </div>
  <div>{{ commonStoreC }}</div>
  <!-- <div>{{ stateC.state }}</div> -->
  <div style="cursor: pointer" @click="mainCommand">调用主应用方法</div>
</template>

<script lang="ts" setup>
import commonStore from '@common/store'
const commonStoreC = ref()
const isDark = ref(false)
const mainCommand = () => {
  isDark.value = !isDark.value
  commonStore.state.value.main.setIsDark(isDark.value)
}

watchEffect(() => {
  commonStoreC.value = commonStore.state
})

onUnmounted(() => {})
</script>

<style scoped></style>
