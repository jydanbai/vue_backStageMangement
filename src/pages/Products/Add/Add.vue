<template>
  <div>
       <el-card shadow="never" class="yqq-tianjiashangpin"  >
      <!-- 步骤条 -->
      <el-steps :active="2" align-center class="yqq-jindutiao"   >
        <el-step  description="填写商品信息"></el-step>
        <el-step  description="填写商品信息"></el-step>
        <el-step  description="填写商品信息"></el-step>
        <el-step  description="填写商品信息"></el-step>
      </el-steps>
      <!--添加商品  -->
      <el-form  label-width="80px">
        <el-form-item label="* 商品分类">
          <el-select  placeholder="请选择">
            <el-option label="苹果" ></el-option>
            <el-option label="西瓜" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="* 商品名称">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="* 副标题">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="* 商品品牌">
          <el-select  placeholder="请选择">
            <el-option label="苹果" "></el-option>
            <el-option label="西瓜" "></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="商品介绍">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="商品货号">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="商品售价">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="市场价">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="计量单位">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="商品重量">
          <el-input    ></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input    ></el-input>
        </el-form-item   >
          
      </el-form>
      <el-button type="primary" class="yqq-xiayibu" >下一步填写商品促销</el-button>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .yqq-tianjiashangpin
    width 50%
    height 100%
    margin 50px auto
    padding 50px
    .yqq-jindutiao
      margin-bottom 20px
    .yqq-xiayibu
      display block
      margin 0 auto
</style>

