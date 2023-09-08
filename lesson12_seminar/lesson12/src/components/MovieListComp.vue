<template>
    <div>
        <div v-if="selectedMovie">
            <h3>{{ selectedMovie.title }}</h3>
            <p>{{ selectedMovie.director }}</p>
            <p>{{ selectedMovie.year }}</p>
        </div>
        <MovieInfoComp v-for="(movie, index) in movies" :key="movie.id" :movie="movie" :index="index"
            @showInfo="showInfo" />
    </div>
</template>

<script>
import MovieInfoComp from './MovieInfoComp.vue';
export default {
    name: 'MovieListComp',
    components: {
        MovieInfoComp,
    },
    data() {
        return {
            currentIndex: null,
            movies: [
                { id: 1, title: 'Фильм 1', director: 'Режиссер 1', year: 2020 },
                { id: 2, title: 'Фильм 2', director: 'Режиссер 2', year: 2019 },
                { id: 3, title: 'Фильм 3', director: 'Режиссер 3', year: 2021 }
            ],

        };
    },

    mounted() {

    },

    computed: {
        selectedMovie() {
            const { currentIndex } = this;

            if (typeof currentIndex === 'number') {
                return this.movies[currentIndex]
            }

            return currentIndex;
        }
    },

    methods: {
        showInfo(index) {
            this.currentIndex = index;
        }
    },
};
</script>

<style lang="scss" scoped></style>