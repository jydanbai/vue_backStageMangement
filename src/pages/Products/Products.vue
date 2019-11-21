<template>
  <div id="yqq-products">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#yqq-products {
  .yqq-header {
    width: 80%;
    height: 228px;
    border: 1px solid #ccc;
    margin: 0 auto;
    border-radius: 10px;

    .yqq-shai {
      font-size: 10px;
      margin: 20px 20px;
    }
  }
}
</style>
