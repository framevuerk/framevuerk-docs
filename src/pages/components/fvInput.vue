<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvInput" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create input element use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvInput.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvInput.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvInput.vue">
            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding-small">
              <fvInput class="fv-size-xl fv-margin-small" placeholder="XLarge size" />
              <fvInput class="fv-size-lg fv-margin-small" placeholder="Large size" />
              <fvInput class="fv-size-md fv-margin-small" placeholder="Medium size" />
              <fvInput class="fv-size-sm fv-margin-small" placeholder="Small size" />
              <fvInput class="fv-size-xs fv-margin-small" placeholder="XSmall size" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Disabled</label>
            <div class="fv-padding">
              <fvInput placeholder="Disabled" disabled/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Required</label>
            <div class="fv-padding">
              <fvInput placeholder="Required" v-model="exmps.a" required/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Custom Required</label>
            <div class="fv-padding">
              <fvInput placeholder="Enter even number" type="number" v-model="exmps.b" :required="evenNumberValidator"/>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvInput.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvInput.json')"></appApi>
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
  },
  methods: {
    evenNumberValidator (value) {
      if (!value) {
        return false
      }
      return parseInt(value) % 2 === 0
    }
  }
}
</script>