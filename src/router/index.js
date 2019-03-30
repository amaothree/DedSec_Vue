import Vue from 'vue'
import Router from 'vue-router'
import CustomerNav from '@/components/MainPage/Customer/CustomerMainPage'
import PersonalDetail from '@/components/MainPage/Customer/PersonalDetail'
import ProcessingProgress from '@/components/MainPage/Customer/ProcessingProgress'
import Claim from '@/components/MainPage/Customer/Claim'
import InitialPage from '@/components/InitialPage'
import EmployeeMainPage from '@/components/MainPage/Employee/EmployeeMainPage'
import Solution from '@/components/MainPage/Employee/Solution'
import EmployeeDetail from '@/components/MainPage/Employee/EmployeeDetail'
import Decision from '@/components/MainPage/Employee/Decision'

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
          path: '/ProcessingProgress',
          name: 'ProcessingProgress',
          component: ProcessingProgress
        },
        {
          path: '/Claim',
          name: 'Claim',
          component: Claim
        }
      ]
    },
    {
      path: '/EmployeeMainPage',
      name: 'EmployeeMainPage',
      component: EmployeeMainPage,
      children: [
        {
          path: '/',
          name: 'Solution',
          component: Solution
        },
        {
          path: '/PersonalDetail',
          name: 'PrsonalDetail',
          component: PersonalDetail
        },
        {
          path: '/Solution',
          name: 'Solution',
          component: Solution
        },
        {
          path: '/Decision',
          name: 'Decision',
          component: Decision
        },
        {
          path: '/EmployeeDetail',
          name: 'EmployeeDetail',
          component: EmployeeDetail
        }
      ]
    }
  ]
})
