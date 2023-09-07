<template>
  <div id="app">
    <ProductDetailsComp msg="Практическое задание к занятию №10 (семинар №5)" />
  </div>
</template>

<script>
import ProductDetailsComp from './components/ProductDetailsComp.vue'

export default {
  name: 'App',
  components: {
    ProductDetailsComp,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
