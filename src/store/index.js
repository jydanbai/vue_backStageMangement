/*
vuex的核心状态管理对象store 
 */

import Vue from 'vue'
import Vuex from 'vuex'
import orders from "./modules/orders";

// 在外面引入的模拟数据的状态
import orders from './module/orders'


import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store ({
   modules:{
<<<<<<< HEAD
     orders
=======
      orders
>>>>>>> dc87b7a285ace2324032461d10493092e08c8059
   },

   state,
   mutations,
   actions,
   getters
})