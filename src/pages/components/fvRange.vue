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
          <appCode :content="require('../../codes/fvRange.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvRange.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvRange.vue">

            <label class="fv-control-label fv-horizontal-padding">Single</label>
            <div class="fv-padding">
              <fvRange v-model="exmps.a" :data="exmps.dataA" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
  
            <label class="fv-control-label fv-horizontal-padding">Multiple</label>
            <div class="fv-padding">
              <fvRange v-model="exmps.b" :data="exmps.dataB" multiple />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Disabled</label>
            <div class="fv-padding">
              <fvRange v-model="exmps.c" :data="exmps.dataA" disabled />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Custom Required</label>
            <div class="fv-padding">
              <fvRange v-model="exmps.d" :data="exmps.dataA" :required="rangeValidator" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding">
              <fvRange class="fv-size-xs" v-model="exmps.e" :data="exmps.dataA" :required="rangeValidator" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvRange class="fv-size-sm" v-model="exmps.e" :data="exmps.dataA" :required="rangeValidator" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvRange class="fv-size-md" v-model="exmps.e" :data="exmps.dataA" :required="rangeValidator" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvRange class="fv-size-lg" v-model="exmps.e" :data="exmps.dataA" :required="rangeValidator" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvRange class="fv-size-xl" v-model="exmps.e" :data="exmps.dataA" :required="rangeValidator" />
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
        dataA: {
          from: 1,
          to: 15
        },
        dataB: [1, 0, 5, 4, 9, 7],
        a: undefined,
        b: undefined,
        c: 4,
        d: undefined,
        e: 7
      }
    }
  },
  methods: {
    rangeValidator (value) {
      if (!value) {
        return false
      }
      return value > 2 && value < 6
    }
  }
}
</script>