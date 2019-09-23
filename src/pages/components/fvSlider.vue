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
          <appCode :content="require('../../codes/fvSlider.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSlider.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSlider.vue">
            <label class="fv-control-label fv-padding-start fv-padding-end">Live Example</label>
            <div class="fv-margin fv-border fv-shadow fv-radius">
              <div class="fv-row">
                <div class="fv-col-6">
                  <label class="fv-control-label">Slides Per Page</label>
                  <fvRange class="fv-form-control" v-model="exmps.c.slidesPerPage" :data="{from: 1, to: exmps.c.slides.length}" required />
                  <!-- <fvInput class="fv-form-control" placeholder="Slides Per Page" v-model="exmps.c.slidesPerPage" type="number" /> -->
                </div>
                <div class="fv-col-6">
                  <label class="fv-control-label">Timer Interval (in miliseconds)</label>
                  <fvInput class="fv-form-control" placeholder="Timer Interval" v-model="exmps.c.interval" type="number" />
                </div>
                <div class="fv-col-3">
                  <label class="fv-control-label">Show Tabs</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showTabs" />
                  </div>
                </div>
                <div class="fv-col-3">
                  <label class="fv-control-label">Show Buttons</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showButtons" />
                  </div>
                </div>
                <div class="fv-col-3">
                  <label class="fv-control-label">Show Navs</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showNavs" />
                  </div>
                </div>
                <div class="fv-col-3">
                  <label class="fv-control-label">Swipe Support</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.swipeSupport" />
                  </div>
                </div>

                <div class="fv-col-12">
                  <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
                </div>
                <div class="fv-col-12 fv-text-center">
                  <fvSlider class="fv-border fv-shadow"
                    v-model="exmps.c.value"
                    :show-tabs="exmps.c.showTabs"
                    :show-buttons="exmps.c.showButtons"
                    :show-navs="exmps.c.showNavs"
                    :slides-per-page="parseInt(exmps.c.slidesPerPage)"
                    :interval="parseInt(exmps.c.interval)"
                    :swipe-support="exmps.c.swipeSupport">
                    <template slot="tab" slot-scope="scope">
                      {{ exmps.c.slides[scope.index].name }}
                    </template>
                    <fvSlide v-for="slide in exmps.c.slides" :key="slide.id" :value="slide.id" class="anim-slide fv-text-center fv-padding-top fv-padding-bottom fv-margin-bottom fv-margin-top">
                      <fvAvatar class="square" :src="slide.picture" size="64px" />
                      <div>
                        <h3>{{ slide.name }}</h3>
                        <label class="fv-text-light">{{ slide.cell }}</label>
                      </div>
                    </fvSlide>
                  </fvSlider>
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
// import axios from 'axios'

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
        d: undefined,
        c: {
          value: undefined,
          showTabs: false,
          slidesPerPage: 1,
          showNavs: true,
          showButtons: true,
          interval: 0,
          slides: JSON.parse('[{"id":"1","name":"Julia Edwards","mail":"julia.edwards@example.com","picture":"https://randomuser.me/api/portraits/women/30.jpg","cell":"081-355-4554"},{"id":"2","name":"Glen Peters","mail":"glen.peters@example.com","picture":"https://randomuser.me/api/portraits/men/72.jpg","cell":"(826)-834-6384"},{"id":"3","name":"Bertine Heggestad","mail":"bertine.heggestad@example.com","picture":"https://randomuser.me/api/portraits/women/79.jpg","cell":"41638560"},{"id":"4","name":"Chloe Andersen","mail":"chloe.andersen@example.com","picture":"https://randomuser.me/api/portraits/women/1.jpg","cell":"527-671-2604"},{"id":"5","name":"Roman White","mail":"roman.white@example.com","picture":"https://randomuser.me/api/portraits/men/94.jpg","cell":"(245)-374-3387"}]'),
          fetchTimeout: null,
          swipeSupport: true
        }
      }
    }
  }
}
</script>


<style lang="scss">
  .anim-slide {
    &,
    & .fv-avatar,
    & h3,
    & label  {
      transform: auto;
      opacity: 1;
      transition-timing-function: ease;
      transition-duration: 0.5s;
      filter: auto;
      transition-property: transform, opacity, filter;
      will-change: transform, opacity, filter;
      white-space: nowrap;
      overflow: hidden;

    }

    &:not(.fv-selected) {
      & .fv-avatar {
        filter: blur(4px);
      }
      & label {
        opacity: 0;
      }
      & h3 {
        opacity: 0;
        transform: translateY(20px);
      }
      // transform: scale(1.6, 1.6);
      
      
      // opacity: 0.3;
      // letter-spacing: 12px;
    }
  }

</style>
