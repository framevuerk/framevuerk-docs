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
          <appCode :content="require('../../codes/fvPagination.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvPagination.js.raw')" lang="javascirpt"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvPagination.vue">
            <label class="fv-control-label fv-horizontal-padding">With Total Count</label>
            <div class="fv-padding fv-text-center">
              <fvPagination v-model="exmps.a" :total="50" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Without Total Count</label>
            <div class="fv-padding fv-text-center">
              <fvPagination v-model="exmps.b" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Custom Size (prop)</label>
            <div class="fv-padding fv-text-center">
              <fvPagination v-model="exmps.c" :total="50" :size="10" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding fv-text-center">
              <fvPagination class="fv-size-xs" v-model="exmps.d" :total="10" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvPagination class="fv-size-sm" v-model="exmps.d" :total="10" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvPagination class="fv-size-md" v-model="exmps.d" :total="10" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvPagination class="fv-size-lg" v-model="exmps.d" :total="10" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvPagination class="fv-size-xl" v-model="exmps.d" :total="10" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>


            <label class="fv-control-label fv-horizontal-padding">Live Example</label>
            <div class="fv-margin fv-border fv-shadow fv-radius">
              <div class="fv-row">
                <div class="fv-col-6">
                  <label class="fv-control-label">Total</label>
                  <fvInput class="fv-form-control" placeholder="Total" v-model="exmps.total" type="number" />
                </div>
                <div class="fv-col-6">
                  <label class="fv-control-label">Size</label>
                  <fvInput class="fv-form-control" placeholder="Size" v-model="exmps.size" type="number" />
                </div>
                <div class="fv-col-4">
                  <label class="fv-control-label">Navigation Buttons</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.navigation" />
                  </div>
                </div>
                <div class="fv-col-4">
                  <label class="fv-control-label">Next Button</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.next" :disabled="!exmps.navigation" />
                  </div>
                </div>
                <div class="fv-col-4">
                  <label class="fv-control-label">Prev Button</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.prev" :disabled="!exmps.navigation" />
                  </div>
                </div>
                <div class="fv-col-12">
                  <hr class="fv-hr fv-vertical-margin"/>
                </div>
                <div class="fv-col-12 fv-text-center">
                  <fvPagination :value="exmps.value" :total="parseInt(exmps.total)" :size="parseInt(exmps.size)" :navigation="exmps.navigation" :next="exmps.next" :prev="exmps.prev" @input="exmps.value = $event" />
                </div>
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
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
        e: undefined,
        value: undefined,
        total: 100,
        size: 5,
        navigation: true,
        next: true,
        prev: true
      }
    }
  }
}
</script>