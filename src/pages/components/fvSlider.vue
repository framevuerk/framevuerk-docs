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
                    v-if="exmps.c.slides"
                    v-model="exmps.c.value"
                    :show-tabs="exmps.c.showTabs"
                    :show-buttons="exmps.c.showButtons"
                    :show-navs="exmps.c.showNavs"
                    :slides-per-page="parseInt(exmps.c.slidesPerPage)">
                    <template v-for="slide in exmps.c.slides" :slot="slide.id" slot-scope="scope">
                      <div class="fv-padding fv-text-center" :key="slide.id">
                        <div class="anim-slide" :class="{selected: scope.selected}">
                          <fvAvatar :src="slide.picture" size="128px" />
                          <h2>{{ slide.name }} </h2>
                          <p> {{ slide.mail }} </p>
                          <br />
                        </div>
                      </div>
                    </template>
                  </fvSlider>
                </div>
              </div>
            </div>
            <!-- <div v-for="slide in exmps.c.slides" sslot="slide.id" slotscope="scope" class="fv-padding fv-text-center">
              <div class="anim-slide" sclass="{selected: scope.selected}">
                <fvAvatar :src="slide.picture" size="128px" />
                <b>{{ slide.id }} </b>
                <h2>{{ slide.name }} </h2>
                <p> {{ slide.mail }} </p>
                <br />
              </div>
            </div> -->
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
          showTabs: true,
          slidesPerPage: 1,
          showNavs: true,
          showButtons: true,
          interval: 0,
          slides: JSON.parse('[{"id":"1","name":"julia edwards","mail":"julia.edwards@example.com","picture":"https://randomuser.me/api/portraits/women/30.jpg","cell":"081-355-4554"},{"id":"2","name":"glen peters","mail":"glen.peters@example.com","picture":"https://randomuser.me/api/portraits/men/72.jpg","cell":"(826)-834-6384"},{"id":"3","name":"bertine heggestad","mail":"bertine.heggestad@example.com","picture":"https://randomuser.me/api/portraits/women/79.jpg","cell":"41638560"},{"id":"4","name":"chloe andersen","mail":"chloe.andersen@example.com","picture":"https://randomuser.me/api/portraits/women/1.jpg","cell":"527-671-2604"},{"id":"5","name":"roman white","mail":"roman.white@example.com","picture":"https://randomuser.me/api/portraits/men/94.jpg","cell":"(245)-374-3387"},{"id":"6","name":"veronica martin","mail":"veronica.martin@example.com","picture":"https://randomuser.me/api/portraits/women/52.jpg","cell":"622-324-668"},{"id":"7","name":"lucas sørensen","mail":"lucas.sørensen@example.com","picture":"https://randomuser.me/api/portraits/men/32.jpg","cell":"70732424"},{"id":"8","name":"laurine duval","mail":"laurine.duval@example.com","picture":"https://randomuser.me/api/portraits/women/36.jpg","cell":"06-60-56-88-15"},{"id":"9","name":"lauren gregory","mail":"lauren.gregory@example.com","picture":"https://randomuser.me/api/portraits/women/54.jpg","cell":"081-058-6412"},{"id":"10","name":"hanne-lore pfister","mail":"hanne-lore.pfister@example.com","picture":"https://randomuser.me/api/portraits/women/83.jpg","cell":"0176-7190332"},{"id":"11","name":"maria esteban","mail":"maria.esteban@example.com","picture":"https://randomuser.me/api/portraits/women/95.jpg","cell":"604-130-505"},{"id":"12","name":"kübra alpuğan","mail":"kübra.alpuğan@example.com","picture":"https://randomuser.me/api/portraits/women/92.jpg","cell":"(076)-505-4102"},{"id":"13","name":"iúri cardoso","mail":"iúri.cardoso@example.com","picture":"https://randomuser.me/api/portraits/men/77.jpg","cell":"(18) 8039-3285"},{"id":"14","name":"esma elmastaşoğlu","mail":"esma.elmastaşoğlu@example.com","picture":"https://randomuser.me/api/portraits/women/92.jpg","cell":"(301)-454-0039"}]'),
          fetchTimeout: null
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
