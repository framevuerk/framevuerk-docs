<template>
  <fvHeader
    type="smart"
    css-flex-auto
    css-padding="md"
    css-color="header">
    <fvButton
      css-hidden-lg
      css-color="header"
      css-border="no"
      css-shadow="no"
      css-text-size="lg"
      fab
      @click.native="$root.sidebar = !$root.sidebar">
      <i class="fa fa-bars"></i>
    </fvButton>
    <span css-margin-start="md"></span>
    <div css-flex-grow>
      <h1 css-text-size="lg">
        {{$attrs.title}}
      </h1>
    </div>
    <span css-margin-start="md"></span>
    <slot></slot>
    <span v-if="!$attrs.hide_github" css-margin-start="md"></span>
    <fvButton
      v-if="!$attrs.hide_github"
      tag="a"
      :href="$root.githubRepo"
      target="_blank"
      css-color="header"
      css-border="no"
      css-shadow="no"
      css-text-size="lg"
      fab>
      <i class="fa fa-github"></i>
    </fvButton>
  </fvHeader>
</template>

<style lang="scss" scoped>
  // .fv-header /deep/ header {
  //   z-index: 3;
  // }
</style>
