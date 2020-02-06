export default {
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
}
