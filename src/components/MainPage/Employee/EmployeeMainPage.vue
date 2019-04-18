<template>
  <body>
  <div class="top">
    <ul>
      <li><a href="../Login"><b>{{ $t('message.exit') }}</b></a></li>
      <li><a href="#"><b>{{ $t('message.server')}}</b></a></li>
      <li class="label label-important" :key="locale?'en':'cn'" @click="changeLang()"><a href="#"><b>{{lang}}</b></a></li>
    </ul>
  </div>
  <div class="nav">
    <div class="nav-top">
      <div id="mini" style="border-bottom:1px solid rgba(255,255,255,.1)"><img src="../../../assets/mini.png" alt="mini"></div>
    </div>
    <ul>
      <li class="nav-item">
        <a href="javascript:"><i class="my-icon nav-icon icon_3"></i><span>{{ $t('navigate.Renew')}}</span><i class="my-icon nav-more"></i></a>
        <ul>
          <li><a href="javascript:"><span>{{ $t('navigate.Policy1')}}</span></a></li>
          <li><a href="javascript:"><span>{{ $t('navigate.Policy2')}}</span></a></li>
          <li><a href="javascript:"><span>分类管理</span></a></li>
          <li><a href="javascript:"><span>系统日志</span></a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="javascript:"><i class="my-icon nav-icon icon_2"></i><span>{{ $t('navigate.Communication')}}</span><i class="my-icon nav-more"></i></a>
        <ul>
          <li><a href="javascript:"><router-link to="/Solution"><span>{{ $t('navigate.DealWithClaims')}}</span></router-link></a></li>
          <li><a href="javascript:"><span>站内公告</span></a></li>
          <li><a href="javascript:"><span>登录日志</span></a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="javascript:"><i class="my-icon nav-icon icon_1"></i><span>{{ $t('navigate.Setting')}}</span><i class="my-icon nav-more"></i></a>
        <ul>
          <li><a href="javascript:"><router-link to="/EmployeeInformation"><span>订单列表</span></router-link></a></li>
          <li><a href="javascript:"><span>打个酱油</span></a></li>
          <li><a href="javascript:"><span>也打酱油</span></a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="main">
    <!--<testComponent></testComponent>-->
    <div class="router"><router-view></router-view></div>
  </div>
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
$(function () {
  // nav收缩展开
  $('.nav-item>a').on('click', function () {
    if (!$('.nav').hasClass('nav-mini')) {
      if ($(this).next().css('display') === 'none') {
        // 展开未展开
        $('.nav-item').children('ul').slideUp(300);
        $(this).next('ul').slideDown(300);
        $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
      } else {
        // 收缩已展开
        $(this).next('ul').slideUp(300);
        $('.nav-item.nav-show').removeClass('nav-show');
      }
    }
  });
  // nav-mini切换
  $('#mini').on('click', function () {
    if (!$('.nav').hasClass('nav-mini')) {
      $('.nav-item.nav-show').removeClass('nav-show');
      $('.nav-item').children('ul').removeAttr('style');
      $('.nav').addClass('nav-mini');
    } else {
      $('.nav').removeClass('nav-mini');
    }
  });
});
</script>
<style scoped>
  .main{
    top:0;
    left:0;
    position: absolute;
    z-index: -1;
    /*background: #F2F2F2;*/
    height: 75%;
    width:70%;
    /*overflow: hidden;*/
    /*background: url("../../../assets/background.png") no-repeat;*/
    /*background-size:100% 100%;*/
    /*overflow: hidden;*/
    /*background-size:cover;*/
    margin: 10% 4% 8% 24%;
    z-index: 10;
  }
  body,html{height: 100%;background: #E2E2E2}
  body,ul{margin:0;padding:0}
  body{font:20px "微软雅黑","宋体","Arial Narrow",HELVETICA;-webkit-text-size-adjust:100%;}
  li{list-style:none}
  a{text-decoration:none;}
  .nav{width: 300px;height: 100%;background: #263238;transition: all .3s;text-align: left}
  .nav a{display: block;overflow: hidden;padding-left: 20px;line-height: 46px;max-height: 46px;color: #ABB1B7;transition: all .3s;}
  .nav a span{margin-left: 30px;}
  .nav-item{position: relative;}
  .nav-item.nav-show{border-bottom: none;}
  .nav-item ul{display: none;background: rgba(0,0,0,.1);}
  .nav-item.nav-show ul{display: block;}
  .nav-item>a:before{content: "";position: absolute;left: 0px;width: 2px;height: 46px;background: #34A0CE;opacity:0;transition: all .3s;}
  .nav .nav-icon{font-size: 20px;position: absolute;margin-left:-1px;}
  /* 此处修改导航图标 可自定义iconfont 替换*/
  .icon_1::after{content: "\e62b";}
  .icon_2::after{content: "\e669";}
  .icon_3::after{content: "\e61d";}
  /*---------------------*/
  .nav-more{float:right;margin-right: 20px;font-size: 12px;transition: transform .3s;}
  /* 此处为导航右侧箭头 如果自定义iconfont 也需要替换*/
  .nav-more::after{content: "\e621";}
  /*---------------------*/
  .nav-show .nav-more{transform:rotate(90deg);}
  .nav-show,.nav-item>a:hover{color: #FFF;background:rgba(0,0,0,.1);}
  .nav-show>a:before,.nav-item>a:hover:before{opacity:1;}
  .nav-item li:hover a{color: #FFF;background: rgba(0, 0, 0,.1);}

  /* nav-mini */
  .nav-mini.nav{width: 60px;}
  .nav-mini.nav .nav-icon{/* margin-left:-2px; */}
  .nav-mini.nav .nav-item>a span{display: none;}
  .nav-mini.nav .nav-more{margin-right: -20px;}
  .nav-mini.nav .nav-item ul{position: absolute;top:0px;left:60px;width: 180px;z-index: 99;background:#3C474C;overflow: hidden;}
  .nav-mini.nav .nav-item:hover{background:rgba(255,255,255,.1);}
  .nav-mini.nav .nav-item:hover .nav-item a{color:#FFF;}
  .nav-mini.nav .nav-item:hover a:before{opacity:1;}
  .nav-mini.nav .nav-item:hover ul{display: block;}

  @font-face {font-family: "my-icon";
    src: url('/src/assets/iconfont.eot?t=1507649649871'); /* IE9*/
    src: url('/src/assets/iconfont.eot?t=1507649649871#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('/src/assets/iconfont.ttf?t=1507649649871') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('/src/assets/iconfont.svg?t=1507649649871#my-icon') format('svg'); /* iOS 4.1- */
  }

  .my-icon {
    font-family:"my-icon" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
