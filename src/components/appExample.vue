<template>
  <div class="fv-border fv-shadow fv-radius fv-vertical-margin">
    <fvMain style="overflow: visible">
      <fvContent style="overflow: visible">
        <div class="fv-text-end fv-padding-small" v-if="dir">
          <a class="fv-link" :href="sourceLink" target="_blank">
            <i class="fa fa-code"></i>
            View Source
          </a>
        </div>
        <div class="fv-vertical-padding">
          <slot></slot>
        </div>
      </fvContent>
    </fvMain>
  </div>
</template>

<script>
export default {
  props: {
    dir: {
      type: String
    }
  },
  computed: {
    sourceLink () {
      return `${this.$root.githubDocsRepo}/blob/master/${this.dir}`
    }
  }
}
</script>

<style lang="scss">

</style>
