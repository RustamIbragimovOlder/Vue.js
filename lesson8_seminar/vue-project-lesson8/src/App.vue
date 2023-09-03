<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WelcomeMessage msg="Привет! Это первый осознанный Vue-project!" />
    <GalleryCats msg="Галерея изображений" />
    <CatalogComponent msg="Каталог товаров и сортировка" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WelcomeMessage from "./components/WelcomeMessage.vue";
import GalleryCats from "@/components/GalleryCats.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    WelcomeMessage,
    GalleryCats,
    CatalogComponent,
  },
};
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
