<template>
  <div>
    <h2>Задание 1</h2>
    <p>Создайте компонент "Список пользователей" (UserList), который будет отображать список пользователей из переданного
      массива. Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь" (User),
      принимающего пропсы с данными о пользователе (например, имя, фамилия и электронная почта).</p>
    <UserListComp />
    <h2>Задание 2</h2>
    <p>Разработка приложения для отображения информации о книгах
      Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, такую как название, автор и
      год издания. Компонент "Книга" должен иметь возможность отображать дополнительные детали о книге по требованию
      пользователя. Также необходимо создать компонент "Список книг" (BookList), который будет отображать список книг из
      переданного массива.
    </p>
    <BookListComp />
    <h2>Задание 3</h2>
    <p>Вам предстоит создать простое приложение на Vue.js для отображения списка фильмов. У вас есть массив объектов с
      информацией о фильмах, и вы должны создать два компонента: родительский компонент "Список фильмов" и дочерний
      компонент "Информация о фильме". Родительский компонент "Список фильмов" будет отображать список фильмов, используя
      дочерний компонент "Информация о фильме" для отображения дополнительных деталей о каждом фильме по клику. Создайте
      родительский компонент "MovieList", который содержит список фильмов. Создайте дочерний компонент "MovieInfo",
      который отображает информацию о фильме и может передавать данные о фильме обратно в родительский компонент.
      Импортируйте дочерний компонент в родительский компонент. Передайте информацию о фильмах из родительского компонента
      в дочерний компонент через props. При клике на каждый элемент списка фильмов в дочернем компоненте "MovieInfo"
      показывайте или скрывайте дополнительные детали о фильме. При клике на кнопку в дочернем компоненте "MovieInfo",
      передайте некоторую информацию о фильме обратно в родительский компонент. В родительском компоненте отобразите
      информацию о фильме, которую вы получили от дочернего компонента.
    </p>
    <MovieListComp />
  </div>
</template>
<script>
import UserListComp from "./components/UserListComp.vue";
import BookListComp from "./components/BookListComp.vue";
import MovieListComp from "./components/MovieListComp.vue";

export default {
  components: {
    UserListComp,
    BookListComp,
    MovieListComp
  },
  data() {
    return {

    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
