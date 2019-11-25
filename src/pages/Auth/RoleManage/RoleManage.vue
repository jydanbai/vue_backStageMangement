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
      <el-table :data="this.$store.state.usersList.roles" border style="width:100%" >
        <el-table-column prop="_id" label="角色ID" width="400"></el-table-column>
        <el-table-column prop="name" label="角色名" width="200"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="400">{{create_time|dateFormat}}</el-table-column>
        <el-table-column label="电子邮箱" width="400">Kelly@163.com</el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope"  >
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
          :page-sizes="[1, 2, 3, 4]"
          :page-size="9"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import Vue from 'vue'
Vue.filter('dateFormat',(value,formatStr='YYYY-MM-DD HH:mm:ss')=>{
  return moment(value).format(formatStr)
})
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
     create_time:''
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
    },
    handleClick(row) {
      // console.log(row);
    }
  },
  computed:{
    ...mapState({
        roles:state =>state.usersList.roles,
    })
  },
   mounted(){
    this.$store.dispatch('getUsersAction')
    // this.tableData=this.users
    this.create_time=this.date=Date.now()-1000000000
  },
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
