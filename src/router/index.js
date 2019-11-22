import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
// import NProgress from 'nprogress'
import routes from './routes'
// import { Message } from 'element-ui'
// 声明使用扩展库 
Vue.use(VueRouter)

// 生成路由器 管理路由
const router = new VueRouter({
  mode:'hash',
  routes
})

// 注册全局的导航守卫
// const whiteList = ['/login'] // 不重定向白名单
// const token = localStorage.getItem('token_key')
// router.beforeEach((to,from,next)=>{
//   NProgress.start()
//   if (token) {
//     if (to.path === '/login') {
//       next({ path: '/home' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     }else{
//       console.log('111')
//       console.log(token)
//       console.log(to,from,next)
//     }
   
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//       NProgress.done()
//     }
//   }
  
// })

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (getToken()) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     } else {
//       if (store.getters.roles.length === 0) {
//         store.dispatch('GetInfo').then(res => { // 拉取用户信息
//           next()
//         }).catch((err) => {
//           store.dispatch('FedLogOut').then(() => {
//             Message.error(err || 'Verification failed, please login again')
//             next({ path: '/' })
//           })
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })

export default router
