<template>
  <datav-panel title="游客消费时段分析" :animate-index="1">
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
  export default class TimeInterval extends Vue {
    color = ['#0B99E0', '#C13AE2', '#3F62FC']
    data = [
      {value: 15, name: '晚上消费'},
      {value: 35, name: '下午消费'},
      {value: 50, name: '上午消费'}
    ]
  }
</script>
