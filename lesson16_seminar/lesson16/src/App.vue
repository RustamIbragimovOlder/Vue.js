<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/home">Домашняя страница</router-link>
        <router-link to="/info">О нас</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/catalog">Каталог</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 80px;
  display: flex;
  gap: 32px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
