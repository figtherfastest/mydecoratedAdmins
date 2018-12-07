<template>
  <chart class="datav-chart" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
  export default class ChartPie extends Vue {
    @Prop({default: () => []})
    data
    @Prop({default: () => ['#6D4FEF']})
    color
    // polygon多边形 circle 圆形
    @Prop({default: () => 'polygon'})
    shape
    @Prop({default: () => ['rgba(109,79,239,0.55)']})
    areaColor
    // 雷达图配置
    @Prop({default: () => [
          { name: '吃', max: 6500 },
          { name: '住', max: 16000 },
          { name: '行', max: 30000 },
          { name: '游', max: 38000 },
          { name: '购', max: 52000 }
        ]})
    indicator

    option = {
      color: ['#6D4FEF'],
      tooltip: {},
      radar: {
        shape: 'polygon',
        name: {
          textStyle: {
          color: '#fff'
          }
        },
        splitArea: {
          areaStyle: {
              color: ['rgba(56, 53, 255, 0.05)'],
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowBlur: 10
          }
        },
        indicator: {},
        axisLine: {
          lineStyle: {
            color: '#1e5879'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1e5879'
          }
        }
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        areaStyle: {
          color: 'rgba(109,79,239,0.55)'
        },
        symbol: 'circle',
        symbolSize: 8,
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '游客吃住行为分析'
          }
        ],
        animationDelay: 500
      }]
    }
    created () {
      this.option.color = this.color
      this.option.series[0].areaStyle.color = this.areaColor
      this.option.radar.indicator = this.indicator
      this.option.radar.shape = this.shape
      if (this.data.length !== 0) {
        this.option.series[0].data = this.data
      }
    }
    @Watch('data', {deep: true})
    dataChage () {
      this.option.series[0].data = this.data
    }
  }
</script>
