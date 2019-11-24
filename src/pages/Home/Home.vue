杨阳 13:45:48
<template>
  <div id="home">
    <div class="header">
      <h6>待处理事务</h6>
      <ul class="H-ul">
        <li class="H-li">
          <span>待发货订单</span>
          <span class="H-r">{{status.unDelivery}}</span>
        </li>
        <li class="H-li">
          <span>待付款订单</span>
          <span class="H-r">{{status.unPay}}</span>
        </li>
        <li class="H-li">
          <span>已发货订单</span>
          <span class="H-r">{{status.deliveried}}</span>
        </li>
        <li class="H-li">
          <span>已完成订单</span>
          <span class="H-r">{{status.finished}}</span>
        </li>
        <li class="H-li">
          <span>新缺货登记</span>
          <span class="H-r">{{status.newlack}}</span>
        </li>
        <li class="H-li">
          <span>待处理退货订单</span>
          <span class="H-r">{{status.waitForSolve}}</span>
        </li>
        <li class="H-li">
          <span>待确认收获订单</span>
          <span class="H-r">{{status.waitForConfirm}}</span>
        </li>
        <li class="H-li">
          <span>待处理退款申请</span>
          <span class="H-r">{{status.waitForRefund}}</span>
        </li>
        <li class="H-li">
          <span>广告位即将到期</span>
          <span class="H-r">{{status.addWillExpire}}</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="lfet">
        <h6>商品总览</h6>
        <ul class="C-ul">
          <li class="C-li">
            <span class="C-s">已上架</span>
            <span class="C-r">777</span>
          </li>
          <li class="C-li">
            <span class="C-s">已下架</span>
            <span class="C-r">77</span>
          </li>
          <li class="C-li">
            <span class="C-s">库存紧张</span>
            <span class="C-r">7</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <h6>用户总览</h6>
        <ul class="R-ul">
          <li class="R-li">
            <span class="R-s">今日新增</span>
            <span class="R-r">7</span>
          </li>
          <li class="R-li">
            <span class="R-s">昨日新增</span>
            <span class="R-r">77</span>
          </li>
          <li class="R-li">
            <span class="R-s">本月新增</span>
            <span class="R-r">777</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <h6>订单统计</h6>
      <div>
        <Echarts/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Echarts from '../../components/Echarts/Echarts'
  export default {
    data(){
      return{
        status:{
          unDelivery:0,
          unPay:0,
          deliveried:0,
          finished:0,
          newlack:0,
          waitForSolve:0,
          waitForConfirm:0,
          waitForRefund:0,
          addWillExpire:0,
        }

      }
    },
   components:{
      Echarts
    },
    async mounted(){
       await this.$store.dispatch('gitOrderDatasAction')
        this.status.unDelivery = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='待发货订单').length
        this.status.unPay = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='待付款订单').length
        this.status.deliveried = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='已发货订单').length
        this.status.finished = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='已完成订单').length
        this.status.newlack = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='新缺货登记').length
        this.status.waitForSolve = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='待处理退货订单').length
        this.status.waitForConfirm = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='待确认收货订单').length
        this.status.waitForRefund = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='待处理退款申请').length
        this.status.addWillExpire = this.orderDatas.filter((item,index)=>item.dingdanzhuangtai==='广告位即将到期').length
    }
   ,
   computed:{
     ...mapState({
       orderDatas:state=>state.orders.orderDatas,
     })
    },
  
    
  } 
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#home
  width 88vw
  margin 0 auto 
  .header
    width 100%
    height 210px
    border 1px solid #eee
    margin 20px auto
    h6
     height 15px
     background #f2f6fc
     line-height 15px
     padding 15px 20px
     font-size 16px
    .H-ul
      height 160px
      display flex
      flex-wrap wrap
      justify-content space-between
      padding 20px 40px     
      .H-li
        display flex
        justify-content space-between
        width 30%
        height 25px
        border-bottom  1px solid #eee
        font-size 16px
        color  #606266
        .H-r
          color red
  .container 
    width 100%
    height 210px  
    display flex   
    justify-content space-between   
    .lfet
      width 49%
      height 186px
      margin-top 20px 
      border 1px solid #eee
      box-sizing border-box     
      h6
       height 15px
       background #f2f6fc
       line-height 15px
       padding 15px 20px
       font-size 16px
      .C-ul
        height 160px
        display flex
        flex-wrap wrap
        justify-content space-around
        padding 20px 40px     
        .C-li
          display flex
          flex-direction column
          justify-content space-between
          width 25%
          height 25px          
          font-size 16px
          color  #606266          
          .C-s
            margin 20px 15px 5px 20px 
          .C-r
            color red
            margin 20px 15px 5px 20px           
    .right
      width 49%
      height 186px
      margin-top 20px 
      border 1px solid #eee
      box-sizing border-box     
      h6
       height 15px
       background #f2f6fc
       line-height 15px
       padding 15px 20px
       font-size 16px
      .R-ul
        height 160px
        display flex       
        flex-wrap wrap
        padding 20px 40px     
        .R-li
          display flex
          flex-direction column
          justify-content space-between
          width 25%
          height 25px          
          font-size 16px
          color  #606266          
          .R-s
            margin 20px 15px 5px 20px 
            width 100%
          .R-r
            color red
            margin 20px 15px 5px 20px
  .footer  
    height 420px
    border 1px solid #eeeeee
    margin 20px auto
    h6
      height 15px
      background #f2f6fc
      line-height 15px
      padding 15px 20px
      font-size 16px       
</style>
