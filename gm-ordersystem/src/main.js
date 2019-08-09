import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
//6: 配置axios 基础路径
axios.defaults.baseURL = "http://127.0.0.1:3000/"
//7: 配置axios 保存session信息
axios.defaults.withCredentials = true
//将axios对象，保存到Vue的原型对象中，保证所有的Vue组件，都可以使用axios对象
Vue.prototype.axios=axios

//引入第三方组件库 mint ui
// 1: 完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
// 2:单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
// 3:将mint-ui注册vue实例中
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
