<template>
  <datav-panel title="枣庄市舆情TOP5" :animate-index="1">
    <list/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { List } from '../common'

  @Component({
    components: {
      List
    }
  })
  export default class InfoTrend extends Vue {

  }
</script>
