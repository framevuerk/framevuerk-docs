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
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
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
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">With Interval and Custom Tab Template</label>
            <div class="fv-padding">
              <fvSlider class="fv-border fv-shadow" v-model="exmps.b" :interval="2000">
                <template slot="tab" slot-scope="scope">
                  <b>
                    <i v-if="scope.selected" class="fa fa-check"></i>
                    <span class="fv-margin"></span>
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
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Live Example</label>
            <div class="fv-margin fv-border fv-shadow fv-radius">
              <div class="fv-row">
                <div class="fv-col-6">
                  <label class="fv-control-label">Slides Per Page</label>
                  <fvInput class="fv-form-control" placeholder="Slides Per Page" v-model="exmps.c.slidesPerPage" type="number" />
                </div>

                <div class="fv-col-4">
                  <label class="fv-control-label">Show Tabs</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showTabs" />
                  </div>
                </div>
                <div class="fv-col-4">
                  <label class="fv-control-label">Show Buttons</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showButtons" />
                  </div>
                </div>
                <div class="fv-col-4">
                  <label class="fv-control-label">Show Navs</label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.c.showNavs" />
                  </div>
                </div>

                <div class="fv-col-12">
                  <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
                </div>
                <div class="fv-col-12 fv-text-center">
                  <fvSlider class="fv-border fv-shadow fv-size-xl"
                    v-model="exmps.c.value"
                    :show-tabs="exmps.c.showTabs"
                    :show-buttons="exmps.c.showButtons"
                    :show-navs="exmps.c.showNavs"
                    :slides-per-page="exmps.c.slidesPerPage">
                    <div slot="slide-one" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/men/34.jpg" size="128px" />
                        <h2>Lee Myers</h2>
                        <p> 4744 Crescent Canyon St </p>
                        <br />
                      </div>
                    </div>
                    <div slot="slide-two" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/women/6.jpg" size="128px" />
                        <h2>Cherly Walker</h2>
                        <p> 2964 Barn St </p>
                        <br />
                      </div>
                    </div>
                    <div slot="slide-three" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/women/43.jpg" size="128px" />
                        <h2>Gail Howell</h2>
                        <p> 5067 Hillcrest Rd </p>
                        <br />
                      </div>
                    </div>
                    <div slot="slide-four" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/women/33.jpg" size="128px" />
                        <h2>Lava James</h2>
                        <p> 406 Halk St </p>
                        <br />
                      </div>
                    </div>
                    <div slot="slide-five" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/men/33.jpg" size="128px" />
                        <h2>Ali Kashani</h2>
                        <p> 899 Boodapest St </p>
                        <br />
                      </div>
                    </div>
                    <div slot="slide-six" slot-scope="scope" class="fv-padding fv-text-center">
                      <div class="anim-slide" :class="{selected: scope.selected}">
                        <fvAvatar src="https://randomuser.me/api/portraits/men/13.jpg" size="128px" />
                        <h2>David Length</h2>
                        <p> 32 Ren Rd </p>
                        <br />
                      </div>
                    </div>
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
          showTabs: true,
          slidesPerPage: 3,
          showNavs: true,
          showButtons: true,
          interval: 0
        }
      }
    }
  }
}
</script>


<style lang="scss">
  .anim-slide {
    & .fv-avatar,
    & h2,
    & p {
      transform: auto;
      opacity: 1;
      transition-timing-function: ease;
      transition-duration: 0.5s;
      transition-property: transform, opacity;
      will-change: transform, opacity;

    }

    &:not(.selected) {
      & .fv-avatar {
        transform: rotateZ(180deg);
      }

      & h2,
      & p,
      & .fv-avatar {
        opacity: 0.2;
      }
    }
  }

</style>
