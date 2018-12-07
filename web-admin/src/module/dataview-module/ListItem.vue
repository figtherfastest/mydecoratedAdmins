<template>
  <div class="list-item">
    <transition name="fade">
      <div class="cover" v-if="active"/>
    </transition>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class ListItem extends Vue {
    @Prop({ default: () => false })
    active
  }
</script>

<style lang="less">
  .list-item {
    background-color: rebeccapurple;
    height: 200px;
    border: solid 1px red;
    position: relative;
    overflow: hidden;

    .cover {
      background-color: rgba(255, 87, 88, 0.43);
      height: 80%;
      transition: transform 2s;
      border: solid rgb(47, 142, 255) 10px;
      height: 180px;

      &.fade-enter {
        transform: translateY(-100%);
      }

      &.fade-leave-to {
        transform: translateY(100%);
      }
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
    }

  }
</style>
