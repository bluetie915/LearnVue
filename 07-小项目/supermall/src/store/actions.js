import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  addCart(context, payload) {
    // payload是新添加的商品，如果是同一个商品，不添加各类，只添加个数
    // 方法1：原始方法用if和else进行判断
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // if (oldProduct) {
    //   oldProduct.count += 1
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }

    // 方法2：使用find方法
    let oldProduct = context.state.cartList.find(
      item => item.iid === payload.iid
    )
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }
  }
}
