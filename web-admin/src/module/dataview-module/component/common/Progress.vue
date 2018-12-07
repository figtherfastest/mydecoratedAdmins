<template>
  <div class="datav-progress-group">
    <div class="progress" v-for="(item, index) in data" :key="index">
      <div class="dot" :style="{ background: color[0] }">{{ index +1 }}</div>
      <div class="progress-bar">
        <span class="label">{{ item.label }}</span>
        <span class="right-label">{{ item.inner }}</span>
        <div class="inner" :style="{ width: item.inner / item.outer*100 + '%', background: `linear-gradient(to right, ${color[0]}, ${color[1]})` }"/>
        <div class="outer"/>
      </div>
      <div class="back">{{ item.done }}</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class DatavProgress extends Vue {
    @Prop({default: () => []})
    data
    @Prop({default: () => []})
    color
  }
</script>

<style lang="less" scoped>
  .datav-progress-group {
    margin-top: 1em;
    padding: 0 12px;
    .progress {
      margin-bottom: 1.8em;
      position: relative;
      display: flex;
      align-items: center;
      .dot {
        width: 1.5em;
        height: 1.5em;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        background-color: #6171fa;
        z-index: 2;
      }
      .progress-bar {
        width: 100%;
        height: 0.8em;
        margin-left: -5px;
        position: relative;
        .outer {
          width: calc(100% + 5px);
          height: 100%;
          border-radius: 50px;
          background: #183f5a;
        }
        .inner {
          .outer;
          width: 0%;
          position: absolute;
          transition: all .3s ease-out;
          background: linear-gradient(to right, #6071F9, #B967FB);
        }
        .label {
          position: absolute;
          top: -18px;
          color: #BDD2F1;
          font-size: 12px;
        }
        .right-label {
          .label;
          right: 5%;
        }
      }
    }
  }
</style>
