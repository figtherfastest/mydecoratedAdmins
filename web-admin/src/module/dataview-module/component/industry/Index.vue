<template>
  <div class="datav-main-container">
    <div class="datav-coloum">
      <hotel-count/>
    </div>
    <div class="datav-coloum center-coloum">
      <component :is="currentComponent"/>
    </div>
    <div class="datav-coloum">
      <div class="datav-row">
        <guide-gender/>
      </div>
      <div class="datav-row">
        <guide-age/>
      </div>
      <div class="datav-row">
        <category/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import BaiduMap from '../../extends/BMapLoader'
  import { namespace } from 'vuex-class'

  import HotelCount from './HotelCount'
  import GuideGender from './GuideGender'
  import GuideAge from './GuideAge'
  import Category from './Category'
  import MonitorMap from './MonitorMap'
  import bMap from './bMap'
  let name = namespace('dataView')

  @Component({
    components: {
      HotelCount,
      GuideGender,
      GuideAge,
      Category,
      MonitorMap,
      bMap
      // ComplaintRateRank,
      // Enterprise,
      // GuideRank
    }
  })
  export default class MonitorIndex extends Vue {
    @name.State('ak')
    ak
    currentComponent = null
    // 使用动态组件 确保地图组件在百度api加载之后才创建
    created () {
      BaiduMap.config({ak: this.ak})
      BaiduMap.load().then(BMap => {
        this.currentComponent = bMap
      })
    }
  }
</script>
