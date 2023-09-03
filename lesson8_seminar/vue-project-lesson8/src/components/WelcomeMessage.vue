<template>
  <div>
    <h2 :class="$style.hello">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.hello {
  color: red;
  font-size: 40px;
}
</style>
