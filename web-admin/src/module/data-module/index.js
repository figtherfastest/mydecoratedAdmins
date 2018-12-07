// import Vue from 'vue'
import routes from './route'
import storeModule from './vuex'
// import ImgResource from './component/./.common/ImgResource'

// Vue.component('ImgResource', ImgResource)

export default {
  install (Vue, {store, router}) {
    router.addRoutes(routes)
    store.registerModule('data', storeModule)
  }
}
