<template>
  <div>
    <el-card shadow="never" border>

    <el-card style="margin-top:25px" shadow="never">
      <span  style="font-size:25px; height:20px; line-height:20px margin-top:15px;  text-align:center ;margin-left:25px ; " class="el-icon-date"></span>
      <span style="font-size:25px; margin-top:5px; text-align:center ;margin-left:25px">数据列表</span>
      <el-row>
      <el-button style="float:right" plain>添加</el-button>
      </el-row>

    </el-card>

    <el-card shadow="never" style="margin-top:30px">
      <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column type="selection"></el-table-column>
    <!-- 编号 -->
    <el-table-column
      label="编号"
      width="300">
      <template slot-scope="scope">
        
        <!-- <el-popover trigger="hover" placement="top"> -->
          <!-- <p>姓名: {{ scope.row.bianhao }}</p> -->
          <div slot="reference" class="name-wrapper">
            {{ scope.row.bianhao }}
          </div>
        </el-popover>
      </template>
    </el-table-column>

<!-- 属性名称 -->
    <el-table-column
      label="属性名称"
      width="300">
      <template slot-scope="scope">
        
        <!-- <el-popover trigger="hover" placement="top"> -->
          <div slot="reference" class="name-wrapper">
           {{ scope.row.shuxingminigchen }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
<!-- 商品数量 -->
    <el-table-column
      label="商品数量"
      width="300">
      <template slot-scope="scope">
        
        <!-- <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p> -->
          <div slot="reference" class="name-wrapper">
           {{ scope.row.shuxingleixing }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
<!-- 参数数量 -->
    <el-table-column
      label="参数数量"
      width="300">
      <template slot-scope="scope">
        
        <!-- <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p> -->
          <div slot="reference" class="name-wrapper">
            {{ scope.row.shuxing }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
<!-- 设置 -->
    <el-table-column
      label="设置"
      width="300">
      <template slot-scope="scope">
        
        <!-- <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p> -->
          <div slot="reference" class="name-wrapper">
           {{ scope.row.shixingfangshi }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <!-- 可选值列表
    <el-table-column
      label="可选值列表"
      width="180">
      <template slot-scope="scope">
        
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <div slot="reference" class="name-wrapper">
           {{ scope.row.kexuanzhiliebiao }}
          </div>
        </el-popover>
      </template>
    </el-table-column> -->
    <!-- 排序 -->
    <!-- <el-table-column
      label="排序"
      width="180">
      <template slot-scope="scope">
        
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <div slot="reference" class="name-wrapper">
            {{ scope.row.peixu }}
          </div>
        </el-popover>
      </template>
    </el-table-column> -->
    <!-- 操作 -->
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
    </el-card>
    

    <!--  -->
    <div style="margin-top:20px ; display：inline" >
<el-dropdown>
  <el-button style="width:200px">
    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

  <el-button  type="primary" style="margin-left:20px">主要按钮</el-button>
    </div>
    
    <div class="block" style="display:inline-block ; float:right">
    <el-pagination
       background
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout=" total,sizes,pager, jumper"
      :total="400">
      <!-- 前进后退 -->
    </el-pagination>
  </div>
  </el-card>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [
          {
          bianhao: "7",
          shuxingminigchen:'颜色',
          shuxingleixing:'服装',
          shuxing:'2',
          shixingfangshi:"列表中选取",
          kexuanzhiliebiao:'黑色，白色' ,
          peixu:'100'
         
        },
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>>



<style lang='stylus' rel='stylesheet/stylus' scoped>

 
</style>
