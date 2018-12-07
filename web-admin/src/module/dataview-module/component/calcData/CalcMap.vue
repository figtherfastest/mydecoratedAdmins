<template>
  <div class="test map-container animated" :class="animates[4]">
    <region-map/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { RegionMap } from '../common'
  import { namespace } from 'vuex-class'
  import 'animate.css'

  const name = namespace('dataView')
  @Component({
    components: {
      RegionMap
    }
  })
  export default class CalcMap extends Vue {
    @name.State('animates')
    animates
  }
</script>

<style>

</style>
