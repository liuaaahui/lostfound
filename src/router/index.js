import Vue from 'vue'
import Router from 'vue-router'
import Homehead from '@/components/home/Homehead'
import login from '@/components/user/login'
import regist from '@/components/user/regist'
import search from '@/components/button/search'
import money from '@/components/button/money'
import pet from '@/components/button/pet'
import person from '@/components/button/person'

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
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/money',
      name: 'money',
      component: money
    },
    {
      path: '/pet',
      name: 'pet',
      component: pet
    },
    {
      path: '/person',
      name: 'person',
      component: person
    }
  ]
})
