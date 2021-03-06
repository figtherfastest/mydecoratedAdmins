import Vue from 'vue'
import Qs from 'qs'
import axios from 'axios'

const loginInstance = axios.create()

// 进入时，首先尝试获取session中的token
let token = {}
let tokenStr = sessionStorage.getItem('token')
if (tokenStr !== null && tokenStr !== undefined && tokenStr !== '') {
  token = JSON.parse(tokenStr)
}

export default {
  namespaced: true,
  state: {
    url: {
      currentUser: `${CONTEXT_PATH}p/authorities/currentUser`,
      authorityMenus: `${CONTEXT_PATH}p/menuAuthorities/menus`,
      token: CONTEXT_PATH + 'oauth/token',
      logout: CONTEXT_PATH + 'oauth/logout'
    },
    user: {
      fullname: '未知用户',
      username: 'unknown'
    },
    menus: [],
    token
  },
  getters: {
    menus ({ menus }) {
      return menus
    },
    token ({ token: { token_type: tokenType, access_token: accessToken } }) {
      return `${tokenType} ${accessToken}`
    }
  },
  mutations: {
    setMenu: (state, menus) => (state.menus = menus),
    setToken: (state, token) => (state.token = token),
    setUser: (state, { user }) => (state.user = user)
  },
  actions: {
    loadMenu ({ commit, state: { url: { authorityMenus } } }) {
      Vue.http.get(authorityMenus).then(data => {
        commit('setMenu', data)
        return data
      })
    },

    loadUserInfo ({ commit, state: { url: { currentUser } } }) {
      return Vue.http.get(currentUser).then((data) => {
        commit('setUser', { user: data })
        return data
      })
    },
    login ({ commit, state }, data) {
      // 登录请求
      // 登录需要一个单独的axios实例，登录请求不能被401拦截或者被跳转
      return loginInstance.post(state.url.token, data, {
        transformRequest: data => Qs.stringify(data)
      }).then(rsp => {
        let { data } = rsp
        sessionStorage.setItem('token', JSON.stringify(data))
        commit('setToken', data)
        return rsp
      })
    },
    logout ({ commit, state }) {
      return loginInstance.delete(state.url.logout, {
        params: {
          'access_token': state.token.access_token
        }
      }).finally(() => {
        sessionStorage.removeItem('token')
        commit('setToken', {})
      })
      // TODO 登出待实现
      // console.log('登出')
    }
  }
}
