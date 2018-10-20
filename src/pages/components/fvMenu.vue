<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvMenu" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create popup menu element use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvMenu.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvMenu.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvMenu.vue">
            <fvToast v-model="exmps.toast"> {{exmps.toastContent}} </fvToast>

            <fvMenu v-model="exmps.a" :source-element="exmps.aSourceElement" :items="exmps.aItems" @click="clickHandler" />
            <fvMenu v-model="exmps.b" :items="exmps.aItems" @click="clickHandler" />
            <fvMenu class="fv-size-xl" v-model="exmps.c" :source-element="exmps.cSourceElement" :items="exmps.cItems" @click="clickHandler">
              <template slot-scope="scope">
                <i :class="scope.item.icon"></i>
                <span class="fv-margin-small"></span>
                {{scope.item.text}}
              </template>
            </fvMenu>
            
            
            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="openMenu('a', $event.target)"> <i class="fa fa-ellipsis-v"></i> </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
          
            <label class="fv-control-label fv-horizontal-padding">Without Source-Element</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="openMenu('b')"> <i class="fa fa-ellipsis-h"></i> </fvButton>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>


            <label class="fv-control-label fv-horizontal-padding">Custom Template</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="openMenu('c', $event.target)"> <i class="fa fa-ellipsis-v"></i> </fvButton>
            </div>

            
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="require('../../api/fvMenu.json')"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvMenu.json')"></appApi>
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
    openMenu (menuKey, sourceElement = null) {
      if (sourceElement) {
        this.exmps[`${menuKey}SourceElement`] = sourceElement
      }
      this.exmps[menuKey] = true
    },
    clickHandler (item) {
      this.exmps.toast = true
      this.exmps.toastContent = `You Clicked on ${item.text}`
    }
  }
}
</script>