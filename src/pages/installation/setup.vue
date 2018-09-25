<template>
  <fvMain>
    <appHeader title="Setup" sidebar></appHeader>
    <appSidebar></appSidebar>
    <fvContent>
      Im Setup
    </fvContent>
  </fvMain>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'

export default {
  components: {
    appHeader,
    appSidebar
  }
}
</script>