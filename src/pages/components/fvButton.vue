<template>
  <fvLayout>
    <appHeader :title="$route.meta.title" sidebar slot="header"></appHeader>
    <appSidebar slot="start-sidebar"></appSidebar>
    <fvContent css-padding="md" css-max-width="md" css-margin-x="auto" slot="content">
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api"></appDescription>
          <appDescription><h2>Code:</h2></appDescription>
          <appCode :content="require('../../codes/fvButton.html.raw')" lang="html"></appCode>
          <appDescription><h2>Examples:</h2></appDescription>
          <appExample dir="src/pages/components/fvButton.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Themes</label>
            <div>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="background"> Default Theme </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="primary"> Primary Theme </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="primary" invert> Primary Theme Invert </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="danger"> Danger Theme </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="danger" invert> Danger Theme Invert </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="warning"> Warning Theme </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="info"> Info Theme </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="custom"> Custom Theme </fvButton>
            </div>
            <div>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="background" fab css-size="xs"> A </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="primary" fab css-size="sm"> B </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="primary" invert fab> C </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="danger" fab css-size="lg"> D </fvButton>
              <fvButton css-margin-end="md" css-margin-bottom="md" css-color="danger" invert fab css-size="xl"> E </fvButton>
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
            <label class="fv-control-label fv-padding-start fv-padding-end">Custom States</label>
            <div class="fv-padding">
              <fvButton class="fv-default fv-margin-end fv-margin-bottom" color="background" loading> Loading </fvButton>
              <fvButton class="fv-default fv-margin-end fv-margin-bottom" color="background" disabled> Disabled </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Elements</label>
            <div class="fv-padding">
              <fvButton tag="a" href="http://framevuerk.com" target="_blank"> Link </fvButton>
            </div>
          </appExample>
          <appDescription><h2>Notes:</h2></appDescription>
          <appNotes :content="$route.meta.api"></appNotes>
          <appDescription><h2>API:</h2></appDescription>
          <appApi :content="$route.meta.api"></appApi>
        </div>
      </div>
    </fvContent>
  </fvLayout>
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