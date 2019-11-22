<template>
  <div>
    <!-- 数据列表添加 -->
    <el-card shadow="never">
      <div class="el-card__body">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
        <button
          type="button"
          style="float right"
          class="el-button btn-add el-button--default el-button--mini"
        >
          <span>添加</span>
        </button>
      </div>
    </el-card>
    <el-card shadow="never">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="编号" width="150"></el-table-column>
        <el-table-column prop="name" label="分类名称" width="120"></el-table-column>
        <el-table-column prop="province" label="级别" width="120"></el-table-column>
        <el-table-column prop="city" label="商品数量" width="120"></el-table-column>
        <el-table-column fixed prop="date" label="导航栏" width="150">
          <el-switch></el-switch>
        </el-table-column>
        <el-table-column prop="name" label="是否显示" width="120">
          <el-switch></el-switch>
        </el-table-column>
        <el-table-column prop="province" label="排序" width="120"></el-table-column>
        <el-table-column label="设置" width="100">
          <template slot-scope="scope">
            <el-button size="mini">查看下级</el-button>
            <el-button size="mini">转移商品</el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
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

<style lang='stylus' rel='stylesheet/stylus' scoped></style>
