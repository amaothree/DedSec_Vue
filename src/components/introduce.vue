<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
            </ul>
      </div>
    </nav>
  </header>
  <!--================End Header Menu Area =================-->

  <!--================Banner Area =================-->
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>welcome to hibernia-sino</h2>
      </div>
    </div>
  </section>
  <!--================End Banner Area =================-->
  <a class="more_btn" style="margin-left: 43%;margin-top: 5%"><router-link to="/Login" style="font-size: 40px">click to start</router-link></a>
  <!--================End Banner Area =================-->
  <section class="service_feature">
    <div class="container">
      <div class="row feature_inner">
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-2.png" alt="">
            </div>
            <h4>About US</h4>
            <p>我们是一家保险理赔公司，维护您的财产损失. </p>
            <a class="more_btn" href="#"><router-link to="/Introduce1" style="font-size: 40px">click</router-link></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-3.png" alt="">
            </div>
            <h4>安全原则</h4>
            <p>我们严格遵守公司安全原则，保护客户切身利益 </p>
            <a class="more_btn" href="#"><router-link to="/Introduce2" style="font-size: 40px">click</router-link></a>
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
