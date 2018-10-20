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
          <appCode :content="require('../../codes/fvTextarea.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvTextarea.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvTextarea.vue">
            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvTextarea class="fv-block" placeholder="Enter your text" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Auto height</label>
            <div class="fv-row">
              <fvTextarea class="fv-block" placeholder="Enter your line of texts" v-model="exmps.a" auto-height />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Required</label>
            <div class="fv-padding">
              <fvTextarea class="fv-block" placeholder="Your address" v-model="exmps.b" auto-height required />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Custom Required</label>
            <div class="fv-padding">
              <fvTextarea class="fv-block" placeholder="Enter three line of texts!" v-model="exmps.c" auto-height :required="threeLineValidator"/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding">
              <fvTextarea class="fv-size-xl fv-block" placeholder="XLarge size" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvTextarea class="fv-size-lg fv-block" placeholder="Large size" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvTextarea class="fv-size-md fv-block" placeholder="Medium size" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvTextarea class="fv-size-sm fv-block" placeholder="Small size" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvTextarea class="fv-size-xs fv-block" placeholder="XSmall size" />
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
        a: undefined,
        b: undefined,
        c: undefined
      }
    }
  },
  methods: {
    threeLineValidator (value) {
      if (!value) {
        return false
      }
      return value.split("\n").length === 3
    }
  }
}
</script>