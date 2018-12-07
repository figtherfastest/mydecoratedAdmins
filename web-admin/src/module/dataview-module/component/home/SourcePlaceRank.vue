<template>
  <datav-panel title="客源地分析排行TOP10" height="632px" :animate-index="1">
    <datav-progress :data="data" :color="['#12BCFD', '#1289FF']"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import DatavProgress from '../common/Progress'

  @Component({
    components: {
      DatavProgress
    }
  })
  export default class Cost extends Vue {
    data = [
      {label: '四川省', inner: 19, outer: 21},
      {label: '四川省', inner: 16, outer: 21},
      {label: '四川省', inner: 15, outer: 21},
      {label: '四川省', inner: 14, outer: 21},
      {label: '四川省', inner: 13, outer: 21},
      {label: '四川省', inner: 12, outer: 21},
      {label: '四川省', inner: 11, outer: 21},
      {label: '四川省', inner: 10, outer: 21},
      {label: '四川省', inner: 9, outer: 21},
      {label: '四川省', inner: 8, outer: 21}
    ]
  }
</script>
