import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
   
//引入可视化图
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.config.productionTip = false

Vue.use(Element)
// 注册全局组件

// Vue.component()
new Vue({
  render: h => h(App),
  // 安装路由器
  router,
}).$mount('#app')
