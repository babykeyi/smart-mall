import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/Share.css'
import '@/assets/fonts/iconfont.css'
import '@/utils/vant-ui.js'
import '@/utils/storage.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
