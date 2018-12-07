<template>
  <chart class="datav-chart" ref="pie" :options="option"/>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
  export default class ChartPie extends Vue {
    @Prop({default: () => [
      {value: 2, name: '酒店'},
      {value: 3, name: '餐饮'},
      {value: 4, name: '景区'},
      {value: 5, name: '旅行社'},
      {value: 6, name: '其他'}
    ]})
    data
    @Prop({default: () => ['#0B99E0', '#06BA94', '#CCA539', '#C13AE2', '#6D4FEF']})
    color
    @Prop({default: () => true})
    showPercent
    // 是否为丁格尔图 false时无  radius || area 对应两种模式
    @Prop({default: () => 'radius'})
    roseType
    // 饼图圆心
    @Prop({default: () => [0, '70%']})
    radius

    currentIndex = 0
    interval = null
    option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            color: ['#0B99E0', '#06BA94', '#CCA539', '#C13AE2', '#6D4FEF'],
            center: ['50%', '50%'],
            roseType: 'radius',
            data: [
                {value: 2, name: '酒店'},
                {value: 3, name: '餐饮'},
                {value: 4, name: '景区'},
                {value: 5, name: '旅行社'},
                {value: 6, name: '其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
              color: '#fff',
              formatter: '{b}\n{d}%'
            },
        animationDelay: 500
        }
    ]
    }
    created () {
      this.option.series[0].color = this.color
      this.option.series[0].radius = this.radius
      this.option.series[0].roseType = this.roseType
      if (this.data.length !== 0) {
        this.option.series[0].data = this.data
      }
      if (!this.showPercent) {
        this.option.series[0].label.formatter = '{b}'
      }
    }
    mounted () {
      this.$nextTick(() => {
        this.interval = setInterval(() => {
          if (this.$refs.pie) {
            // 取消上一个高亮
            this.$refs.pie.dispatchAction({
              type: 'downplay',
              dataIndex: this.currentIndex
            })
            // 高亮当前索引值数据
            this.currentIndex = this.currentIndex < this.data.length - 1 ? ++this.currentIndex : 0
            this.$refs.pie.dispatchAction({
              type: 'highlight',
              dataIndex: this.currentIndex
            })
            // 显示当前索引数据toolTip
            this.$refs.pie.dispatchAction({
              type: 'showTip',
              dataIndex: this.currentIndex,
              seriesIndex: 0
            })
          }
        }, 2000)
      })
    }
    beforeDestroy () {
      clearInterval(this.interval)
    }
    @Watch('data', {deep: true})
    dataChage () {
      this.option.series[0].data = this.data
    }
  }
</script>
