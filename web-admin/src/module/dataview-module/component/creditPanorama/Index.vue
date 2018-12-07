<template>
  <div class="datav-main-container">
    <div class="datav-coloum">
      <div class="datav-row">
        <real-time-scroll/>
      </div>
      <div class="datav-row">
        <complaint-rate-rank/>
      </div>
      <div class="datav-row">
        <complaint-rate/>
      </div>
    </div>
    <div class="datav-coloum center-coloum">
      <div class="datav-row" style="height: 632px;">
        <credit-map/>
      </div>
      <div class="datav-row">
        <div class="center-bottom">
          <type-percent/>
        </div>
        <div class="center-bottom">
          <classify/>
        </div>
      </div>
    </div>
    <div class="datav-coloum">
      <div class="datav-row">
        <guide-rank/>
      </div>
      <div class="datav-row">
        <enterprise/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import RealTimeScroll from './RealTimeScroll'
  import ComplaintRate from './ComplaintRate'
  import ComplaintRateRank from './ComplaintRateRank'
  import Enterprise from './Enterprise'
  import GuideRank from './GuideRank'
  import TypePercent from './TypePercent'
  import Classify from './Classify'
  import CreditMap from './CreditMap'

  @Component({
    components: {
      RealTimeScroll,
      ComplaintRate,
      ComplaintRateRank,
      Enterprise,
      GuideRank,
      TypePercent,
      Classify,
      CreditMap
    }
  })
  export default class CreditIndex extends Vue {

  }
</script>
