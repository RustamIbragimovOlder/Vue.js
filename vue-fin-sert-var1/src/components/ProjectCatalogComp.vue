<template>
    <div class="catalog center">
        <div class="catalog__items">
            <div class="catalog__item" v-for="product in products" :key="product.id">
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
    </div>
</template>

<script>
import image16 from '@/assets/photo16.png';
import image17 from '@/assets/photo17.png';
import image18 from '@/assets/photo18.png';
import image19 from '@/assets/photo19.png';
import image20 from '@/assets/photo20.png';
import image21 from '@/assets/photo21.png';
import image22 from '@/assets/photo22.png';
import image23 from '@/assets/photo23.png';
export default {
    name: 'ProjectCatalogComp',

    data() {
        return {
            products: [
                {
                    id: 1,
                    image: image16,
                    alt: 'image16',
                    title: 'Minimal Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 2,
                    image: image17,
                    alt: 'image17',
                    title: 'Minimal Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 3,
                    image: image18,
                    alt: 'image18',
                    title: 'Classic Minimal Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 4,
                    image: image19,
                    alt: 'image19',
                    title: 'Modern Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 5,
                    image: image20,
                    alt: 'image20',
                    title: 'Minimal Bedroom table',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 6,
                    image: image21,
                    alt: 'image21',
                    title: 'System Table',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 7,
                    image: image22,
                    alt: 'image22',
                    title: 'Modern Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
                {
                    id: 8,
                    image: image23,
                    alt: 'image23',
                    title: 'Modern Bedroom',
                    subtitle: 'Decor / Artchitecture'
                },
            ]

        };
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
</style>