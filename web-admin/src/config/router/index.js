import store from '../../vuex'
import Router from 'vue-router'

const router = new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [{
    name: 'default',
    path: '/',
    redirect: '/index'
  }, {
    name: 'login',
    path: '/login',
    props: route => ({ redirect: route.query.redirect }),
    component: () => import('@/components/Login')
  }, {
    name: 'index',
    path: '/index',
    // props: route => ({ redirect: route.query.redirect }),
    component: () => import('@/components/index')
  }]
})

router.beforeEach((to, from, next) => {
  store.commit('updateRouting', true)
  next()
})
router.afterEach((to, from) => {
  let matched = to.matched[to.matched.length - 1]
  store.commit('updateMatched', matched)
  store.commit('updateRouting', false)
})
export default router
