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
          <appCode :content="require('../../codes/fvDialog.html.raw')" lang="html"></appCode>
          <appCode :content="require('../../codes/fvDialog.js.raw')" lang="javascript"></appCode>
          <br />
          <h2>Examples:</h2>
          <appExample dir="src/pages/components/fvDialog.vue">
            <fvDialog v-model="exmps.a" class="fv-col-md-6 fv-col-sm-8">
              <label class="fv-control-label fv-padding"> Normal Dialog </label>
              <p class="fv-padding">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div class="fv-padding fv-flex fv-grow">
                <div class="fv-grow"></div>
                <fvButton class="fv-default" @click="exmps.a = false">
                  <i class="fa fa-check"></i> Cancel
                </fvButton>
                <span class="fv-padding-start"></span>
                <fvButton class="fv-primary" @click="exmps.a = false">
                  <i class="fa fa-check"></i> OK
                </fvButton>
              </div>
            </fvDialog>

            <fvDialog :value="exmps.b" class="fv-col-md-6 fv-col-sm-8">
              <label class="fv-control-label fv-padding"> ِYou can't close this Dialog by <b>esc</b> key or clicking outside. </label>
              <p class="fv-padding">
                Andriy Mykolayovych Shevchenko is a politician, football manager and retired Ukrainian footballer who played for Dynamo Kyiv, Milan, Chelsea and the Ukraine national team as a striker. From February to July 2016, he was an assistant coach of the Ukraine national team, at the time led by Mykhailo Fomenko.
              </p>
              <div class="fv-flex fv-padding">
                <div class="fv-grow"></div>
                <fvButton class="fv-primary" @click="exmps.b = false">
                  <i class="fa fa-check"></i> OK
                </fvButton>
              </div>
            </fvDialog>

            <fvDialog v-model="exmps.c" class="fv-col-md-6 fv-col-sm-8">
              <label class="fv-control-label fv-padding"> Paolo Maldini </label>
              <div class="fv-row">
                <fvImg class="fv-col-sm-12 fv-col-md-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Maldini2008.JPG/262px-Maldini2008.JPG" alt="pato" />
                <p class="fv-col-sm-12 fv-col-md-8">
                  Paolo Cesare Maldini (Italian pronunciation: [ˈpaːolo malˈdiːni]; born 26 June 1968) is an Italian former professional footballer who played as a left-back and central defender for A.C. Milan and the Italy national team. He spent all 25 seasons of his career in the Serie A with Milan, before retiring at the age of 41 in 2009. He won 25 trophies with Milan: the UEFA Champions League five times, seven Serie A titles, one Coppa Italia, five Supercoppa Italiana titles, four European Super Cups, two Intercontinental Cups and one FIFA Club World Cup. Paolo Maldini is currently the co-owner of North American Soccer League (NASL) club Miami FC. He is also serving as sporting strategy & development director for Milan.[2]
                  <br />
                  Maldini made his debut for Italy in 1988, enjoying a 14-year career before retiring in 2002 with 7 goals and 126 caps, an appearance record at the time, which has since only been topped by Fabio Cannavaro in 2009 and Gianluigi Buffon in 2013. Maldini captained Italy for eight years and held the record for appearances made as Italy's captain, wearing the armband 74 times, until he was once again overtaken by Cannavaro, in 2010, and subsequently Buffon.[3] With Italy, Maldini took part in four FIFA World Cups and three UEFA European Championships. Although he did not win a tournament with Italy, he reached the final of the 1994 World Cup and Euro 2000, and the semi-final of the 1990 World Cup and Euro 1988. He was elected into the all-star teams for each of these tournaments, in addition to Euro 1996.
                  <br />
                  Maldini is widely regarded as one of the greatest defenders of all time.[4][5][6][7] He played at a world class level for his entire career spanning two-and-a-half decades, and won the Best Defender trophy at the UEFA Club Football Awards at the age of 39, as well as the Serie A Defender of the Year Award in 2004. He came second to George Weah for FIFA World Player of the Year in 1995. Maldini also placed third in the Ballon d'Or in 1994 and 2003.[8] In 2002, he was chosen as a defender on the FIFA World Cup Dream Team, and in 2004 Pelé named him in the FIFA 100 list of the world's greatest living players.[9]
                  <br />
                  As the Milan and Italy captain for many years he was considered a leader by fellow footballers, leading to the nickname "Il Capitano" ("The Captain"). Maldini holds the records for most appearances in Serie A, with 647,[10] and also held the record for most appearances in UEFA Club competitions, with 174, until he was overtaken by Iker Casillas in 2017.[11] He is also the record appearance holder for Milan with 902 appearances in all competitions.[12] He is one of only 18 players to have made over 1,000 career appearances.[13][14][15] Following his retirement after the 2008–09 season, his lifelong club Milan retired his number 3 shirt,[12] and in December 2012, he was inducted into the Italian Football Hall of Fame.[16] Paolo's father Cesare formerly played for and captained Milan, and was a successful national under-21 manager, who also coached both Milan, and the senior national side during France 1998.
                </p>
              </div>
              <div class="fv-padding fv-flex">
                <div class="fv-grow"></div>
                <fvButton class="fv-primary" @click="exmps.c = false">
                  <i class="fa fa-check"></i> OK
                </fvButton>
              </div>
            </fvDialog>

            <fvDialog v-model="exmps.d" class="fv-col-md-6 fv-col-sm-8" animation="custom-animation">
              <label class="fv-control-label fv-padding"> ِCustom Content </label>
              <div class="fv-padding">
                <fvImg :src="['https://picsum.photos/600/400?image=19', 'https://picsum.photos/600/400?image=66', 'https://picsum.photos/600/400?image=71']" />
              </div>
              <div class="fv-padding fv-flex">
                <div class="fv-grow"></div>
                <fvButton class="fv-info" @click="exmps.a = true">
                  <i class="fa fa-check"></i> Open Another Dialog
                </fvButton>
                <span class="fv-padding-start"></span>
                <fvButton class="fv-primary" @click="exmps.d = false">
                  <i class="fa fa-check"></i> OK
                </fvButton>
              </div>
            </fvDialog>

            
            <label class="fv-control-label fv-padding-start fv-padding-end">Normal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.a = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>
          
            <label class="fv-control-label fv-padding-start fv-padding-end">Modal</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.b = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Scrollable Contents</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.c = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
            </div>
            <hr class="fv-hr fv-margin-top fv-margin-bottom"/>

            <label class="fv-control-label fv-padding-start fv-padding-end">Custom Content and Animation</label>
            <div class="fv-padding">
              <fvButton class="fv-default" @click="exmps.d = true"> <i class="fa fa-eye"></i> Click to Open </fvButton>
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
        slider: undefined,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      }
    }
  }
}
</script>

<style lang="scss">
  .custom-animation-enter-active,
  .custom-animation-leave-active {
    transform: translateY(0);
    opacity: 1;
    transition-duration: 0.24s;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    will-change: transform, opacity;
  }

  .custom-animation-enter,
  .custom-animation-leave-active {
    opacity: 0;
    transform: translateY(-5em);
  }

</style>
