<template>
    <div>
        <p @click="showInfo(index)">Название: {{ movie.title }} </p>
    </div>
</template>

<script>
export default {
    name: 'MovieInfoComp',

    props: ['movie', 'index'],

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        showInfo(index) {
            this.$emit('showInfo', index);
        }
    },
};
</script>
