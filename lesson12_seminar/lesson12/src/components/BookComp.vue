<template>
    <div>
        <p @click="showDescrition(book)">Название: {{ book.name }}</p>
        <p>Автор: {{ book.author }}</p>
        <p>Год издания: {{ book.yearPublication }}</p>
        <p v-if="book.showDescrition">Дополнительно: {{ book.additionalInformation }}</p>
    </div>
</template>
    
<script>
export default {
    name: 'BookComp',
    props: ['book'],

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        showDescrition(book) {
            this.$emit('showDescrition', book);
        }
    },
};
</script>
    