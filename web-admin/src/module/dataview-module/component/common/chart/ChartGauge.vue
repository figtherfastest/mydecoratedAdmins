<template>
  <chart class="datav-chart" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

@Component
  export default class ChartGauge extends Vue {
    option = {
        series: [{
            name: '业务指标',
            type: 'gauge',
            center: ['50%', '85%'],
            startAngle: 180,
            endAngle: 0,
            radius: '140%',
            pointer: {
              color: 'auto'
            },
            axisLine: {
              show: true,
                lineStyle: {
                  width: 18,
                  shadowBlur: 0,
                  color: [
                      [0.25, this.color[0]],
                      [0.5, this.color[1]],
                      [0.75, this.color[2]],
                      [1, this.color[3]]
                  ]
                }
            },
            title: {
              color: '#4C84FF',
              fontSzie: 19,
              offsetCenter: [0, '-55%']
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'transparent'
              }
            },
            axisTick: {
              show: false
            },
            data: [{
              value: this.value,
              name: '敏感度'
            }]

        }]
    }
    @Prop({type: Number, default: () => 4.78})
    value
    @Prop({type: Array, default: () => ['#45E871', '#4C84FF', '#FEC400', '#FF5560']})
    color
  }
</script>
