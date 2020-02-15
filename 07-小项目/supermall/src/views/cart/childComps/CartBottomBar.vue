<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton"

import { mapGetters } from "vuex"

export default {
  name: "CartBottonBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
          .toFixed(2)
      )
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false
      // 1.使用filter
      // return !(this.cartList.filter(item => !item.checked).length)

      // 2.使用find
      // return !this.cartList.find(item => !item.checked)

      // 3.普通遍历
      for (let item of this.cartList) {
        if (!item.checked) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    checkClick() {
      // console.log("点击成功")
      if (this.isSelectAll) {
        // 全部选中
        this.cartList.forEach(item => (item.checked = false))
      } else {
        this.cartList.forEach(item => (item.checked = true))
      }
      // this.cartList.forEach(item => (item.checked = !this.isSelectAll))
    },
    calcClick() {
      let length = this.cartList.filter(item => item.checked).length
      if (length > 0) {
        this.$toast.show("购买成功")
      } else {
        this.$toast.show("请选择购买的商品")
      }
    }
  }
}
</script>
<style scoped>
.bottom-bar {
  display: flex;
  height: 49px;
  line-height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: #f40;
  color: white;
  text-align: center;
}
</style>
