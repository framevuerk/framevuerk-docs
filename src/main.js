import Vue from 'vue'
import VueRouter from 'vue-router'
import Framevuerk from 'framevuerk/dist/framevuerk.js'
import 'framevuerk/dist/framevuerk.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/dark.css'

import App from './App.vue'
 
const pages = {
  home: require('./pages/home.vue').default,
  setup: require('./pages/installation/setup.vue').default
}

const routes = require('./routes.js').map(route => {
  route.component = pages[route.componentName]
  delete route.componentName
  return route
})

Vue.config.productionTip = false
Vue.use(Framevuerk)
Vue.use(VueRouter)
Vue.use(VueHighlightJS)

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  routes
})

new Vue({
  router,
  data () {
    return {
      sidebar: false,
      sidebarPin: false
    }
  },
  render: h => h(App)
}).$mount('#app')
