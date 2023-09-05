<template>
    <div class="header center">
        <nav class="logo">
            <img src="@/assets/logo.png" alt="logo" class="logo__img" />
            <a href="#" class="logo__text">Interno</a>
        </nav>
        <nav class="menu">
            <a href="#" class="menu__home">Home</a>
            <a href="#" class="menu__project">Project</a>
            <a href="#" class="menu__blog">Blog</a>
        </nav>
    </div>
</template>
  
<script></script>
  
<style scoped lang="scss">
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

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
        color: #292f36;
        font-family: 'DM Serif Display', serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 50px */
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: #292f36;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
}
</style>