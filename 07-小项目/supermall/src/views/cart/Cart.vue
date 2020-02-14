<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList"

import { mapGetters } from "vuex"

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    // 直接使用vuex中的getters中的内容而不用先引入再使用
    // 语法一：直接使用不改名
    // ...mapGetters(["cartLength"])
    // 语法二：可以在此组件中更改名字
    ...mapGetters({
      length: "cartLength"
    })
  }
}
</script>
<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
