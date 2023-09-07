<template>
  <div id="app">
    <AuthenticationComp />
    <CartComp />
    <BookListComp />
    <MortgageCalculatorComp />
  </div>
</template>

<script>
import AuthenticationComp from './components/AuthenticationComp.vue'
import CartComp from './components/CartComp.vue'
import BookListComp from './components/BookListComp.vue'
import MortgageCalculatorComp from './components/MortgageCalculatorComp.vue'

export default {
  name: 'App',
  components: {
    AuthenticationComp,
    CartComp,
    BookListComp,
    MortgageCalculatorComp
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
