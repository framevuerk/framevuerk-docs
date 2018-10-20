<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvMain" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>This is the main part of Framevuerk. For use the most of our components, you should put them into this container for best styles matching and functionality working. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvMain.html.raw')" lang="html"></appCode>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvMain.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvMain.json')"></appApi>
        </div>
      </div>
    </fvContent>
  </fvMain>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'
import appCode from '../../components/appCode.vue'
import appApi from '../../components/appApi.vue'
import appNotes from '../../components/appNotes.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appApi,
    appNotes
  }
}
</script>