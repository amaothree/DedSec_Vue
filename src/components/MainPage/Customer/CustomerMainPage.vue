<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active"><a class="nav-link"><a @click="returninitial()" style="font-size: 25px">{{ $t('navigate.exit')}}</a></a></li>
          <li class="nav-item active"><a class="nav-link"><router-link to="/CustomerMainPage" style="font-size: 25px">{{ $t('navigate.Back')}}</router-link></a></li>
          <li class="nav-item active"><a class="nav-link" href="#" style="font-size: 25px" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
          <li class="nav-item active"><a ><router-link to="/PersonalInformation" style="font-size: 25px">{{ $t('navigate.Setting')}}</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <!--================End Header Menu Area =================-->

  <!--================Banner Area =================-->
  <router-view></router-view>
  </body>
</template>

<script>
export default {
  name: 'CustomerMainPage',
  data () {
    return {
      username: 'Default',
      userid: 0,
      locale: 'en',
      lang: '中文'
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
    returninitial () {
      this.$cookies.remove('userid')
      this.$cookies.remove('username')
      this.$cookies.remove('type')
      this.$cookies.remove('password')
      this.$router.push(
        {
          path: '/Login'
        }
      )
      window.location.reload()
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
  created () {
    this.username = this.$route.params.username
    this.userid = this.$route.params.userid
    console.log(this.username + this.userid)
  }
}

</script>
