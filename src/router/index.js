import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CustomerNav from '@/components/MainPage/Customer/CustomerNav'
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
      path: '/CustomerNav',
      name: 'CustomerNav',
      component: CustomerNav
    }
  ]
})
