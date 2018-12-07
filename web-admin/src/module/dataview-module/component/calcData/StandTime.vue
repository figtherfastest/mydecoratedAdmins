<template>
  <datav-panel title="游客停留时长分析" :animate-index="1">
    <chart-radar :indicator="indicator"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartRadar } from '../common'

  @Component({
    components: {
      ChartRadar
    }
  })
  export default class InfoTrend extends Vue {
    indicator = [
          { name: '一天', max: 6500 },
          { name: '二天', max: 16000 },
          { name: '三天', max: 30000 },
          { name: '四天', max: 38000 },
          { name: '五天', max: 52000 },
          { name: '五天以上', max: 52000 }
        ]
    data = [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000, 19000],
            name: '游客停留时长分析'
          }
        ]
  }
</script>
