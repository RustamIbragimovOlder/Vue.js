<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>
            Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails".
            Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.
            Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте.
            Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг,
            указывающий на доступность продукта).
            Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену
            продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
            В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
            Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
        </p>
        <div class="product" v-for="(product, index) in products" :key="index">
            <p class="product__title">Product: {{ product.title }}</p>
            <p class="product__price">Price: {{ product.price.toFixed(2) }}</p>
            <p class="product__price">FormattedPrice: ${{ product.price.toFixed(2) }}</p>
            <p class="product__quantity">Quantity: {{ product.quantity }}</p>
            <p class="green" v-if="product.quantity > 10">Availability: Товар доступен (Available)</p>
            <p class="yellow" v-else-if="product.quantity < 10 && product.quantity > 5">Availability: Товара осталось мало
                (Available)</p>
            <p class="orange" v-else-if="product.quantity <= 5 && product.quantity > 0">Availability: Последние экземпляры
                товара
                (Available)</p>
            <p class="red" v-else-if="product.quantity === 0">Availability: Товар недоступен (Out of stock)</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    props: {
        msg: String
    },

    data() {
        return {
            products: [
                { id: 1, title: 'Product-1', quantity: 7, price: 100.35 },
                { id: 2, title: 'Product-2', quantity: 15, price: 25.50 },
                { id: 3, title: 'Product-3', quantity: 0, price: 235.25 },
                { id: 4, title: 'Product-4', quantity: 3, price: 99.99 },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.product {
    border: 1px solid #ccc;
    width: 400px;
    margin-bottom: 20px;

    &__title {
        font-size: 32px;
        font-weight: bold;
    }

    &__price {
        font-size: 24px;
        font-weight: bold;
    }

    &__quantity {
        font-size: 20px;
        font-weight: bold;
    }
}

.red {
    background-color: red;
    font-size: 20px;
}

.yellow {
    background-color: yellow;
    font-size: 20px;
}

.green {
    background-color: green;
    font-size: 20px;
}

.orange {
    background-color: orange;
    font-size: 20px;
}
</style>