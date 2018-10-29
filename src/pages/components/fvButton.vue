<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader :title="$route.meta.title" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api"></appDescription>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvButton.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvButton.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Themes</label>
            <div class="fv-margin">
              <fvButton class="fv-default fv-margin-end fv-margin-bottom"> Default theme </fvButton>
              <fvButton class="fv-secondary fv-margin-end fv-margin-bottom"> Secondary theme </fvButton>
              <fvButton class="fv-primary fv-margin-end fv-margin-bottom"> Primary theme </fvButton>
              <fvButton class="fv-danger fv-margin-end fv-margin-bottom"> Danger theme </fvButton>
              <fvButton class="fv-warning fv-margin-end fv-margin-bottom"> Warning theme </fvButton>
              <fvButton class="fv-info fv-margin-end fv-margin-bottom"> Info theme </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Sizes</label>
            <div class="fv-margin">
              <fvButton class="fv-size-xl fv-margin-end fv-margin-bottom"> XLarge size </fvButton>
              <fvButton class="fv-size-lg fv-margin-end fv-margin-bottom"> Large size </fvButton>
              <fvButton class="fv-size-md fv-margin-end fv-margin-bottom"> Default size </fvButton>
              <fvButton class="fv-size-sm fv-margin-end fv-margin-bottom"> Small size </fvButton>
              <fvButton class="fv-size-xs fv-margin-end fv-margin-bottom"> XSmall size </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Custom elements</label>
            <div class="fv-padding">
              <a class="fv-button fv-primary" href="http://framevuerk.com" target="_blank"> Link </a>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="$route.meta.api"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="$route.meta.api"></appApi>
        </div>
      </div>
    </fvContent>
  </fvMain>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'
import appCode from '../../components/appCode.vue'
import appExample from '../../components/appExample.vue'
import appApi from '../../components/appApi.vue'
import appNotes from '../../components/appNotes.vue'
import appDescription from '../../components/appDescription.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi,
    appNotes,
    appDescription
  }
}
</script>