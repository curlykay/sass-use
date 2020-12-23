<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@use "~@/styles/variables.scss" as vars;
// @import "~@/styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  &::before {
    content: vars.$text;
  }
  // &::before {
  //   content: $text;
  // }
}
</style>
