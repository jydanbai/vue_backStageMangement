<template>
  <el-card shadow="never" >
    <!-- 数据列表添加 -->
    <el-card class="searchCard" shadow="never">
      <el-form ref="form"  label-width="100px" size="large">
        <div class="searchHeader">
          <div class="searchIcon">
            <i class="el-icon-tickets"></i>
            数据列表
          </div>
          <el-button type="primary" size="mini">添加</el-button>
        </div>
      </el-form>
    </el-card>
    <!-- 商品分类 -->
    <el-card shadow="never" class="yqq-shuju-liebiao">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="编号" width="200"></el-table-column>
        <el-table-column prop="date" label="导航栏" width="200">
          <el-switch></el-switch>
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="200"></el-table-column>
        <el-table-column prop="province" label="级别" width="150"></el-table-column>
        <el-table-column prop="city" label="商品数量" width="200"></el-table-column>
        <el-table-column prop="name" label="是否显示" width="150">
          <el-switch></el-switch>
        </el-table-column>
        <el-table-column prop="province" label="排序" width="200"></el-table-column>
        <el-table-column label="设置" width="150">
          <template class="yqq-liebiao-shezhi">
            <el-button size="mini">查看下级</el-button>
          </template>
        </el-table-column>
        <el-table-column  label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 底部分页 -->
    <div class="yqq-fenlei-fenye">
      <div class="footer-you">
        <div class="block">
          <el-pagination
            :page-sizes="[1, 2, 3, 4]"
            :page-size="1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1"
          ></el-pagination>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "服装",
          province: "一级",
          city: "100",
          address: "1",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.searchCard {
  margin-bottom: 20px;

  .searchHeader {
    display: flex;
    justify-content: space-between;
  }
}

.yqq-fenlei-fenye {
  float: right;
  margin: 15px 20px 15px 0;
}
</style>
