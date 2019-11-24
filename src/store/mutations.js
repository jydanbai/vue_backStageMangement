/*
包含多个直接更新状态数据方法的对象 
 */

 
 import { SAVE_PRODUCTSLIST,SAVE_LOGININFO ,SAVE_TOKEN,CLEAR_TOKEN,CLEAR_LOGININFO,SAVE_USERSLIST} from './mutation-types'
export default {

  // 获取登录信息的mutation
    [SAVE_LOGININFO](state,{loginInfo}){
      state.loginInfo=loginInfo
      sessionStorage.setItem('loginInfo',JSON.stringify(loginInfo) )
    },
    [SAVE_TOKEN](state,{token}){
      state.token=token
      localStorage.setItem('token_key',token)
    },
    [CLEAR_TOKEN](state){
      state.token=''
      localStorage.removeItem('token_key')
    },
    [CLEAR_LOGININFO](state){
      state.loginInfo={}
    },
    [SAVE_USERSLIST](state,{usersList}){
      state.usersList =usersList
    },

    [SAVE_PRODUCTSLIST](state,{productsList}){
      state.productsList=productsList
    },
    

}