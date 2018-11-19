import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

// import tt from './framevuerk/cm2.js'
// console.warn(tt)
import Framevuerk from 'framevuerk/dist/framevuerk-ltr.js'
// const Framevuerk = require('framevuerk/dist/framevuerk.js')

import 'framevuerk/dist/framevuerk-ltr.css'
import 'font-awesome/css/font-awesome.css'
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
  fvFormElement: require('./pages/components/fvFormElement.vue').default,
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
  fvHelper: require('./pages/styles/fvHelper.vue').default
}

const routes = require('./routes.js').map(route => {
  route.component = pages[route.componentName] || pages.setup
  delete route.componentName
  
  route.meta = {}
  route.meta.title = 'Home'
  route.meta.description = 'Fast, Responsive, Without Dependencies, Both Direction Support and Configurable UI Framework based on Vue.js.'
  if (route.api) {
    route.meta.api = JSON.parse(JSON.stringify(route.api))
    delete route.api

    if (route.meta.api instanceof Array) {
      route.meta.title = route.meta.api[0].title
      route.meta.description = route.meta.api[0].description.replace(/<\/?[^>]+(>|$)/g, "")
    } else {
      route.meta.title = route.meta.api.title
      route.meta.description = route.meta.api.description.replace(/<\/?[^>]+(>|$)/g, "")
    }
  }
  
  
  
  route.component.metaInfo = {
    title: `Framevuerk - ${route.meta.title}`,
    meta: [
      // standard
      {
        name: 'description',
        content: route.meta.description
      },
      // schema.org
      {
        itemprop: 'name',
        content: route.meta.title,
        template: 'Framevuerk - %s'
      },
      {
        itemprop: 'description',
        content: route.meta.description
      },
      {
        itemprop: 'image',
        content: 'https://framevuerk.com/framevuerk.png'
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: `https://framevuerk.com${route.path}`
      },
      {
        property: 'og:title',
        content: route.meta.title,
        template: 'Framevuerk - %s'
      },
      {
        property: 'og:description',
        content: route.meta.description
      },
      {
        property: 'og:site_name',
        content: 'Framevuerk'
      },
      {
        property: 'og:image',
        content: 'https://framevuerk.com/framevuerk.png'
      },
      // twitter
      {
        property: 'twitter:title',
        content: route.meta.title,
        template: 'Framevuerk - %s'
      },
      {
        property: 'twitter:description',
        content: route.meta.description
      },

      {
        property: 'twitter:site',
        content: '@framevuerk'
      },
      {
        property: 'twitter:creator',
        content: '@nainemom'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:image:src',
        content: 'https://framevuerk.com/framevuerk_card.png'
      },
      // facebook
      {
        property: 'fb:admins',
        content: '100005486080043'
      }
    ]
  }
  return route
})

Vue.config.productionTip = false
Vue.use(Framevuerk)
Vue.use(VueRouter)
Vue.use(VueHighlightJS)
Vue.use(Meta)
const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes,
})

new Vue({
  router,
  data () {
    return {
      sidebar: false,
      githubRepo: 'https://github.com/framevuerk/framevuerk',
      githubDocsRepo: 'https://github.com/framevuerk/framevuerk-docs',
      npmRepo: 'https://www.npmjs.com/package/framevuerk'
    }
  },
  methods: {
    routeChange (path) {
      if (window.ga) {
        window.ga('send', 'pageview', path)
      }
    }
  },
  created () {
    this.routeChange(this.$route.path)
  },
  mounted () {
    this.$nextTick(() => {
      window.document.dispatchEvent(new Event('ready-to-render'))
    })
  },
  watch: {
    '$route.path' (path) {
      this.routeChange(path)
    }
  },
  render: h => h(App)
}).$mount('#app')
