export default {
  // context：上下文
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  // 在传递完成之后，要返回一个通知，告诉已经完成了
  //     console.log(payload.message)
  //     payload.success()
  //   }, 1000);
  // }

  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updateInfo")
        console.log(payload)
        resolve("11111")
      }, 1000)
    })
  }
}
