<template>
    <div class="blog-banner">
        <div class="blog-banner__title">
            <h2 class="blog-banner__heading">Our Project</h2>
            <div class="blog-banner__subhead-box">
                <a href="home" class="blog-banner__subhead-box-item">Home</a>
                <a href="project" class="blog-banner__subhead-box-item">Project</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectBannerComp',

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
    margin-top: 45px;
    background-image: url('@/assets/photo15.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 78px;
        width: 504px;
        margin-top: 180px;
        border-radius: 37px 37px 0px 0px;
        background-color: #fff;
    }

    &__heading {
        color: #292f36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__subhead-box {
        display: inline-flex;
        flex-direction: row;

        &-item {
            color: #4d5053;
            font-family: 'Jost', sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
            text-align: center;

            &:first-child::after {
                content: '/\00a0';
                padding-left: 5px;
            }
        }
    }
}
</style>