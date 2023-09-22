<template>
    <div>
        <BlogBannerComp />
        <BlogPostComp />
        <BlogBlogComp />
        <!-- <PaginationComp /> -->
    </div>
</template>

<script>
import BlogBannerComp from '@/components/BlogBannerComp.vue'
import BlogPostComp from '@/components/BlogPostComp.vue'
import BlogBlogComp from '@/components/BlogBlogComp.vue'
// import PaginationComp from '@/components/PaginationComp.vue'
export default {
    name: 'BlogPage',

    components: {
        BlogBannerComp,
        BlogPostComp,
        BlogBlogComp,
        // PaginationComp,
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