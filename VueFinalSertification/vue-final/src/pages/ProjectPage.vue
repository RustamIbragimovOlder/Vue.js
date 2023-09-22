<template>
    <div>
        <ProjectBannerComp />
        <ProjectCategoriesComp />
        <ProjectCatalogComp />
        <!-- <PaginationComp /> -->
    </div>
</template>

<script>
import ProjectBannerComp from '@/components/ProjectBannerComp.vue';
import ProjectCategoriesComp from '@/components/ProjectCategoriesComp.vue';
import ProjectCatalogComp from '@/components/ProjectCatalogComp.vue';
// import PaginationComp from '@/components/PaginationComp.vue'
export default {
    name: 'ProjectPage',

    components: {
        ProjectBannerComp,
        ProjectCategoriesComp,
        ProjectCatalogComp,
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