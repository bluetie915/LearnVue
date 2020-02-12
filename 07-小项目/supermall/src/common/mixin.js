import { debounce } from "common/util.js"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      // console.log("加载完毕")
      newRefresh()
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener)
    console.log("我是混入中的内容")
  }
}
