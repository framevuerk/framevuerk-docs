<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvSwitch" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create switch (handler, toggle) element use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvSwitch.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSwitch.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSwitch.vue">

            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding-small">
              <fvSwitch class="fv-margin-small" v-model="exmps.a" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
  
            <label class="fv-control-label fv-horizontal-padding">Disabled</label>
            <div class="fv-padding">
              <fvSwitch disabled/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Required</label>
            <div class="fv-padding">
              <fvSwitch v-model="exmps.b" required/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding-small">
              <fvSwitch class="fv-size-xl fv-margin-small" placeholder="XLarge size" />
              <fvSwitch class="fv-size-lg fv-margin-small" placeholder="Large size" />
              <fvSwitch class="fv-size-md fv-margin-small" placeholder="Medium size" />
              <fvSwitch class="fv-size-sm fv-margin-small" placeholder="Small size" />
              <fvSwitch class="fv-size-xs fv-margin-small" placeholder="XSmall size" />
            </div>

          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvSwitch.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvSwitch.json')"></appApi>
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
        a: undefined,
        b: undefined
      }
    }
  }
}
</script>