// path必须是绝对路径，所以可以动态获取绝对路径，使用node语法
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}