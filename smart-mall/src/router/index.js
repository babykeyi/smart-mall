import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Login from '@/views/Login/Login.vue'
import Search from '@/views/Search/Search.vue'
import SearchList from '@/views/Search/SearchList.vue'
import Order from '@/views/Order/Order.vue'
import Pay from '@/views/Pay/Pay.vue'
import Home from '@/views/Layout/Home.vue'
import Cart from '@/views/Layout/Cart.vue'
import Classification from '@/views/Layout/Classification.vue'
import About from '@/views/Layout/About.vue'
// import store from '@/store'
import { Toast } from 'vant'
import 'vant/lib/index.css'
import GoodsDetails from '@/views/GoodsDetails/GoodsDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/class', component: Classification },
      { path: '/about', component: About }
    ]
  },
  { path: '/login', component: Login },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList },
  { path: '/order', component: Order },
  { path: '/pay', component: Pay },
  { path: '/goodsdetails/:id', component: GoodsDetails }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const authUrls = ['/pay', '/cart', '/order']
  if (!authUrls.includes(to.path)) {
    console.log('不需要权限的')
    next()
    return
  }
  const token = JSON.parse(localStorage.getItem('hm_shopping_info'))
  if (!token || !token.token) {
    Toast('您没有权限浏览当前页面，需要登录')
    next('/login')
  } else { next() }
})
export default router
