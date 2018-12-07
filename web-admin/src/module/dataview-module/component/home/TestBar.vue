<template>
  <datav-panel title="信息趋势图">
    <chart-bar/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartBar } from '../common'

  @Component({
    components: {
      ChartBar
    }
  })
  export default class InfoTrend extends Vue {

  }
</script>
