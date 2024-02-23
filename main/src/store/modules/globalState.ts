import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalState = defineStore('globalState', () => {
	const state = ref(0);
	return {
		state
	};
});
