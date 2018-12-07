<template>
  <datav-panel title="涉旅数据" :animate-index="3">
    <chart-pie :rose-type="false"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartPie } from '../common'

  @Component({
    components: {
      ChartPie
    }
  })
  export default class InfoTrend extends Vue {

  }
</script>
