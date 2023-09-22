<template>
    <div>
        <BlogDetailsBlog />
        <BlogDetailsBlogDetails />
        <BlogDetailsBlogList />
        <BlogDetailsComp />
    </div>
</template>

<script>
import BlogDetailsBlog from '@/components/BlogDetailsBlog.vue';
import BlogDetailsBlogDetails from '@/components/BlogDetailsBlogDetails.vue';
import BlogDetailsBlogList from '@/components/BlogDetailsBlogList.vue';
import BlogDetailsComp from '@/components/BlogDetailsComp.vue';

export default {
    name: 'BlogDetailsPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { BlogDetailsBlog, BlogDetailsBlogDetails, BlogDetailsBlogList, BlogDetailsComp }
};
</script>

<style lang="scss" scoped></style>