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
            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvSlider class="fv-border fv-shadow" v-model="exmps.a">
                <div slot="slide-one" class="fv-padding fv-text-center">
                  Content of <b>one</b>
                </div>
                <div slot="slide-two" class="fv-padding fv-text-center">
                  Content of <b>two</b>
                </div>
                <div slot="slide-three" class="fv-padding fv-text-center">
                  Content of <b>three</b>
                </div>
              </fvSlider>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">With Interval and Custom Tab Template</label>
            <div class="fv-padding">
              <fvSlider class="fv-border fv-shadow" v-model="exmps.b" :interval="2000">
                <template slot="tab" slot-scope="scope">
                  <b>
                    <i v-if="scope.selected" class="fa fa-check"></i>
                    <span class="fv-padding-small"></span>
                    <i> {{scope.slide}} </i>
                  </b>
                </template>
                <div slot="slide-Tab One" class="fv-padding fv-text-center">
                  <div>
                    <h2>Tab One</h2>
                    <p> Hello Dear ;) </p>
                  </div>
                </div>
                <div slot="slide-Tab Two" class="fv-padding fv-text-center">
                  <div>
                    <h2>Another Tab</h2>
                    <p> Goodbye Dear :( </p>
                  </div>
                </div>
                <div slot="slide-Tab Three" class="fv-padding fv-text-center">
                  <div>
                    <h2>One Other Tab</h2>
                    <p> Why i am here? :? </p>
                  </div>
                </div>
              </fvSlider>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Custom Style and Size</label>
            <div class="fv-padding">
              <fvSlider class="fv-border fv-shadow fv-size-xl" v-model="exmps.c" :show-tabs="false" show-buttons show-navs>
                <div slot="slide-one" slot-scope="scope" class="fv-padding fv-text-center">
                  <transition name="slider-animation">
                    <div v-if="scope.selected">
                      <fvAvatar src="https://randomuser.me/api/portraits/men/34.jpg" size="128px" />
                      <h2>Lee Myers</h2>
                      <p> 4744 Crescent Canyon St </p>
                      <br />
                    </div>
                  </transition>
                </div>
                <div slot="slide-two" slot-scope="scope" class="fv-padding fv-text-center">
                  <transition name="slider-animation">
                    <div v-if="scope.selected">
                      <fvAvatar src="https://randomuser.me/api/portraits/women/6.jpg" size="128px" />
                      <h2>Cherly Walker</h2>
                      <p> 2964 Barn St </p>
                      <br />
                    </div>
                  </transition>
                </div>
                <div slot="slide-three" slot-scope="scope" class="fv-padding fv-text-center">
                  <transition name="slider-animation">
                    <div v-if="scope.selected">
                      <fvAvatar src="https://randomuser.me/api/portraits/women/43.jpg" size="128px" />
                      <h2>Gail Howell</h2>
                      <p> 5067 Hillcrest Rd </p>
                      <br />
                    </div>
                  </transition>
                </div>
              </fvSlider>
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
        d: undefined
      }
    }
  }
}
</script>


<style lang="scss">
  .slider-animation-enter-active,
  .slider-animation-leave-active,
  .slider-animation-leave-active {
    opacity: 1;
    transition-timing-function: ease;
    transition-duration: 0.34s;
    transition-delay: 0.38s;
    transition-property: opacity;
    will-change: opacity;

    & .fv-avatar {
      transform: rotateZ(0deg);
      transition-timing-function: ease;
      transition-duration: 0.64s;
      transition-property: transform;
      will-change: transform;

    }
  }

  .slider-animation-enter {
    opacity: 0.8;

    & .fv-avatar {
      transform: rotateZ(180deg);

    }
  }

</style>
