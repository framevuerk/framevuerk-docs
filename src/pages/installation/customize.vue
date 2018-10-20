<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent class="fv-no-padding">
      <appHeader title="Customize" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>Framevuerk can have different language, direction, and colors based on the user's taste. To setup your custom version, you should install <b>framevuerk-builder</b> package.</p>
          <appCode :content="require('../../codes/customize.sh.raw')" lang="terminal"></appCode>
          <p>And your config or list of configs array in <i>.json</i> file. (Also you can deliver same content via <i>.js</i> file and <i>module.exports</i> format)</p>
          <appCode :content="require('../../codes/customize.json.raw')" lang="json"></appCode>
          <p>Finally you can build <b>framevuerk</b> by this cli command. Don't forgot to put your builder command to your <i>build</i> or <i>postinstall</i> scripts. Note that use <b>./node_modules/.bin/framevuerk-builder</b> instead of <b>framevuerk-builder</b> if you run this command manually in terminal</p>
          <appCode :content="require('../../codes/customize_2.sh.raw')" lang="terminal"></appCode>
          <p>
            And output files goes to <b>--output-dir</b> directory:
            <ul class="fv-border fv-shadow fv-radius fv-padding fv-vertical-margin">
              <li><b>framevuerk-foobar.js</b></li>
              <li><b>framevuerk-foobar.min.js</b></li>
              <li><b>framevuerk-foobar.css</b></li>
              <li><b>framevuerk-foobar.min.css</b></li>
            </ul>
          </p>
        </div>
      </div>
    </fvContent>
  </fvMain>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'
import appCode from '../../components/appCode.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode
  }
}
</script>