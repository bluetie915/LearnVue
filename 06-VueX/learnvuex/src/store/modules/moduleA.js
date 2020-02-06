export default {
  state: {
    name: "Bob"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // 去当前模块中的mutations中查找方法
    aUpdateName(context) {
      setTimeout(() => {
        context.commit("updateName", "Blank")
      }, 1000)
    }
  },
  getters: {
    // 既可以引用当前模块中的getters，也可以引用根模块中的getters
    fullName(state) {
      return state.name + " Smith"
    },
    // 默认首先使用的同一模块中的getters
    fullName2(state, getters) {
      return getters.fullName + "2"
    },
    // 也可以传参使用根store的state
    fullName3(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  }
}
