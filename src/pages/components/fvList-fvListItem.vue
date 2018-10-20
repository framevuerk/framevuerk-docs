<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader :title="$route.meta.title" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api[0]"></appDescription>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvList-fvListItem.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvList-fvListItem.vue">
            <label class="fv-control-label fv-horizontal-padding">Normal List</label>
            <div class="fv-padding">
              <fvList class="fv-border" parent>
                  <fvListItem> Item One </fvListItem>
                  <fvListItem> Item Two </fvListItem>
              </fvList>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">With sub-list and disabled item</label>
            <div class="fv-padding">
              <fvList class="fv-border" parent>
                  <fvListItem> Item One </fvListItem>
                  <fvListItem class="selected"> Item Two (with <b>.selected</b> class</fvListItem>
                  <fvListItem disabled> Item Three </fvListItem>
                  <fvListItem expanded>
                      Item Four with childs
                      <fvList slot="sub-list">
                          <fvListItem> Item Four / One </fvListItem>
                          <fvListItem> Item Four / Two </fvListItem>
                      </fvList>
                  </fvListItem>
              </fvList>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Without setting <b>parent</b> prop</label>
            <div class="fv-padding">
              <fvList class="fv-border">
                  <fvListItem> Item One </fvListItem>
                  <fvListItem> Item Two </fvListItem>
              </fvList>
            </div>

            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding">
              <fvList class="fv-border" parent>
                <fvListItem class="fv-size-xs"> XSmall Size </fvListItem>
                <fvListItem class="fv-size-sm"> Small Size </fvListItem>
                <fvListItem class="fv-size-md"> Medium Size </fvListItem>
                <fvListItem class="fv-size-lg"> Large Size </fvListItem>
                <fvListItem class="fv-size-xl"> XLarge Size </fvListItem>
              </fvList>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="$route.meta.api[0]"></appNotes>
          <br />
          <h2>fvList API:</h2>
          <appApi :content="$route.meta.api[0]"></appApi>
          <br />
          <h2>fvListItem API:</h2>
          <appApi :content="$route.meta.api[1]"></appApi>
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
        a: true,
        b: false,
        c: undefined
      }
    }
  }
}
</script>