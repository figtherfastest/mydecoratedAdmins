import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import security from './security'

const CTX = CONTEXT_PATH + 'd'

Vue.use(Vuex) // use必须在创建store实例之前调用

export default new Store({
  state: {
    url: {
      // currentUser: CTX + '/authorities/currentUser',
      authorityMenus: CTX + '/menuAuthorities/menus',
      login: CTX + '/oauth/token',
      logout: CTX + '/logout'
    },
    title: '应用',
    user: {},
    errors: [],
    loadingCount: 0,
    routing: false, // 当前是否在导航中
    theme: 'left',
    matched: null
  },
  getters: {
    loading: ({ loadingCount }) => loadingCount > 0,
    error: ({ errors }) => errors[0],
    crumbs ({ matched }) {
      let result = []

      function getMenu ({ menu, child }) {
        result.push(menu)
        if (child) {
          getMenu(child)
        }
      }

      if (matched) {
        getMenu(matched)
      }
      return result
    }
  },
  mutations: {
    updateTitle (state, { title }) {
      if (title) {
        state.title = title
      }
    },

    switchTheme (state, theme) {
      state.theme = theme
    },

    addError ({ errors }, payload) {
      errors.unshift(payload)
      if (errors.length > 10) {
        errors.pop()
      }
    },
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    },
    updateRouting (state, sta) {
      state.routing = sta
    },
    updateMatched (state, matched) {
      // function getMatch (menus_) {
      //   for (let menu of menus_) {
      //     if (matched.regex.test(menu.href)) {
      //       return { menu }
      //     } else if (menu.submenus !== undefined) {
      //       let result = getMatch(menu.submenus)
      //       if (result !== null && result !== undefined) {
      //         return { menu, child: result }
      //       }
      //     }
      //   }
      // }

      // if (state.menus.length > 0 && state.menus !== undefined) {
      //   let result = getMatch(state.menus)
      //   if (result) {
      //     state.matched = result
      //   }
      // }
    }
  },
  actions: {

    // login ({ commit, state }, data) {
    //   // 登录请求
    //   // 登录需要一个单独的axios实例，登录请求不能被401拦截或者被跳转
    //   return loginInstance.post(state.url.login, data, {
    //     transformRequest: data => Qs.stringify(data)
    //   }).then(rsp => {
    //     sessionStorage.setItem('token', JSON.stringify(rsp.data))
    //     commit('setToken', rsp.data)
    //     return rsp
    //   })
    // },
    // logout ({ commit, state }) {
    //   return loginInstance.get(state.url.logout).then(rsp => {
    //     commit('updateUser', { user: {} })
    //   })
    // }
  },
  modules: {
    security
  }
})
