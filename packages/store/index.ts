import { ref } from 'vue'
import mitt from 'mitt'
const emitter = mitt()
class UseGlobalState {
  constructor() {}
  state = ref<Record<string, any>>({})
  isInit: boolean = false
  addState(key: string, value: any) {
    this.state.value[key] = value
  }
  getState(key: string) {
    return this.state.value[key]
  }
  register(state: typeof this.state) {
    // debugger
    this.state.value = state
  }
  mainToSub(data: Record<string, any>) {
    emitter.emit('foo', data)
  }
  subToMain(data: Record<string, any>) {
    emitter.emit('bar', data)
  }
  eventDelegation = (subListener: Function) => {
    emitter.on('foo', (data: Record<string, any>) => {
      subListener(data)
    })
  }
}

export default new UseGlobalState()
