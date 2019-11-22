/* 
包含多个间接更新状态数据方法的action对象
*/
import {getProductsList } from '../api'

import {
  GET_PRODUCTSLIST
} from './mutation-types'


export default {
    async getProductsListAction({commit,state}){
      let result = await getProductsList()
      if(result.status===0){
        commit(GET_PRODUCTSLIST,{productsList:result.data})
      }
    }
}