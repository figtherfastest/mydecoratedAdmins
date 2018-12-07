<template>
  <datav-panel title="云词汇">
    <chart style="width: 100%; height: 90%;" :options="option"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  var data = {
    value: [{
              'name': '花鸟市场',
              'value': 1446
            },
            {
              'name': '灯具',
              'value': 43
            },
            {
              'name': '家居饰品',
              'value': 29
            },
            {
              'name': '家居日常用品',
              'value': 10
            },
            {
              'name': '生活服务',
              'value': 883
            },
            {
              'name': '物流配送',
              'value': 536
            },
            {
              'name': '家政服务',
              'value': 108
            },
            {
              'name': '摄影服务',
              'value': 49
            },
            {
              'name': '搬家服务',
              'value': 38
            },
            {
              'name': '物业维修',
              'value': 37
            },
            {
              'name': '婚庆服务',
              'value': 24
            },
            {
              'name': '二手回收',
              'value': 24
            },
            {
              'name': '鲜花配送',
              'value': 3
            },
            {
              'name': '维修服务',
              'value': 3
            },
            {
              'name': '殡葬服务',
              'value': 1
            },
            {
              'name': '求职创业',
              'value': 874
            },
            {
              'name': '创业',
              'value': 363
            },
            {
              'name': '目标职位',
              'value': 162
            },
            {
              'name': '目标行业',
              'value': 50
            },
            {
              'name': '兼职',
              'value': 21
            },
            {
              'name': '期望年薪',
              'value': 20
            },
            {
              'name': '实习',
              'value': 16
            },
            {
              'name': '雇主类型',
              'value': 10
            },
            {
              'name': '星座运势',
              'value': 789
            },
            {
              'name': '星座',
              'value': 316
            },
            {
              'name': '算命',
              'value': 303
            },
            {
              'name': '解梦',
              'value': 196
            },
            {
              'name': '风水',
              'value': 93
            },
            {
              'name': '面相分析',
              'value': 47
            },
            {
              'name': '手相',
              'value': 32
            },
            {
              'name': '公益',
              'value': 90
            }
    ]
  }
  @Component
  export default class WorldCloud extends Vue {
    option = {
    tooltip: {
        show: false
    },
    series: [{
        type: 'wordCloud',
        gridSize: 1,
        sizeRange: [1, 49],
        rotationRange: [0, 0],
        textStyle: {
             normal: {
                color: function (v) {
                    let color = ['#27D38A', '#FFCA1C', '#5DD1FA', '#F88E25', '#47A0FF', '#FD6565']
                     let num = Math.floor(Math.random() * (5 + 1))
                    return color[num]
                }
            }
        },
        left: 'center',
        top: 'center',
        width: '96%',
        height: '50%',
        // right: null,
        // bottom: null,
        // width: 300,
        // height: 200,
        // top: 20,
        data: data.value
    }]
}
  }
</script>
