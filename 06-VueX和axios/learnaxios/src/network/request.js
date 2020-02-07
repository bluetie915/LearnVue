import axios from "axios"

// 1.回调函数的方式
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   })

//   // 2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       failure(err)
//     })
// }

// 2.Promise的方式
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 3.升级版Promise的方式
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截器的作用
  instance.interceptors.request.use(
    config => {
      // console.log(config)
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // 3.某些网络请求(登录token)，必须携带一些特殊的信息
      return config
    },
    err => {
      // console.log(err)
    }
  )

  // 2.2响应拦截的作用
  instance.interceptors.response.use(
    res => {
      console.log(res)
      return res.data
    },
    err => {
      console.log(err)
    }
  )

  // 3.发送真正的网络请求
  return instance(config)
}
