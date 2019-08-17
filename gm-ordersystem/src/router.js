import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import index from './views/xds_index.vue'
import Details from './components/common/Details/Details.vue'
import Order from './components/common/order/Order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
      component: HelloContainer
    },
    {path: '/index',component: index},
    {path:'/Details',component:Details},
    {path:'/Order',component:Order}
  ]
})
