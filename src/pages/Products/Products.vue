<template>
  <div id="yqq-products">
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--  -->
    <el-card>
      <p>删选搜索</p>
      <!-- imput框 -->
      <div class="demo-input-suffix yqq-input">
        输入搜索：
        <el-input placeholder="商品名称"></el-input>
        商品货号：
        <el-input placeholder="商品货号"></el-input>
            <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
        
      </div>
    </el-card>
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
      display flex
    }
  }
}
</style>
