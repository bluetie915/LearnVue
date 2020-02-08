import { request } from "./request"

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  })
}

// 将一个数组push到另一个数组中
// let totalNums = []
// const nums1 = [10, 20, 30]
// const nums2 = [111, 222, 333]
// 1.原生for循环
// for(let i of nums1){
//   totalNums.push(i)
// }
// 2.新的方法
// totalNums.push(...nums1)

