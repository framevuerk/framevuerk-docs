<template>
  <ThemeProvider id="app" :colors="{
    primary: '#19b6ee'  
  }">
    <router-view></router-view>
  </ThemeProvider>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  line-height: 1.6;
}
</style>
