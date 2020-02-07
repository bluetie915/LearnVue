// 1.导入的{}中定义的变量
import { flag, sum } from "./aaa.js"
if (flag) {
  console.log("小明是天才")
  console.log(sum(90, 390))
}

// 2.直接导入export定义的变量
import { num1, height } from "./aaa"
console.log(num1)
console.log(height)

// 3.导入export的function/class
import { mul, Person } from "./aaa"
console.log(mul(10, 28))

const p = new Person()
p.run()

// 4.导入export default中的内容
// 可以自己定义名字，导入的就是默认的唯一
import addr from "./aaa"

// 5.统一全部导入
import * as aaa from "./aaa"
console.log(aaa.flag)
console.log(aaa.name)
