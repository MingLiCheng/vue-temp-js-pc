import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import { routerBeforeEachFunc, routerAfterEachFunc } from './interceptor/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 拦截器
router.beforeEach(routerBeforeEachFunc)
// router.afterEach(routerAfterEachFunc)

export default router
