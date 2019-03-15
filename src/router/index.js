import Vue from 'vue'
import Router from 'vue-router'
import CustomerNav from '@/components/MainPage/Customer/CustomerMainPage'
import PersonalDetail from '@/components/MainPage/Customer/PersonalDetail'
import FeedBack from '@/components/MainPage/Customer/FeedBack'
import Claim from '@/components/MainPage/Customer/Claim'
import InitialPage from '@/components/InitialPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InitialPage',
      component: InitialPage
    },
    {
      path: '/CustomerMainPage',
      name: 'CustomerMainPage',
      component: CustomerNav,
      children: [
        {
          path: '/',
          name: 'Claim',
          component: Claim
        },
        {
          path: '/PersonalDetail',
          name: 'PrsonalDetail',
          component: PersonalDetail
        },
        {
          path: '/FeedBack',
          name: 'FeedBack',
          component: FeedBack
        },
        {
          path: '/Claim',
          name: 'Claim',
          component: Claim
        }
      ]
    }
  ]
})
