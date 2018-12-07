<template>
  <div class="datav-main-container">
    <div class="datav-coloum">
      <div class="datav-row">
        <gender/>
      </div>
      <div class="datav-row">
        <age-group/>
      </div>
      <div class="datav-row">
        <profession/>
      </div>
    </div>
    <div class="datav-coloum center-coloum">
      <div class="datav-row" style="height: 632px;">
        <calc-map/>
      </div>
      <div class="datav-row">
        <div class="center-bottom">
          <cost/>
        </div>
        <div class="center-bottom">
          <line-price/>
        </div>
      </div>
    </div>
    <div class="datav-coloum">
      <div class="datav-row">
        <time-interval/>
      </div>
      <div class="datav-row">
        <vehicle/>
      </div>
      <div class="datav-row">
        <stand-time/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import CalcMap from './CalcMap'
  import StandTime from './StandTime'
  import LinePrice from './LinePrice'
  import Gender from './Gender'
  import Profession from './Profession'
  import Cost from './Cost'
  import AgeGroup from './AgeGroup'
  import TimeInterval from './TimeInterval'
  import Vehicle from './Vehicle'
  @Component({
    components: {
      CalcMap,
      Gender,
      StandTime,
      LinePrice,
      Profession,
      Cost,
      TimeInterval,
      Vehicle,
      AgeGroup
    }
  })
  export default class calcIndex extends Vue {

  }
</script>
