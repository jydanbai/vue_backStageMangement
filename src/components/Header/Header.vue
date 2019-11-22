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
        <el-menu-item index="3">
          <i class="iconfont icon-tuichu1"></i>
          </el-menu-item>
      <el-submenu index="2">
        <template slot="title" >
         <div class="admin">
           admin
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
  },
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


