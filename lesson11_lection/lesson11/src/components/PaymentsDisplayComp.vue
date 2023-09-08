<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplayComp',

    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
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