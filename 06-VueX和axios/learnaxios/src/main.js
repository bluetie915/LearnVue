import Vue from "vue"
import App from "./App.vue"

import axios from "axios"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")

// 1.axios的基本使用
// axios({
//   // 默认get请求
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 2.axios的并发请求
// axios
//   .all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata"
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "pop",
//         page: 5
//       }
//     })
//   ])
//   .then(res => {
//     console.log(res)
//     console.log(res[0])
//     console.log(res[1])
//   })

// 3.全局配置进行网络请求
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000

// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "pop",
//         page: 5
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1)
//       console.log(res2)
//     })
//   )

// 4.创建对应的axios实例
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 5000
})

instance1({
  url: "/home/multidata"
}).then(res => {
  console.log(res)
})
instance1({
  url: "/home/data",
  params: {
    type: "pop",
    age: 2
  }
})
