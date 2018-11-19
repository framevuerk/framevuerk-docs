<template>
  <fvHeader>
    <fvButton class="fv-hidden-xl fv-hidden-lg" v-if="typeof $attrs.sidebar !== 'undefined'" @click.native="$root.sidebar = !$root.sidebar; localSidebar = !localSidebar">
      <i class="fa fa-bars"></i>
    </fvButton>
    <span class="fv-margin-start"></span>
    <div class="fv-grow">
      <h1 class="fv-font-xl">
        {{$attrs.title}}
      </h1>
    </div>
    <span class="fv-margin-start"></span>
    <slot></slot>
    <span class="fv-margin-start" v-if="!$attrs.hide_github"></span>
    <a class="fv-button" :href="$root.githubRepo" target="_blank" v-if="!$attrs.hide_github">
      <i class="fa fa-github"></i>
      GITHUB
    </a>
  </fvHeader>
</template>

<script>
export default {
  data () {
    return {
      localSidebar: false
    }
  }
}
</script>

<style lang="scss" scoped>
  // .fv-header /deep/ header {
  //   z-index: 3;
  // }
</style>
