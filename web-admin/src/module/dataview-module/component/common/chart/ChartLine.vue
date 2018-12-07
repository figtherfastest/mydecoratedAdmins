<template>
  <chart class="datav-chart" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

@Component
  export default class ChartLine extends Vue {
    @Prop({default: () => [0, 1, 0.8, 2.3]})
    data
    @Prop({default: () => ['rgba(193,58,226,0.53)', 'rgba(109,79,239,0.53)']})
    areaStyle
    @Prop({default: () => ['第一季度', '第二季度', '第三季度', '第四季度']})
    xData
    @Prop({default: () => '万元'})
    unit
    option = {
      color: '#C13AE2',
      tooltip: {
          trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: 'rgba(30, 88, 121)'
          }
        },
        axisLabel: {
          padding: [0, 0, 0, 0],
          color: '#fff'
        },
        axisTick: {
          inside: true,
          length: 2,
          lineStyle: {
            color: '#fff'
          }
        },
        data: ['第一季度', '第二季度', '第三季度', '第四季度']
      },
      yAxis: {
        type: 'value',
        name: '单位：万元',
        nameTextStyle: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#1e5879'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1e5879',
            type: 'dashed'
          }
        },
        axisLabel: {
          color: '#fff'
        },
        axisTick: {
          length: 2,
          lineStyle: {
            color: '#fff'
          }
        }
      },
      grid: {
        bottom: 29,
        left: 32,
        right: 27,
        top: 31
      },
      series: [{
        data: [0, 1, 0.8, 2.3],
        type: 'line',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(193,58,226,0.53)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(109,79,239,0.53)' // 100% 处的颜色
            }]
          }
        },
        animationDelay: 500
      }]
    }
    created () {
      this.option.xAxis.data = this.xData
      this.option.yAxis.name = this.unit
      this.option.series[0].areaStyle.color.colorStops[0].color = this.areaStyle[0]
      this.option.series[0].areaStyle.color.colorStops[1].color = this.areaStyle[1]
    }
  }
</script>
