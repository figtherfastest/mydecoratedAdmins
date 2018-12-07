<template>
  <chart class="datav-chart" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

@Component
  export default class ChartBar extends Vue {
    @Prop({default: () => [0, 1, 0.8, 2.3]})
    data
    // 柱子颜色
    @Prop({type: Array, default: () => ['rgba(193,58,226,0.53)', 'rgba(109,79,239,0.53)']})
    areaStyle
    @Prop({default: () => ['出差', '旅行', '商务', '其他']})
    xData
    @Prop({default: () => '万元'})
    unit
    @Prop({type: String, default: () => 'solid'})
    lineType
    @Prop({default: () => ''})
    title
    @Prop({
      type: Object,
      default: () => {
      return {
        bottom: 29,
        left: 50,
        right: 27,
        top: 31
      }
    }})
    grid
    option = {
      title: {
        text: ''
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      color: '#C13AE2',
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(30, 88, 121)'
          }
        },
        axisLabel: {
          padding: [0, 0, 0, 0],
          color: '#fff',
          interval: 0
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
        left: 50,
        right: 27,
        top: 31
      },
      series: [{
        data: [70, 65, 56, 43],
        type: 'bar',
        barWidth: 19,
        itemStyle: {
          normal: {
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
          }
        },
        animationDelay: 500
      }]
    }
    created () {
      this.option.xAxis.data = this.xData
      this.option.yAxis.name = this.unit
      this.option.series[0].data = this.data
      Object.assign(this.option.grid, this.grid)
      this.option.yAxis.splitLine.lineStyle.type = this.lineType
      for (let i in this.areaStyle) {
        this.option.series[0].itemStyle.normal.color.colorStops[i].color = this.areaStyle[i]
      }
    }
  }
</script>
