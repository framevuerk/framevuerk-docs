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
          <appCode :content="require('../../codes/fvInput.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvInput.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvInput.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Sizes</label>
            <div class="fv-margin">
              <fvInput class="fv-size-xl fv-margin-end fv-margin-bottom" placeholder="XLarge size" color="primary" />
              <fvInput class="fv-size-lg fv-margin-end fv-margin-bottom" placeholder="Large size" />
              <fvInput class="fv-size-md fv-margin-end fv-margin-bottom" placeholder="Medium size" />
              <fvInput class="fv-size-sm fv-margin-end fv-margin-bottom" placeholder="Small size" />
              <fvInput class="fv-size-xs fv-margin-end fv-margin-bottom" placeholder="XSmall size" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Disabled</label>
            <div class="fv-padding">
              <fvInput placeholder="Disabled" disabled/>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Required</label>
            <div class="fv-padding">
              <fvInput placeholder="Required" v-model="exmps.a" required/>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Multi Line</label>
            <div class="fv-padding">
              <fvInput placeholder="Multi Line" v-model="exmps.c" multiline/>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Required</label>
            <div class="fv-padding">
              <fvInput placeholder="Enter even number" type="number" v-model="exmps.b" :required="evenNumberValidator"/>
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
    evenNumberValidator (value) {
      if (!value) {
        return false
      }
      return parseInt(value) % 2 === 0
    }
  }
}
</script>