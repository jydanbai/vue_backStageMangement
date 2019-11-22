/*
包含多个直接更新状态数据方法的对象 
 */

 
 import { GET_PRODUCTSLIST } from './mutation-types'
export default {
    [GET_PRODUCTSLIST](state,{productsList}){
      state.productsList=productsList
    }

}