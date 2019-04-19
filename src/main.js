// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'lib-flexible'
import 'lib-flexible/flexible'
import i18n from './i18n'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n: i18n,
  components: { App },
  template: '<App/>'
})
