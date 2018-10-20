<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvButton" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create button element use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvButton.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvButton.vue">
            <label class="fv-control-label fv-horizontal-padding">Themes</label>
            <div class="fv-padding-small">
              <fvButton class="fv-default fv-margin-small"> Default theme </fvButton>
              <fvButton class="fv-secondary fv-margin-small"> Secondary theme </fvButton>
              <fvButton class="fv-primary fv-margin-small"> Primary theme </fvButton>
              <fvButton class="fv-danger fv-margin-small"> Danger theme </fvButton>
              <fvButton class="fv-warning fv-margin-small"> Warning theme </fvButton>
              <fvButton class="fv-info fv-margin-small"> Info theme </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding-small">
              <fvButton class="fv-size-xl fv-margin-small"> XLarge size </fvButton>
              <fvButton class="fv-size-lg fv-margin-small"> Large size </fvButton>
              <fvButton class="fv-size-md fv-margin-small"> Default size </fvButton>
              <fvButton class="fv-size-sm fv-margin-small"> Small size </fvButton>
              <fvButton class="fv-size-xs fv-margin-small"> XSmall size </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Custom elements</label>
            <div class="fv-padding">
              <a class="fv-button fv-primary" href="http://framevuerk.com" target="_blank"> Link </a>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvButton.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvButton.json')"></appApi>
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

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi,
    appNotes
  }
}
</script>