<template>
    <div class="blog-banner"></div>
</template>

<script>
export default {
    name: 'ProjectDetailsBannerComp',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
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

.blog-banner {
    height: 360px;
    margin-top: 45px;
    background-image: url('@/assets/photo24.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
}
</style>