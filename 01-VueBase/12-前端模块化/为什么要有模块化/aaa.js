// 小明开发时用到的js
var moduleA = (function () {
  // 导出的对象
  var obj = {}

  var name = '小明'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20))
  }

  obj.flag = flag
  obj.sum = sum

  return obj
})()

// CommonJs方法的导出：模块化写法，去bbb.js接收
// moduleB.experts = {
//   flag: flag,
//   sum: sum
// }