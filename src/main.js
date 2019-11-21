import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
// 注册全局组件

// Vue.component()
new Vue({
  render: h => h(App),
  // 安装路由器
  router,
}).$mount('#app')
