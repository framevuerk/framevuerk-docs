<template>
  <pre class="markup fv-border fv-shadow fv-radius fv-margin-top fv-margin-bottom" v-highlightjs>
    <div class="panel fv-margin">
      <span class="hljs-comment" v-text="langText"></span>
      <!-- <fvButton class="fv-size-sm" @click.prevent="copy" :disabled="copiedToast"><i class="fa fa-copy"></i> Copy</fvButton> -->
    </div>
    <code :class="lang" ref="markup" v-text="content.trim()"></code>
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

  & > .hljs {
    padding: 1em;
    background: #ffffff;
  }

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
