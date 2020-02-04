<template>
  <div id="app">
    <h2>--------App内容--------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
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
  }
};
</script>

<style>
</style>
