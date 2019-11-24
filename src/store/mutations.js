/*
包含多个直接更新状态数据方法的对象 
 */

 
 import { 
   SAVE_LOGININFO ,
   SAVE_TOKEN,
   CLEAR_TOKEN,
   CLEAR_LOGININFO,
   SAVE_USERSLIST,
   SAVE_PRODUCTSLIST,
  } 
  from './mutation-types'
export default {

  // 获取登录信息的mutation
    [SAVE_LOGININFO](state,{loginInfo}){
      state.loginInfo=loginInfo
      localStorage.setItem('loginInfo',JSON.stringify(loginInfo) )
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
<<<<<<< HEAD

=======
>>>>>>> 34d8bf51e8c249310043c0e4396d94a2abdc4529
    [SAVE_PRODUCTSLIST](state,{productsList}){
      state.productsList=productsList
    },
    

}