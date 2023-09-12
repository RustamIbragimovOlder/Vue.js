<template>
    <div>
        <h3 :class="headerClass">Корзина покупок</h3>
        <div>
            <div v-for="item in cartItems" :key="item.id">
                <h4 :style="someStyle">{{ item.name }}</h4>
                <p>Кол-во: {{ item.quantity }}</p>
                <p>Стоимость: {{ item.quantity * item.price }}</p>
            </div>
        </div>
        <h4>Всего в корзине</h4>
        <p>кол-во: {{ totalItems }}</p>
        <p>стоимость: {{ totalPrice }}</p>
        <button @click="addRandomItem">Добавить товар</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // подключение MAP

export default {
    name: 'CartItemsComp',

    props: ['type'], // любое необходимое значение
    computed: {
        // подключение MAP
        ...mapGetters([
            'totalItems',
            'totalPrice',
            'cartItems'
        ]),
        headerClass() {
            if (this.type === 'footer') {
                return ['footerClas1', 'footerClas2']
            } else {
                return ['headerClass1', 'headerClass2']
            }
        },
        someStyle() {
            return {
                backgroundColor: 'red',
                fontSize: '16px'
                // .....
            }
        }
    },
    methods: {
        // подключение MAP
        ...mapActions(['addToCart', 'getCart']),
        // метод добавления товара в корзину (со случайным ID и названием)
        addRandomItem() {
            const newItem = {
                id: Date.now(),
                name: 'Товар ' + Date.now(),
                price: 123,
            };

            this.addToCart(newItem);
        }
    },
    // получение информации о корзине якобы с сервера
    created() {
        this.getCart();
    }
};
</script>

<style lang="scss" scoped></style>