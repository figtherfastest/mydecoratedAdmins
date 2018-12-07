<template>
  <div class="map-container">
    <region-map/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { RegionMap } from '../common'

@Component({
  components: {
    RegionMap
  }
})
  export default class creditMap extends Vue {

  }
</script>
