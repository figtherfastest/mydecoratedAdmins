<template>
  <datav-panel title="景区投诉率及受理率TOP5">
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
