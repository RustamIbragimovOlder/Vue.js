<template>
    <div>
        <h3 @click="toggleDescription">{{ book.title }}</h3>
        <div v-if="showDescription">
            <p>Название: {{ book.title }}</p>
            <p>Автор: {{ book.author }}</p>
            <p>Год издания: {{ book.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookItemComp',
    props: ['book'],
    data() {
        return {
            showDescription: false,
        }
    },
    methods: {
        toggleDescription() {
            this.showDescription = !this.showDescription;
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
</style>