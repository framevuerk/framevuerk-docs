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
          <appCode :content="require('../../codes/fvHeader.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvHeader.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvMain style="height: 200px;" class="fv-border">
                <fvContent>
                  <fvHeader>
                    <h3 class="fv-grow">I'm Normal Header</h3>
                  </fvHeader>
                  <div class="fv-padding">
                    <div v-for="l in 25" :key="'line-'+l"> Line #{{l}} </div>
                  </div>
                </fvContent>
              </fvMain>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">With Button</label>
            <div class="fv-padding">
              <fvHeader>
                <fvButton class="fv-size-sm"> Button </fvButton>
                <span class="fv-padding-start" />
                <div class="fv-grow">
                  <h3>#I Have Button</h3>
                </div>
                <span class="fv-padding-start" />
                <fvButton class="fv-size-sm"> Another Button </fvButton>
              </fvHeader>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">With Custom Elements</label>
            <div class="fv-padding">
              <fvHeader>
                <fvInput class="fv-size-sm fv-grow" placeholder="Type to search..."></fvInput>
                <span class="fv-padding-start" />
                <fvButton class="fv-size-sm"> Start Searching </fvButton>
                <span class="fv-padding-start" />
                <a class="fv-link fv-font-sm" href="#"> Go to link </a>
              </fvHeader>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">With .transparnet Class</label>
            <div class="fv-padding">
              <fvHeader class="transparent">
                <fvInput class="fv-size-sm fv-grow" placeholder="Type to search..."></fvInput>
                <span class="fv-padding-start" />
                <fvButton class="fv-size-sm"> Start Searching </fvButton>
                <span class="fv-padding-start" />
                <a class="fv-link fv-font-sm" href="#"> Go to link </a>
              </fvHeader>
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