/* 
包含多个间接更新状态数据方法的action对象
*/
import {reqProductsList,reqUsers } from '../api'

import {
  SAVE_PRODUCTSLIST,
  SAVE_LOGININFO,
  SAVE_TOKEN,
  CLEAR_TOKEN,
  CLEAR_LOGININFO,
  SAVE_USERSLIST
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
  async getUsersAction({commit}){
    let result = await reqUsers()
    if(result.status===0){
      commit(SAVE_USERSLIST,{usersList:result.data})
    }
  },
















    async getProductsListAction({commit,state}){
      let result = await reqProductsList(1,2)
      if(result.status===0){
        commit(SAVE_PRODUCTSLIST,{productsList:result.data})
      }
      console.log(result)
    }
}