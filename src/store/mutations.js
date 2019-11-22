/*
包含多个直接更新状态数据方法的对象 
 */

 
 import { SAVE_PRODUCTSLIST,SAVE_LOGININFO ,SAVE_TOKEN} from './mutation-types'
export default {

  // 获取登录信息的mutation
    [SAVE_LOGININFO](state,{loginInfo}){
      state.loginInfo=loginInfo
    },
    [SAVE_TOKEN](state,{token}){
      state.token=token
      localStorage.setItem('token_key',token)
    },











    [SAVE_PRODUCTSLIST](state,{productsList}){
      state.productsList=productsList
    }

}