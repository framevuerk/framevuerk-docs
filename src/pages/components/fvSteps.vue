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
          <appCode :content="require('../../codes/fvSteps.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSteps.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSteps.vue">

            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvSteps :value="exmps.a" :steps="exmps.stepsA" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Formated and Clickable Steps</label>
            <div class="fv-padding">
              <fvSteps v-model="exmps.b" :steps="exmps.stepsB">
                <template slot="box" slot-scope="scope">
                  <i :class="scope.step.icon"></i>
                </template>
                <template slot="text" slot-scope="scope">
                  <h3>{{scope.step.text}}</h3>
                  <small>{{scope.index + 1}}/{{exmps.stepsB.length}}</small>
                </template>
              </fvSteps>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Size</label>
            <div class="fv-padding">
              <fvSteps class="fv-size-xs" :value="0" :steps="exmps.stepsC" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvSteps class="fv-size-sm" :value="0" :steps="exmps.stepsC" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvSteps class="fv-size-md" :value="0" :steps="exmps.stepsC" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvSteps class="fv-size-lg" :value="0" :steps="exmps.stepsC" />
              <div class="fv-padding"><hr class="fv-hr" /></div>
              <fvSteps class="fv-size-xl" :value="0" :steps="exmps.stepsC" />
            </div>
          </appExample>
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
import appDescription from '../../components/appDescription.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi,
    appDescription
  },
  data () {
    return {
      exmps: {
        stepsA: ['Stage One', 'Stage Two', 'Stage Three', 'And Stage Four'],
        stepsB: [
          {
            text: 'Start',
            icon: 'fa fa-id-card-o'
          },
          {
            text: 'Middle',
            icon: 'fa fa-credit-card'
          },
          {
            text: 'Final',
            icon: 'fa fa-handshake-o'
          }
        ],
        stepsC: ['A', 'B', 'C', 'D'],
        a: 2,
        b: 1
      }
    }
  }
}
</script>