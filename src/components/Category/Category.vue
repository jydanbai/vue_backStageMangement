<<<<<<< HEAD
<template>
  <div id="categoryContainer">
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="btns">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">首页</span>
    </template>
    </el-submenu>
     <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">商品</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-menu-item index="1-3">选项4</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
     <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-document"></i>
      <span slot="title">订单</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-menu-item index="1-3">选项4</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
     <el-submenu index="1">
    <template slot="title">
         <i class="el-icon-setting"></i>
      <span slot="title">权限</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-menu-item index="1-3">选项4</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
</el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
  #categoryContainer
    .el-menu-vertical-demo:not(.el-menu--collapse)
      position relative
      width 200px
      height 100%
    .btns
      position absolute
      left 20px
      top 10px
</style>


=======
<template>
  <div id="categoryContainer">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" :class="{active:$route.path==='/home'}"  @click="goPath('/home')">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" :class="{active:$route.path==='/products'}" @click="goPath('/products')">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item
              index="2-1"
              :class="{active:$route.path ==='/add'}"
              @click="goPath('/add')"
            >商品列表</el-menu-item>
            <el-menu-item
              index="2-2"
              :class="{active:$route.path ==='/list'}"
              @click="goPath('/list')"
            >添加商品</el-menu-item>
            <el-menu-item
              index="2-3"
              :class="{active:$route.path ==='/category'}"
              @click="goPath('/category')"
            >商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="3" :class="{active:$route.path==='/orders'}">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="3-1"
                :class="{active:$route.path ==='/orderslist'}"
                @click="goPath('/orderslist')"
              >订单列表</el-menu-item>
              <el-menu-item
                index="3-2"
                :class="{active:$route.path ==='/ordersset'}"
                @click="goPath('/ordersset')"
              >订单设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" :class="{active:$route.path==='/auth'}">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="4-1"
                :class="{active:$route.path ==='/usermanage'}"
                @click="goPath('/usermanage')"
              >用户管理</el-menu-item>
              <el-menu-item
                index="4-2"
                :class="{active:$route.path ==='/rolemanage'}"
                @click="goPath('/rolemanage')"
              >角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goPath(path) {
      // $router(路由器对象，包含了路由跳转的方法) $route(路由信息对象， 包含当前路由的所有路由信息)
      this.$route.path !== path && this.$router.push(path);
      console.log("aaaa");
      // this.$router.push()
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' >
#categoryContainer 
  .el-menu-vertical-demo:not(.el-menu--collapse) 
    position: relative;
    width: 200px;
    height: 100vh;
  

  .btns 
    position: absolute;
    left: 20px;
    top: 10px;
  

</style>

>>>>>>> 5088e5e17ebfef8898ffa27abef6a3d5ea250f96
