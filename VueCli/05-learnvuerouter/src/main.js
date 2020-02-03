import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

// console.log(router);
