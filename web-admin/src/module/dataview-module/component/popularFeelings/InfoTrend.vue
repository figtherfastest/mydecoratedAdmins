<template>
  <datav-panel title="信息趋势图">
    <chart-line/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartLine } from '../common'

  @Component({
    components: {
      ChartLine
    }
  })
  export default class InfoTrend extends Vue {

  }
</script>
