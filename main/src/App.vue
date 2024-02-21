<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<HelloWorld msg="test" />
	<!-- 挂在微前端页面 -->
	<div id="subApp-viewport"></div>
</template>

<style scoped></style>
