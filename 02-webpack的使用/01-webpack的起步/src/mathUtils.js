function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// CommonJS的导出方式
module.exports = {
  add,
  mul
}
