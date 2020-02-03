// CommonJS的模块化规范
const {
  add,
  mul
} = require('./js/mathUtils')

console.log(add(20, 30))
console.log(mul(2, 3))

// ES6的模块化规范
import {
  name,
  age,
  height
} from "./js/info"
console.log(name)
console.log(age)
console.log(height)