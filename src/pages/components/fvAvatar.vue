<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader title="fvToast" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <p>To create user avatars use this component. It's very simple as follows:</p>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvAvatar.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvAvatar.vue">
            <label class="fv-control-label fv-horizontal-padding">Usage</label>
            <div class="fv-row">
              <div class="fv-col">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <div class="fv-block">
                    <fvAvatar src="https://randomuser.me/api/portraits/women/94.jpg" name="Vivan Hansen" size="128px" />
                  </div>
                  <small>Normal</small>
                </div>
              </div>
              <div class="fv-col">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <div class="fv-block">
                    <fvAvatar class="square" src="https://randomuser.me/api/portraits/men/62.jpg" name="Arron Hamilton" size="128px" />
                  </div>
                  <small><b>.square</b> mode</small>
                </div>
              </div>
              <div class="fv-col-12">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <div class="fv-block">
                    <fvAvatar name="Alessandro Nesta" size="128px" />
                  </div>
                  <small>This ones has unavailable src and the name of user is 'Alessandro Nesta'!</small>
                </div>
              </div>
              <div class="fv-col">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <fvAvatar src="https://randomuser.me/api/portraits/women/78.jpg" name="Sally Wagner" size="64px" />
                  <b class="fv-horizontal-padding-small">Sally Wagner</b>
                </div>
              </div>
              <div class="fv-col">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <fvAvatar src="https://randomuser.me/api/portraits/lego/5.jpg" name="Lego Normal" size="64px" />
                  <b class="fv-horizontal-padding-small">Lego Normal</b>
                </div>
              </div>
              <div class="fv-col">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <fvAvatar name="Without Src" size="64px" />
                  <b class="fv-horizontal-padding-small">Without Src</b>
                </div>
              </div>
              <div class="fv-col-12">
                <div class="fv-text-center fv-border fv-shadow fv-radius fv-padding">
                  <fvAvatar name="AB" size="128px" />
                  <span class="fv-margin-small"></span>
                  <fvAvatar name="CD" size="96px" />
                  <span class="fv-margin-small"></span>
                  <fvAvatar name="EF" size="64px" />
                  <span class="fv-margin-small"></span>
                  <fvAvatar name="GH" size="48px" />
                  <span class="fv-margin-small"></span>
                  <fvAvatar name="IJ" size="32px" />
                  <span class="fv-margin-small"></span>
                  <fvAvatar name="KL" size="16px" />
                </div>
              </div>
            </div>
          </appExample>
          <br />
          <h2>API:</h2>
          <appApi :content="require('../../api/fvAvatar.json')"></appApi>
        </div>
      </div>
    </fvContent>
  </fvMain>
</template>

<script>
import appHeader from '../../components/appHeader.vue'
import appSidebar from '../../components/appSidebar.vue'
import appCode from '../../components/appCode.vue'
import appExample from '../../components/appExample.vue'
import appApi from '../../components/appApi.vue'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi
  }
}
</script>