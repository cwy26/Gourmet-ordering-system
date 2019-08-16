import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import ProductList from "./components/ProductList/ProductList.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: HelloContainer},
    {path: '/ProductList',component: ProductList}
  ]
})
