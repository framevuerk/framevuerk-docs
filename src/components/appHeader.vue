<template>
  <fvHeader>
    <fvButton v-if="typeof $attrs.sidebar !== 'undefined'" @click="$root.sidebar = !$root.sidebar">
      <i class="fa fa-bars"></i>
    </fvButton>
    <span class="fv-padding-small"></span>
    <div class="fv-grow">
      <h1 class="fv-font-xl">
        {{$attrs.title}}
      </h1>
    </div>
    <span class="fv-padding-small"></span>
    <slot></slot>
  </fvHeader>
</template>

<style lang="scss" scoped>
  .fv-header /deep/ header {
    z-index: 3;
  }
</style>
