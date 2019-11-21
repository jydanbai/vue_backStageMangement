<template>
  <div id="app">
    <Category v-if="$route.meta.isShowCategory" />
   <div class="rightContent">
      <Header v-if="$route.meta.isShowCategory" />
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
  import Category from './components/Category/Category'
  import Header from './components/Header/Header'
export default {
  name: 'app',
  components: {
    Category,
    Header
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #app
    display flex
  .rightContent
    width 100%
</style>



