<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvImg" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>This is img component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvImg.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvImg.vue">
            <label class="fv-control-label fv-horizontal-padding">Single src</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" src="https://picsum.photos/600/400?image=101" alt="Image Test" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Multiple src</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" :src="['https://picsum.photos/600/400?image=122', 'https://picsum.photos/600/400?image=93', 'https://picsum.photos/600/400?image=84']" :alt="['Image One', 'Image Two', 'Image Three']" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Multiple src with Interval</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" :src="['https://picsum.photos/600/400?image=76', 'https://picsum.photos/600/400?image=74', 'https://picsum.photos/600/400?image=82']" :alt="['Image One', 'Image Two', 'Image Three']" :interval="3000" />
            </div>
          </appExample>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvImg.json')"></appApi>
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

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi
  }
}
</script>

