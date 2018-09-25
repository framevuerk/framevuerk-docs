<template>
  <fvMain id="app" parent>
    <router-view></router-view>
  </fvMain>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sidebar: false,
      sidebarPin: false,
      dialog: false,
      options: [{a: 'One', b: 1}, {a: 'Two', b: 2}, {a: 'Three', b: 3}],
      select: undefined
    }
  },
  methods: {
    updateSidebar(value) {
      if (this.$route.name === 'Home') {
        this.sidebar = false
      } else {
        this.sidebar = value
      }
    },
    updateSidebarPin(value) {
      if (this.$route.name === 'Home') {
        this.sidebarPin = false
      } else {
        this.sidebarPin = value
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
