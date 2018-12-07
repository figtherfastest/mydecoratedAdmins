<template>
  <div class="datav-main-container">
    <div class="datav-coloum">
      <!-- <hotel-count/> -->
    </div>
    <div class="datav-coloum center-coloum">
      ditu
    </div>
    <div class="datav-coloum">
      <div class="datav-row">
        <!-- <guide-rank/> -->
      </div>
      <div class="datav-row">
        <!-- <guide-rank/> -->
      </div>
      <div class="datav-row">
        <!-- <enterprise/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  // import HotelCount from './HotelCount'
  // import ComplaintRate from './ComplaintRate'
  // import ComplaintRateRank from './ComplaintRateRank'
  // import Enterprise from './Enterprise'
  // import GuideRank from './GuideRank'

  @Component({
    components: {
      // HotelCount
      // ComplaintRate,
      // ComplaintRateRank,
      // Enterprise,
      // GuideRank
    }
  })
  export default class CreditIndex extends Vue {

  }
</script>
