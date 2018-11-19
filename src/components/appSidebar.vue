<template>
  <fvSidebar v-model="$root.sidebar" class="app-sidebar fv-col-xs-8 fv-col-md-5 fv-col-lg-3 fv-col-xl-2">
    <fvContent>
      <router-link class="fv-padding fv-block" to="/">
        <appLogo style="width: 35px;" white ready></appLogo>
        <b> Framevuerk </b>
      </router-link>
      <div class="fv-padding-start fv-padding-end fv-padding-bottom">
        <fvInput class="fv-block" placeholder="Type to search..." @input="search" autofocus/>
      </div>
      <fvList v-if="typeof searchResult === 'undefined'">
        <fvListItem expanded class="unclickable">
            <i class="fa fa-code" /> Installation
            <fvList slot="sub-list">
              <fvListItem v-for="item in sidebarItems.installationItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                  <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
              </fvListItem>
            </fvList>
        </fvListItem>
        <fvListItem expanded class="unclickable">
            <i class="fa fa-cubes" /> Components
            <fvList slot="sub-list">
              <fvListItem expanded class="unclickable">
                  <i class="fa fa-pencil-square-o" /> Form
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentFormItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  <i class="fa fa-info-circle" /> Dialog
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentDialogItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  <i class="fa fa-th-large" /> Layout
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentLayoutItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
              <fvListItem expanded class="unclickable">
                  <i class="fa fa-ellipsis-h" /> Other
                  <fvList slot="sub-list">
                    <fvListItem v-for="item in sidebarItems.componentOtherItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                        <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
                    </fvListItem>
                  </fvList>
              </fvListItem>
            </fvList>
        </fvListItem>
        <fvListItem expanded class="unclickable">
            <i class="fa fa-css3" /> Styles
            <fvList slot="sub-list">
              <fvListItem v-for="item in sidebarItems.styleItems" :key="item.text" :class="{ selected: $route.path === item.route }">
                  <router-link class="fv-block" :to="item.route">{{item.text}}</router-link>
              </fvListItem>
            </fvList>
        </fvListItem>
      </fvList>
      <fvList v-else>
        <fvListItem v-for="item in searchResult" :key="item.text" :class="{ selected: $route.path === item.route }">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sidebar {
  padding: 0;
  min-width: 250px;
}

.unclickable /deep/ {
  & > .content{
    background: rgba(0, 0, 0, 0.14);
    padding: 0.8em 0;
    font-weight: bold;
  }
}
</style>
