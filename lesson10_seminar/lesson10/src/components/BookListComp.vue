<template>
    <div>
        <h3>Задание 3</h3>
        <p>Разработка приложения для отображения информации о книгах. Требуется создать компонент "Книга" (Book), который
            будет отображать информацию о книге, такую как название, автор и год издания. Компонент "Книга" должен иметь
            возможность отображать дополнительные детали о книге по требованию пользователя. Также необходимо создать
            компонент "Список книг" (BookList), который будет отображать список книг из переданного массива.</p>
        <BookItemComp v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>

<script>
import BookItemComp from "@/components/BookItemComp.vue";
export default {
    name: "BookListComp",
    components: {
        BookItemComp,
    },
    data() {
        return {
            books: [
                { id: 1, title: 'Книга-1', author: 'Автор-1', year: 2020 },
                { id: 2, title: 'Книга-2', author: 'Автор-2', year: 2019 },
                { id: 3, title: 'Книга-3', author: 'Автор-3', year: 2021 },
                { id: 4, title: 'Книга-4', author: 'Автор-4', year: 2004 },
                { id: 5, title: 'Книга-5', author: 'Автор-3', year: 1996 },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
</style>