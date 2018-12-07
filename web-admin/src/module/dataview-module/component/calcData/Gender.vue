<template>
  <datav-panel title="游客性别分析" class="gender" :animate-index="3">
    <chart-loop :radius="['50%', '70%']" :show-title="true" :color="color"/>
    <div class="info">
      <div>男性游客<span class="num">1,568人</span></div>
      <div>女性游客<span class="num">685人</span></div>
      <div>未知游客<span class="num">685人</span></div>
    </div>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { ChartLoop } from '../common'

  @Component({
    components: {
      ChartLoop
    }
  })
  export default class Gender extends Vue {
    color = ['#0B99E0', '#C13AE2', '#3F62FC']
  }
</script>

<style lang="less">
.gender {
  .datav-chart{
    height: calc(95% - 30px);
  }
  .info {
    padding: 0 35px;
    display: flex;
    justify-content: space-between;
    font-weight:400;
    color:rgba(254,254,254,1);
    font-size: 14px;
    .num {
      font-size:20px;
      font-weight:400;
      color:rgba(255,224,23,1);
      line-height:22px;
      background:linear-gradient(0deg,rgba(233,254,43,1) 0%, rgba(254,199,16,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
  }
}
</style>
