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
          <appCode :content="require('../../codes/fvSidebar.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSidebar.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSidebar.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Pinned Sidebar</label>
            <div class="fv-padding">
              <fvMain style="height: 200px;" class="fv-border" parent>
                <fvContent class="fv-padding">
                  <fvButton @click="exmps.a = !exmps.a">Toggle!</fvButton>
                  <div class="fv-margin"/>
                  <div v-for="l in 20" :key="'line-'+l"> Line #{{l}} </div>
                </fvContent>
                <fvSidebar class="fv-padding"  v-model="exmps.a" pin> I am pinned Sidebar </fvSidebar>
              </fvMain>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Unpinned Sidebar</label>
            <div class="fv-padding">
              <fvMain style="height: 200px;" class="fv-border" parent>
                <fvContent class="fv-padding">
                  <fvButton @click="exmps.b = !exmps.b">Toggle!</fvButton>
                  <div class="fv-margin"/>
                  <div v-for="l in 20" :key="'line-'+l"> Line #{{l}} </div>
                </fvContent>
                <fvSidebar class="fv-padding"  v-model="exmps.b"> I am unpinned Sidebar </fvSidebar>
              </fvMain>
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
  },
  data () {
    return {
      exmps: {
        a: true,
        b: false
      }
    }
  }
}
</script>