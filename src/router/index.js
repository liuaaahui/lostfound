import Vue from 'vue'
import Router from 'vue-router'
import Homehead from '@/components/home/Homehead'
import login from '@/components/user/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homehead',
      component: Homehead
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
