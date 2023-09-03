<template>
    <div>
        <h2 :class="$style.hello">{{ msg }}</h2>
        <button @click="sortByPrice(true)">Сортировать по увеличению цены</button>
        <button @click="sortByPrice(false)">Сортировать по уменьшению цены</button>
        <ProductItem v-for="(product, index) in products" :product="product" :key="index" />
    </div>
</template>
  
<script>
import ProductItem from '@/components/ProductItem.vue';
export default {
    name: 'CatalogComp',
    props: {
        msg: String,
    },
    components: {
        ProductItem,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Товар 1',
                    image: 'product1.jpg',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Товар 2',
                    image: 'product2.jpg',
                    price: 50
                },
                {
                    id: 3,
                    name: 'Товар 3',
                    image: 'product3.jpg',
                    price: 200
                },
            ]
        };
    },
    methods: {
        sortByPrice(ascending) {
            if (ascending) {
                this.products.sort((a, b) => a.price - b.price);
            } else {
                this.products.sort((a, b) => b.price - a.price);
            }
        }
    }
}
</script>
  
<style module lang="scss">
.hello {
    color: red;
    font-size: 40px;
}
</style>