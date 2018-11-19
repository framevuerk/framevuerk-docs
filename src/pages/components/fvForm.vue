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
          <appCode :content="require('../../codes/fvForm.html.raw')" lang="html"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvForm.vue">

            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvForm class="fv-row fv-border">
                <fvFormElement class="fv-col-md-6" label="First Name">
                  <fvInput v-model="exmps.firstName" placeholder="Enter First Name" required />
                </fvFormElement>
                <fvFormElement class="fv-col-md-6" label="Last Name">
                  <fvInput v-model="exmps.lastName" placeholder="Enter Last Name" required />
                </fvFormElement>
                <fvFormElement class="fv-col-12" label="Gender" inline>
                  <fvCheck v-model="exmps.gender" content="m" required> Men </fvCheck>
                  <fvCheck v-model="exmps.gender" content="f" required> Women </fvCheck>
                  <fvCheck v-model="exmps.gender" :content="null" required> Other </fvCheck>
                </fvFormElement>
                <fvFormElement class="fv-col-12" label="Age Range">
                  <template slot="label" slot-scope="scope">
                    {{scope.label}}
                    <span v-if="scope.highlighted" class="fv-margin-start-sm fv-text-primary">
                      <span v-if="exmps.age">{{ exmps.age.text }}</span>
                    </span>
                  </template>
                  <fvRange v-model="exmps.age" :data="exmps.ages" required />
                </fvFormElement>
                <fvFormElement class="fv-col-sm-4" label="Is Maried?" inline>
                  <fvSwitch v-model="exmps.married" @input="exmps.marriageDate = undefined" />
                </fvFormElement>
                <fvFormElement class="fv-col-sm-8" label="Date of Marriage">
                  <fvDatepicker v-model="exmps.marriageDate" placeholder="Enter Date of Marriage" :disabled="!exmps.married" required />
                </fvFormElement>
                <fvFormElement class="fv-col" label="Living Continent">
                  <fvSelect placeholder="Enter Living Continent" v-model="exmps.continent" :options="exmps.continents" text-key="name" value-key="name" disabled-key="" required />
                </fvFormElement>
                <fvFormElement class="fv-col-12" label="Biography">
                  <fvTextarea placeholder="Enter Your Biography" v-model="exmps.bio" required />
                </fvFormElement>

                <div class="fv-row">
                  <div class="fv-col-12 fv-margin-top fv-margin-bottom"></div>
                  <div class="fv-col-12 fv-flex fv-no-padding">
                    <div class="fv-grow"></div>
                    <fvButton type="submit" class="fv-primary"> Submit </fvButton>
                  </div>
                </div>
              </fvForm>
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
        ages: [
          {
            value: 1,
            text: '17 and Below '
          },
          {
            value: 2,
            text: 'From 18 to 23'
          },
          {
            value: 3,
            text: 'From 23 to 30'
          },
          {
            value: 4,
            text: 'From 30 to 40'
          },
          {
            value: 5,
            text: '40 and Above '
          }
        ],
        continents: [
          {
            name: "Africa"
          },
          {
            name: "Antarctica"
          },
          {
            name: "Asia"
          },
          {
            name: "Europe"
          },
          {
            name: "North America"
          },
          {
            name: "Australia/Oceania"
          },
          {
            name: "South America"
          }
        ],
        firstName: undefined,
        lastName: undefined,
        gender: undefined,
        age: undefined,
        continent: undefined,
        married: undefined,
        marriageDate: undefined,
        bio: undefined
      }
    }
  }
}
</script>