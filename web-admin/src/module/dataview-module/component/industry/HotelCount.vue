<template>
  <datav-panel title="酒店统计" height="959px">
    <div class="top" style="height: 256px;">
      <chart-loop class="item"
                  :legend-poition="{top: 'bottom', right: false, left: 'left'}"
                  :data="data"
                  :color="color"/>
      <div class="progress item">
        <datav-progress :data="datap"/>
      </div>
    </div>
    <div class="table">
      <list :show-index="false" :header="tableHeader" :data="tableData"/>
    </div>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import { ChartLoop, DatavProgress, List } from '../common'

  @Component({
    components: {
      ChartLoop,
      DatavProgress,
      List
    }
  })
  export default class HotelCount extends Vue {
    data = [
      {value: '18', name: '三星酒店'},
      {value: '18', name: '五星酒店'},
      {value: '8', name: '四星酒店'},
      {value: '3', name: '其他'}
    ]
    datap = [
      {outer: '20', inner: '18', label: '三星酒店'},
      {outer: '20', inner: '18', label: '五星酒店'},
      {outer: '20', inner: '8', label: '四星酒店'},
      {outer: '20', inner: '3', label: '其他'}
    ]
    tableHeader = [
      {prop: 'name', label: '酒店名称'},
      {prop: 'level', label: '酒店星级'},
      {prop: 'grade', label: '评分'}
    ]
    tableData = [
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0},
      {name: '天堂洲际旅游', level: '5星', grade: 5.0}
    ]
    color = ['#C139E2', '#6D4FEF', '#0B99E0', '#06BA94']
  }
</script>

<style lang="less" scoped>
  .top {
    display: flex;
    .item {
      width: 50%;
    }
  }
</style>
