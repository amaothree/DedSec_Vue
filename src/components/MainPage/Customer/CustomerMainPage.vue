<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active"><a class="nav-link" ><router-link to="/" style="font-size: 25px">{{ $t('message.exit')}}</router-link></a></li>
          <li class="nav-item active"><a class="nav-link"><router-link to="/CustomerMainPage" style="font-size: 25px">{{ $t('message.server')}}</router-link></a></li>
          <li class="nav-item active"><a class="nav-link" href="#" style="font-size: 25px" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
          <li class="nav-item active"><a ><router-link to="/PersonalInformation" style="font-size: 25px">setting</router-link></a></li>
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
  name: 'CustomerNav',
  data () {
    return {
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
  }
}

</script>
