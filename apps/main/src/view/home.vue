<script setup lang="ts">
import { useGlobalState } from '../store';

let globalState = useGlobalState();

const add = () => {
	globalState.state = globalState.state + 1;
};
</script>

<template>
	<div @click="add">home count: {{ globalState.state }}</div>
</template>

<style scoped></style>
