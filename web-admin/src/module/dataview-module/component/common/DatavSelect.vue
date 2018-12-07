<template>
  <div class="datav-select">
    <div @click="optionsVisible = !optionsVisible" class="label"> {{ value }} </div>
    <ul v-if="optionsVisible" class="options" id="style-2">
      <li v-for="(item, index) in options"
          @click="chooseHandle(item, index)"
          :key="index"
          class="item">
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class DatavSelect extends Vue {
    @Prop({ default: () => 2018 })
    value
    @Prop({
      default: () => [
        { prop: 2018, label: '2018' },
        { prop: 2019, label: '2019' },
        { prop: 2020, label: '2020' }
      ]
    })
    options
    optionsVisible = false
    chooseHandle (item, index) {
      this.$emit('input', item.label)
      this.optionsVisible = false
    }
  }
</script>

<style lang="less" scoped>
.datav-select {
  position: relative;
  width: 162px;
  height: 80px;
  font-size: 16px;
  color:rgba(33,166,232,1);
  ul {
    list-style: none;
    padding-left: 0;
  }
  .label {
    width: 90%;
    height: 100%;
    margin-left: 10px;
    background: url('../../assets/select-bg.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    justify-content: center;
    align-items: center;
    display: flex;
    span {
      font-weight: bolder;
    }
    &:hover {
      cursor: pointer;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-top: 5px solid rgba(255,255,255,1);
      position: absolute;
      top: 38px;
      right: 40px;
    }
  }
  .options {
    position: absolute;
    top: 50px;
    width: 65%;
    max-height: 280px;
    overflow-y: auto;
    overflow-x: hidden;
    left: 50%;
    transform: translateX(-50%);
    .item {
      width: 100%;
      padding: 8px 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../../assets/number-box.png') no-repeat;
      background-size: 100% 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
// 滚动条样式

.options::-webkit-scrollbar
{
display: block;
width: 3px;
background-color: transparent;
}

.options::-webkit-scrollbar-thumb
{
display: block;
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #3681FF;
}
</style>
