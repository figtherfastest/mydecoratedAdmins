<template>
  <el-container class="datav-container">
    <el-header class="datav-menu" :style="{backgroundImage: `url(${bgImg})`}">
      <el-row>
        <div>
          <!-- 左标题 -->
          <el-col class="menu-container left" ref="left" :span="10">
            <div class="menu-item"
                 v-for="(item, index) in menu.slice(0,3)"
                 @click="directTo(item)"
                 :key="index"
                 :class="{active: active === item.label, last_left: index === 2}">
              <span
                class="label">
                {{ item.label }}
              </span>
            </div>
          </el-col>
        </div>
        <!-- 主标题 -->
        <el-col class="main-title" @click.native="menuShow = !menuShow" :span="4">
          {{ active }}
        </el-col>
        <div>
          <!-- 右标题 -->
          <el-col class="menu-container right" ref="right" :span="10">
            <div v-for="(item, index) in menu.slice(3,100)"
                 class="menu-item"
                 :key="index"
                 @click="directTo(item)"
                 :class="{active: active === item.label, last_right: index === 3}">
              <span
                class="label">
                {{ item.label }}
              </span>
              <!-- 子菜单 -->
              <transition enter-active-class="animated zoomInDown"
                          leave-active-class="animated hinge"
                          mode="in-out">
                <div v-if="item.children && item.subMenuShow" class="submenu">
                  <div v-for="(subitem, subIndex) in item.children"
                       class="submenu-item menu-item"
                       @click="directTo(subitem)"
                       :class="{active: active === item.label}"
                       :key="subIndex">
                    <span class="label">{{ subitem.label }}</span>
                  </div>
                </div>
              </transition>
            </div>
          </el-col>
        </div>
      </el-row>
    </el-header>
    <el-main class="datav-main">
      <!-- <transition name="datav-transition"
                  enter-active-class="animated bounceInLeft"
                  leave-active-class="animated bounceOutRight"
                  mode="out-in"
      > -->
      <!-- <keep-alive> -->
      <router-view/>
      <!-- </keep-alive> -->
      <!-- </transition> -->
    </el-main>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import { DatavPanel } from './common'
  import { Component, Watch } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import 'echarts'
  import 'echarts-wordcloud'
  import anime from 'animejs'
  import Chart from '@/components/ECharts'
  import { resize } from '../utils'
  import 'animate.css'
  import { setTimeout } from 'timers'

  const name = namespace('dataView')

  /* 注册echart panel框等大量使用的组件 */
  Vue.component('DatavPanel', DatavPanel)
  Vue.component('Chart', Chart)

  @Component({
    components: {}
  })
  export default class DataViewTemplate extends Vue {
    active = '首页'
    menuShow = true
    resizeAc = null
    @name.Mutation('changeAnimates')
    changeAnimates

    created () {
      // 递归匹配active和routerName
      let matchName = (menu) => {
        menu.forEach(item => {
          if (item.routerName === this.$router.currentRoute.name) {
            this.active = item.label
          }
          if (item.children) {
            matchName(item.children)
          }
        })
      }
      matchName(this.menu)
    }

    mounted () {
      // 整体页面缩放
      let html = document.getElementsByTagName('html')[0]
      resize.resizeHandle(html)
      this.resizeAc = () => {
        resize.resizeHandle(html)
      }
      window.addEventListener('resize', this.resizeAc, false)

      // 入场进场动画切换
      this.$router.beforeEach((to, from, next) => {
        this.changeAnimates('leave')
        setTimeout(() => {
          next()
        }, 500)
      })
      this.$router.afterEach((to, from) => {
        this.changeAnimates('enter')
      })
    }

    beforeDestroy () {
      // 离开之后清除样式 清除事件监听
      window.removeEventListener('resize', this.resizeAc)
      let html = document.getElementsByTagName('html')[0]
      html.style.transform = 'none'
      html.style.transformOrigin = '0 0 0'
      html.style.width = 'none'
      html.style.height = 'none'
      html.style.overflow = 'none'
    }

    menu = [
      { label: '首页', routerName: 'index' },
      { label: '旅游经济核算大数据', routerName: 'calcData' },
      { label: '信用全景分析', routerName: 'creditPanorama' },
      {
        label: '行业管理大数据',
        children: [
          { label: '产业运行监测', routerName: 'industry' },
          { label: '舆情监测分析', routerName: 'popularFeelings' },
          { label: '假日统计分析', routerName: 'holiday' }
        ]
      },
      { label: '旅游营销大数据', routerName: 'marketingData' },
      {
        label: '旅游服务',
        children: [
          { label: '旅游企业服务', routerName: 'industry' },
          { label: '客流走势分析', routerName: 'popularFeelings' },
          { label: '景区舒适度分析', routerName: 'holiday' }
        ]
      }
    ]

    directTo (item) {
      this.$set(item, 'subMenuShow', !item.subMenuShow)
      if (!item.children) {
        this.menuShow = false
        this.active = item.label
        this.$router.push(item.routerName)
      }
    }

    get bgImg () {
      const bgImg = [require('../assets/menu-open.png'), require('../assets/menu-close.png')]
      return this.menuShow ? bgImg[0] : bgImg[1]
    }

    // 菜单动画
    @Watch('menuShow')
    menuChange () {
      let opacity = this.menuShow ? 1 : 0
      let scaleX = this.menuShow ? 1 : 0
      let translateXleft = this.menuShow ? 0 : 800
      let translateXRight = this.menuShow ? 0 : -800
      anime({
        targets: this.$refs.left.$el,
        scaleX,
        translateX: translateXleft,
        opacity,
        duration: 2000
      })
      anime({
        targets: this.$refs.right.$el,
        translateX: translateXRight,
        scaleX,
        opacity,
        duration: 2000
      })
    }
  }
</script>

<style lang="less">
  @import '../style/common.less';
  @import '../style/mixin.less';

  @bg: url('../assets/背景.jpg');
  @pannel-bg: rgba(24, 110, 213, 0.3);
  @border: 1px solid rgba(24, 110, 213, 1);
  @shadow: 0px 0px 10px 5px rgba(106, 106, 255, 0.2) inset;
  .datav-container {
    background-image: @bg;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .datav-menu {
      padding: 0 5%;
      margin-top: 17px;
      margin-bottom: 20px;
      background-image: url('../assets/menu-open.png');
      background-position-x: center;
      background-repeat: no-repeat;
      z-index: 233;

      .main-title {
        font-size: 28px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: #30A5FF;
        text-align: center;
        line-height: 60px;
        background: linear-gradient(180deg, rgba(48, 165, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &:hover {
          cursor: pointer;
        }
      }

      .menu-container {
        display: flex;

        .menu-item {
          position: relative;
          width: 234px;
          height: 37px;
          margin: 10px 3px;
          color: #838f96;
          background-color: @pannel-bg;
          text-align: center;
          line-height: 33px;
          border: @border;
          transform: skew(-38.5deg);
          transition: all .3s ease-out;

          .label {
            display: block;
            transform: skew(38.5deg);
          }

          &:hover {
            cursor: pointer;
          }

          .submenu {
            position: absolute;
            top: 50px;

            .submenu-item {
              transform: skew(0deg);
            }
          }
        }

        .active {
          color: #fff;
          background-color: #113f7b;
          border: 1px solid #083C85;
          text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
        }

        .last_left {
          border-right: none;
        }

        .last_right {
          border-left: none;
        }
      }

      .left {
        position: relative;
        right: 19px;
        bottom: 5px;
      }

      .right {
        .left;
        right: -19px;

        .menu-item {
          transform: skew(38.5deg);

          .label {
            display: block;
            transform: skew(-38.5deg);
          }
        }
      }
    }

    .datav-main {
      padding: 25px 8px 5px 8px;
      border: 1px solid #1a3775;
      margin: -30px 10px 28px 10px;
    }
  }

  // 页面大体布局
  .datav-main-container {
    display: flex;
    width: 100%;

    .datav-row {
      display: flex;
      padding-bottom: 10px;
    }

    .datav-coloum {
      width: 464px;
    }

    .center-coloum {
      width: 936px;

      .center-bottom {
        width: 464px;
      }
    }
  }

  // 隐藏滚动条
  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-track-piece {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-resizer {
    display: none;
  }
</style>
