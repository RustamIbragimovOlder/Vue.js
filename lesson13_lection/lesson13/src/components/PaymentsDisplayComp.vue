<template>
    <div>
        <p>Всего расходов: {{ getFV }}</p>
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

    methods: {

    },

    computed: {
        getFV() {
            return this.$store.getters.getFullValue
        }
    }

};
</script>

<style lang="scss" scoped></style>