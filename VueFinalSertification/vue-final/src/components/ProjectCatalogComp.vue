<template>
    <div class="catalog center">
        <div class="catalog__items">
            <div class="catalog__item" v-for="product in currentProjectList" :key="product.id">
                <img :src="product.image" :alt="product.alt" class="catalog__item_img" />
                <div class="catalog__item_content">
                    <div class="catalog__item_content-text">
                        <p class="catalog__item_title">{{ product.title }}</p>
                        <p class="catalog__item_subtitle">{{ product.subtitle }}</p>
                    </div>
                    <div class="catalog__item_content-img">
                        <a href="#" class="catalog__item_content-elem"><img src="@/assets/vector2.svg" alt="vector2" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pag center">
            <router-link class="pagination modal-4 center" v-for="page in 3" :to="`/project/${page}`" :key="page">{{
                page }}</router-link>
            <br />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ProjectCatalogComp',

    data() {
        return {
            currentPage: 1,
            productsPerPage: 4,
        }
    },

    computed: {
        ...mapGetters(['products']),
        currentProjectList() {
            const { currentPage, productsPerPage } = this;
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            return this.products.slice(startIndex, endIndex);

        }
    },

    watch: {
        $route(to, from) {
            const { page } = this.$route.params;
            if (page) this.currentPage = page;
            console.log(to, from);
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.catalog {
    margin-top: 60px;

    &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    &__item {


        &_content {
            margin-top: 60px;
            margin-bottom: 60px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &-text {
                display: flex;
                width: 300px;
                height: 27px;
                flex-direction: column;
                justify-content: flex-start;
            }
        }

        &_title {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
        }

        &_subtitle {
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }
    }
}

.pag {
    margin-left: 500px;
    margin-bottom: 100px;
}

.pagination {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin-top: 50px;
    margin-left: 480px;
}

.pagination {
    display: inline;
    text-align: center;
}

// .pagination a {
.pagination {
    float: left;
    display: block;
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    text-decoration: none;
    padding: 5px 12px;
    color: black;
    margin-left: -1px;
    border: 1px solid #cda274;
    line-height: 1.5;
}

.pagination.active {
    cursor: default;
}

.pagination.active {
    outline: none;
}

.modal-4 {
    margin: 0 5px;
    padding: 10px;
    width: 52px;
    height: 52px;
    line-height: 30px;
    border-radius: 100%;
    background-color: white;
}

.modal-4.prev {
    border-radius: 50px 0 0 50px;
    width: 100px;
}

.modal-4.next {
    border-radius: 0 50px 50px 0;
    width: 100px;
}

.modal-4:hover {
    background-color: rgb(241, 238, 238);
}

.modal-4.active,
.modal-4:active {
    background-color: rgb(241, 238, 238);
}
</style>