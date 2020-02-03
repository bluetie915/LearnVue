// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const cpn = {
//   template: `<div>{{message}}</div>`,
//   data() {
//     return {
//       message: '我是组件message'
//     }
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function (createElement) {
    // 1.普通用法：createElement('标签', {标签的属性}, [''])
    //   return createElement('h2',
    //     {class: 'box'},
    //     ['Hello World', createElement('button', ['按钮'])])

    // 2.传入组件对象
    // return createElement(cpn)

    // 3.正规的写法
    return createElement(App)
  }
  // components: {
  //   App
  // },
  // template: '<App/>'
})

// runtime-compiler
// template -> ast -> render -> virtual dom -> UI

// runtime-only
// 1.性能高 2.代码少
// render -> virtual dom -> UI
// 在解析.vue时，其中的template直接渲染成render函数，没有template -> ast -> render这个步骤
// 所以引入.vue时，引入的就不是一个template，而是一个render函数
// 而这个解析过程就是vue-template-compiler帮我们完成的
// 所以在运行的时候，不需要使用runtime-compiler，
// 因为此时所有的.vue(vue组件)都是不包涵template的，只包涵render函数
