<template>
  <div id="headerContainer">
   
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#000"
      active-text-color="#ffd04b"
    >
       <div class="breadNav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="rightNav">
        <el-menu-item index="3" @click="logout">
           <el-button type="text" >
               <i class="iconfont icon-tuichu1"></i>
           </el-button>
        
          </el-menu-item>
      <el-submenu index="2">
        <template slot="title" >
         <div class="admin">
           {{username}}
         </div>
        </template>
        <el-menu-item index="2-1">个人中心</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
      </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SAVE_LOGININFO} from '../../store/mutation-types'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      username:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
     logout() {
        this.$confirm('确认退出登录吗', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$router.replace('/login')
          this.$store.dispatch('clearTokenAction')
          this.$store.dispatch('clearLoginInfoAction')
          // localStorage.removeItem('token_key')
        })
      }
    },
   computed:{
     ...mapState({
       loginInfo:state =>state.loginInfo
     })
     
   },
   mounted(){
      // 读取sessionStorage中是否有之前存储的数据
      if(sessionStorage.getItem('loginInfo')){
        // 之前有值
        let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
          console.log(this.loginInfo)
        this.username=loginInfo.username
       //将获取的值存入store中
       this.$store.commit(SAVE_LOGININFO,{loginInfo})
      }else{
        // 之前没有值
        // this.$store.dispatch('getLoginInfoAction',{loginInfo})
      }
      window.addEventListener('beforeunload',()=>{
        
         sessionStorage.setItem('loginInfo',JSON.stringify(this.loginInfo) )
      })
    
   },
   beforeDestroy(){
      sessionStorage.setItem('loginInfo',JSON.stringify(this.loginInfo))
   }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#headerContainer 
 
  .el-menu-demo 
    .breadNav
      float left
      margin 22px 0 0 16px
    .rightNav
      float right
      display flex
      flex-direction row-reverse
  

</style>


