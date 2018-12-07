<template>
  <datav-panel title="交通工具消费占比图" :animate-index="1">
    <chart-loop :radius="['50%', '70%']" :color="color" :data="data"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartLoop } from '../common'

  @Component({
    components: {
      ChartLoop
    }
  })
  export default class Vehicle extends Vue {
    color = ['#0B99E0', '#C13AE2', '#3F62FC']
    data = [
      {value: 15, name: '公交车'},
      {value: 35, name: '航空'},
      {value: 50, name: '铁路'}
    ]
  }
</script>
