import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from "./store/index"

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from "components/common/toast/index"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端的300毫秒延迟
FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
