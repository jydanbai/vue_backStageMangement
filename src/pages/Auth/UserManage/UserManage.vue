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
            <el-button @click="reset">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </div>
        </div>
        <el-form-item label="用户名称：">
          <el-input v-model="sizeForm.name" placeholder="用户名称" style="width:200px"></el-input>
       
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
          <el-button type="primary" size="mini">添加用户</el-button>
        </div>
      </el-form>
    </el-card>
    <el-card class="tableList" shadow="never">
      <el-table :data="this.$store.state.searchUser.length>0?this.$store.state.searchUser:this.$store.state.usersList.users" border style="width:100%">
        <el-table-column prop="username" label="用户名" width="300"></el-table-column>
        <el-table-column prop="password" label="密码" width="300"></el-table-column>
        <el-table-column prop="auth" label="操作权限" width="400">管理员</el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="300" >{{date|dateFormat}}</el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
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
          :page-sizes="[1, 2, 3, 4]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
<script>
import { mapState} from 'vuex'
import moment from 'moment'
import Vue from 'vue'
import {SEARCH_USERS,CLEAR_USERS } from '../../../store/mutation-types'
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
        desc: "",
      },
     
      date: 0,

    };
  },
  methods: {
    onSubmit() {
      this.$store.commit(SEARCH_USERS,{username:this.sizeForm.name})
      
    },
    handleClick(row) {
    },
    reset(){
      this.sizeForm.name=''
      if(this.sizeForm.name==''){
        this.$store.commit(CLEAR_USERS)
      }
    }
  },
  
  mounted(){
    this.$store.dispatch('getUsersAction')
    this.date=Date.now()-100000000

  },
  
  computed:{
    ...mapState({
      users:state =>state.usersList.users,
      searchUser:state =>state.searchUser
      // create_time:state =>state.usersList.users.create_time
    })
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

.tableList {
  margin: 20px;

  .el-table__body {
    width: 100%;
    margin: 0;
  }
}

.footer-you{
  float: right;
  margin: 20px;
}
</style>
