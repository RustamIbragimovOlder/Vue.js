<template>
  <div id="app">
    <header>
      <!-- <nav @click="clickMenu">
        <a href="#dashboard" class="menu__link">Dashboard</a>
        <a href="#aboutcontent" class="menu__link">AboutContent</a>
        <a href="#notfound" class="menu__link">NotFound</a>
      </nav> -->
      <nav>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/aboutcontent">AboutContent</router-link>
        <router-link to="/hello">Hello</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  created() {
    this.$router.push({ name: 'dashboard' })
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

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
  font-size: 24px;
}
</style>
