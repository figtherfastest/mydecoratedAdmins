<template>
  <datav-panel title="商品种类统计">
    <chart-bar
      :x-data="xData"
      :data="data"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import {ChartBar} from '../common'

  @Component({
    components: {
      ChartBar
    }
  })
  export default class Category extends Vue {
    xData = ['绿色食品', '旅游服务', '纪念品', '商家D', '商家E']
    data = [11, 10, 9, 8, 7]
  }
</script>

<style>

</style>
