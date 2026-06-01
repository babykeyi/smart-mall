import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Login from '@/views/Login/Login.vue'
import Search from '@/views/Search/Search.vue'
import SearchList from '@/views/SearchList/SearchList.vue'
import Order from '@/views/Order/Order.vue'
import Pay from '@/views/Pay/Pay.vue'
import Home from '@/views/Layout/Home.vue'
import Cart from '@/views/Layout/Cart.vue'
import Classification from '@/views/Layout/Classification.vue'
import About from '@/views/Layout/About.vue'

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
  { path: '/pay', component: Pay }
]

const router = new VueRouter({
  routes
})

export default router
