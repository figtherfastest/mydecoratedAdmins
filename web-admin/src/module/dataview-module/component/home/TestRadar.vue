<template>
  <datav-panel title="游客行为分析" :animate-index="2">
    <chart-radar/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartRadar } from '../common'

  @Component({
    components: {
      ChartRadar
    }
  })
  export default class InfoTrend extends Vue {

  }
</script>
