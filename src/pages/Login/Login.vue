<template>
  <div id="loginContainer">
    <div id="container">
      <h2 class="h2">后台登陆系统</h2>
      <el-input class="input"  placeholder="请输入用户名" v-model="input1" >
        <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
      </el-input>
      
      <el-input class="input"  placeholder="请输入密码" v-model="input" show-password>
        <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
      </el-input>
      <el-button class="btn" type="primary">登 陆</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        input: '',
        input1:''
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
        margin 10px auto
        font-size 24px
      .input
        width 450px
        height 54px
        margin 10px auto
        .el-input__icon
          margin-top -5px 
      .btn
        width 450px
        height 50px  
        margin 20px auto
        font-size 20px
 
</style>
