<template>
  <datav-panel title="导游性别统计">
    <chart-bar :area-style="['#1289FF', '#12BCFD']"
               :unit="false"
               :x-data="xData"
               :data="data"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import {ChartBar} from '../common'

  @Component({
    components: {
      ChartBar
    }
  })
  export default class GuiderAge extends Vue {
    xData = ['18以下', '18-24', '24-34', '35-44', '45-59', '60-70', '70以上']
    data = [12222, 123, 1234, 1236, 1289, 2300, 3500]
  }
</script>

<style>

</style>
