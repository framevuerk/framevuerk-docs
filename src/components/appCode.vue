<template>
  <pre class="markup fv-border fv-shadow fv-radius fv-vertical-margin" v-highlightjs>
    <div class="panel hljs fv-padding-small">
      <span class="hljs-comment" v-text="langText"></span>
      <fvButton class="fv-size-sm" @click.prevent="copy" :disabled="copiedToast"><i class="fa fa-copy"></i> Copy</fvButton>
    </div>
    <code :class="lang" ref="markup" v-text="content.trim()"></code>
    <div class="panel fv-padding-small fv-block hljs hljs-comment">
      <slot></slot>
    </div>
    <fvToast v-model="copiedToast" :timeout="1200">Copied to Clipboard!</fvToast>
  </pre>
</template>

<script>
export default {
  data () {
    return {
      highlightjs: '',
      v: '',
      copiedToast: false
    }
  },
  props: {
    lang: {
      type: String,
      default: 'html'
    },
    content: {
      default: ''
    }
  },
  computed: {
    langText () {
      switch(this.lang) {
        case 'html':
          return 'HTML'
        case 'terminal':
          return 'Terminal'
        case 'javascript': case 'js':
          return 'Javascript'
        case 'json':
          return 'JSON'
      }
    }
  },
  methods: {
    copy () {
      const markup = this.$refs.markup
      markup.setAttribute('contenteditable', 'true')
      markup.focus()
      document.execCommand('selectAll', false, null)
      document.execCommand('copy')
      markup.removeAttribute('contenteditable')
      window.getSelection().removeAllRanges()
      this.copiedToast = true
    }
  }
}
</script>

<style lang="scss">
.markup {
  position: relative;
  white-space: normal;
  overflow: hidden;

  & > code {
    white-space: pre-wrap;
    font-family: monospace;
  }

  & > .panel {
    display: flex;
    flex-flow: row;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
