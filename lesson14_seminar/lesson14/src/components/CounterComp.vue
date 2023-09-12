<template>
    <div>
        <p>{{ count }}</p>
        <button @click="INCREMENT">+</button>
        <button @click="DECREMENT">-</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'CounterComp',
    methods: {
        ...mapMutations(['INCREMENT', 'DECREMENT']),
    },
    computed: {
        ...mapState(['count']),
    }
};
</script>

<style lang="scss" scoped></style>