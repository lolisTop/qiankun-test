<template>
  <div> App2 - About </div>
  <el-button @click="$faRouter.push('/sub-project1/home')">link to App1/home</el-button>
  <el-button @click="$faRouter.push('/sub-project1/about')">link to App1/about</el-button>
</template>

<script lang="ts" setup></script>

<style scoped></style>
