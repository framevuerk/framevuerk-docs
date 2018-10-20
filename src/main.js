import Vue from 'vue'
import VueRouter from 'vue-router'
import Framevuerk from 'framevuerk/dist/framevuerk.js'
import 'framevuerk/dist/framevuerk.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github.css'

import App from './App.vue'
 
const pages = {
  home: require('./pages/home.vue').default,
  setup: require('./pages/installation/setup.vue').default,
  customize: require('./pages/installation/customize.vue').default,
  fvMain: require('./pages/components/fvMain.vue').default,
  fvHeader: require('./pages/components/fvHeader.vue').default,
  fvContent: require('./pages/components/fvContent.vue').default,
  fvFooter: require('./pages/components/fvFooter.vue').default,
  fvSidebar: require('./pages/components/fvSidebar.vue').default,
  'fvList-fvListItem': require('./pages/components/fvList-fvListItem.vue').default,
  fvButton: require('./pages/components/fvButton.vue').default,
  fvInput: require('./pages/components/fvInput.vue').default,
  fvTextarea: require('./pages/components/fvTextarea.vue').default,
  fvSelect: require('./pages/components/fvSelect.vue').default,
  fvDatepicker: require('./pages/components/fvDatepicker.vue').default,
  fvSwitch: require('./pages/components/fvSwitch.vue').default,
  fvCheck: require('./pages/components/fvCheck.vue').default,
  fvSteps: require('./pages/components/fvSteps.vue').default,
  fvRange: require('./pages/components/fvRange.vue').default,
  fvForm: require('./pages/components/fvForm.vue').default,
  fvDialog: require('./pages/components/fvDialog.vue').default,
  fvMenu: require('./pages/components/fvMenu.vue').default,
  fvTable: require('./pages/components/fvTable.vue').default,
  fvSlider: require('./pages/components/fvSlider.vue').default,
  fvImg: require('./pages/components/fvImg.vue').default,
  fvToast: require('./pages/components/fvToast.vue').default,
  fvAvatar: require('./pages/components/fvAvatar.vue').default,
  fvLoading: require('./pages/components/fvLoading.vue').default,
  fvPagination: require('./pages/components/fvPagination.vue').default,
  fvGrid: require('./pages/styles/fvGrid.vue').default,
}

const routes = require('./routes.js').map(route => {
  route.component = pages[route.componentName] || pages.setup
  delete route.componentName
  return route
})

Vue.config.productionTip = false
Vue.use(Framevuerk)
Vue.use(VueRouter)
Vue.use(VueHighlightJS)

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes,
})

new Vue({
  router,
  data () {
    return {
      sidebar: false,
      sidebarPin: false,
      sidebarScrollY: 0,
      githubRepo: 'https://github.com/framevuerk/framevuerk',
      githubDocsRepo: 'https://github.com/framevuerk/framevuerk-docs',
      npmRepo: 'https://www.npmjs.com/package/framevuerk'
    }
  },
  watch: {
    '$route.path'() {
      
      // this.$nextTick(() => {
      //   if (this.sidebarPin === false) {
      //     console.log('salam')
      //     this.sidebar = false
      //   }
      // })

    }
  },
  render: h => h(App)
}).$mount('#app')
