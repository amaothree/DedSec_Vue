<template>
  <div class="logo_box">
        <span class="zhihu-name">
            Welcome Hibernia-Sino
        </span>
    <!--<div class="tip">A tip for the webset</div>-->
    <form action="submit">
      <div class="input_outer">
        <div class="u_user">
        <input type="text" class="text" @blur="onBlurCheckAccount('phone')"
               :class="{'phone-input':true,error:errorMessage.phone.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['phone']"  v-model.trim="phone">
        </div>
      </div>
      <div class="input_outer">
        <input type="password" v-if="hidden" class="text" @blur="onBlurCheckPassword('password')"
               :class="{'phone-input':true,error:errorMessage.password.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['password']"  v-model.trim="password">
        <input type="text" v-else @blur="onBlurCheckPassword('password')"
               :class="{'phone-input':true,error:errorMessage.password.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['password']" v-model.trim="password">
      </div>
      <a href="javascript:" class="login-btn" @click="jumptomainpage()">{{ $t('login.LogIn')}}</a>
    </form>
    <div class="bottom">
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
      phone: '',
      // optionArray: ['中国 +86', '美国 +1', '日本 +81'],
      // selected: '中国 +86',
      password: '',
      hidden: true,
      errorMessage: {
        phone: this.$t('login.Account'),
        password: this.$t('login.Password')
      }
    }
  },
  methods: {
  /*! jQuery v1.7.2 jquery.com | jquery.org/license */
    onBlurCheckPassword (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('login.ps'))
      } else {
        this.errorMessage[name] = ''
      }
    },
    onBlurCheckAccount (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('login.ac'))
      } else {
        this.errorMessage[name] = ''
      }
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
  .text {
    width: 220px;
    height: 46px;
    outline: none;
    display: inline-block;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    margin-left: 50px;
    border: none;
    background: none;
    line-height: 46px;
  }
  input {
    box-sizing: border-box;
    border: 0;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:visited,
  a:link,
  a:active {
    color: black;
  }
  .input_outer{
    height: 46px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .logo_box{
    width: 432px;
    height: 490px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 50%;
    top:100px;
    margin-left: -175px;
  }
  .u_user{
    width: 25px;
    height: 25px;
    background-image: url(/src/assets/login_ico.png);
    background-position:  -125px 0;
    position: absolute;
    margin: 12px 13px;
  }
  .us_uer{
    width: 25px;
    height: 25px;
    background-image: url(/src/assets/login_ico.png);
    background-position: -125px -34px;
    position: absolute;
    margin: 12px 13px;
  }
  .zhihu-name {
    text-align: center;
    height: 60px;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #FFFFFF;
    line-height: 60px;
    padding:0 0 35px 0;
    font-size: 60px;
  }

  form {
    padding: 0 40px 36px;
    margin-top: 60px;
  }
  a.login-btn {
    background-color: #0084ff;
    color: #ffffff;
    margin-top: 14px;
    height: 36px;
    line-height: 36px;
    width: 100%;
    display: inline-block;
    text-align: center;
  }

  .register-org span {
    color: #8590a6;
  }
  a.toggle-register-btn {
    color: #175199;
  }
  .bottom {
    text-align: center;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #ebebeb;
    font-size: 16px;
  }
</style>
