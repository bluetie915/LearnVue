// 小红开发时用到的js
var moduleB = (function() {
  var obj = {}

  var name = "小红"
  var flag = false

  console.log(name)

  obj.flag = flag
  return obj
})()

// CommonJS方法的导入：在bbb.js中接收aaa模块方法传来的内容
// var aaa = require('./aaa.js')
// var flag = aaa.flag
// var sum = aaa.sum
// sum(10, 20)
