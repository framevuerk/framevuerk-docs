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
          <appCode :content="require('../../codes/fvLoading.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvLoading.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvLoading />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Color</label>
            <div class="fv-padding">
              <fvLoading class="fv-text-primary" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Sizes</label>
            <div class="fv-padding">
              <fvLoading class="fv-size-xl"/>
              <span class="fv-margin"></span>
              <fvLoading class="fv-size-lg"/>
              <span class="fv-margin"></span>
              <fvLoading class="fv-size-md"/>
              <span class="fv-margin"></span>
              <fvLoading class="fv-size-sm"/>
              <span class="fv-margin"></span>
              <fvLoading class="fv-size-xs"/>
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
import appNotes from '../../components/appNotes.vue'
import appApi from '../../components/appApi.vue'
import appDescription from '../../components/appDescription.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appNotes,
    appApi,
    appDescription
  }
}
</script>