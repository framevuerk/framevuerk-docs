<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvSidebar" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>This is the sidebar part of Framevuerk. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvSidebar.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSidebar.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSidebar.vue">
            <label class="fv-control-label fv-horizontal-padding">Pinned Sidebar</label>
            <div class="fv-padding">
              <fvMain style="height: 200px;" class="fv-border" parent>
                <fvContent class="fv-padding">
                  <fvButton @click="exmps.a = !exmps.a">Toggle!</fvButton>
                  <div class="fv-margin-small"/>
                  <div v-for="l in 20" :key="'line-'+l"> Line #{{l}} </div>
                </fvContent>
                <fvSidebar class="fv-padding" v-model="exmps.a" pin> I am pinned Sidebar </fvSidebar>
              </fvMain>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Unpinned Sidebar</label>
            <div class="fv-padding">
              <fvMain style="height: 200px;" class="fv-border" parent>
                <fvContent class="fv-padding">
                  <fvButton @click="exmps.b = !exmps.b">Toggle!</fvButton>
                  <div class="fv-margin-small"/>
                  <div v-for="l in 20" :key="'line-'+l"> Line #{{l}} </div>
                </fvContent>
                <fvSidebar class="fv-padding" v-model="exmps.b"> I am unpinned Sidebar </fvSidebar>
              </fvMain>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvSidebar.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvSidebar.json')"></appApi>
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