// path必须是绝对路径，所以可以动态获取绝对路径，使用node语法
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // 在url前面加上路径
    // publicPath: 'dist/'
  },
  module: {
    rules: [{
        // 正则表达式
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 当加载的图片小于limit时，会将图片编译成base64字符串形式
            // 当加载的图片大于limit时，需要使用file-loader模块进行加载
            // 并且将加载完毕的放在dist中，名字是32位的hash值，目的是为了防止重复，
            // 所以需要在url前面拼接一个dist，在output中设置publicPath即可
            // 可以设置打包的图片在dist中的位置和文件名字，比如img/name
            // 但是还是可能出现重复可以，比如head中的aa.png和footer中的aa.png
            // 所有还是需要hash值的，名字：img/name.hash:8(只显示8位)
            limit: 10000,
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    // alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归我所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: './dist',
  //   inline: true
  // }
}