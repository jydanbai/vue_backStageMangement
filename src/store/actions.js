/* 
包含多个间接更新状态数据方法的action对象
*/
import {reqProductsList } from '../api'

import {
  SAVE_PRODUCTSLIST,
  SAVE_LOGININFO,
  SAVE_TOKEN,
  CLEAR_TOKEN,
  CLEAR_LOGININFO
} from './mutation-types'


export default {
  
  getLoginInfoAction({commit},{loginInfo}){
    commit(SAVE_LOGININFO,{loginInfo})
  },
  getTokenAction({commit},{token}){
    commit(SAVE_TOKEN,{token})
  },
  clearTokenAction({commit}){
    commit(CLEAR_TOKEN)
  },
  clearLoginInfoAction({commit}){
    commit(CLEAR_LOGININFO)
  },
















    async getProductsListAction({commit,state}){
      let result = await reqProductsList(1,2)
      if(result.status===0){
        commit(SAVE_PRODUCTSLIST,{productsList:result.data})
      }
      console.log(result)
    }
}