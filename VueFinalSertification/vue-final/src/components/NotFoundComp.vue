<template>
    <div class="content center">
        <div class="content__text">
            <h2 class="content__text_title">404</h2>
            <p class="content__text_subtitle">We are sorry, but the page you requested was not found</p>
            <button class="content__text_btn">
                <a href="home" class="content__text_btn-link">Back To Home</a><img src="@/assets/vector1.png"
                    alt="vector1" />
            </button>
        </div>
        <div class="content__img">
            <img src="@/assets/img404.png" alt="404">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundComp',

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

.content {
    margin-top: 160px;
    margin-bottom: 320px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;

    &__text {
        display: flex;
        height: 800px;
        flex-direction: column;
        justify-content: center;

        &_title {
            color: #CDA274;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-family: DM Serif Display;
            font-size: 250px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 312.5px */
        }

        &_subtitle {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 35px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
            /* 52.5px */
            letter-spacing: 0.35px;
        }

        &_btn {
            display: flex;
            padding: 26px 54px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            width: 260px;
            height: 80px;
            margin-top: 24px;
            border-radius: 20px;
            background: #292F36;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        }

        &_btn-link {
            color: #FFF;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            /* 22.5px */
            letter-spacing: 0.36px;
        }


    }

    &__img {
        width: 600px;
        // height: 160px;
        // object-fit: cover;
        border-radius: 0 0 10px 0;
        // background-image: url('@/assets/img404.png');
    }
}
</style>
