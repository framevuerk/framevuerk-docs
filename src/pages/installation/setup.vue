<template>
  <fvLayout>
    <appHeader :title="$route.meta.title" sidebar layout="header"></appHeader>
    <appSidebar layout="sidebar" position="start"/>
    <fvContent css-padding="md" css-max-width="md" css-margin-x="auto">
      <appDescription :content="$route.meta.api"></appDescription>
      <appCode :content="require('../../codes/setup.sh.raw')" lang="terminal"></appCode>
      <appDescription>And put these on your main script: (Also <i>commonjs</i> syntax and <i>require</i> is available.)</appDescription>
      <appCode :content="require('../../codes/setup.js.raw')" lang="javascript"></appCode>
      <appDescription>Finally you need to create your template just like this.</appDescription>
      <appCode :content="require('../../codes/setup.html.raw')" lang="html"></appCode>
    </fvContent>
  </fvLayout>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'
import appCode from '../../components/appCode.vue'
import appDescription from '../../components/appDescription.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appDescription
  }
}
</script>