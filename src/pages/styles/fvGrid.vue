<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent class="fv-no-padding">
      <appHeader :title="$route.meta.title" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api"></appDescription>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvGrid.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample>
            <div class="fv-margin fv-border fv-radius fv-shadow">
              <div class="fv-row grid-example">
                <div class="fv-col">fv-col</div>
                <div class="fv-col">fv-col</div>
                <div class="fv-col">fv-col</div>
                <div class="fv-col">fv-col</div>
                <div class="fv-col">fv-col</div>
                <div class="fv-col-12">fv-col-12</div>
                <div class="fv-col-6">fv-col-6</div>
                <div class="fv-col-6">fv-col-6</div>
                <div class="fv-col-8">fv-col-8</div>
                <div class="fv-col-4">fv-col-4</div>
                <div class="fv-col-md-6 fv-col-sm-12">fv-col-md-6 fv-col-sm-12</div>
                <div class="fv-col-md-6 fv-col-sm-12">fv-col-md-6 fv-col-sm-12</div>
                <div class="fv-col-md-7 fv-col-sm-12">fv-col-md-7 fv-col-sm-12</div>
                <div class="fv-col-md-5 fv-col-lower-sm-0">fv-col-md-5 fv-col-lower-sm-0</div>
                <div class="fv-col-xs-8 fv-col-offset-xs-4">fv-col-xs-8 fv-col-offset-xs-4</div>
              </div>
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

<style lang="scss" scoped>
.grid-example > [class*='fv-col'] {
  background: #383f47;
  font-family: monospace;
  border: solid 1px #f9f9f9;
  color: #f9f9f9;
  border-radius: 7px;
}
</style>