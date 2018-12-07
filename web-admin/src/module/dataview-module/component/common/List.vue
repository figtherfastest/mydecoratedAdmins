<template>
  <div class="list-container">
    <div class="header">
      <div v-for="(item, index) in header" :key="index" class="index">{{ item.label }}</div>
    </div>
    <div class="main-list">
      <div class="high-light" :style="{top: `${top}px`}"/>
      <div class="list-item"
           ref="item"
           v-for="(item, index) in data"
           :key="index">
        <div v-if="showIndex" class="td td-index">{{ fixedNumber(index + 1) }}</div>
        <div v-for="subIndex in item" class="td td-context" :key="subIndex">{{ subIndex }}</div>
        <!-- <div class="td td-context">{{ item[header[2].prop] }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { fixedNumber } from '../../utils'

  @Component
  export default class List extends Vue {
    top = 0 // 高亮条偏移量
    interval = ''
    fixedNumber = fixedNumber.fixedNumber
    @Prop({
      default: () => [
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' }
      ]
    })
    data
    // 表头
    @Prop({
      default: () => [
        { prop: 'index', label: '序号' },
        { prop: 'title', label: '舆情标题' },
        { prop: 'count', label: '转发量' }
      ]
    })
    header
    @Prop({ default: () => 2 })
    speed
    @Prop({ default: () => true })
    showIndex
    @Prop({
      type: Number,
      default: () => Math.floor(Math.random() * 5000)
    })
    delay

    mounted () {
      let count = 0
      // 高亮条滚动
      this.$nextTick(() => {
        let padding = Number(window.getComputedStyle(this.$refs.item[0]).getPropertyValue('padding').split('px')[0]) * 2
        let itemHeight = Number(window.getComputedStyle(this.$refs.item[0]).getPropertyValue('height').split('px')[0]) + padding
        setTimeout(() => {
          this.interval = setInterval(() => {
            if (count < this.data.length - 1) {
              this.top += itemHeight
              count++
            } else {
              this.top = count = 0
            }
          }, this.speed * 1000)
        }, this.delay)
      })
    }

    beforeDestroy () { // 清除定时器避免组件销毁后定时器仍在运行
      clearInterval(this.interval)
    }
  }
</script>

<style lang="less" scoped>
  .list-container {
    margin-top: 9px;
    color: #fff;
    text-align: center;

    .header {
      display: flex;
      justify-content: space-between;
      padding: .5em;
      font-size: 14px;
      background: rgba(11, 39, 80, 0.2);
      border: 1px solid rgba(30, 107, 193, 0.48);
    }

    .main-list {
      position: relative;
      margin-top: 5px;

      .high-light {
        width: 100%;
        top: 3px;
        height: 38px;
        position: absolute;
        transition: all .3s ease-out;
        background-color: rgba(56, 53, 255, 0.05);
        box-shadow: 0px 0px 30px 5px rgba(106, 106, 255, 0.2) inset;
      }

      .list-item {
        padding: .5em;
        display: flex;
        justify-content: space-between;

        .td-index {
          width: 23px;
          height: 23px;
          font-size: 13px;
          background: linear-gradient(90deg, rgba(96, 113, 249, 1), rgba(185, 103, 251, 1));
          border-radius: 3px;
          line-height: 24px;
        }

        .td-context {
          font-size: 12px;
          color: #BDD2F1;
        }
      }
    }
  }
</style>
