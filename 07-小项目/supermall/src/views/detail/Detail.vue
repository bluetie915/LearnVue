<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComp/DetailNavBar"
import DetailSwiper from "./childComp/DetailSwiper"
import DetailBaseInfo from "./childComp/DetailBaseInfo"
import DetailShopInfo from "./childComp/DetailShopInfo"
import DetailGoodsInfo from "./childComp/DetailGoodsInfo"
import DetailParamInfo from "./childComp/DetailParamInfo"
import DetailCommentInfo from "./childComp/DetailCommentInfo"

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail.js"
import { debounce } from "common/util.js"
import { itemListenerMixin } from "common/mixin.js"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      // 1.获取顶部的图片轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )

      // 6.取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      // 1.第一次获取
      // 值是不对的，因为this.$refs.params.$el还没有渲染
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs)

      // 2.第二次获取
      // 值也是不对的，图片没有计算在内
      // 保存各个组件的offsetTop
      // 根据最新的数据，对应的DOM是已经被渲染出来
      // 但是图片依然是没有加载完毕(目前获取到offsetTop不包含其中的图片)
      // this.$nextTick(() => {
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs)
      // })
    })

    // 3.请求推荐的数据
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })

    // 4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    }, 1)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      // console.log("----")
      this.getThemeTopY()
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentScroll(position) {
      // console.log(position)
      // 1.获取y值
      const positionY = -position.y

      let length = this.themeTopYs.length

      // 2.positionY和主题中值进行对比
      for (let i = 0; i < length - 1; i++) {
        // i默认是字符串形式
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }

        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     positionY >= this.themeTopYs[i] &&
        //     positionY < this.themeTopYs[i + 1]) ||
        //     (i === length - 1 && positionY >= this.themeTopYs[i]))
        // ) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
      }
    }
  },
  mounted() {
    // 内容在混入中
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener)
  }
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>
