### 一、FeatureView

- 独立组件封装FeatureView
  - div>a>img



### 二、TabControl

- 独立组件的封装
  - props  =>  titles
  - div  >  根据titles  v-for遍历  div => span{{title}}
  - css相关
  - 选中哪一个tab，哪一个tab的文字颜色变色，下面的border-bottom
    - currentIndex



### 三、首页商品数据的请求

#### 3.1 设计数据结构

goods: {

​	pop: page/list

​	new: page/list

​	sell: page/list

}

#### 3.2 发送数据请求

- 在home.js中封装getHomeGoods(type, page)
- 在Home.vue中，又在methods中getHomeGoods(type)
- 调用getHomeGoods('pop')/getHomeGoods('new')/getHomeGoods('sell')
  - page: 动态获取对应的page
- 获取到数据：res
  - this.goods[type].list.push(...res.data.list)
  - this.goods[type].page += 1

goods: {

​	pop: page1/list[30]

​	new: page1/list[30]

​	sell: page1/list[30]

}



### 四、对商品数据进行展示

#### 4.1 封装GoodsList.vue组件

- props: goods => list[30]
- v-for goods => GoodsListItem[30]
- GoodListItem(组件) => GoodsItem(数据)

#### 4.2 封装GoodsListItem.vue组件

- props: goodsItem
- goodsItem取出数据，并且使用正确的div/span基本标签进行展示



### 五、对滚动进行重构：Better-Scroll

#### 5.1 在index.html中使用Better-scroll

- const bscroll = new BScroll(el, {})

- 注意：wrapper => content => 很多内容
- 1. 监听滚动
     - probeType: 0/1/2(手指滚动)/3(只要是滑动)
     - bscroll.on("scroll", position => {})
  2. 上拉加载
     - pullUpLoad: true
     - bscroll.on("pullingUp", () => {})
  3. click: false
     - button可以监听点击
     - div不可以

#### 5.2 在Vue项目中使用Better-scroll

- 在Profile.vue中简单的演示
- 对Better-Scroll进行封装：Scroll.vue
- Home.vue和Scroll.vue之间进行通信
  - Home.vue将probeType设置为3
  - Scroll.vue需要通过$emit，实时将事件发送到Home.vue



### 六、回到顶部BackTop

#### 6.1 对BackTop.vue进行组件的封装

#### 6.2 如何监听组件的点击

- 直接监听back-top的点击，但是不可以监听？
  - 不可以，必须添加修饰.native
- 回到顶部
  - scroll对象，scroll.scrollTo(x, y, time)
  - this.$refs.scroll.scrollTo(0, 0, 500)

#### 6.3 BackTop组件的显示和隐藏

- isShowBackTop: false
- 监听滚动，拿到滚动的位置：
  - -position.y > 1000  =>  isShowBackTop: true
  - isShowBackTop = -position.y > 1000



### 七、解决首页中可滚动区域的问题

- Better-scroll在决定有多少区域可以滚动时，是根据scrollerHeight属性决定
  - scrollerHeight属性是根据放在Better-Scroll的content中的子组件高度
  - 但是我们的首页中，刚开始计算scrollerHeight属性时，是没有将图片计算在内的
  - 所以，计算出来的告诉是错误的
  - 后来图片加载进来之后有了新的高度，但是scrollerHeight属性并没有进行更新，所以滚动出现了问题
- 如何解决这个问题？
  - 监听第一张图片是否加载完成，只要有一张图片加载完成了，执行一次refresh()
  - 如何监听图片加载完成？
    - 原生的js监听图片：img.onload = function(){}
    - Vue中监听：@load="方法"
  - 调用scroll的refresh()
- 如何将GoodsListItem.vue中的事件传入到Home.vue中
  - 因为涉及到非父子组件的通信，所以这里我们选择了事件总线
    - bus => 总线
    - Vue.prototype.$bus = new Vue()
    - this.￥bus.￥emit("事件名称", 参数)  （￥改为$）
    - this.￥bus.￥on("事件名称", 回调函数(参数))
- 对于refresh非常频繁的问题，进行防抖操作
  - 防抖debounce/节流throttle
  - 防抖函数起作用的过程：
    - 如果我们直接执行refresh，那么refresh函数会被执行30次
    - 可以将refresh函数传入到debounce函数中，生成一个新的函数
    - 之后在调用非常频繁的时候，就使用新生成的函数
    - 而新生成的函数并不会非常调用，如果下一次执行来的非常快，那么会将上一次取消掉

```javascript
debounce(func, delay) {
      let timer = null
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
```



