import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import index from './views/xds_index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloContainer
    },
    {path: '/index',component: index},
  ]
})
