<template>
    <div class="pag center">
        <ul class="pagination modal-4 center">
            <!-- <li><a href="#">01</a></li>
            <li><a href="#">02</a></li>
            <li><a href="#">03</a></li> -->
            <router-link v-for="page in 3" :to="`/project/${page}`" :key="page">{{ page }}</router-link>
        </ul>
        <a href="#"><img src="@/assets/vector4.svg" alt="vector4" /></a>
        <br />
    </div>
</template>

<script>
export default {
    name: 'PaginationComp',

    watch: {
        $route(to, from) {
            console.log(to, from);
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.pag {
    margin-bottom: 100px;
}

.pagination {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin-top: 50px;
    margin-left: 480px;
}

.pagination li {
    display: inline;
    text-align: center;
}

.pagination a {
    float: left;
    display: block;
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    text-decoration: none;
    padding: 5px 12px;
    color: black;
    margin-left: -1px;
    border: 1px solid #cda274;
    line-height: 1.5;
}

.pagination a.active {
    cursor: default;
}

.pagination a:active {
    outline: none;
}

.modal-4 a {
    margin: 0 5px;
    padding: 10px;
    width: 52px;
    height: 52px;
    line-height: 30px;
    border-radius: 100%;
    background-color: white;
}

.modal-4 a.prev {
    border-radius: 50px 0 0 50px;
    width: 100px;
}

.modal-4 a.next {
    border-radius: 0 50px 50px 0;
    width: 100px;
}

.modal-4 a:hover {
    background-color: rgb(241, 238, 238);
}

.modal-4 a.active,
.modal-4 a:active {
    background-color: rgb(241, 238, 238);
}
</style>