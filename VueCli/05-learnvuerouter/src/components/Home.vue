<template>
  <div>
    <h2>我是主页</h2>
    <h2>我是主页内容，哈哈</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {}
  }
}
</script>
<style scoped></style>
