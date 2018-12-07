<template>
  <datav-panel title="游客消费分析" :animate-index="2">
    <chart-loop :radius="['50%', '70%']" :data="data"/>
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
  export default class Cost extends Vue {
    data = [
      {value: 10, name: '6000以上'},
      {value: 15, name: '5000-6000'},
      {value: 10, name: '4000-5000'},
      {value: 20, name: '3000-4000'},
      {value: 15, name: '2000-3000'},
      {value: 20, name: '2000以下'}
    ]
  }
</script>
