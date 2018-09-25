<template>
  <fvHeader>
    <fvButton v-if="typeof $attrs.sidebar !== 'undefined'" @click="$root.sidebar = !$root.sidebar">
      <i class="fa fa-bars"></i>
    </fvButton>
    <span class="fv-padding-small"></span>
    <div class="title">
      <h2>
        {{$attrs.title}}
      </h2>
    </div>
    <span class="fv-padding-small"></span>
    <slot></slot>
  </fvHeader>
</template>