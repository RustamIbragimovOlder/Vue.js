<template>
    <div>
        <h2 :class="$style.hello">{{ msg }}</h2>
        <div>
            <!--      <img-->
            <!--          :class="$style.bigImg"-->
            <!--          :src="selectedImg"-->
            <!--          alt="котик"-->
            <!--      >-->
            <!--      <img-->
            <!--          :class="$style.bigImg"-->
            <!--          :src="require(`@/assets/${selectedImg}`)"-->
            <!--          alt="котик"-->
            <!--      >-->
            <img :class="$style.bigImg" :src="selectedImg" alt="bigImg">
        </div>
        <div>
            <!--      <img-->
            <!--          v-for="(img, index) in imgUrls"-->
            <!--          :class="$style.smallImg"-->
            <!--          :src="img"-->
            <!--          alt="котик"-->
            <!--          :key="index"-->
            <!--          @click="selectImgIndex(index)"-->
            <!--      >-->
            <!--      <img-->
            <!--          v-for="(img, index) in imgUrls"-->
            <!--          :class="$style.smallImg"-->
            <!--          :src="require(`@/assets/${img}`)"-->
            <!--          alt="котик"-->
            <!--          :key="index"-->
            <!--          @click="selectImgIndex(index)"-->
            <!--      >-->
            <img v-for="(img, index) in imgUrls" :class="$style.smallImg" :src="img" alt="smallImg" :key="index"
                @click="selectImgIndex(index)">
        </div>
        <div>
            <img :src="image" alt="">
        </div>
    </div>
</template>
  
<script>
import image from '@/assets/img.png';
import image1 from '@/assets/img_1.png';
import image2 from '@/assets/img_2.png';
export default {
    name: 'GalleryCats',
    props: {
        msg: String,
    },
    data() {
        return {
            image,
            currentImgIndex: 0,
            imgUrls: [
                // './assets/img.png',
                // './assets/img_1.png',
                // './assets/img_2.png',
                // 'img.png',
                // 'img_1.png',
                // 'img_2.png',    
                image, image1, image2,]
        }
    },
    methods: {
        selectImgIndex(index) {
            this.currentImgIndex = index;
        }
    },
    computed: {
        selectedImg() {
            return this.imgUrls[this.currentImgIndex];
        }
    }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.hello {
    color: red;
    font-size: 40px;
}

.bigImg {
    width: 400px;
}

.smallImg {
    height: 100px;
}
</style>
  