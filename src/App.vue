<template>
  <div id="app">
    <Category v-if="$route.meta.isShowCategory" :meta="$route.meta"/>
   <div class="rightContent">
      <Header v-if="$route.meta.isShowCategory"  />
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
export default {
  name: "app",
  components: {
    Category,
    Header
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#app 
  display: flex;
  width 100%

  .rightContent 
    width: calc(100% - 200px)
  // padding-left 200px
</style>



