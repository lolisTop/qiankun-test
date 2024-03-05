<template>
  <div>
    <el-card shadow="never">
      <el-button @click="routerTo('/sub/sub-project1/home')"
        >/sub/sub-project1/home</el-button
      >
      <el-button @click="routerTo('/sub/sub-project1/about')"
        >/sub/sub-project1/about</el-button
      >
      <el-button @click="routerTo('/sub/sub-project2/home')"
        >/sub/sub-project2/home</el-button
      >
      <el-button @click="routerTo('/sub/sub-project2/about')"
        >/sub/sub-project2/about</el-button
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
