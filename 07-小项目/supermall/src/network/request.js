import axios from "axios"

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/hy",
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      // console.log(err)
    }
  )

  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      // console.log(err)
    }
  )

  return instance(config)
}
