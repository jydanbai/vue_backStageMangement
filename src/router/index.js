import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用扩展库 
Vue.use(VueRouter)

// 生成路由器 管理路由
const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
