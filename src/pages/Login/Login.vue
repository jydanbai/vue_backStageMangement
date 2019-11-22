<template>
  <div id="loginContainer">
    <div id="container">
      <h2 class="h2">后台管理系统</h2>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item  prop="checkPass" class="top-item">
          <el-input type="text" v-model="ruleForm.checkPass"  placeholder="用户名" >
            <i slot="prefix" class="iconfont icon-icon-user"></i>
          </el-input>
        </el-form-item>

        <el-form-item  prop="pass" class="container-item">
          <el-input type="password" v-model="ruleForm.pass"  placeholder="请输入密码" show-password >
            <i slot="prefix" class="iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
               
        <el-form-item class="btn-item">
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
          
        </el-form-item>
      </el-form>
    </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     data() {

    
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback('密码必须输入');
        } else if (value.length<4) {
           callback('密码必须大于等于4位')
        } else if (value.length>12) {
            callback('密码必须小于等于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
             callback('密码必须是英文、数字或下划线组成')            
        }else{
          
          callback()
        }
      };
      var username = (rule, value, callback) =>{
         if (value === '') {
          callback('用户必须输入');
        } else{
          callback()
        }  
      }
      
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],          
          checkPass: [
            { checkPass: username, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  
  
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #loginContainer
    width 100%
    height 100%
    position absolute
    background #304156
    margin-left -200px
    #container
      width 520px
      height 396px
      display flex
      flex-direction column
      
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      margin auto 
      .h2
        color white
        text-align  center
        width 450px
        height 35px
        margin-left 10px
        margin 10px auto
        font-size 24px
      .demo-ruleForm  
        display flex
        flex-direction column
        .top-item
          width 450px
          height 54px
          margin 10px auto
          .el-input__icon
            margin-top -5px
        .container-item 
          width 450px
          height 54px
          margin 10px auto
          .el-input__icon
            margin-top -5px
        .btn-item
          .btn
            width 350px
            height 40px   
            font-size 20px
            margin-left 35px
 
</style>
