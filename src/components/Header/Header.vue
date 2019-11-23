<template>
  <div id="headerContainer">
   
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#000"
      active-text-color="#64656C"
    >
       <div class="breadNav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/'}" v-if="$route.path!=='/home'">{{$route.meta.title}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
           <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
                
               
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
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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
       username:state =>state.loginInfo.username
     })
   },
   mounted(){
    console.log( this.username)
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
      margin-right 8px
      font-size 16px
      .admin
        margin-right 20px


  

</style>


