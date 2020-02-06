import { INCREMENT } from "./mutations-types"

export default {
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
}
