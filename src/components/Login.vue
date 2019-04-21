<template>
  <div class="logo_box">
        <span class="title">
            Welcome Hibernia-Sino
        </span>
    <div class="lang lang-but ">
      <ol class="label label-important" :key="locale?'en':'cn'" @click="changeLang()"><a href="#"><b>{{lang}}</b></a></ol>
    </div>
    <form action="submit">
      <div class="account">
        <input type="text" @blur="onBlurCheckAccount('phone')"
               :class="{'phone-input':true,error:errorMessage.phone.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['phone']"  v-model.trim="phone">
      </div>
      <div class="password">
        <input type="password" @blur="onBlurCheckPassword('code')" :class="{'code-input':true,error:errorMessage.code.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['code']" v-model.number.trim="code">
      </div>
      <div class="mb2"><a class="act-but submit" href="javascript:" @click="jumptomainpage()" style="color: #FFFFFF">{{ $t('login.LogIn')}}</a>
      </div>
    </form>
    <div class="sas">
        <span>{{ $t('login.no')}}<a href="javascript:" @click="toggleComponent" class="toggle-register-btn">{{ $t('login.Register')}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'zhihu',
      locale: 'en',
      lang: '中文',
      errorMessage: {
        phone: this.$t('login.Account'),
        code: this.$t('Register.Password'),
      }
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
    onBlurCheckPassword (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('Register.ps'))
      } else {
        this.errorMessage[name] = ''
      }
    },
    onBlurCheckAccount (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('Register.ac'))
      } else {
        this.errorMessage[name] = ''
      }
    },
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
    toggleHiddenPassword () {
      this.hidden = !this.hidden
    },
    jumptomainpage () {
      this.$router.push(
        {
          path: '/EmployeeMainPage'
        }
      )
    }
  },
  props: ['toggleComponent']
}
</script>

<style scoped>
  .logo_box{
     width: 430px;
     height: 490px;
     padding: 35px;
     color: #EEE;
     position: absolute;
     left: 40%;
     top: 15%;
     margin-left: -175px;
   }
  .title{
    text-align: center;
    height: 20px;
    font: 50px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #FFFFFF;
    line-height: 70px;
    padding:0 0 35px 0;
    margin-bottom: 10px;
  }
  .input_outer{
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .l-login{
    position: absolute;
    z-index: 1;
    left: 50px;
    top: 0;
    height: 46px;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    line-height: 46px;
  }
  label{
    color: rgb(255, 255, 255);
    display: block;
  }
  .text{
    width: 220px;
    height: 66px;
    outline: none;
    display: inline-block;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    margin-left: 0;
    border: none;
    background: none;
    line-height: 46px;
  }
  .mb2{
    margin-bottom: 20px
  }
  .mb2 a{
    text-decoration: none;
    outline: none;
  }
  .submit {
    padding: 15px;
    margin-top: 20px;
    display: block;
  }
  .lang{
    /* 设置宽度高度背景颜色 */
    height: 100px; /*高度改为自动高度*/
    text-align: right;
    z-index: 10;
    font-size: 120%;
    left: 75%;
    top: 28%;

  }
  .act-but{
    height: 50px;
    width: 50%;
    line-height: 20px;
    text-align: center;
    font-size: 30px;
    border-radius: 70px;
    background: #0096e6;
    margin-left: 85px;
  }
  .lang-but{
    height: 50px;
    text-align: center;
    font-size: 25px;
    border-radius: 70px;
    background-color: black;
    margin-left: 250px;
  }

  .sas{
    width: 480px;
    height: 18px;
    float: left;
    color: #FFFFFF;
    font-size: 26px;
    line-height: 66px;
  }
  .sas a{
    width: 280px;
    height: 18px;
    color: wheat;
    text-align: center;
    line-height: 18px;
    text-decoration: none;
  }
  .account {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .phone-input {
    height: 66px;
    outline: none;
    display: inline-block;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    border: none;
    background: none;
    line-height: 46px;
    color: white;
    margin-left: 20px;
    width: 290px;
  }
  .code {
    height: 48px;
    padding-top: 5px;
    font-size: 14px;
    border-bottom: 1px solid white;
  }
  .code-input {
    height: 66px;
    outline: none;
    display: inline-block;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    border: none;
    background: none;
    line-height: 46px;
    margin-left: 20px;
    width: 290px;
  }
  .password {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  input::-webkit-input-placeholder{
    color: burlywood;
  }
</style>
