<template>
    <div class="blog center">
        <h2 class="blog__title">Articles & News</h2>
        <div class="blog__items">
            <div class="blog__item" v-for="article in blogArticles" :key="article.id">
                <img :src="article.photo" :alt="article.alt" class="blog__item_img" />
                <a href="#" class="blog__item_tag">{{ article.button }}</a>
                <p class="blog__item_text">{{ article.title }}</p>
                <div class="blog__item_content">
                    <div class="blog__item_content-date">{{ article.date }}</div>
                    <a href="#" class="blog__item_content-elem">
                        <img src="@/assets/vector3.svg" alt="vector3" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BlogBlogComp',
    computed: {
        ...mapGetters(['blogArticles'])
    }
}
</script>
  
<style scoped lang="scss">
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

.blog {
    margin-bottom: 96px;

    &__title {
        margin-bottom: 10px;
        color: #292f36;
        text-align: center;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__text {
        margin-bottom: 52px;
        width: 812px;
        margin-left: auto;
        margin-right: auto;
        color: #4d5053;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__items {
        display: flex;
        flex-direction: row;
        gap: 25px;
        flex-wrap: wrap;
    }

    &__item {
        position: relative;
        padding: 20px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;

        &_img {
            margin-bottom: 22px;
            border-radius: 43px 43px 0 0;
        }

        &_tag {
            position: absolute;
            width: 124px;
            top: 247px;
            left: 40px;
            color: #4d5053;
            font-family: 'Jost', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            background-color: #fff;
            border-radius: 8px 8px 8px 0px;
            padding: 7px 9px 10px 11px;
            transition: 0.3s;
        }

        &_text {
            display: flex;
            width: 320px;
            height: 120px;
            flex-direction: column;
            justify-content: center;

            color: #292f36;
            font-family: 'DM Serif Display', serif;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
            margin-bottom: 30px;
        }

        &_content {
            display: flex;
            width: 340px;
            align-items: center;
            gap: 65px;

            &-date {
                display: flex;
                width: 223px;
                height: 33px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;

                color: #4d5053;
                font-family: 'Jost', sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                /* 24px */
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }
        }

        &:hover {
            background: #f4f0ec;
        }

        &:hover circle {
            fill: #fff;
        }
    }
}
</style>