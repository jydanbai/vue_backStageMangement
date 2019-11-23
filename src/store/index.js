/*
vuex的核心状态管理对象store 
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 在外面引入的模拟数据的状态
import orders from './module/orders'


import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store ({
   modules:{
     orders
   },

   state,
   mutations,
   actions,
   getters
})