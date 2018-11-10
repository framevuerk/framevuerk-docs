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
