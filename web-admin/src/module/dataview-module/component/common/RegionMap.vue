<template>
  <div class="test map-container">
    <chart ref="map" class="datav-chart" :options="option"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import zhaozhuang from '../../assets/mapJson/zaozhuang.json'
  import echarts from 'echarts'

  // // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  //   var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  @Component
  export default class RegionMap extends Vue {
    BJData = [
    [{name: '北京'}, {name: '台儿庄区', value: 95}],
    [{name: '北京'}, {name: '山亭区', value: 90}],
    [{name: '北京'}, {name: '峄城区', value: 80}],
    [{name: '北京'}, {name: '市中区', value: 70}],
    [{name: '北京'}, {name: '滕州市', value: 60}],
    [{name: '北京'}, {name: '薛城区', value: 50}]
    ]
    series = []
    created () {
      echarts.registerMap('枣庄', zhaozhuang)
      let geoCoordMap = {}
      JSON.parse(JSON.stringify(zhaozhuang)).features.forEach(item => {
        geoCoordMap[item.properties.name] = item.properties.center
      })
      let zao = [['枣庄', this.BJData]]
      zao.forEach((item, i) => {
        this.series.push(
          {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 5,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            },
            // symbol: planePath,
            // symbolSize: function (val) {
            //   return val[2] / 8
            // },
            itemStyle: {
              normal: {
                color: 'pink'
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              }
            })
        })
      })
    }
    option = {
        tooltip: {
            trigger: 'item'
        },
        geo: [{
            map: '枣庄',
            zlevel: 4,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(57,127,254, .9)',
                    borderWidth: 2,
                    areaColor: {
                        type: 'radial',
                        x: 1,
                        y: 1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(56, 53, 255, 0.05)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(56, 53, 255, 0.05)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(57,127,254, 1)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 8,
                    shadowBlur: 150
                  },
                emphasis: {
                    areaColor: {
                        type: 'radial',
                        x: 1,
                        y: 1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(241, 232, 99, 0.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(241, 232, 99, 0.5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth: 2,
                    borderColor: '#efe22c',
                    shadowColor: 'rgba(241, 232, 99, 1)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 8,
                    shadowBlur: 150
                }
            }
        },
        {
            map: '枣庄',
            zlevel: 3,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(18, 40, 99, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 1,
                        y: 1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(24,46,104, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(24,46,104, 0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(24,46,104, .9)',
                    shadowOffsetX: -5,
                    shadowOffsetY: 10,
                    shadowBlur: 1
                  },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            silent: true
        }, {
            map: '枣庄',
            zlevel: 3,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(24,46,104, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 1,
                        y: 1,
                        r: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(24,46,104, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(24,46,104, 0)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(24,46,104, .4)',
                    shadowOffsetX: -10,
                    shadowOffsetY: 25,
                    shadowBlur: 1
                  },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            silent: true
        }
        ],
        series: this.series
    }
  }
</script>

<style>

</style>
