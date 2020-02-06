<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息</p>
    <h2>{{ userId }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  created() {
    console.log("user created");
    // document.title = "用户";
  },
  destroyed() {
    console.log("user destroyed");
  }
};
</script>
<style scoped></style>
