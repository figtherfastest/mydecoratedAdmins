<template>
  <datav-panel title="游客年龄段分析" :animate-index="3">
    <chart-progress :data="data" :show-percent="false"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartProgress } from '../common'

  @Component({
    components: {
      ChartProgress
    }
  })
  export default class AgeGroup extends Vue {
    color = ['#0B99E0', '#C13AE2', '#3F62FC']
    data = [
      {value: 15, name: '公交车'},
      {value: 35, name: '航空'},
      {value: 50, name: '铁路'}
    ]
  }
</script>
