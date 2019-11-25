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
   SEARCH_USERS,
   CLEAR_USERS
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

    [SAVE_PRODUCTSLIST](state,{productsList}){
      state.productsList=productsList
    },
<<<<<<< HEAD

    
    
=======
    [SEARCH_USERS](state,{username}){
      // console.log(state.usersList)
      let usersArr= state.usersList.users.filter((user,index)=>user.username===username)
      state.searchUser=usersArr
    },
    [CLEAR_USERS](state){
      state.searchUser=[]
    }
>>>>>>> afa413218478696e7042b54ba471b975bda03e82

}