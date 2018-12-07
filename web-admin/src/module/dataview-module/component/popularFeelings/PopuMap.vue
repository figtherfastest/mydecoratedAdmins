<template>
  <div class="map-container animated" :class="animates[4]">
    <china-map :show-plane="false"/>
    <div class="select">
      <datav-select v-model="year"/>
      <datav-select :options="options" v-model="month"/>
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
  .select {
    position: absolute;
    top: 0px;
    right: 10px;
    display: flex;
    align-items: center;
  }
}
</style>
