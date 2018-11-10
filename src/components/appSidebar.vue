<template>
  <fvSidebar v-model="$root.sidebar" class="fv-col-xs-8 fv-col-md-5 fv-col-lg-3 fv-col-xl-2">
    <fvContent ref="content" :initial-scroll="$root.sidebarScrollY">
      <router-link class="fv-padding fv-block" to="/">
        <appLogo style="width: 35px;" white ready></appLogo>
        <b> Framevuerk </b>
      </router-link>
      <div class="fv-padding-start fv-padding-end">
        <fvInput class="fv-block" placeholder="Type to search..." @input="search" autofocus/>
      </div>
      <fvList v-if="typeof searchResult === 'undefined'">
        <fvListItem expanded class="unclickable">
            Installation
            <fvList slot="sub-list">
              <fvListItem v-for="item in sidebarItems.installationItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                  <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
              </fvListItem>
            </fvList>
        </fvListItem>
        <fvListItem expanded class="unclickable">
            Components
            <fvList slot="sub-list">
              <fvListItem expanded class="unclickable">
                  Main
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentMainItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  Form
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentFormItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  Dialog
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentDialogItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  Other
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentOtherItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
            </fvList>
        </fvListItem>
        <fvListItem expanded class="unclickable">
            Styles
            <fvList slot="sub-list">
              <fvListItem v-for="item in sidebarItems.styleItems" :key="item.text" :class="{ selected: $route.name === item.text }">
                  <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
              </fvListItem>
            </fvList>
        </fvListItem>
      </fvList>
      <fvList v-else>
        <fvListItem v-for="item in searchResult" :key="item.text" :class="{ selected: $route.name === item.text }">
            <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
        </fvListItem>
      </fvList>
    </fvContent>
  </fvSidebar>
</template>

<script>
import sidebarItems from '../sidebar-items.js'
import appLogo from './appLogo.vue'

export default {
  components: {
    appLogo
  },
  data () {
    return {
      query: '',
      sidebarItems,
      searchResult: undefined
    }
  },
  computed: {
  },
  methods: {
    search(str = '') {
      if (!str || !str.length) {
        this.searchResult = undefined
      } else {
        this.searchResult = sidebarItems.search(str)
      }
      this.$nextTick(() => {
        this.$refs.content.$el.scrollTo(0, 0)
      })
    }
  },
  beforeDestroy () {
    this.$root.sidebarScrollY = this.$refs.content.$el.scrollTop
  }
}
</script>