<template>
<p v-html="content.description"></p>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>