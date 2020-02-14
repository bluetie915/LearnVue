import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload是新添加的商品，如果是同一个商品，不添加各类，只添加个数
      // 方法1：原始方法用if和else进行判断
      // let oldProduct = null
      // for (let item of state.carList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // if (oldProduct) {
      //   oldProduct.count += 1
      // } else {
      //   payload.count = 1
      //   state.carList.push(payload)
      // }

      // 方法2：使用find方法
      let oldProduct = state.carList.find(item => item.iid === payload.iid)
      if (product) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        state.carList.push(payload)
      }
    }
  }
})

export default store
