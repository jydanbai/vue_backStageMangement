<template>
  <div id="loginContainer">
    <div id="container">
      <h2 class="title">后台管理系统</h2>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
        <el-form-item  prop="userName" class="top-item">
          <el-input type="text" v-model="ruleForm.userName"  placeholder="用户名" class="inputWidth">
            <i slot="prefix" class="iconfont icon-icon-user"></i>
          </el-input>
        </el-form-item>

        <el-form-item  prop="pwd" class="container-item">
          <el-input type="password" v-model="ruleForm.pwd"  placeholder="请输入密码" show-password class="inputWidth">
            <i slot="prefix" class="iconfont icon-mima"></i>
          </el-input>
        </el-form-item>
               
        <el-form-item class="btn-item">
          <el-button type="primary" @click="login" class="loginBtn">登录</el-button>
          
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
          pwd: '',
          userName: '',         
        },
        rules: {
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],          
          userName: [
            { validator: username, trigger: 'blur' }
          ]
        },
       
      };
    },
    methods: {
     async login(){
       let { pwd,userName} =this.ruleForm
       let result = await this.$API.reqLogin(userName,pwd)
       console.log(result.data)
       if(result.status ===0 ){
         let {user,token} = result.data
         this.$store.dispatch('getLoginInfoAction',{loginInfo:user})
         this.$store.dispatch('getTokenAction',{token:token})

         this.$router.replace('/home')
       }else{
          Message.error('请求出错:' + error.msg)
       }
      }
     

    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#loginContainer
    width 100vw
    height 100vh
    background #304156
    margin-left -200px
    display flex
    flex-direction column
    justify-content center
    align-items center
    #container
      .title
        height 60px
        line-height 60px
        text-align center
        font-size 30px
        color white
        margin-bottom 20px
      .inputWidth
        width 350px
        margin-bottom 10px
      .loginBtn
        width 350px
 
</style>
