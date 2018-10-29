<template>
  <fvHeader>
    <fvButton v-if="typeof $attrs.sidebar !== 'undefined'" @click="$root.sidebar = !$root.sidebar">
      <i class="fa fa-bars"></i>
    </fvButton>
    <div class="fv-grow">
      <h1 class="fv-font-xl">
        {{$attrs.title}}
      </h1>
    </div>
    <slot></slot>
  </fvHeader>
</template>

<style lang="scss" scoped>
  .fv-header /deep/ header {
    z-index: 3;
  }
</style>
