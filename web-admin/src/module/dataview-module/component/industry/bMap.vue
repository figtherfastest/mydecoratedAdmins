<template>
  <div class="b-map">
    <chart class="datav-chart" ref="map" :options="option"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  require('echarts/extension/bmap/bmap')

  @Component
  export default class CalcMap extends Vue {
    option = {
        bmap: {
            center: [104.091, 30.639],
            zoom: 15,
            roam: true,
            mapStyle: {
                style: 'dark'
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            silent: true,
            lineStyle: {
                normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            effect: {
                constantSpeed: 50,
                show: true,
                trailLength: 0.5,
                symbolSize: 1.5
            },
            zlevel: 1
        }]
    };
  }
</script>

<style lang="less" scoped>
  .b-map {
    height: 959px;
  }
</style>
