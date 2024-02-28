<template>
  <div>
    <el-card shadow="never">
      <el-button @click="routerTo('/sub/sub-vue-cli-vue2/home')"
        >/sub/sub-vue-cli-vue2/home</el-button
      >
      <el-button @click="routerTo('/sub/sub-vue-cli-vue2/about')"
        >/sub/sub-vue-cli-vue2/about</el-button
      >
      <el-button @click="routerTo('/sub/sub-vue-cli-vue3/home')"
        >/sub/sub-vue-cli-vue3/home</el-button
      >
      <el-button @click="routerTo('/sub/sub-vue-cli-vue3/about')"
        >/sub/sub-vue-cli-vue3/about</el-button
      >
    </el-card>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter() // 路由对象

function routerTo(path) {
  router.push(path)
}
</script>
