<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent class="fv-no-padding">
      <appHeader :title="$route.meta.title" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api"></appDescription>
          <appCode :content="require('../../codes/setup.sh.raw')" lang="terminal"></appCode>
          <p>Your Script: (Also <i>commonjs</i> syntax and <i>require</i> is available.)</p>
          <appCode :content="require('../../codes/setup.js.raw')" lang="javascript"></appCode>
          <p>Finally you need to create your template just like this.</p>
          <appCode :content="require('../../codes/setup.html.raw')" lang="html"></appCode>
        </div>
      </div>
    </fvContent>
  </fvMain>
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