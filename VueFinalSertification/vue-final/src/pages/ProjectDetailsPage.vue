<template>
    <div>
        <ProjectDetailsBannerComp />
        <ProjectDetailsSlideComp />
        <ProjectDetailsSlideShowComp />
    </div>
</template>

<script>
import ProjectDetailsBannerComp from '@/components/ProjectDetailsBannerComp.vue';
import ProjectDetailsSlideComp from '@/components/ProjectDetailsSlideComp.vue';
import ProjectDetailsSlideShowComp from '@/components/ProjectDetailsSlideShowComp.vue';

export default {
    name: 'ProjectDetailsPage',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { ProjectDetailsBannerComp, ProjectDetailsSlideComp, ProjectDetailsSlideShowComp }
};
</script>

<style lang="scss" scoped></style>