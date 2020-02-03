<template>
  <div>
    <h2>我是主页</h2>
    <h2>我是主页内容，哈哈</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>
<script>
export default {
  name: "Home",
  created() {
    // 组件创建出来时回调
    console.log("created");
    // document.title = "首页";
  },
  // mounted() {
  //   // template挂载到dom上回调
  //   console.log('mounted');
  // },
  // updated() {
  //   // 页面上有内容更新时回调
  //   console.log('updated');
  // },
  data() {
    return {
      message: "你好"
    };
  }
};
</script>
<style scoped></style>
