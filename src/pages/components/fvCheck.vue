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
          <appCode :content="require('../../codes/fvCheck.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvCheck.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvCheck.vue">
            <label class="fv-control-label fv-horizontal-padding">Radio Button Normal</label>
            <div class="fv-padding-small">
              <fvCheck class="fv-margin-small" v-model="exmps.a" content="mil"> A.C. Milan </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.a" content="liv"> Liverpool </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.a" content="fcb"> Barcelona </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.a" content="mad"> Real Madrid C.F. </fvCheck>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Check Box Normal</label>
            <div class="fv-padding-small">
              <fvCheck class="fv-margin-small" v-model="exmps.b" content="ir" multiple> Iran </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.b" content="it" multiple> Italy </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.b" content="es" multiple> Spain </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.b" content="ge" multiple> Germany </fvCheck>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
  
            <label class="fv-control-label fv-horizontal-padding">Disabled</label>
            <div class="fv-padding">
              <fvCheck class="fv-margin-small" content="a" disabled> Disabled Radio Button </fvCheck>
              <fvCheck class="fv-margin-small" content="a" multiple disabled> Disabled Check Box </fvCheck>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Radio Button Required</label>
            <div class="fv-padding">
              <fvCheck class="fv-margin-small" v-model="exmps.c" content="a" required> Foo #1 </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.c" content="b" required> Foo #1 </fvCheck>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Check Box Required</label>
            <div class="fv-padding">
              <fvCheck class="fv-margin-small" v-model="exmps.d" content="a" multiple required> Bar #1 </fvCheck>
              <fvCheck class="fv-margin-small" v-model="exmps.d" content="b" multiple required> Bar #2 </fvCheck>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding-small">
              <fvCheck class="fv-size-xl fv-margin-small" value="a" content="a" />
              <fvCheck class="fv-size-xl fv-margin-small" :value="['a']" content="a" multiple />
              <fvCheck class="fv-size-lg fv-margin-small" value="a" content="a" />
              <fvCheck class="fv-size-lg fv-margin-small" :value="['a']" content="a" multiple />
              <fvCheck class="fv-size-md fv-margin-small" value="a" content="a" />
              <fvCheck class="fv-size-md fv-margin-small" :value="['a']" content="a" multiple />
              <fvCheck class="fv-size-sm fv-margin-small" value="a" content="a" />
              <fvCheck class="fv-size-sm fv-margin-small" :value="['a']" content="a" multiple />
              <fvCheck class="fv-size-xs fv-margin-small" value="a" content="a" />
              <fvCheck class="fv-size-xs fv-margin-small" :value="['a']" content="a" multiple />
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
        c: undefined,
        d: undefined,
        e: undefined
      }
    }
  }
}
</script>