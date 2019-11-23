<template>
  <div>
    <router-view></router-view>

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
  },

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
