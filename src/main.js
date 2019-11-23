import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import store from './store'
import mock from "./mock/mock.serve";
import 'element-ui/lib/theme-chalk/index.css'
import * as API from './api'
  
Vue.config.productionTip = false
Vue.prototype.$API = API

router.beforeEach((to,from,next)=>{
const token = localStorage.getItem('token_key')
if(token){
    next()
}else{
    if(to.path =='/login'){
        next()
    }else{
        next('/login')
    }
}
})


Vue.use(Element)
// 注册全局组件

// Vue.component()
new Vue({
  render: h => h(App),
  // 安装路由器
  router,
  store
}).$mount('#app')
