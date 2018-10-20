<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvList - fvListItem" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create full featured list element use this component. It's very simple as follows:</p>
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
          <appNotes :content="require('../../api/fvList.json')"></appNotes>
          <br />
          <h2>fvList API:</h2>
          <appApi :content="require('../../api/fvList.json')"></appApi>
          <br />
          <h2>fvListItem API:</h2>
          <appApi :content="require('../../api/fvListItem.json')"></appApi>
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
        a: true,
        b: false,
        c: undefined
      }
    }
  }
}
</script>