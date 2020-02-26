import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 状态
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo')),
  isLogin: localStorage.getItem('isLogin'),
  auserinfo: JSON.parse(localStorage.getItem('auserinfo')),
  aisLogin: localStorage.getItem('aisLogin')
}
// 主要用来操作state
const mutations = {
  SAVE_USERINFO (state, userinfo) {
    state.userinfo = localStorage.setItem('userinfo', JSON.stringify(userinfo))
  },
  CHECK_LOGIN (state, isLogin) {
    localStorage.setItem('isLogin', isLogin)
    state.isLogin = isLogin
  },
  SAVE_AUSERINFO (state, auserinfo) {
    state.auserinfo = localStorage.setItem('auserinfo', JSON.stringify(auserinfo))
  },
  CHECK_ALOGIN (state, aisLogin) {
    localStorage.setItem('aisLogin', aisLogin)
    state.aisLogin = aisLogin
  }
}
export default new Vuex.Store({
  state,
  mutations
})
