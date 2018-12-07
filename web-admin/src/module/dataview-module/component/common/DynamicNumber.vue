<template>
  <div class="dynamic-container">
    <div class="title">{{ title }}</div>
    <div class="icon-box">
      <i v-for="(item, index) in arrs"
         class="icon font_family"
         :class="svgNumbers[item]"
         :style="fontStyle"
         :src="svgNumbers[item]"
         alt="item"
         :key="index"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import anime from 'animejs'
  import { Component, Prop } from 'vue-property-decorator'
  import { fixedNumber } from '../../utils'

@Component
  export default class DynamicNumber extends Vue {
    @Prop({default: () => 0})
    num
    @Prop({default: () => '端午'})
    title
    @Prop({default: () => {
      return {color: '#00B2FF', fontSize: '16px'}
    }})
    fontStyle
    targets = {localNum: 0}
    svgNumbers = [
      'icon-0',
      'icon-1',
      'icon-2',
      'icon-3',
      'icon-4',
      'icon-5',
      'icon-6',
      'icon-7',
      'icon-8',
      'icon-9',
      'icon-semicolon'
    ]
    get arrs () { // 处理传入的数字，使其变为svg索引
      let arr = fixedNumber.addCommoa(this.targets.localNum)
      arr.forEach((item, index) => {
        if (item === ',') {
          arr[index] = 10
        }
      })
      return arr
    }
    mounted () {
      anime({
        targets: this.targets,
        localNum: this.num,
        round: 1,
        duration: 3000
      })
    }
  }
</script>

<style lang="less" scoped>
@import url('../../assets/font_icon/iconfont.css');
  .dynamic-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/number-box.png') no-repeat;
    background-size: 105% 125%;
    background-position: 50% 50%;
    .title {
      font-size:12px;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding: 15px;
      text-shadow:2px 2px 2px rgba(9,15,43,0.5)
    }
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 30px;
        color: #B867FB;
      }
    }
  }
</style>
