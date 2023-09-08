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

export default {
  name: 'App',

  components: {
    PaymentsDisplayComp,
    AddListComp
  },

  data() {
    return {
      paymentList: [],
    };
  },

  methods: {
    fetchData() {
      return [
        {
          date: '05.09.2023',
          category: 'Food',
          value: 1217,
        },
        {
          date: '05.09.2023',
          category: 'Gift',
          value: 5075,
        },
        {
          date: '06.09.2023',
          category: 'Building materials',
          value: 1999,
        },
        {
          date: '06.09.2023',
          category: 'Transport',
          value: 998.50,
        },
        {
          date: '07.09.2023',
          category: 'Building materials',
          value: 582.75,
        },
        {
          date: '07.09.2023',
          category: 'Building materials',
          value: 13750,
        },
      ]
    },
    addNewPay(data) {
      this.paymentList.push(data)

    }
  },

  created() {
    this.paymentList = this.fetchData();
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
