<template>
  <datav-panel title="投诉信息实时滚动">
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
  export default class RealTimeScroll extends Vue {

  }
</script>
