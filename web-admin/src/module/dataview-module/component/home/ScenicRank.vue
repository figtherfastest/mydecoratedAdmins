<template>
  <datav-panel title="热门景区排行" :animate-index="3">
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
  export default class ScenicRank extends Vue {
    data = [
      {label: '台儿庄古城', inner: 12, outer: 21},
      {label: '台儿庄古城', inner: 19, outer: 21},
      {label: '台儿庄古城', inner: 19, outer: 21},
      {label: '台儿庄古城', inner: 19, outer: 21},
      {label: '台儿庄古城', inner: 19, outer: 21}
    ]
  }
</script>
