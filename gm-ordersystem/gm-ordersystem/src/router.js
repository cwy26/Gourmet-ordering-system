import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:在router.js中引入组件
import index from './views/index.vue'
import Recommended from "./components/common/Recommended/Recommended.vue"
import NewProduct from "./components/common/NewProduct/NewProduct.vue"
import Search from "./components/Search.vue"
import Comments from "./components/Comments.vue"
import orderWrapper from "./components/orderWrapper.vue"
import myComment from "./components/myComment.vue"
import register from "./components/register.vue"
import login from "./components/login.vue"
import cart from "./components/cart.vue"
import productWrapper from "./components/productWrapper.vue"
import postComments from "./components/common/post_comments.vue"
import upload from "./components/upload.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloContainer
    },
    {path: '/index',component: index},
    {path: '/Recommended',component: Recommended},
    {path: '/NewProduct',component: NewProduct},
    {path: '/Search',component: Search},
    {path: '/Comments',component: Comments},
    {path: '/orderWrapper',component: orderWrapper},
    {path: '/postComments',component: postComments},
    {path: '/myComment',component: myComment},
    {path: "/register",component: register},
    {path: "/login",component: login},
    {path: "/productWrapper",component: productWrapper},
    {path: "/cart",component: cart},
    {path: "/upload",component: upload}
  ]
})
