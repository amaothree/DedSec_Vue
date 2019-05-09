<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: .8rem">Hibernia-Sino</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" ><a @click="returninitial()" style="font-size: .5rem">{{ $t('navigate.exit')}}</a></a></li>
          <li class="nav-item"><a class="nav-link"><a @click="returnback()" style="font-size: .5rem">{{ $t('navigate.Back')}}</a></a></li>
          <li class="nav-item"><a class="nav-link" :key="locale?'en':'cn'" @click="changeLang()"><a  style="font-size: .5rem">{{lang}}</a></a></li>
          <li class="nav-item"><a a class="nav-link"><router-link to="/EmployeeInformation" style="font-size: .5rem">{{ $t('navigate.Setting')}}</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <!--================End Header Menu Area =================-->

  <!--================Banner Area =================-->

  <!--================End Banner Area =================-->
  <router-view></router-view>
  </body>
</template>

<script>
export default {
  name: 'CustomerNav',
  data () {
    return {
      locale: this.locale,
      lang: this.lang
    }
  },
  mounted () {
    if (this.$cookies.get('lng') === '0') {
      this.locale = 'cn'
      this.lang = 'ENG'
    } else {
      this.locale = 'en'
      this.lang = '中文'
    }
    this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
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
      this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
      window.location.reload() // 进行刷新改变cookie里的值
    },
    returninitial () {
      this.$cookies.remove('userid')
      this.$cookies.remove('username')
      this.$cookies.remove('type')
      this.$cookies.remove('userid')
      this.$cookies.remove('username')
      this.$cookies.remove('type')
      this.$cookies.remove('lugtype')
      this.$cookies.remove('subject')
      this.$cookies.remove('message')
      this.$cookies.remove('status')
      this.$cookies.remove('id')
      this.$cookies.remove('reply')
      this.$cookies.remove('city')
      this.$cookies.remove('country')
      this.$cookies.remove('district')
      this.$cookies.remove('postcode')
      this.$cookies.remove('recipient')
      this.$cookies.remove('phone')
      this.$cookies.remove('address')
      this.$router.push(
        {
          path: '/Login'
        }
      )
      window.location.reload()
    },
    returnback () {
      this.$cookies.remove('lugtype')
      this.$cookies.remove('subject')
      this.$cookies.remove('message')
      this.$cookies.remove('status')
      this.$cookies.remove('id')
      this.$cookies.remove('reply')
      this.$cookies.remove('city')
      this.$cookies.remove('country')
      this.$cookies.remove('district')
      this.$cookies.remove('postcode')
      this.$cookies.remove('recipient')
      this.$cookies.remove('phone')
      this.$cookies.remove('address')
      this.$router.push(
        {
          path: '/EmployeeMainPage'
        }
      )
      window.location.reload()
    }
  }
}
</script>
