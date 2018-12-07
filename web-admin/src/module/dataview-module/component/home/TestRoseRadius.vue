<template>
  <datav-panel title="旅客消费分析">
    <chart-pie :color="color" :data="data" :radius="['10%', '70%']"/>
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
    color = ['#23B466', '#D330B0', '#C13AE2', '#A03BE3', '#7E3BE3']
    data = [
      {value: 1, name: '品类A'},
      {value: 2, name: '品类B'},
      {value: 3, name: '品类C'},
      {value: 4, name: '品类D'},
      {value: 5, name: '品类E'},
      {value: 6, name: '品类F'}
    ]
  }
</script>
