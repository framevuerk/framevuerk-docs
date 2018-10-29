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
          <appCode :content="require('../../codes/fvToast.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvToast.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvToast.vue">
            <fvToast v-model="exmps.a">
              Default Toast
            </fvToast>

            <fvToast v-model="exmps.b" :timeout="parseInt(exmps.c) || 0">
              {{exmps.d}}
            </fvToast>

            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.a = true"> <i class="fa fa-eye"></i> Click to Show </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
          
            <label class="fv-control-label fv-padding-start fv-padding-end">Live Example</label>
            <div class="fv-margin fv-border fv-shadow fv-radius">
              <div class="fv-padding fv-input-group">
                <fvInput type="number" v-model="exmps.c" placeholder="Timeout" />
                <fvInput v-model="exmps.d" placeholder="Content" />
                <fvButton class="fv-default" @click="exmps.b = true"> <i class="fa fa-eye"></i> Click to Show </fvButton>
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
  },
  data () {
    return {
      exmps: {
        a: false,
        b: false,
        c: 3000,
        d: 'Custom Content'
      }
    }
  }
}
</script>