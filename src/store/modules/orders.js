
import { gitOrderDatas,gitOrderDatastianjia } from "../../api";
import { SAVE_ORDERDATAS,SAVE_ORDERDATASTIANJIA } from "../mutation-types";
const state= {
  orderDatas:[] , //初始化数据
  orderDatastianjia:{}   //订单添加
}


const actions= {
  async gitOrderDatasAction({commit}){
    let result = await gitOrderDatas()
    commit(SAVE_ORDERDATAS,{orderDatas:result.data})
  },
  async gitOrderDatastianjiaAction({commit}){
    let result = await gitOrderDatastianjia()
    commit(SAVE_ORDERDATASTIANJIA,{orderDatastianjia:result.data})
  },

}

const mutations= {
  [SAVE_ORDERDATAS](state,{orderDatas}){
    state.orderDatas = orderDatas
  },
  [SAVE_ORDERDATASTIANJIA](state,{orderDatastianjia}){
    state.orderDatastianjia = orderDatastianjia
  },
}

const getters= {
  
}



export default {
  state,
  actions,
  mutations,
  getters
}