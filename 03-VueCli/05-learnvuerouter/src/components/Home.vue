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
  data() {
    return {
      message: "你好",
      path: "/home/news"
    };
  },
  created() {
    // 组件创建出来时回调
    console.log("home created");
    // document.title = "首页";
  },
  destroyed() {
    console.log("home destroyed");
  },

  // 切记，此两个回调方法，必须是在keep-alive的情况下，才可以使用，否则无效
  // 要用keep-alive保证首页中的两个子组件不改变
  // 活跃状态
  activated() {
    // console.log("home activated");
    this.$router.push(this.path);
  },
  // 非活跃状态(此方法行不通，因为此时this.$route.path已经变成了点击(更改)的组件)
  // deactivated() {
  //   console.log(this.$route.path);
  //   // console.log("home deactivated");
  //   this.path = this.$route.path;
  // }

  // 必须在此路由页面离开之前，先将当前路径保存下来，然后在下次进来时直接赋值
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }

  // mounted() {
  //   // template挂载到dom上回调
  //   console.log('mounted');
  // },
  // updated() {
  //   // 页面上有内容更新时回调
  //   console.log('updated');
  // },
};
</script>
<style scoped></style>
