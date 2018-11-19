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
          <appCode :content="require('../../codes/fvMenu.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvMenu.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvMenu.vue">
            <fvToast v-model="exmps.toast"> {{exmps.toastContent}} </fvToast>

            <fvMenu v-model="exmps.a">
              <fvList parent>
                <fvListItem v-for="item in exmps.aItems" @click="clickHandler(item, 'a')" :key="item.text"> {{item.text}} </fvListItem>
              </fvList>
            </fvMenu>
            <fvMenu v-model="exmps.c" class="fv-size-lg">
              <fvList parent>
                <fvListItem v-for="item in exmps.cItems" @click="clickHandler(item, 'c')" :key="item.text">
                  <i :class="item.icon"></i>
                  <span class="fv-margin"></span>
                  {{item.text}}
                </fvListItem>
              </fvList>
            </fvMenu>

            
            
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="openMenu('a')"> <i class="fa fa-ellipsis-v"></i> </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Context Menu (Right Click)</label>
            <div class="fv-margin fv-text-center fv-border fv-radius fv-shadow fv-paddingz" @contextmenu.prevent="openMenu('a')">
                <br />
                Right Click in this box
                <br />
                <br />
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>


            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Template</label>
            <div class="fv-padding fv-flex">
              <fvButton class="fv-default" @click="openMenu('c')"> Open Menu </fvButton>
              <div class="fv-grow" />
              <fvButton class="fv-default" @click="openMenu('c')"> or Open same Menu here </fvButton>
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
        aItems: [
          {
            text: 'Item One'
          },
          {
            text: 'Item Two'
          }
        ],
        cItems: [
          {
            text: 'Cut',
            disabled: false,
            icon: 'fa fa-cut',
            customKey: 1
          },
          {
            text: 'Copy',
            disabled: false,
            icon: 'fa fa-copy',
            customKey: 2
          },
          {
            text: 'Paste',
            disabled: true,
            icon: 'fa fa-paste',
            customKey: 3
          }
        ],
        aSourceElement: undefined,
        cSourceElement: undefined,
        a: false,
        b: false,
        c: false,
        toast: false,
        toastContent: ''
      }
    }
  },
  methods: {
    openMenu (menuKey) {
      this.exmps[menuKey] = true
    },
    clickHandler (item, menuKey) {
      this.exmps.toast = true
      this.exmps[menuKey] = false
      this.exmps.toastContent = `You Clicked on ${item.text}`
    }
  }
}
</script>