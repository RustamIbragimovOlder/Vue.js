<template>
    <div>
        <p>Новый калькулятор на занятии №9 (лекция №5)</p>
        <div>
            <input type="text" v-model="operand1">
            <input type="text" v-model="operand2">
            = {{ result }}
        </div>
        <!-- <div>
            <button @click="add">+</button>
            <button @click="substract">-</button>
            <button @click="divide">/</button>
            <button @click="multiply">*</button>
        </div> -->
        <!-- <div>
            <button @click="calculate('+')">+</button>
            <button @click="calculate('-')">-</button>
            <button @click="calculate('/')">/</button>
            <button @click="calculate('*')">*</button>
        </div> -->
        <div>
            <button @click="calculate(operation)" v-for="operation in operations" v-bind:key="operation"
                v-bind:title="operation" v-bind:disabled="!operand1 || !operand2">
                {{ operation }}
            </button>
        </div>
        <div v-show="error">{{ error }}</div>
        <div>
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-else-if="result < 100">Результат в первой сотне</template>
            <template v-else>Получилось слишком большое число</template>
        </div>
        <div>
            Число Фиббоначи для первого поля ввода {{ fib1 }}<br>
            Число Фиббоначи для второго поля ввода {{ fib2 }}<br>
        </div>
        <div class="logs">
            <h3>История операций</h3>
            <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'CalcFunc',

    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            operations: ['+', '-', '*', '/'],
            error: '',
            logs: {}
        };
    },

    methods: {
        add() {
            this.result = Number(this.operand1) + Number(this.operand2)
        },

        substract() {
            this.result = Number(this.operand1) - Number(this.operand2)
        },

        divide() {
            // this.result = Number(this.operand1) / Number(this.operand2)
            const { operand1, operand2 } = this;
            if (operand2 === 0) {
                this.error = 'Ошибка! Делить на 0 нельзя!';
            } else {
                this.result = operand1 / operand2;
            }
        },

        multiply() {
            this.result = Number(this.operand1) * Number(this.operand2)
        },

        fib(n) {
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
        },

        calculate(operation = '+') {
            this.error = '';
            switch (operation) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.substract()
                    break;
                case '*':
                    this.multiply()
                    break;
                case '/':
                    this.divide()
                    break;
            }
            const key = Date.now();
            const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
            Vue.set(this.logs, key, value);
        },

    },

    computed: {
        fib1() {
            return this.fib(this.operand1)
        },
        fib2() {
            return this.fib(this.operand2)
        },
    }
};
</script>

<style lang="scss" scoped></style>