// 1.CommonJS的模块化规范
const { add, mul } = require("./js/mathUtils")

console.log(add(20, 30))
console.log(mul(2, 3))

// 2.ES6的模块化规范
import { name, age, height } from "./js/info"
console.log(name)
console.log(age)
console.log(height)

// 3.依赖css文件
require("./css/normal.css")

// 4.依赖less文件
require("./css/special.less")
document.writeln("你好，小明")

// 5.使用vue进行开发
import Vue from "vue"
// import App from './vue/app'
import App from "./vue/App.vue"

new Vue({
  el: "#app",
  template: "<App></App>",
  components: {
    App
  }
})

document.writeln("<span>成功了</span>")
