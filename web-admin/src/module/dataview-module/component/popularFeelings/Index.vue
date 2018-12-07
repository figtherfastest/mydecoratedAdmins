<template>
  <div class="datav-main-container">
    <div class="datav-coloum">
      <div class="datav-row">
        <info-trend/>
      </div>
      <div class="datav-row">
        <word-cloud/>
      </div>
      <div class="datav-row">
        <media-source/>
      </div>
    </div>
    <div class="datav-coloum center-coloum">
      <div class="datav-row">
        <popu-map/>
      </div>
      <div class="datav-row">
        <div class="center-bottom">
          <word-cloud/>
        </div>
        <div class="center-bottom">
          <word-cloud/>
        </div>
      </div>
    </div>
    <div class="datav-coloum">
      <div class="datav-row">
        <rank/>
      </div>
      <div class="datav-row">
        <emotion/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import InfoTrend from './InfoTrend'
  import WordCloud from './WordCloud'
  import MediaSource from './MediaSource'
  import PopuMap from './PopuMap'
  import Rank from './Rank'
  import Emotion from './Emotion'

  @Component({
    components: {
      InfoTrend,
      WordCloud,
      MediaSource,
      PopuMap,
      Rank,
      Emotion
    }
  })
  export default class CreditIndex extends Vue {

  }
</script>
