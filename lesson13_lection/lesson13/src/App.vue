<template>
  <div id="app">
    <div>
      <header>
        <div>My personal costs</div>
      </header>
      <main>
        <PaymentsDisplayComp :items="paymentList" :info="infoText" />
        <AddListComp @addNewPay="addNewPay" />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplayComp from './components/PaymentsDisplayComp.vue';
import AddListComp from './components/AddListComp.vue';
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    PaymentsDisplayComp,
    AddListComp
  },

  methods: {

    addNewPay(data) {
      this.ADD_PAYMENT(data)
    },
    // регистрация мутации
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
  },

  // регистрация state, getters
  computed: {
    ...mapState(['paymentList']),
    ...mapGetters(['getPayment', 'getFullValue']),
    ...mapActions(['fetchData']),
  },

  created() {
    this.SET_PAYMENT(this.fetchData());
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
