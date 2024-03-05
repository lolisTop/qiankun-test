import { defineStore } from 'pinia'

export const useGlobalState = defineStore('global', () => {
  interface State {
    name?: string
    age?: number
  }
  const state = ref<State>({
    // name: 'lolis',
    // age: 110
  })
  return { state }
})
