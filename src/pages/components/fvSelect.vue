<template>
  <fvMain>
    <appSidebar></appSidebar>
    <fvContent>
      <appHeader :title="$route.meta.title" sidebar></appHeader>
      <div class="fv-row">
        <div class="fv-col-xs-12 fv-col-md-10 fv-col-offset-md-1 fv-col-lg-10 fv-col-offset-lg-1 fv-col-xl-8 fv-col-offset-xl-2">
          <appDescription :content="$route.meta.api"></appDescription>
          <br />
          <h2>Code:</h2>
          <appCode :content="require('../../codes/fvSelect.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvSelect.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvSelect.vue">

            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding-small">
              <fvSelect class="fv-margin-small" placeholder="Default" v-model="exmps.a" :options="exmps.optionsA"/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
  
            <label class="fv-control-label fv-horizontal-padding">Custom Template</label>
            <div class="fv-padding-small">
              <fvSelect class="fv-margin-small" placeholder="Custom Template" v-model="exmps.b" :options="exmps.optionsA">
                <template slot="option" slot-scope="scope">
                  <fvAvatar :src="'https://randomuser.me/api/portraits/med/women/' + (scope.option.value * 6) + '.jpg'" size="32px" />
                  <span>
                    {{scope.option.text}}
                  </span>
                </template>
                <template slot="value" slot-scope="scope">
                  <fvAvatar :src="'https://randomuser.me/api/portraits/med/women/' + (scope.option.value * 6) + '.jpg'" size="16px" />
                  <span>
                    {{scope.option.text}}
                  </span>
                </template>
              </fvSelect>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Multiple</label>
            <div class="fv-padding-small">
              <fvSelect class="fv-margin-small" placeholder="Multiple" v-model="exmps.c" :options="exmps.optionsA" multiple/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Allow Insert</label>
            <div class="fv-padding-small">
              <fvSelect class="fv-margin-small" placeholder="Allow Insert" v-model="exmps.d" :options="exmps.optionsB" allow-insert @insert="exmps.optionsB.push({ text: $event, value: $event }); exmps.d = $event;"/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">API Search</label>
            <div class="fv-row">
              <div class="fv-col-md-6">
                <fvSelect class="fv-form-control" placeholder="Enter Github repo name" v-model="exmps.e" :options="exmps.optionsC" :loading="exmps.loadingA" :search="null" @search="calcCOptions">
                  <template slot="option" slot-scope="scope">
                    <div class="fv-vertical-padding-small">
                      <h3>
                        <fvAvatar :src="scope.option.ownerAvatar" size="32px" /> {{scope.option.text}}
                      </h3>
                      <p>
                        <span>
                          <i class="fa fa-star"></i> {{scope.option.stars}}
                        </span>
                        <span class="fv-margin-small"></span>
                        <span>
                          <i class="fa fa-code-fork"></i> {{scope.option.forks}}
                        </span>
                      </p>
                    </div>
                  </template>
                  <template slot="empty" slot-scope="scope">
                    <div v-if="scope.value">
                      No repository found on <b>Github</b> with "{{scope.value}}".
                    </div>
                    <div v-else>
                      Start typing to search on <b>Github</b>
                    </div>
                  </template>
                </fvSelect>
              </div>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>


            <label class="fv-control-label fv-horizontal-padding">Sizes</label>
            <div class="fv-padding-small">
              <fvSelect class="fv-size-xl fv-margin-small" placeholder="XLarge size" />
              <fvSelect class="fv-size-lg fv-margin-small" placeholder="Large size" />
              <fvSelect class="fv-size-md fv-margin-small" placeholder="Medium size" />
              <fvSelect class="fv-size-sm fv-margin-small" placeholder="Small size" />
              <fvSelect class="fv-size-xs fv-margin-small" placeholder="XSmall size" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Disabled</label>
            <div class="fv-padding">
              <fvSelect placeholder="Disabled" disabled/>
            </div>
            <hr class="fv-hr fv-vertical-margin"/>
            <label class="fv-control-label fv-horizontal-padding">Required</label>
            <div class="fv-padding">
              <fvSelect placeholder="Required" v-model="exmps.f" :options="exmps.optionsA" required/>
            </div>
          </appExample>
          <br />
          <h2>Notes:</h2>
          <appNotes :content="$route.meta.api"></appNotes>
          <br />
          <h2>API:</h2>
          <appApi :content="$route.meta.api"></appApi>
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
import appNotes from '../../components/appNotes.vue'
import appDescription from '../../components/appDescription.vue'
import axios from 'axios'

export default {
  components: {
    appHeader,
    appSidebar,
    appCode,
    appExample,
    appApi,
    appNotes,
    appDescription
  },
  data () {
    return {
      exmps: {
        optionsA: [
          {
            text: 'Item One',
            value: 1
          },
          {
            text: 'Item Two',
            value: 2
          },
          {
            text: 'Item Three',
            value: 3,
            disabled: true
          },
          {
            text: 'Item Four',
            value: 4
          },
          {
            text: 'Item Five',
            value: 5
          }
        ],
        optionsB: [],
        optionsC: [],
        loadingA: false,
        timeoutA: undefined,
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
        e: undefined,
        f: undefined
      }
    }
  },
  methods: {
    evenNumberValidator (value) {
      if (!value) {
        return false
      }
      return parseInt(value) % 2 === 0
    },
    searchGithub (text) {
      const url = `https://api.github.com/search/repositories?q=${text}&per_page=5`
      return axios.get(url)
    },
    async calcCOptions (text) {
      this.exmps.loadingA = true
      clearTimeout(this.exmps.timeoutA)
      this.exmps.timeoutA = setTimeout(async () => {
        const res = await this.searchGithub(text)
        this.exmps.optionsC = res.data.items.map(item => {
          return {
            value: item.id,
            text: item.name,
            ownerAvatar: item.owner.avatar_url,
            stars: item.stargazers_count,
            forks: item.forks
          }
        })
        this.exmps.loadingA = false
      }, 250)
    }
  }
}
</script>