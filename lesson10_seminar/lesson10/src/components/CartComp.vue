<template>
    <div>
        <h3>Задание 2</h3>
        <p>Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и
            видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения
            количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо
            автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки.</p>
        <div v-for="(item, index) in cartItems" :key="index">
            <p>{{ item.title }}</p>
            <p>Price: {{ item.price }}</p>
            <input type="number" v-model.number="item.quantity">
            <p>Subtotal: {{ item.price * item.quantity }}</p>
        </div>
        <div class="total">Total: {{ totalPrice }}</div>
        <TestComp @mySupaEvent="testListener" />
    </div>
</template>

<script>
import TestComp from "@/components/TestComp.vue";
export default {
    name: 'CartComp',
    components: {
        TestComp,
    },
    data() {
        return {
            cartItems: [
                { id: 1, title: 'Product-1', quantity: 7, price: 100 },
                { id: 2, title: 'Product-2', quantity: 15, price: 25 },
                { id: 3, title: 'Product-3', quantity: 4, price: 235 },
                { id: 4, title: 'Product-4', quantity: 150, price: 2 },
            ],
        }
    },
    methods: {
        testListener(data) {
            console.log(data);
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    }

};
</script>

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}

.total {
    font-size: 32px;
    color: red;
}
</style>