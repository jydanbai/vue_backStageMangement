<template>
  <div>
    <el-card class="searchCard" shadow="never">
      <el-form ref="form" :model="sizeForm" label-width="100px" size="large">
        <div class="searchHeader">
          <div class="searchIcon">
            <i class="el-icon-search"></i>
            筛选搜索
          </div>
          <div>
            <el-button>重置</el-button>
            <el-button type="primary" @click="onSubmit">查询结果</el-button>
          </div>
        </div>
        <el-form-item label="角色名称：">
          <el-input v-model="sizeForm.name" placeholder="角色名称" style="width:200px"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="searchCard" shadow="never">
      <el-form ref="form" :model="sizeForm" label-width="100px" size="large">
        <div class="searchHeader">
          <div class="searchIcon">
            <i class="el-icon-tickets"></i>
            数据列表
          </div>
          <el-button type="primary" size="mini">添加角色</el-button>
        </div>
      </el-form>
    </el-card>
    <el-card class="tableList" shadow="never">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="用户ID" width="150"></el-table-column>
        <el-table-column prop="name" label="停用/启用" width="120"></el-table-column>
        <el-table-column prop="province" label="登录名" width="120"></el-table-column>
        <el-table-column prop="city" label="联系电话" width="120"></el-table-column>
        <el-table-column prop="address" label="权限" width="300"></el-table-column>
        <el-table-column prop="zip" label="联系地址" width="120"></el-table-column>
        <el-table-column label="电子邮箱" width="100"></el-table-column>
        <el-table-column label="创建时间" width="100"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 底部分页 -->
    <div class="footer-you">
      <div class="block">
        <el-pagination
          :page-sizes="[100, 200, 300, 100]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.searchCard {
  margin: 20px;

  .searchHeader {
    display: flex;
    justify-content: space-between;
  }
}

.tableList 
  margin: 20px;

  .el-table__body 
    width: 100%;
    margin: 0;

.footer-you
  float right
  margin: 20px;
</style>
