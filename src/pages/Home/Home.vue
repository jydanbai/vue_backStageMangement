杨阳 13:45:48
<template>
  <div id="home">
    <div class="header">
      <h6>待处理事务</h6>
      <ul class="H-ul">
        <li class="H-li">
          <span>待发货订单</span>
          <span class="H-r"></span>
        </li>
        <li class="H-li">
          <span>待付款订单</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>已发货订单</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>已完成订单</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>新缺货登记</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>待处理退货订单</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>待确认收获订单</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>待处理退款申请</span>
          <span class="H-r">(10)</span>
        </li>
        <li class="H-li">
          <span>广告位即将到期</span>
          <span class="H-r">(10)</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="lfet">
        <h6>商品总览</h6>
        <ul class="C-ul">
          <li v-for="(item , index) in 4 " :key="index" class="C-li">
            <span class="C-s">已下架</span>
            <span class="C-r">100</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <h6>用户总览</h6>
        <ul class="R-ul">
          <li v-for="(item , index) in 4 " :key="index" class="R-li">
            <span class="R-s">今日新增</span>
            <span class="R-r">100</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <h6>表单统计</h6>
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
        status:[
            {
            name:'',
            number:0
          }
        ]

      }
    },
   components:{
      Echarts
    },
    async mounted(){
       await this.$store.dispatch('gitOrderDatasAction')
        
        
        let arrs = this.orderDatas.map(obj => {return obj.dingdanzhuangtai})
        
        console.log(this.orderDatas)
       let arr = this.orderDatas.filter((item,index)=>{
          return item.dingdanzhuangtai==='待发货' 
        })
        console.log(arr)
        
      
    }
   ,
   computed:{
     ...mapState({
       orderDatas:state=>state.orders.orderDatas,
       
     })
    },
    // methods:{
      shops(){
        console.log(this)
        console.log(this.shopdatas)
        let arrs = this.shopdatas.map(obj => {return obj.dingdanzhuangtai})
        
        console.log(arrs)
      }
    // }
    
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
