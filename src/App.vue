<template>
  <div>
    <Category/>
    <router-view></router-view>
  </div>
</template>
<script>

 import Category from './components/Category/Category'
  export default {
    components:{
      Category
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
