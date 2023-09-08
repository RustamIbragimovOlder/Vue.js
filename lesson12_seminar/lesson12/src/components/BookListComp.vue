<template>
    <div>
        <BookComp v-for="book in books" :key="book.id" :book="book" @showDescrition="showDescrition" />
    </div>
</template>
  
<script>
import BookComp from "@/components/BookComp.vue";
export default {
    components: {
        BookComp
    },
    name: 'BookListComp',

    data() {
        return {
            books: [
                { name: 'Книга1', author: 'Автор1', yearPublication: 1970, additionalInformation: 'Дополнительная информация о книге 1', showDescrition: false },
                { name: 'Книга2', author: 'Автор2', yearPublication: 1985, additionalInformation: 'Дополнительная информация о книге 2', showDescrition: false },
                { name: 'Книга3', author: 'Автор3', yearPublication: 1990, additionalInformation: 'Дополнительная информация о книге 3', showDescrition: false },
                { name: 'Книга4', author: 'Автор4', yearPublication: 2005, additionalInformation: 'Дополнительная информация о книге 4', showDescrition: false },
                { name: 'Книга5', author: 'Автор5', yearPublication: 2020, additionalInformation: 'Дополнительная информация о книге 5', showDescrition: false },

            ],
        };
    },

    methods: {
        showDescrition(book) {
            book.showDescrition = !book.showDescrition
        }
    },
};
</script>
  