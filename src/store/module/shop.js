import Vue from 'vue'
import {
  getShopDatas
} from '../../api'
import {SAVE_SHOPDATAS} from '../mutation-types'

const state = {
  shopDatas:{},
}

const actions ={
   async getShopDatasAction({commit}){
     let result = await getShopDatas()
     console.log(result);
     console.log('jdkkk');
     
     
       commit(SAVE_SHOPDATAS,{shopDatas:result.data})
     
   }
}


const mutations = {
    [SAVE_SHOPDATAS](state, {shopDatas}){
      state.shopDatas = shopDatas
    }
}

const getters = {
  
}

export default{
  state,
  actions,
  mutations,
  getters
}