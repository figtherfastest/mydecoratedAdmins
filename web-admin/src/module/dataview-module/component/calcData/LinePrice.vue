<template>
  <datav-panel title="游客吃住行为分析" :animate-index="2">
    <chart-radar shape="circle" :color="['#C13AE2']" :area-color="['#C13AE2']"/>
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
