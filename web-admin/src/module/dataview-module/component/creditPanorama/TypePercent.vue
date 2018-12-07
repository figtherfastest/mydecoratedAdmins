<template>
  <datav-panel title="投诉类型占比">
    <chart-loop :data="data" :color="color"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import { ChartLoop } from '../common'

  @Component({
    components: {
      ChartLoop
    }
  })
  export default class ComplaintRate extends Vue {
    data = [
      {value: 20, name: '安全保障'},
      {value: 20, name: '服务质量'},
      {value: 15, name: '3A'},
      {value: 45, name: '3A以下'}
    ]
    color = ['#0B99E0', '#3F62FC', '#C13AE2', '#6D4FEF']
  }
</script>
