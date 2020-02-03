<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
    {{name}}
  </div>
</template>

<script>
export default {
  name: "cpn",
  data() {
    return {
      name: "cpn组件的name"
    };
  },
};
</script>

<style>

</style>