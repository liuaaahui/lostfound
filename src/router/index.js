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
import adminLogin from '@/components/admin/adminLogin'
import adminHome from '@/components/admin/adminHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/allSearch',
      name: 'allSearch',
      component: allSearch,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/allMoney',
      name: 'allMoney',
      component: allMoney,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/allPet',
      name: 'allPet',
      component: allPet,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/allPerson',
      name: 'allPerson',
      component: allPerson,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/resist',
      name: 'resist',
      component: resist,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/allMessage',
      name: 'allMessage',
      component: allMessage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/relate',
      name: 'relate',
      component: relate,
      meta: {
        requireAuth: false
      }
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
      component: search,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/money',
      name: 'money',
      component: money,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/pet',
      name: 'pet',
      component: pet,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/person',
      name: 'person',
      component: person,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/report',
      name: 'report',
      component: report,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: message,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/innerContent',
      name: 'innerContent',
      component: innerContent,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/innerContent2',
      name: 'innerContent2',
      component: innerContent2,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/innerContent3',
      name: 'innerContent3',
      component: innerContent3,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/innerContent4',
      name: 'innerContent4',
      component: innerContent4,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
      // meta: {
      //   requireAuth: true
      // }
    },
    {
      path: '/adminHome',
      name: 'adminHome',
      component: adminHome
      // meta: {
      //   requireAuth: true
      // }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0}
  }
})
