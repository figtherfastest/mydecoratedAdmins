import Vue from 'vue'

const CTX = CONTEXT_PATH + 'd/data'
export default {
  namespaced: true,
  state: {
    url: `${CTX}/regions`,
    regions: []
  },
  getters: {
    regions ({ regions }) {
      function findParent (region, regions) {
        if (region.parentCode === undefined || region.parentCode === null) {
          return
        }
        for (let reg of regions) {
          if (reg.code === region.parentCode.code) {
            if (reg.children === undefined || reg.children === null) {
              reg.children = []
            }
            reg.children = [...reg.children, region]
            return
          }
        }
      }
      regions.forEach(e => findParent(e, regions))
      let a = regions.filter(e => e.parentCode === null || e.parentCode === undefined)
      return a
    }
  },
  mutations: {
    setRegions (state, regions) {
      state.regions = regions
    }
  },
  actions: {
    loadRegions ({ commit, state }) {
      Vue.http.get(state.url).then(rsp => {
        commit('setRegions', rsp)
      })
    }
  }
}
