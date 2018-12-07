<template>
  <datav-panel title="导游排名TOP10" height="632px">
    <datav-progress :data="data"/>
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
      {label: '张三', inner: 19, outer: 21},
      {label: '张三', inner: 16, outer: 21},
      {label: '张三', inner: 15, outer: 21},
      {label: '张三', inner: 14, outer: 21},
      {label: '张三', inner: 13, outer: 21},
      {label: '张三', inner: 12, outer: 21},
      {label: '张三', inner: 11, outer: 21},
      {label: '张三', inner: 10, outer: 21},
      {label: '张三', inner: 9, outer: 21},
      {label: '张三', inner: 8, outer: 21}
    ]
  }
</script>
