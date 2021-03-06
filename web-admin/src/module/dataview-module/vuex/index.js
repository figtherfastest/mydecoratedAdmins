export default {
  state: {
    ak: 'FYSWvHNBaBurN2PRg9jMVcV29KYAXtx9',
    animates: [ 'bounceInDown', 'bounceInRight', 'bounceInUp', 'bounceInLeft', 'zoomIn' ]
  },
  mutations: {
    changeAnimates (state, payload) { // 根据enter切换动画为进场或离场动画
      let inAnima = [ 'bounceInDown', 'bounceInRight', 'bounceInUp', 'bounceInLeft', 'zoomIn' ]
      let leaveAnima = [ 'bounceOutUp', 'bounceOutRight', 'bounceOutDown', 'bounceOutLeft', 'zoomOut' ]
      state.animates = payload === 'enter' ? inAnima : leaveAnima
    }
  },
  namespaced: true
}
