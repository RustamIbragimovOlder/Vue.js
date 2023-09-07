<template>
    <div>
        <h3>Задание 4</h3>
        <p>Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
            В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также
            элементы для отображения ежемесячного платежа и общей суммы выплаты.
            Используйте директиву v-model для связывания введенных пользователем значений с соответствующими свойствами в
            компоненте. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять ежемесячный платеж на основе
            введенных значений суммы кредита, процентной ставки и срока кредита.
            Создайте вычисляемое свойство totalPayment, которое будет вычислять общую сумму выплаты по кредиту, учитывая
            ежемесячный платеж и срок кредита. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах
            шаблона.</p>
        <h2>Mortgage Calculator</h2>
        <label for="loanAmount">Величина займа:</label>
        <input type="number" id="loanAmount" v-model.number="loanAmount">
        <br>
        <label for="interestRate">Процентная ставка:</label>
        <input type="number" id="interestRate" step="0.01" v-model.number="interestRate">
        <br>
        <label for="loanTerm">Срок кредита (количество месяцев):</label>
        <input type="number" id="loanTerm" v-model.number="loanTerm">

        <div>
            <h2>Каждый месяц:</h2>
            <p>{{ monthlyPayment }}</p>
        </div>

        <div>
            <h2>Всего к оплате:</h2>
            <p>{{ totalPayment }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MortgageCalculatorComp',
    data() {
        return {
            loanAmount: 0,
            interestRate: 0,
            loanTerm: 0,
        }
    },
    computed: {
        monthlyPayment: function () {
            const rate = this.interestRate / 100 / 12;
            const term = this.loanTerm;
            const principal = this.loanAmount;
            const numerator = rate * Math.pow(1 + rate, term);
            const denominator = Math.pow(1 + rate, term) - 1;
            const payment = principal * (numerator / denominator);
            return payment.toFixed(2);
        },
        totalPayment: function () {
            const term = this.loanTerm;
            const payment = parseFloat(this.monthlyPayment);
            return (term * payment).toFixed(2);
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 16px;
}

h3 {
    margin: 40px 0 0;
}
</style>