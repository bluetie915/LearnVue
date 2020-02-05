import Vue from 'vue';
import Vuex from 'vuex';

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [{
        id: 1,
        name: 'why',
        age: 18
      },
      {
        id: 2,
        name: 'kobe',
        age: 24
      },
      {
        id: 3,
        name: 'bluetie',
        age: 19
      },
      {
        id: 4,
        name: 'tom',
        age: 22
      }
    ]
  },
  mutations: {
    // 方法
    increment(state) {
      console.log("+++")
      state.counter++
    },
    decrement(state) {
      console.log("---")
      state.counter--
    }
  },
  actions: {},
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    // 不仅state可以作为参数，getters也可以作为参数
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    // 获取年龄大于age的学生，但是age由用户来传入
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      // 使用箭头函数
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {}
})

// 3.导出store独享
export default store