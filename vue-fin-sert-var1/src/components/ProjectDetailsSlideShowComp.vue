<template>
    <div class="wrapper">
        <div class="show" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
            <div v-for="slide in slides" :key="slide.id">
                <div class="content">
                    <h3 class="content__title">{{ slide.title }}</h3>
                    <p class="content__text">{{ slide.text1 }}</p>
                    <p class="content__text">{{ slide.text2 }}</p>
                </div>
                <img :src="slide.img" :alt="slide.name">
            </div>
        </div>
        <div class="button">
            <button class="btn" @click="prevSlide">Prev</button>
            <button class="btn" @click="nextSlide">Next</button>
        </div>
    </div>
</template>

<script>
import image25 from '@/assets/photo25.png'
import image17 from '@/assets/photo17.png'
import image14 from '@/assets/photo14.png'

export default {
    name: 'ProjectDetailsSlideShowComp',
    data() {
        return {
            currentSlideIndex: 0,
            slides: [
                {
                    id: 1,
                    name: 'slide1',
                    title: 'Minimal Look Bedrooms 1',
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                    img: image25
                },
                {
                    id: 2,
                    name: 'slide2',
                    title: 'Minimal Look Bedrooms 2',
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                    img: image17
                },
                {
                    id: 3,
                    name: 'slide3',
                    title: 'Minimal Look Bedrooms 3',
                    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                    img: image14
                }
            ]
        }
    },

    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.slides.length - 1) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
        }
    }

}
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

img {
    width: 800px;
    height: 500px;
    // display: none;
    border-radius: 60px;
}

.wrapper {
    max-width: 800px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 200px;
}

.show {
    display: flex;
    transition: all ease 1s;
}

.content {
    margin-bottom: 40px;
    text-align: left;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
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

.button {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    border-radius: 12px;
}

.btn {
    width: 160px;
    height: 40px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    border-radius: 10px;
}
</style>