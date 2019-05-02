<template>
  <body>
  <section class="banner_area">
    <div class="main_menu_area">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style="font-size: 1rem">Hibernia-Sino</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item navbar-form navbar-right"><a class="nav-link" href="#" style="font-size: 0.6rem" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('introduce.welcome')}}</h2>
      </div>
    </div>
  </section>
  <!--================End Banner Area =================-->
  <!--================End Banner Area =================-->
  <section class="service_feature">
    <div class="container">
      <div class="row feature_inner">
        <div class="col-lg-4 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-6.png" alt="">
            </div>
            <h4>{{ $t('introduce.start')}}</h4>
            <p>{{ $t('introduce.start_message')}}</p>
            <a class="more_btn" href="#"><router-link to="/Login" style="font-size: 40px">{{ $t('introduce.start')}}</router-link></a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-2.png" alt="">
            </div>
            <h4>{{ $t('introduce.about')}}</h4>
            <p>{{ $t('introduce.about_message')}}</p>
            <a class="more_btn" href="#"><router-link to="/Introduce1" style="font-size: 40px">{{ $t('introduce.read')}}</router-link></a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-3.png" alt="">
            </div>
            <h4>{{ $t('introduce.policy')}}</h4>
            <p>{{ $t('introduce.policy_message')}}</p>
            <a class="more_btn" href="#"><router-link to="/Introduce2" style="font-size:40px">{{ $t('introduce.read')}}</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'Introduce',
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
      this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 1)
      window.location.reload() // 进行刷新改变cookie里的值
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
    this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 1)
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      console.log('locale', val)
    }
  }
}

</script>
<style>
  .nav-link{
    float: left;
  }
</style>
