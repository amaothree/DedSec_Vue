<template>
  <body>
  <div class="main">
    <div class="top">
      <li class="label label-important" :key="locale?'en':'cn'" @click="changeLang()"><a href="#"><b>{{lang}}</b></a></li>
    </div>
     <router-view></router-view>
  </div>
  </body>
</template>

<script>
import Login from './Login'
import Register from './Register'
export default {
  name: 'InitialPage',
  data () {
    return {
      typeName: 'Login',
      locale: 'en',
      lang: '中文'
    }
  },
  mounted () {
    if (this.$cookie.get('lng') === '0') {
      this.locale = 'cn'
      this.lang = 'ENG'
    } else {
      this.locale = 'en'
      this.lang = '中文'
    }
    this.$cookie.set('lng', this.locale === 'cn' ? '0' : '1', 1)
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      console.log('locale', val)
    }
  },
  methods: {
    changeLang () {
      // 增加传入语言
      if (this.locale === 'cn') {
        this.lang = '中文'
        this.locale = 'en'
      } else {
        this.lang = 'ENG'
        this.locale = 'cn'
      }
      this.$cookie.set('lng', this.locale === 'cn' ? '0' : '1', 1)
      window.location.reload() // 进行刷新改变cookie里的值
    },
    toggleComponent: function () {
      this.typeName = this.typeName === 'Login' ? 'Register' : 'Login'
    }
  },
  components: {
    Login,
    Register
  }
}
</script>
