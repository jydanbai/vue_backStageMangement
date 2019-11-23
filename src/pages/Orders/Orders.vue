<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

import { gitOrderDatas } from "../../api";
import { mapState } from "vuex";
  export default {
    // async mounted(){
    //   let resut = await gitOrderDatas()
    //   console.log(resut,'JJSJSJSJS')
    // },
    mounted(){
      this.$store.dispatch('gitOrderDatasAction')
      
    }
  }
</script>



<style lang='stylus' rel='stylesheet/stylus' scoped>

 
</style>