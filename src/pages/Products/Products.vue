<template>
  <div id="yqq-products">
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 筛选搜索 -->
    <el-card>
      <p>筛选搜索</p>
      <!-- imput框 -->
      <div class="demo-input-suffix yqq-input">
        输入搜索：
        <el-input placeholder="商品名称"></el-input>商品货号：
        <el-input placeholder="商品货号"></el-input>
        <span>商品分类：</span>
        <el-select  placeholder="请选择">
          <el-option label="餐厅" value="1"></el-option>
          <el-option label="订单" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>
        <span>商品品牌：</span>
        <el-select  placeholder="请选择">
          <el-option label="餐厅" value="1"></el-option>
          <el-option label="订单" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>
        <span>上架状态：</span>
        <el-select  placeholder="请选择">
          <el-option label="餐厅" value="1"></el-option>
          <el-option label="订单" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>

        <span>上架状态：</span>
        <el-select  placeholder="请选择">
          <el-option label="餐厅" value="1"></el-option>
          <el-option label="订单" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>
        <span>审核状态：</span>
        <el-select  placeholder="请选择">
          <el-option label="餐厅" value="1"></el-option>
          <el-option label="订单" value="2"></el-option>
          <el-option label="用户" value="3"></el-option>
        </el-select>
      </div>
    </el-card>
   
    <!-- 数据列表 -->
    <el-card>
      <span>数据列表</span>
      <el-button>添加</el-button>
    </el-card>

    <!-- 表格 -->

    
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#yqq-products {
  el-card {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !importart;

    .yqq-input {
      display: flex;
    }
  }
}
</style>
