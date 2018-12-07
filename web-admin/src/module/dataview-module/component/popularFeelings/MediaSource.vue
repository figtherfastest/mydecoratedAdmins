<template>
  <datav-panel title="媒体来源占比图">
    <chart-bar :x-data="xData"
               :grid="{left: 32}"
               :area-style="['#B967FB', '#6071F9']"
               line-type="dashed"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartBar } from '../common'

@Component({
  components: {
    ChartBar
  }
})
  export default class MediaSource extends Vue {
    xData = ['新浪', '腾讯', '今日头条', '百度贴吧']
  }
</script>

<style>

</style>
