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

