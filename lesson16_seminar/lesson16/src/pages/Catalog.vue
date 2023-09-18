<template>
    <div>
        <h2>Здесь находится контент страницы "Catalog"</h2>
        <h3>Catalog</h3>
        <div class="product">
            <div v-for="product in currentProductList" ::key="product.id">
                <h5>Name: {{ product.name }}</h5>
                <p>Price: {{ product.price }}</p>
            </div>
        </div>
        <nav>
            <router-link v-for="page in 3" :key="page" :to="`/catalog/${page}`">{{ page }}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Catalog',

    data() {
        return {
            products: [
                { id: 1, name: 'Товар 1', price: 10 },
                { id: 2, name: 'Товар 2', price: 20 },
                { id: 3, name: 'Товар 3', price: 30 },
                { id: 4, name: 'Товар 4', price: 40 },
                { id: 5, name: 'Товар 5', price: 50 },
                { id: 6, name: 'Товар 6', price: 60 },
                { id: 7, name: 'Товар 7', price: 70 },
                { id: 8, name: 'Товар 8', price: 80 },
                { id: 9, name: 'Товар 9', price: 90 },
                { id: 10, name: 'Товар 10', price: 100 },
                { id: 11, name: 'Товар 11', price: 110 },
                { id: 12, name: 'Товар 12', price: 120 },
                { id: 13, name: 'Товар 13', price: 130 },
                { id: 14, name: 'Товар 14', price: 140 },
                { id: 15, name: 'Товар 15', price: 150 },
            ],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },

    computed: {
        currentProductList() {
            const { currentPage, itemsPerPage } = this;
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return this.products.slice(startIndex, endIndex)
        }
    },

    watch: {
        $route(to, from) {
            const page = this.$route.params.page;
            // const { page } = this.$route.params;
            // if (page) this.currentPage = +page;
            this.currentPage = +page;
        },
    },


    mounted() {
        console.log(this.$route);
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
nav {
    padding: 80px;
    display: flex;
    gap: 32px;
    justify-content: center;


    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>