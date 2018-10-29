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
          <appCode :content="require('../../codes/fvDatepicker.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvDatepicker.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvDatepicker.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Default" v-model="exmps.a" />
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Date Library (Jalaali date, using <a class="fv-link" href="https://github.com/nainemom/idate" target="_blank">IDate</a> library)</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Jalaali Date" v-model="exmps.b" :date-library="IDate"/>
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
  
            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Template</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Custom Template" v-model="exmps.c">
                  <template slot="value" slot-scope="scope">
                    {{scope.value.toDateString()}}
                  </template>
                </fvDatepicker>
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Disabled</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Disabled" disabled/>
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Required</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Required" v-model="exmps.d" required/>
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Required (Date Range)</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvDatepicker class="fv-form-control" placeholder="Select day from September" v-model="exmps.e" :required="dateRangeValidator" default-value="2018-09-14T11:50:36.966Z" />
              </div>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Sizes</label>
            <div class="fv-margin">
              <fvDatepicker class="fv-size-xl fv-margin-end fv-margin-bottom" placeholder="XLarge size" v-model="exmps.f" />
              <fvDatepicker class="fv-size-lg fv-margin-end fv-margin-bottom" placeholder="Large size" v-model="exmps.f" />
              <fvDatepicker class="fv-size-md fv-margin-end fv-margin-bottom" placeholder="Medium size" v-model="exmps.f" />
              <fvDatepicker class="fv-size-sm fv-margin-end fv-margin-bottom" placeholder="Small size" v-model="exmps.f" />
              <fvDatepicker class="fv-size-xs fv-margin-end fv-margin-bottom" placeholder="XSmall size" v-model="exmps.f" />
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
import IDate from 'idate'

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
      IDate,
      exmps: {
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
        e: undefined,
        f: undefined
      }
    }
  },
  methods: {
    dateRangeValidator (value) {
      if (!value) {
        return false
      }
      const date = new Date(value)
      return date.getMonth() === 8
    }
  }
}
</script>