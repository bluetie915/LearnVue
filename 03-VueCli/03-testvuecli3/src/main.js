import Vue from "vue"
import App from "./App.vue"

// 产品提示信息，一般在发布的时候会用到，但是开发的时候不用
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
