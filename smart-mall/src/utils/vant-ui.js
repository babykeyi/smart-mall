import { Toast, Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'
Vue.use(Toast)
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
