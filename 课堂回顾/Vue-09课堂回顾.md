## 详情页实现思路

***

#### 一、点击商品进入详情页

- GoodsListItem点击
- 点击之后获取商品的iid，跳转到详情页，并且传入iid

#### 二、解决首页保持位置状态

- deactivated：记录离开时的位置
- activated：通过scroll函数，设置离开时位置
- bug：Better-Scroll最新的有scrollTo的位置

#### 三、详情页的导航栏实现

- 返回按钮
- 标题列表的展示：center

#### 四、请求详情数据

- 接口：/detail?id=

#### 五、轮播图的实现

- Swiper/SwiperItem

#### 六、商品基本信息的展示

- 数据来自四面八方
- 对数据进行汇总：一个对象当中
- 一个对象传入到子组件中

#### 七、店铺信息的展示

#### 八、参数信息的展示

#### 九、参数信息的展示

#### 十、评论信息的展示

- 时间格式化
- 服务器返回的时间戳 date => 格式化
- yyyy-MM-dd hh:mm:ss

#### 十一、推荐数据的展示

- 请求推荐数据
- GoodsList展示数据

#### 十二、mixin的使用

- 创建混入对象：const mixin = {}
- 组件对象中：mixins: [mixin]

#### 十三、处理两个bug

- 首页tabControl
- 详情滚动的bug

#### 十四、标题和内容的联动效果

##### 14.1 点击标题滚动到对应的主题

- 在detail中监听标题的点击，获取index
- 滚动到对应的主题：
  - 获取所有主题的offsetTop
  - 问题：在哪里才能获取到正确的offsetTop
    - created肯定不行，压根不能获取元素
    - mounted也不行，数据还没有获取到
    - 获取数据的回调中也不行，DOM还没有渲染完
    - $nextTick也不行，因为图片的高度没有被计算在内
    - 在图片加载完成之后，获取的高度才是正确的

##### 14.2 内容滚动，显示正确的标题

###### 普通做法

```js
(
    this.currentIndex !== i &&
		((i < length - 1 &&
		positionY >= this.themeTopYs[i] &&
		positionY < this.themeTopYs[i + 1]) ||
	(i === length - 1 && positionY >=       
     	this.themeTopYs[i]))
)
条件成立：this.currentIndex = i
条件一：防止赋值的过程过于频繁
条件二：(i < length - 1 &&
		  positionY >= this.themeTopYs[i] &&
		  positionY < this.themeTopYs[i + 1]) ||
	   (i === length - 1 && positionY >=       
     	  this.themeTopYs[i])
	条件1：i < length - 1 &&
		  positionY >= this.themeTopYs[i] &&
		  positionY < this.themeTopYs[i + 1]
		判断区间：在0和某个数字之间(i === length - 1)
	条件2：i === length - 1 && positionY >=       
     	   this.themeTopYs[i]
		判断大于等于：i === length - 1
```

###### hack做法

```js
this.currentIndex !== i &&
	positionY >= this.themeTopYs[i] &&
	positionY < this.themeTopYs[i + 1]
```

#### 十五、顶部工具栏的封装

#### 十六、详情页的回到顶部

- home.vue和detail.vue回到顶部：mixin

#### 十七、点击加入购物车

##### 17.1 监听加入购物车点击，并且获取商品信息

- 监听
- 获取商品信息：iid/price/image/title/desc

##### 17.2 将商品添加到Vuex中

- 安装Vuex
- 配置Vuex
- 定义mutations，将商品添加到state.cartList
- 重构代码：
  - 将mutations中的代码抽取到actions(定义两个mutations)
  - 将mutations/actions单独文件中

#### 十八、购物车的展示

##### 18.1 购物车的导航栏的展示

##### 18.2 购物车商品的展示

- CartList => Scroll(滚动问题)
- CartListItem => CheckButton

##### 18.3 商品的选中和不选中状态

- 修改模型对象，改变选中和不选中

##### 18.4 底部工具栏的汇总

- 全选按钮
- 计算总价格
- 去计算

#### 十九、购物车的全选按钮

- 显示状态
  - 判断是否有一个不选中，全选就是不选中状态
- 点击全选按钮
  - 如果原来都是选中的，点击一次，则全部不选中
  - 如果原来都是不选中(某些不选中)，则全部选中

#### 二十、添加购物车弹窗

##### 20.1 Vuex的补充

- Actions可以返回一个Promise
- mapActions的映射关系

