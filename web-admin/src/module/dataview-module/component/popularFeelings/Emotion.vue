<template>
  <datav-panel title="情感分布图">
    <chart-gauge/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {ChartGauge} from '../common'

  @Component({
    components: {
      ChartGauge
    }
  })
  export default class Emotion extends Vue {

  }
</script>

<style>

</style>
