<template>
    <div>
        <div class="calc">
            <input class="input" type="text" v-model="result">
            <button @click="$event => addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
            <button @click="$event => addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
            <button @click="calcResult">=</button>
            <button class="reset" @click="reset">C</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CalcComponent',

  data () {
    return {
      result: '',
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs: ['+', '-', '*', '/']
    }
  },

  methods: {
    addButton (char) {
      this.result += char
      this.result = this.result.toString()
    },
    calcResult () {
      this.result = eval(this.result)
    },
    reset () {
      this.result = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.calc {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}
.input {
    grid-column: 1 / -1;
    text-align: right;
}
.reset {
    grid-column: 1 / -1;

}

</style>
