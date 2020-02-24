import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/home/Homepage'
import resist from '@/components/navigation/resist'
import relate from '@/components/navigation/relate'
import login from '@/components/user/login'
import regist from '@/components/user/regist'
import search from '@/components/button/search'
import money from '@/components/button/money'
import pet from '@/components/button/pet'
import person from '@/components/button/person'
import member from '@/components/buttomFunction/member'
import report from '@/components/buttomFunction/report'
import message from '@/components/buttomFunction/message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/resist',
      name: 'resist',
      component: resist
    },
    {
      path: '/relate',
      name: 'relate',
      component: relate
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
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
