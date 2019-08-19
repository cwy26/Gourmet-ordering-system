import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "./helloworld"
import index from './xds_index'
import Reservation from './reservation'
Vue.use(Router)

export default new Router({
  routes: [
    HelloWorld,
    index,
    Reservation
  ]
})
