## Vue Day 06

### 一、Vue-Router

#### 1.1 什么是前端路由

- 后端渲染/后端路由
- 前后端分离
- SPA/前端路由



#### 1.2 路由的基本配置

- 安装vue-router
- vue.use => 创建VueRouter对象 => 挂载到Vue实例上
- 配置映射关系
  1. 创建组件
  2. 配置映射关系
  3. 使用router-link/router-view



#### 1.3 细节处理

- 默认路由：redirect
- mode：history
- router-link => tag/replace/active-class



#### 1.4 动态路由

- /user/:id
- this.$router.params.id



#### 1.5 参数的传递

- params
- query => URL
- URL:
  - 协议：//主机：端口/路径？查询
  - scheme://localhost:port/path?query#fragment



#### 1.6 路由嵌套

- children:[]



#### 1.7 导航守卫

- 全局导航守卫
- 路由独享守卫
- 组件类守卫



#### 1.8 Keep-alive



#### 1.9 TabBar的封装过程