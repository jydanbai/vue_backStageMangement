<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
    
Vue.config.productionTip = false

Vue.use(Element)
// 注册全局组件

// Vue.component()
new Vue({
  render: h => h(App),
  // 安装路由器
  router,
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
    
Vue.config.productionTip = false

Vue.use(Element)
// 注册全局组件

// Vue.component()
new Vue({
  render: h => h(App),
  // 安装路由器
  router,
  store
}).$mount('#app')
>>>>>>> aa9244e617cfa7684d2300ccbd35bd054d0b8c9c
