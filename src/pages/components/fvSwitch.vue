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
          <appCode :content="require('../../codes/fvSwitch.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSwitch.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSwitch.vue">

            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvSwitch v-model="exmps.a" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
  
            <label class="fv-control-label fv-padding-start fv-padding-end">Disabled</label>
            <div class="fv-padding">
              <fvSwitch disabled/>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Required</label>
            <div class="fv-padding">
              <fvSwitch v-model="exmps.b" required/>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Sizes</label>
            <div class="fv-padding">
              <fvSwitch class="fv-size-xl fv-margin-end fv-margin-bottom" placeholder="XLarge size" />
              <fvSwitch class="fv-size-lg fv-margin-end fv-margin-bottom" placeholder="Large size" />
              <fvSwitch class="fv-size-md fv-margin-end fv-margin-bottom" placeholder="Medium size" />
              <fvSwitch class="fv-size-sm fv-margin-end fv-margin-bottom" placeholder="Small size" />
              <fvSwitch class="fv-size-xs fv-margin-end fv-margin-bottom" placeholder="XSmall size" />
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
        b: undefined
      }
    }
  }
}
</script>