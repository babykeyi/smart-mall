import { Toast, Tabbar, TabbarItem, Swipe, SwipeItem, Search, Lazyload, Grid, GridItem } from 'vant'

import Vue from 'vue'

Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Lazyload)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
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
