<template>
    <div>
        <img :src="require('../assets/' + slide_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'ProjectDetailsSlideComp',
    props: {
        slide_data: {
            type: Object,
            default: () => { }
        }
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