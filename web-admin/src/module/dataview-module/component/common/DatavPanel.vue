<template>
  <div class="panel animated"
       :style="{ height }"
       :class="animates[animateIndex]">
    <div class="header">
      <h4 class="title">{{ title }}</h4>
      <!-- <p class="source">数据来源:{{ source }}</p> -->
    </div>
    <slot/>
  </div>
</template>

<script>

  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import 'animate.css'
  const name = namespace('dataView')
  @Component
  export default class Pannel extends Vue {
    @Prop({default: () => '无标题'})
    title
    @Prop({default: () => '数据来源'})
    source
    @Prop({default: () => '311px'})
    height
    @Prop({ default: () => 0 })
    animateIndex
    bounce = ''
    @name.State('animates')
    animates
    created () {
    }
    activated () {
      this.bounce = 'bounce'
    }
    mounted () {
      this.$nextTick(() => {
        this.bounce = 'bounce'
      })
    }
  }
</script>

<style lang="less" scoped>
  .panel {
    width: 100%;
    padding: 19px 10px;
    box-sizing: border-box;
    // border: 1px solid #083C85;
    // box-shadow: 0px 0px 10px 5px rgba(106, 106, 255, 0.2) inset;
    // background-color: rgba(56, 53, 255, 0.05);
    background: url("../../assets/box-bg.png") no-repeat;
    background-size: 100% 100%;
    .header {
      color: #fff;
      display: flex;
      justify-content: space-between;
      .title {
        &:before {
          content: ' ';
          width: 4px;
          height: 0.8em;
          margin: 0 3px;
          display: inline-block;
          background-color: #0078fe;
        }
      }
      .source {
        font-size: 13px;
      }
    }
  }
</style>
