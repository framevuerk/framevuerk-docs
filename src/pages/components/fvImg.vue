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
          <appCode :content="require('../../codes/fvImg.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvImg.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Single src</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" src="https://picsum.photos/600/400?image=101" alt="Image Test" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Multiple src</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" :src="['https://picsum.photos/600/400?image=102', 'https://picsum.photos/600/400?image=108', 'https://picsum.photos/600/400?image=22']" :alt="['Image One', 'Image Two', 'Image Three']" />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Multiple src with Interval</label>
            <div class="fv-padding">
              <fvImg class="fv-border fv-shadow" :src="['https://picsum.photos/600/400?image=131', 'https://picsum.photos/600/400?image=53', 'https://picsum.photos/600/400?image=31']" :alt="['Image One', 'Image Two', 'Image Three']" :interval="3000" />
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
  }
}
</script>

