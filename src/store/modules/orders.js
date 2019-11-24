
import { gitOrderDatas } from "../../api";
import { SAVE_ORDERDATAS ,DELETE_ORDERDATA} from "../mutation-types";
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
  },
  // [CLEAR_CARTSHOPS](state){
  //  state.orderDatas.some(orderDatas => orderDatas.id = 0)
  //   state.orderDatas = []
    
  // },
    [DELETE_ORDERDATA](state,{id}){
   let newOrderdatas = state.orderDatas.filter((orderData,index) => orderData.id !== id)
   console.log(newOrderdatas);
   
    state.orderDatas = newOrderdatas
    
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