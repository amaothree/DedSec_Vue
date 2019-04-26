import Vue from 'vue'
import Router from 'vue-router'
import CustomerMainPage from '@/components/MainPage/Customer/CustomerMainPage'
import PersonalDetail from '@/components/MainPage/Customer/PersonalDetail'
import ProcessingProgress from '@/components/MainPage/Customer/ProcessingProgress'
import ProgressBar from '@/components/MainPage/Customer/ProgressBar'
import Claim from '@/components/MainPage/Customer/Claim'
import EmployeeMainPage from '@/components/MainPage/Employee/EmployeeMainPage'
import Solution from '@/components/MainPage/Employee/Solution'
import EmployeeDetail from '@/components/MainPage/Employee/EmployeeDetail'
import Decision from '@/components/MainPage/Employee/Decision'
import Introduce from '@/components/introduce'
import PersonalInformation from '@/components/MainPage/Customer/PersonalInformation'
import EmployeeInformation from '@/components/MainPage/Employee/EmployeeInformation'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Introduce1 from '@/components/Introduce1'
import Introduce2 from '@/components/Introduce2'
import lead from '@/components/MainPage/Customer/lead'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/Introduce1',
      name: 'introduce1',
      component: Introduce1
    },
    {
      path: '/Introduce2',
      name: 'introduce2',
      component: Introduce2
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/CustomerMainPage',
      name: 'CustomerMainPage',
      component: CustomerMainPage,
      children: [
        {
          path: '/',
          name: 'lead',
          component: lead
        },
        {
          path: '/Claim',
          name: 'Claim',
          component: Claim
        },
        {
          path: '/ProgressBar',
          name: 'ProgressBar',
          component: ProgressBar
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
