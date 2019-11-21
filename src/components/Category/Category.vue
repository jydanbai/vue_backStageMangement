<template>
  <div id="categoryContainer">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#FDCF85"
        >
          <el-menu-item index="1" :class="{active:$route.path==='/home'}" @click="goPath('/home')">
            <i class="iconfont icon-1"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu
            index="2"
            :class="{active:$route.path==='/products'}"
            @click="goPath('/products')"
          >
            <template slot="title">
              <i class="iconfont icon-shangpin"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item
              index="2-1"
              :class="{active:$route.path ==='/add'}"
              @click="goPath('/add')"
            >
              <i class="iconfont icon-liebiao"></i>
              商品列表
            </el-menu-item>
            <el-menu-item
              index="2-2"
              :class="{active:$route.path ==='/list'}"
              @click="goPath('/list')"
            >
              <i class="iconfont icon-tianjia"></i>添加商品
            </el-menu-item>
            <el-menu-item
              index="2-3"
              :class="{active:$route.path ==='/category'}"
              @click="goPath('/category')"
            >
              <i class=" iconfont icon-fenlei"></i>商品分类
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3" :class="{active:$route.path==='/orders'}">
            <template slot="title">
              <i class="iconfont icon-6"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="3-1"
                :class="{active:$route.path ==='/orderslist'}"
                @click="goPath('/orderslist')"
              >
                <i class="iconfont icon-liebiao"></i>订单列表
              </el-menu-item>
              <el-menu-item
                index="3-2"
                :class="{active:$route.path ==='/ordersset'}"
                @click="goPath('/ordersset')"
              >
                <i class="iconfont icon-shezhi"></i>订单设置
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" :class="{active:$route.path==='/auth'}">
            <template slot="title">
              <i class="iconfont icon-quanxian"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="4-1"
                :class="{active:$route.path ==='/usermanage'}"
                @click="goPath('/usermanage')"
              >
                <i class="iconfont icon-icon-user"></i>用户管理
              </el-menu-item>
              <el-menu-item
                index="4-2"
                :class="{active:$route.path ==='/rolemanage'}"
                @click="goPath('/rolemanage')"
              >
                <i class="iconfont icon-jiaoseguanli"></i>角色管理
              </el-menu-item>
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
    position: relative
    width: 200px;
    height: 100vh;
  

  .btns 
    position: absolute
    left: 20px;
    top: 10px;
  i
    margin-right 8px
    font-size 16px

</style>

