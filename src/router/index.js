import Vue from 'vue'
import Router from 'vue-router'
import CustomerNav from '@/components/MainPage/Customer/CustomerMainPage'
import Communication from '@/components/MainPage/Customer/Communication'
import PersonalDetail from '@/components/MainPage/Customer/PersonalDetail'
import ProcessingProgress from '@/components/MainPage/Customer/ProcessingProgress'
import Claim from '@/components/MainPage/Customer/Claim'
import InitialPage from '@/components/InitialPage'
import EmployeeMainPage from '@/components/MainPage/Employee/EmployeeMainPage'
import Solution from '@/components/MainPage/Employee/Solution'
import EmployeeDetail from '@/components/MainPage/Employee/EmployeeDetail'
import Decision from '@/components/MainPage/Employee/Decision'
import PersonalInformation from '@/components/MainPage/Customer/PersonalInformation'
import EmployeeInformation from '@/components/MainPage/Employee/EmployeeInformation'
import ClaimProgessDetail from '@/components/MainPage/Customer/ClaimProgessDetail'
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
          name: 'PersonalDetail',
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
        },
        {
          path: '/PersonalInformation',
          name: 'PersonalInformation',
          component: PersonalInformation
        },
        {
          path: '/Communication',
          name: 'Communication',
          component: Communication
        },
        {
          path: '/ClaimProgessDetail',
          name: 'ClaimProgessDetail',
          component: ClaimProgessDetail
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
          name: 'PersonalDetail',
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
        },
        {
          path: '/EmployeeInformation',
          name: 'EmployeeInformation',
          component: EmployeeInformation
        }
      ]
    }
  ]
})
