<template>
  <datav-panel title="游客职业分析" :animate-index="3">
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
  export default class Perfession extends Vue {
    data = [
      {value: 20, name: '农林牧渔'},
      {value: 15, name: '技术人员'},
      {value: 10, name: '国家事业单位'},
      {value: 20, name: '服务人员'},
      {value: 15, name: '商业人员'},
      {value: 20, name: '其他'}
    ]
  }
</script>
