<template>
  <datav-panel title="枣庄市舆情排行" height="632px">
    <list :data="data"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { List } from '../common'

  @Component({
    components: {
      List
    }
  })
  export default class Rank extends Vue {
    data = [
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' },
        { title: '我们国庆去哪里旅游', count: '13214条' }
      ]
  }
</script>
