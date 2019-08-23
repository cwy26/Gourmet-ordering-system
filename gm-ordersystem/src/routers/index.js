import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "./helloworld"
import index from './order_index/index'
import Reservation from './reservation'
import ProductList from './ProductList'
Vue.use(Router)

export default new Router({
  routes: [
    HelloWorld,
    index,
    Reservation,
    ProductList
  ]
})
