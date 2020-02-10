### 一、上拉加载更多的功能

- 监听什么时候滚动到底部
- 将事件传递到父组件中
- 解决只能加载一次的问题



### 二、tabControl的吸顶效果

#### 2.1 获取到tabControl的offsetTop

- 必须知道滚动到多少时，开始有吸顶效果，这个时候就需要获取tabControl的offsetTop
- 但是，如果直接在mounted中获取tabControl的offsetTop，那么值是不正确
- 如何获取正确的值？
  - 监听HomeSwiper中的加载完成
  - 加载完成后，发出事件，在Home.vue中获取正确的值
  - 补充：为了不让HomeSwiper多次发出事件，可以使用isLoad变量进行状态的记录
  - 注意：这里不进行多次调用和debounce的区别

#### 2.2 监听滚动，动态改变tabControl的样式

- 问题：动态的改变tabControl的样式时，会出现两个问题
  - 问题一：下面的闆内容，会突然上移
  - 问题二：tabControl虽然设置了fixed，但是也随着Better-Scroll一直滚出去了
- 其他方案来解决停留问题：
  - 在最上面，多复制了一份TabControl组件对象，利用它来实现停留效果
  - 当我们滚动到一定位置时，PlaceHolderTabControl显示出来
  - 当用户滚动没有达到一定位置时，PlaceHolderTabControl隐藏起来

