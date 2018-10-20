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

            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvForm class="fv-row fv-border">
                <div class="fv-col-md-6">
                  <label class="fv-control-label"> First Name </label>
                  <fvInput v-model="exmps.firstName" class="fv-form-control" placeholder="Enter First Name" required />
                </div>
                <div class="fv-col-md-6">
                  <label class="fv-control-label"> Last Name </label>
                  <fvInput v-model="exmps.lastName" class="fv-form-control" placeholder="Enter Last Name" required />
                </div>
                <div class="fv-col-12">
                  <label class="fv-control-label"> Gender </label>
                  <div class="fv-form-control">
                    <fvCheck v-model="exmps.gender" content="m" required> Men </fvCheck>
                    <fvCheck v-model="exmps.gender" content="f" required> Women </fvCheck>
                    <fvCheck v-model="exmps.gender" :content="null" required> Other </fvCheck>
                  </div>
                </div>
                <div class="fv-col-12">
                  <label class="fv-control-label"> Age Range </label>
                  <h3 class="fv-text-primary">
                    <span v-if="exmps.age">{{ exmps.age.text }}</span>
                    <span v-else>---</span>
                  </h3>
                  <fvRange class="fv-form-control" v-model="exmps.age" :data="exmps.ages" required />
                </div>
                <div class="fv-col-sm-4">
                  <label class="fv-control-label"> Maried? </label>
                  <div class="fv-form-control">
                    <fvSwitch v-model="exmps.married" @input="exmps.marriageDate = undefined" />
                  </div>
                </div>
                <div class="fv-col-sm-8">
                  <label class="fv-control-label"> Date of Marriage </label>
                  <fvDatepicker v-model="exmps.marriageDate" class="fv-form-control" placeholder="Enter Date of Marriage" :disabled="!exmps.married" required />
                </div>
                <div class="fv-col">
                  <label class="fv-control-label"> Living Continent </label>
                  <fvSelect class="fv-form-control" placeholder="Enter Living Continent" v-model="exmps.continent" :options="exmps.continents" text-key="name" value-key="name" disabled-key="" required />
                </div>

                <div class="fv-row">
                  <div class="fv-col-12 fv-no-padding fv-vertical-margin"></div>
                  <div class="fv-col-12 fv-no-padding fv-flex">
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
            text: 'Under 18'
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
            text: '40 and Above'
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
        marriageDate: undefined
      }
    }
  }
}
</script>