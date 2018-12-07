<template>
  <datav-panel title="投诉分类走势">
    <chart class="datav-chart" :options="option"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Classify extends Vue {
    option = {
      color: ['#FCA900', '#06BA94', '#0B99E0', '#6D4FEF', '#C13AE2'],
      tooltip: {
          trigger: 'axis'
      },
      legend: {
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 6,
        right: 15,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        data: ['服务质量', '服务设施', '旅游欺诈', '非法经营', '安全保障']
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
        data: ['201803', '201805', '201807', '201809']
      },
      yAxis: {
        type: 'value',
        name: '单位：条',
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
        name: '服务质量',
        data: [8, 7.6, 6.8, 7.6],
        type: 'line',
        symbol: 'circle',
        symbolSize: 8
      }, {
        name: '服务设施',
        data: [7.2, 7.3, 7.2, 6.8],
        type: 'line',
        symbol: 'circle',
        symbolSize: 8
      }, {
        name: '旅游欺诈',
        data: [6.3, 6.4, 6.5, 6.5],
        type: 'line',
        symbol: 'circle',
        symbolSize: 8
      }, {
        name: '非法经营',
        data: [5.3, 5.4, 5.6, 5.9],
        type: 'line',
        symbol: 'circle',
        symbolSize: 8
      }, {
        name: '安全保障',
        data: [4.3, 4.6, 4.9, 4.2],
        type: 'line',
        symbol: 'circle',
        symbolSize: 8
      } ]
    }
  }
</script>

<style>

</style>
