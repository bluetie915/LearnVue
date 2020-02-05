<template>
  <div id="app">
    <h2>--------App内容--------</h2>
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>--------App内容：getters相关信息--------</h2>
    <h2>counter的平方：{{powerCounter}}</h2>
    <h2>年龄大于20的学生：{{more20stu}}</h2>
    <h2>年龄大于20的学生的个数：{{more20stuLength}}</h2>
    <h2>年龄大于age的学生个数：{{$store.getters.moreAgeStu(22)}}</h2>
    <h2>--------Hello Vuex内容--------</h2>
    <!-- 可以使用父子组件通信 -->
    <!-- <hello-vuex :cpncounter="counter"></hello-vuex> -->
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: "app",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是App组件"
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    powerCounter() {
      return this.$store.getters.powerCounter;
    },
    more20stu() {
      // 如果多个组件都需要，就不能在每个组件中都使用computed，可以在vuex中设置一个getters，在此直接调用
      // return this.$store.state.students.filter(s => s.age > 20);
      return this.$store.getters.more20stu;
    },
    more20stuLength() {
      // 如果多个组件都需要，就不能在每个组件中都使用computed，可以在vuex中设置一个getters，在此直接调用
      // return this.$store.state.students.filter(s => s.age > 20);
      return this.$store.getters.more20stuLength;
    }
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style>
</style>
