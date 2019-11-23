
import { gitOrderDatas } from "../../api";
import { SAVE_ORDERDATAS } from "../mutation-types";
const state= {
  orderDatas:[]  //初始化数据
}


const actions= {
  async gitOrderDatasAction({commit}){
    let result = await gitOrderDatas()
    commit(SAVE_ORDERDATAS,{orderDatas:result.data})
  }
}

const mutations= {
  [SAVE_ORDERDATAS](state,{orderDatas}){
    state.orderDatas = orderDatas
  }
}

const getters= {
  
}



export default {
  state,
  actions,
  mutations,
  getters
}