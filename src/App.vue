<template>
  <div id="app">
    <Category/>
  </div>
</template>

<script>
  import Category from './components/Category/Category'
export default {
  name: 'app',
  components: {
    Category
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
