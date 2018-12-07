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
    @Prop({default: () => ['未知', '60岁以上', '41-60岁', '31-40岁', '19-30岁', '0-18岁']})
    xData
    @Prop({default: () => '单位：%'})
    unit
    @Prop({default: () => ''})
    title
    @Prop({default: () => true})
    showPercent

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14
            }
        },
        yAxis: {
            name: '单位 %',
            type: 'category',
            data: ['未知', '60岁以上', '41-60岁', '31-40岁', '19-30岁', '0-18岁'],
                    axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14
            },
            nameTextStyle: {
              color: '#fff'
            }
        },
        series: [
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', // 统计条宽度
            itemStyle: {
                normal: {
                    color: 'rgba(72,176,255,0.18)'
                }
            },
            z: 1,
            data: [1, 1, 1, 1, 1, 1]
        },
        // 蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', // 统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 20, 20, 0],
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#12BCFD' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1289FF' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false

                    }
                }
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff' // 百分比颜色
                    },
                    position: 'right',
                    // 百分比格式
                    formatter: function (data) {
                        return (data.data * 100).toFixed(1) + '%'
                    }
                }
            },
            labelLine: {
                show: false
            },
            z: 2,
            data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
        animationDelay: 500
        }
        ]
    }
    created () {
      this.option.yAxis.data = this.xData
      this.option.xAxis.name = this.unit
      this.option.series[1].label.normal.show = this.showPercent
    }
  }
</script>
