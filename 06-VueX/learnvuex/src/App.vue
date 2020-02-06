<template>
  <div id="app">
    <h2>--------Hello info对象的内容是否是响应式--------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>--------App内容--------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu(10)">添加学生</button>

    <h2>--------App内容：getters相关信息--------</h2>
    <h2>counter的平方：{{ powerCounter }}</h2>
    <h2>年龄大于20的学生：{{ more20stu }}</h2>
    <h2>年龄大于20的学生的个数：{{ more20stuLength }}</h2>
    <h2>年龄大于age的学生个数：{{ $store.getters.moreAgeStu(22) }}</h2>

    <h2>--------Hello Vuex内容--------</h2>
    <!-- 可以使用父子组件通信 -->
    <!-- <hello-vuex :cpncounter="counter"></hello-vuex> -->
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex"
import { INCREMENT } from "./store/mutations-types"
export default {
  name: "app",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是App组件"
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    powerCounter() {
      return this.$store.getters.powerCounter
    },
    more20stu() {
      // 如果多个组件都需要，就不能在每个组件中都使用computed，可以在vuex中设置一个getters，在此直接调用
      // return this.$store.state.students.filter(s => s.age > 20);
      return this.$store.getters.more20stu
    },
    more20stuLength() {
      // 如果多个组件都需要，就不能在每个组件中都使用computed，可以在vuex中设置一个getters，在此直接调用
      // return this.$store.state.students.filter(s => s.age > 20);
      return this.$store.getters.more20stuLength
    }
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit("decrement")
    },
    addCount(count) {
      // payload：负载
      // 1.普通的提交封装
      // this.$store.commit("incrementCount", count);

      // 2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count
      })
    },
    addStu() {
      const stu = {
        id: 4,
        name: "alan",
        age: 25
      }
      this.$store.commit("addStudent", stu)
    },
    updateInfo() {
      // 此提交直接到mutations无法异步，异步必须提交到actions中
      // this.$store.commit("updateInfo");

      // 通过dispatch()可以进行异步操作
      // 要返回成功通知，因payload可以是个对象，可以将payload分成两个部分，携带信息和成功方法
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "我是携带的信息，我也可以是对象",
      //   success: () => {
      //     console.log("里面的东西已经全部完成了");
      //   }
      // });

      this.$store.dispatch("aUpdateInfo", "我是携带的信息")
    }
  }
}
</script>

<style></style>
