<template>
  <div>
    <list-item :active="activeIndex===0">
      第一个列表
    </list-item>
    <list-item :active="activeIndex===1">
      第二个列表
    </list-item>
    <list-item :active="activeIndex===2">
      第三个列表
    </list-item>
    <list-item :active="activeIndex===3">
      第四个列表
    </list-item>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import ListItem from './ListItem'

  @Component({
    components: { ListItem },
    comments: {
      ListItem
    }
  })
  export default class Test extends Vue {
    activeIndex = 0

    created () {
      setInterval(() => {
        this.activeIndex++
        if (this.activeIndex > 3) {
          this.activeIndex = 0
        }
      }, 5000)
    }
  }
</script>

<style scoped>

</style>
