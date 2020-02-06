import Vue from "vue"
import Vuex from "vuex"
import { INCREMENT } from "./mutations-types"

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {
        id: 1,
        name: "why",
        age: 18
      },
      {
        id: 2,
        name: "kobe",
        age: 24
      },
      {
        id: 3,
        name: "bluetie",
        age: 19
      },
      {
        id: 4,
        name: "tom",
        age: 22
      }
    ],
    info: {
      name: "kobe",
      age: 19,
      height: 198
    }
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // state.counter += count
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state可以满足一般的修改，但是新增和删除不能使用传统方法
      state.info.name = "bluetie"

      // 数组方法新增不是响应式的
      // state.info['address'] = 'China'

      // 用Vue.set可以实现响应式
      // Vue.set(state.info, 'address', 'China')

      // delete方法删除不是响应式
      // delete state.info.height

      // 用Vue.delete可以做到响应式
      // Vue.delete(state.info, 'height')

      // mutations无法检测异步操作，所有不要在mutations中使用异步操作
      // 想要异步修改，必须在actions中调用mutations
      // setTimeout(() => {
      //   state.info.name = 'bluetie'
      // }, 1000);
    }
  },
  actions: {
    // context：上下文
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    // 在传递完成之后，要返回一个通知，告诉已经完成了
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000);
    // }

    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo")
          console.log(payload)
          resolve()
        }, 1000)
      })
    }
  },
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
