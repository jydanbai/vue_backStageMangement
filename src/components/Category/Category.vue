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


