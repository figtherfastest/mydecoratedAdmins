<template>
  <datav-panel title="区县投诉率及受理率排行">
    <chart class="datav-chart" :options="option"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class ComplaintRate extends Vue {
    xData = ['山亭区', '滕州区', '市中心', '薛山区', '峰城区', '台儿庄区']
    data = [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6], [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]]

    option = {
        legend: {
          top: 18,
          left: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 13
          },
          data: ['投诉率', '处理率']
        },
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
        // 紫条--------------------我是分割线君------------------------------//
        {
            name: '投诉率',
            show: true,
            type: 'bar',
            barGap: '-100%',
            stack: '比例',
            barWidth: '35%', // 统计条宽度
            itemStyle: {
                normal: {
                    color: '#6371F9'
                }
            },
            max: 1,
            label: {
                normal: {
                    show: false,
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
            data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.3]
        },
        {
            name: '处理率',
            show: true,
            type: 'bar',
            barGap: '-100%',
            stack: '比例',
            barWidth: '35%', // 统计条宽度
            itemStyle: {
                normal: {
                    color: '#B867FB'
                }
            },
            max: 1,
            label: {
                normal: {
                    show: false,
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
            data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.3]
        }
        ]
    }
  }
</script>
