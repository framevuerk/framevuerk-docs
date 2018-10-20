<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvDialog" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create full featured dialog element (alert, confirm, custom messages) use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvDialog.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvDialog.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvDialog.vue">
            <fvDialog v-model="exmps.a" class="fv-col-md-6 fv-col-sm-8">
              <fvMain>
                <label class="fv-control-label fv-padding"> Pato </label>
                <fvContent class="fv-padding">
                  Pato said in an interview with the Brazilian television program Esporte Espetacular that at age 11, he broke his arm and found a tumor in the arm and feared the arm needed to be amputated. His surgery to remove the tumor was successful and did not require an amputation.
                  <div class="fv-vertical-margin" />
                  <div class="fv-flex">
                    <div class="fv-grow"></div>
                    <fvButton @click="exmps.a = false">
                      <i class="fa fa-ban"></i> Cancel
                    </fvButton>
                    <span class="fv-margin-small"></span>
                    <fvButton class="fv-primary" @click="exmps.a = false">
                      <i class="fa fa-check"></i> OK
                    </fvButton>
                  </div>
                </fvContent>
              </fvMain>
            </fvDialog>

            <fvDialog :value="exmps.b" class="fv-col-md-6 fv-col-sm-8">
              <fvMain>
                <label class="fv-control-label fv-padding"> ِYou can't close this Dialog by <b>esc</b> key or clicking outside. </label>
                <fvContent class="fv-padding">
                  Andriy Mykolayovych Shevchenko is a politician, football manager and retired Ukrainian footballer who played for Dynamo Kyiv, Milan, Chelsea and the Ukraine national team as a striker. From February to July 2016, he was an assistant coach of the Ukraine national team, at the time led by Mykhailo Fomenko.
                  <div class="fv-vertical-margin" />
                  <div class="fv-flex">
                    <div class="fv-grow"></div>
                    <fvButton class="fv-primary" @click="exmps.b = false">
                      <i class="fa fa-check"></i> OK
                    </fvButton>
                  </div>
                </fvContent>
              </fvMain>
            </fvDialog>

            <fvDialog v-model="exmps.c" class="fv-col-md-6 fv-col-sm-8" animation="custom-animation">
              <fvMain>
                <label class="fv-control-label fv-padding"> ِCustom Content </label>
                <fvContent class="fv-padding">
                  <fvImg :src="['https://picsum.photos/600/400?image=19', 'https://picsum.photos/600/400?image=66', 'https://picsum.photos/600/400?image=71']" />
                  <div class="fv-vertical-margin" />
                  <div class="fv-flex">
                    <div class="fv-grow"></div>
                    <fvButton class="fv-info" @click="exmps.d = true">
                      <i class="fa fa-check"></i> Open Another Dialog
                    </fvButton>
                    <span class="fv-margin-small"></span>
                    <fvButton class="fv-primary" @click="exmps.c = false">
                      <i class="fa fa-check"></i> OK
                    </fvButton>
                  </div>
                </fvContent>
              </fvMain>
            </fvDialog>


            <fvDialog v-model="exmps.d" class="fv-col-md-4 fv-col-sm-6" animation="custom-animation">
              <fvMain>
                <label class="fv-control-label fv-padding"> ِDialog on another Dialog </label>
                <fvContent class="fv-padding">
                  Nothing to say :D
                  <div class="fv-vertical-margin" />
                  <div class="fv-flex">
                    <div class="fv-grow"></div>
                    <fvButton class="fv-info" @click="exmps.c = false">
                      <i class="fa fa-check"></i> Close behind Dialog
                    </fvButton>
                    <span class="fv-margin-small"></span>
                    <fvButton class="fv-primary" @click="exmps.d = false">
                      <i class="fa fa-check"></i> OK
                    </fvButton>
                  </div>
                </fvContent>
              </fvMain>
            </fvDialog>

            <fvDialog v-model="exmps.e" class="fv-col-md-2 fv-col-sm-4 fv-col-xs-8 fv-border fv-shadow" :overlay="false">
              <fvMain style="background: #3a3a3a; color: #fff;">
                <fvContent class="fv-padding fv-text-center">
                  I Don't Have an Overlay :'(
                  <div class="fv-vertical-padding">
                    <fvButton class="fv-size-lg" @click="exmps.e = false"> Close ME :( </fvButton>
                  </div>
                </fvContent>
              </fvMain>
            </fvDialog>
            
            
            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.a = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
          
            <label class="fv-control-label fv-horizontal-padding">Modal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.b = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>


            <label class="fv-control-label fv-horizontal-padding">Custom Content and Animation</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.c = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Without Overlay</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.e = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvDialog.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvDialog.json')"></appApi>
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
        slider: undefined,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      }
    }
  }
}
</script>

<style lang="scss">
  .custom-animation-enter-active,
  .custom-animation-leave-active {
    transform: translate3d(-50%, -50%, 0) scale(1, 1) !important;
    opacity: 1;
    transition-duration: 0.24s;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    will-change: transform, opacity;
  }

  .custom-animation-enter,
  .custom-animation-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(1.1, 1.1)  !important;
  }

</style>
