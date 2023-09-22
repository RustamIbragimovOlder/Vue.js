<template>
    <div>
        <IndexBannerComp />
        <IndexProjectComp />
        <IndexCounterComp />
        <IndexBlogComp />
    </div>
</template>

<script>
import IndexBannerComp from '@/components/IndexBannerComp.vue'
import IndexProjectComp from '@/components/IndexProjectComp.vue'
import IndexCounterComp from '@/components/IndexCounterComp.vue'
import IndexBlogComp from '@/components/IndexBlogComp.vue'
export default {
    name: 'HomePage',

    components: {
        IndexBannerComp,
        IndexProjectComp,
        IndexCounterComp,
        IndexBlogComp,
    },


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

<style lang="scss" scoped></style>