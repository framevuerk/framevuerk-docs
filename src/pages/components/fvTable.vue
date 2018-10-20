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
          <appCode :content="require('../../codes/fvTable.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvTable.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvTable.vue">
            <label class="fv-control-label fv-horizontal-padding">Normal</label>
            <div class="fv-padding">
              <fvTable :fields="exmps.aFields" :rows="exmps.aRows" />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Breaked</label>
            <div class="fv-padding">
              <fvTable :fields="exmps.aFields" :rows="exmps.aRows" breaked />
            </div>
            <hr class="fv-hr fv-vertical-margin"/>

            <label class="fv-control-label fv-horizontal-padding">Custom Template</label>
            <div class="fv-padding">
              <fvTable :fields="exmps.bFields" :rows="exmps.bRows" title-key="title" value-key="name" :breaked.sync="exmps.bBreaked">
                <template slot="title" slot-scope="scope">
                  <i :class="scope.field.icon"></i>
                  {{ scope.field.title }}
                </template>
                <template slot="field-user" slot-scope="scope">
                  <fvAvatar :src="scope.row.avatar" :name="scope.row.user" />
                  <span class="fv-margin-small"></span>
                  {{ scope.row.user }}
                </template>
                <template slot="field-birthday" slot-scope="scope">
                  {{ scope.row.birthday.getFullYear() }}/{{ scope.row.birthday.getMonth() + 1 }}/{{ scope.row.birthday.getDate() }}
                </template>
              </fvTable>
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
        aFields: ['name', 'family', 'gender'],
        aRows: [
          {
            name: 'Amir',
            family: 'Beckham',
            gender: 'm'
          },
          {
            name: 'Susan',
            family: 'Heydarkhani',
            gender: 'f'
          },
          {
            name: 'Heshmat',
            family: 'Najafi',
            gender: 'm'
          }
        ],
        bFields: [
          {
            name: 'user',
            title: 'User',
            icon: 'fa fa-user'
          },
          {
            name: 'carBrand',
            title: 'Car Brand',
            icon: 'fa fa-car'
          },
          {
            name: 'birthday',
            title: 'Birthday',
            icon: 'fa fa-calendar-o'
          }
        ],
        bRows: [
          {
            user: 'Jeanne Rodriguez',
            avatar: 'https://randomuser.me/api/portraits/med/women/98.jpg',
            carBrand: 'Mercedes Benz',
            birthday: new Date('1991-04-22T17:23:59.771Z')
          },
          {
            user: 'Russell Peterson',
            avatar: 'https://randomuser.me/api/portraits/med/men/39.jpg',
            carBrand: 'Tesla',
            birthday: new Date('1992-02-12T17:23:59.771Z')
          },
          {
            user: 'Monica Woods',
            avatar: 'https://randomuser.me/api/portraits/med/women/67.jpg',
            carBrand: 'Audi',
            birthday: new Date('1996-08-10T17:23:59.771Z')
          },
          {
            user: 'Willard Harvey',
            avatar: 'https://randomuser.me/api/portraits/med/men/72.jpg',
            carBrand: 'Jeep',
            birthday: new Date('1987-01-02T17:23:59.771Z')
          }
        ],
        bBreaked: false
      }
    }
  }
}
</script>