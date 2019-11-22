/*
vuex的核心状态管理对象store 
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 在外面引入的模拟数据的状态
import shop from './module/shop'


import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store ({
   module:{
     shop
   },

   state,
   mutations,
   actions,
   getters
})