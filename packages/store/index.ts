class UseGlobalState {
  constructor() {}
  state: Record<string, any> = {}
  isInit: boolean = false
  setState(key: string, value: any) {
    // debugger
    this.state[key] = value
  }
  getState(key: string) {
    return this.state[key]
  }
  register(state: typeof this.state) {
    // debugger
    this.state = state
  }
}

export default new UseGlobalState()
