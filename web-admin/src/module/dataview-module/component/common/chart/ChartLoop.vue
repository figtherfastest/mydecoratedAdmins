<template>
  <chart class="datav-chart" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
  export default class ChartPie extends Vue {
    @Prop({default: () => [
      {value: 50, name: '男性游客'},
      {value: 18, name: '女性游客'},
      {value: 32, name: '未知游客'}
    ]})
    data
    @Prop({default: () => ['#0B99E0', '#3F62FC', '#C13AE2', '#6D4FEF', '#FCA900', '#06BA94']})
    color
    @Prop({default: () => true})
    showPercent
    // 是否为丁格尔图 false时无  radius || area 对应两种模式
    @Prop({default: () => false})
    roseType
    // 饼图圆心
    @Prop({default: () => ['50%', '70%']})
    radius
    // 是否显示中心标题
    @Prop({default: () => false})
    showTitle
    @Prop({default: () => { return {right: '15', top: 'middle'} }})
    legendPoition
    option = {
      title: {
        text: '游客性别\n   分析',
        top: '40%',
        left: '27%',
        textStyle: {
          color: '#fff',
          fontSize: 15,
          align: 'center'
        }
      },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        show: true,
        right: '15%',
        top: 'middle',
        orient: 'vertical',
        textStyle: {
          color: '#fff'
        },
        data: ['男性游客', '女性游客', '未知游客']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            color: ['#02F4F0', '#C039E5', '#6D4FEF', '#C13AE2', '#6D4FEF'],
            center: ['35%', '50%'],
            roseType: 'radius',
            data: [
                {value: 50, name: '男性游客'},
                {value: 18, name: '女性游客'},
                {value: 32, name: '未知游客'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
              show: false,
              color: '#fff',
              formatter: '{b}\n{d}%'
            },
        animationDelay: 500
        },
        {
            name: '装饰',
            type: 'pie',
            radius: ['45%', '46%'],
            color: ['#10476d'],
            center: ['35%', '50%'],
            roseType: 'radius',
            data: [
                {value: 1, name: '装饰'}
            ],
            label: {
              show: false
            },
            silent: true
        },
        {
            name: '装饰',
            type: 'pie',
            radius: ['73%', '74%'],
            color: ['#10476d'],
            center: ['35%', '50%'],
            roseType: 'radius',
            data: [
                {value: 1, name: '装饰'}
            ],
            label: {
              show: false
            },
            silent: true
        }
    ]
    }
    created () {
      this.option.title.show = this.showTitle
      this.option.series[0].color = this.color
      this.option.series[0].radius = this.radius
      this.option.series[0].roseType = this.roseType
      Object.assign(this.option.legend, this.legendPoition)
      if (this.data.length !== 0) {
        let legendData = []
        this.option.series[0].data = this.data
        this.data.forEach(item => {
          legendData.push(item.name)
        })
        this.option.legend.data = legendData
      }
      if (!this.showPercent) {
        this.option.series[0].label.formatter = '{b}'
      }
    }
    @Watch('data', {deep: true})
    dataChage () {
      this.option.series[0].data = this.data
    }
  }
</script>
