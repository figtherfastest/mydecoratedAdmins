<template>
  <el-row>
    <el-col :span="6">
      <div class="data-view-item">
        <scenic-rank/>
      </div>
      <div class="data-view-item">
        <test-pie/>
      </div>
      <div class="data-view-item">
        <test-rose-type/>
      </div>
    </el-col>
    <el-col :span="12">
      <el-row class="data-view-item">
        <datav-map/>
      </el-row>
      <el-row>
        <el-col :span="12" class="data-view-item">
          <symbol-line/>
        </el-col>
        <el-col :span="12" class="data-view-item">
          <test-radar/>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <div class="data-view-item">
        <source-place-rank/>
      </div>
      <div class="data-view-item">
        <pop-feelings/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import DatavMap from './DatavMap'
  import ScenicRank from './ScenicRank'
  import TestBar from './TestBar'
  import TestPie from './TestPie'
  import TestRoseType from './TestRoseType'
  import TestRoseRadius from './TestRoseRadius'
  import TestRadar from './TestRadar'
  import SymbolLine from './SymbolLine'
  import SourcePlaceRank from './SourcePlaceRank'
  import PopFeelings from './PopFeelings'

  @Component({
    components: {
      DatavMap,
      ScenicRank,
      TestBar,
      TestPie,
      TestRoseType,
      TestRoseRadius,
      SymbolLine,
      TestRadar,
      SourcePlaceRank,
      PopFeelings
    }
  })
  export default class Index extends Vue {
  }
</script>

<style scoped>
  .data-view-item {
    padding: 0 5px 5px 0;
  }
</style>
