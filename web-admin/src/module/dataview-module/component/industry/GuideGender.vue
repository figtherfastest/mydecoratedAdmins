<template>
  <datav-panel title="导游性别统计">
    <chart-loop/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import {ChartLoop} from '../common'

  @Component({
    components: {
      ChartLoop
    }
  })
  export default class GuiderGender extends Vue {

  }
</script>

<style>

</style>
