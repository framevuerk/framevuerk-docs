<template>
  <fvSidebar v-model="$root.sidebar" :pin.sync="$root.sidebarPin" class="fv-col-xs-8 fv-col-md-5 fv-col-lg-3 fv-col-xl-2">
    Blah Blah
  </fvSidebar>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false,
      sidebarPin: false
    }
  }
}
</script>