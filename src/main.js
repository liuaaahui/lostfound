// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import axios from 'axios'
import store from './vuex/store'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  let isLogin = store.state.isLogin
  let aisLogin = store.state.aisLogin
  if (to.meta.requireAuth) {
    if (isLogin === '1') {
      next()
    } else {
      alert('您还未登录，请先登录!')
      next('/login')
    }
  } else if (to.meta.requireAuth2) {
    if (aisLogin === '2') {
      next()
    } else {
      alert('您不是管理员!')
      next('/alogin')
    }
  } else {
    next()
  }
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
