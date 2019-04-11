<template>
  <div class="main">
    <div class="top">
      <li class="label label-important" :key="locale?'en':'cn'" @click="changeLang()"><a href="#"><b>{{lang}}</b></a></li>
    </div>
    <div class="initial">
      <img src="../assets/blue.png" alt="Background">
      <component :toggleComponent="toggleComponent" :is="typeName"></component>
    </div>
  </div>
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

<style scoped>
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .initial{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    height: 100%;
    z-index: -9999;
  }
  .top{
    /* 设置宽度高度背景颜色 */
    height: 100px; /*高度改为自动高度*/
    width:100%;
    text-align: right;
    position: fixed;
    z-index: 10;
    font-size: 120%;
    top: 30%;
    right: 40%;

  }
</style>
