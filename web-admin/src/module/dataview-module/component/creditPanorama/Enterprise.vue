<template>
  <datav-panel title="企业红黑榜滚动">
    <list :data="data" :header="header"/>
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
  export default class RealTimeScroll extends Vue {
    header = [
      {prop: 'index', label: '序号'},
      {prop: 'name', label: '企业名称'},
      {prop: 'value', label: '信用值'}
    ]
    data = [
      {name: '广州奈特阳光有限公司', value: '91.2'},
      {name: '广州奈特阳光有限公司', value: '91.2'},
      {name: '广州奈特阳光有限公司', value: '91.2'},
      {name: '广州奈特阳光有限公司', value: '91.2'},
      {name: '广州奈特阳光有限公司', value: '91.2'}
    ]
  }
</script>
