<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="recommends" />
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
      recommends: []
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
    })

    // 3.请求推荐的数据
    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
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
