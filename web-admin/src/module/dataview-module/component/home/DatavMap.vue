<template>
  <div class="map-container animated" :class="animates[4]">
    <china-map/>
    <div class="select">
      <datav-select v-model="year"/>
      <datav-select :options="options" v-model="month"/>
      <div class="data-v-button">重置</div>
    </div>
    <div class="overlays-container">
      <div class="map-overlays">
        <div class="left">
          <dynamic-number :num="3223" :font-style="{color: '#B867FB', fontSize: '36px'}" title="本月客流量(人)"/>
        </div>
        <div class="right">
          <div class="overlay-item">
            <dynamic-number :num="1234567" title="今日客流(人)"/>
          </div>
          <div class="overlay-item">
            <dynamic-number :num="323" title="今日铁路(人)-到达"/>
          </div>
          <div class="overlay-item">
            <dynamic-number :num="335" title="今日铁路(人)-出发"/>
          </div>
          <div class="overlay-item">
            <dynamic-number :num="323" title="今日大巴(人)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { DynamicNumber, DatavSelect, ChinaMap } from '../common'
  import { namespace } from 'vuex-class'
  import 'echarts/map/js/china.js'
  import 'animate.css'
  const name = namespace('dataView')
  @Component({
    components: {
      DynamicNumber,
      DatavSelect,
      ChinaMap
    }
  })
  export default class DataVMap extends Vue {
    @name.State('animates')
    animates
    options = [
      { prop: 1, label: '01' },
      { prop: 2, label: '02' },
      { prop: 3, label: '03' },
      { prop: 4, label: '04' },
      { prop: 5, label: '05' },
      { prop: 6, label: '06' },
      { prop: 7, label: '07' },
      { prop: 8, label: '08' },
      { prop: 9, label: '09' },
      { prop: 10, label: '10' },
      { prop: 11, label: '11' },
      { prop: 12, label: '12' }
    ]
    year = '2018'
    month = '01'
  }
</script>

<style lang="less" scoped>
.map-container {
  position: relative;
  .overlays-container {
    position: absolute;
    bottom: 30px;
    left: 10px;
    .map-overlays {
      display: flex;
      align-items: flex-end;
      .left {
        width: 256px;
        height: 110px;
      }
      .right {
        display: flex;
        .overlay-item {
          width: 156px;
          height: 79px;
        }
      }
    }
  }
  .select {
    position: absolute;
    top: 0px;
    right: 10px;
    display: flex;
    align-items: center;
  }
}
</style>
