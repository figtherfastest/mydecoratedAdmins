<template>
  <datav-panel title="各省游客消费TOP10" :animate-index="3">
    <chart-pie :color="color" :data="data" :show-percent="false"/>
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
    color = ['#23B466', '#D330B0', '#C13AE2', '#A03BE3', '#7E3BE3', '#6D4FEF', '#5A3BE3', '#4B7EFE', '#0B99E0', '#06BA94']
    data = [
      {value: 1, name: '江苏省'},
      {value: 2, name: '四川省'},
      {value: 3, name: '北京市'},
      {value: 4, name: '福建省'},
      {value: 5, name: '云南省'},
      {value: 6, name: '广东省'},
      {value: 7, name: '湖北省'},
      {value: 8, name: '甘肃省'},
      {value: 9, name: '河北省'},
      {value: 10, name: '湖南省'}
    ]
  }
</script>
