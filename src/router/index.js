import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/home/Homepage'
import allSearch from '@/components/navigation/allSearch'
import allMoney from '@/components/navigation/allMoney'
import allPet from '@/components/navigation/allPet'
import allPerson from '@/components/navigation/allPerson'
import resist from '@/components/navigation/resist'
import allMessage from '@/components/navigation/allMessage'
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
import innerContent from '@/components/content/innerContent'
import innerContent2 from '@/components/content/innerContent2'
import innerContent3 from '@/components/content/innerContent3'
import innerContent4 from '@/components/content/innerContent4'

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
      path: '/allSearch',
      name: 'allSearch',
      component: allSearch
    },
    {
      path: '/allMoney',
      name: 'allMoney',
      component: allMoney
    },
    {
      path: '/allPet',
      name: 'allPet',
      component: allPet
    },
    {
      path: '/allPerson',
      name: 'allPerson',
      component: allPerson
    },
    {
      path: '/resist',
      name: 'resist',
      component: resist
    },
    {
      path: '/allMessage',
      name: 'allMessage',
      component: allMessage
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
    },
    {
      path: '/innerContent',
      name: 'innerContent',
      component: innerContent
    },
    {
      path: '/innerContent2',
      name: 'innerContent2',
      component: innerContent2
    },
    {
      path: '/innerContent3',
      name: 'innerContent3',
      component: innerContent3
    },
    {
      path: '/innerContent4',
      name: 'innerContent4',
      component: innerContent4
    }
  ]
})
