<template>
  <el-card shadow="never" style="  width:1000px ; margin-left:100px;margin-top:100px " >
  <form class="el-form">
    <div  class="el-form-item">
        <label for="flashOrderOvertime" class="el-form-item__label" style="width: 150px;">秒杀订单超过：</label>
        <div class="el-form-item__content" style="margin-left: 150px;">
            <div style="width:500px"  class="input-width el-input el-input-group el-input-group--append">
                <input type="text" autocomplete="off" class="el-input__inner">
                <div class="el-input-group__append">分</div>
            </div> 
            <span style="margin-left:40px" class="note-margin">未付款，订单自动关闭</span>
        </div>
    </div>
    <div class="el-form-item">
        <label for="normalOrderOvertime" class="el-form-item__label" style="width: 150px;">正常订单超过：</label>
        <div class="el-form-item__content" style="margin-left: 150px;">
            <div style="width:500px" class="input-width el-input el-input-group el-input-group--append">
                <input type="text" autocomplete="off" class="el-input__inner">
                <div class="el-input-group__append">分</div>
            </div> <span style="margin-left:40px"  class="note-margin">未付款，订单自动关闭</span>
        </div>
    </div>
    <div class="el-form-item">
        <label for="confirmOvertime" class="el-form-item__label" style="width: 150px;">发货超过：</label>
        <div class="el-form-item__content" style="margin-left: 150px;">
            <div style="width:500px"  class="input-width el-input el-input-group el-input-group--append">
                <input type="text" autocomplete="off" class="el-input__inner">
                <div class="el-input-group__append">天</div>
            </div> <span style="margin-left:40px" class="note-margin">未收货，订单自动完成</span>
        </div>
    </div>
    <div class="el-form-item">
        <label for="finishOvertime" class="el-form-item__label" style="width: 150px;">订单完成超过：</label>
        <div class="el-form-item__content" style="margin-left: 150px;">
            <div style="width:500px" class="input-width el-input el-input-group el-input-group--append">
                <input type="text" autocomplete="off" class="el-input__inner">
                <div class="el-input-group__append">天</div>
            </div> <span style="margin-left:40px"  class="note-margin">自动结束交易，不能申请售后</span>
        </div>
    </div>
    <div  class="el-form-item">
        <label for="commentOvertime" class="el-form-item__label" style="width: 150px;">订单完成超过：</label>
        <div class="el-form-item__content" style="margin-left: 150px;">
            <div style="width:500px" class="input-width el-input el-input-group el-input-group--append">
                <input type="text" autocomplete="off" class="el-input__inner">
                <div class="el-input-group__append">天</div>
            </div> 
            <span style="margin-left:40px" class="note-margin">自动五星好评</span>
        </div>
    </div>
    <div class="el-form-item" style="display:flex">
        <div class="el-form-item__content" style="margin-left: 150px;">
            <button type="button" class="el-button el-button--primary">
              <span>取消</span>  
            </button>
        </div>
        <div class="el-form-item__content" style="margin-left:360px;">
            <button type="button" class="el-button el-button--primary">
              <span>取消</span>  
            </button>
        </div>

    </div>
</form>
</el-card>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
  }
</style>
