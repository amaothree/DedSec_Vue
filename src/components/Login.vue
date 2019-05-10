<template>
  <body>
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
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 0.5rem" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
          <li class="nav-item"><a class="nav-link" ><router-link to="/" style="font-size: .5rem">{{ $t('login.exit')}}</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('login.Login')}}</h2>
        <p>{{ $t('login.if')}} <router-link to="Register">{{ $t('login.here')}}</router-link>{{ $t('login.register')}}</p>
      </div>
    </div>
  </section>
  <div class="Content-Main">
    <form action="submit" class="form" style="margin-left: 30%">
      <label>
        <span style="width: 100%">{{ $t('login.account')}}</span>
        <input type="text" name="userName" autocomplete="off" :placeholder=" $t('login.username')" class="layui-input" v-model="username">
      </label>
      <label>
        <span style="width: 100%">{{ $t('login.pass')}}</span>
        <input id="login-password" type="password" name="password"  autocomplete="off" :placeholder=" $t('login.password')" class="layui-input" v-model="password">
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <a class="more_btn" style="margin-left: 20%"><a style="font-size: .5rem" @click="login()">{{ $t('login.Login')}}</a></a>
      </label>
    </form>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      userid: 0,
      type: '',
      username: '',
      locale: this.locale,
      lang: this.lang,
      password: '',
      errorMessage: {
        phone: this.$t('login.Account'),
        code: this.$t('Register.Password')
      }
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      console.log('locale', val)
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
    toggleHiddenPassword () {
      this.hidden = !this.hidden
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
      this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
      window.location.reload() // 进行刷新改变cookie里的值
    },
    async login () {
      var that = this
      await axios
        .post('/api/login/getUser?username=' + this.username)
        .then(function (response) {
          that.userid = response.data.id
          that.username = response.data.username
          that.type = response.data.type
          if (that.password === response.data.password) {
            that.$cookies.set('userid', that.userid, 120000)
            that.$cookies.set('username', that.username, 120000)
            that.$cookies.set('type', that.type, 120000)
            if (that.type === 'customer') {
              if (that.locale === 'en') {
                alert('Dear ' + that.username + ', you have logged in.')
              } else {
                alert('亲爱的 ' + that.username + ', 您已经登陆')
              }
              that.$router.push(
                {
                  path: '/CustomerMainPage'
                }
              )
            } else if (that.type === 'employee') {
              if (that.locale === 'en') {
                alert('Dear ' + that.username + ', you have logged in.')
              } else {
                alert('亲爱的 ' + that.username + ', 您已经登陆')
              }
              that.$router.push(
                {
                  path: '/EmployeeMainPage'
                }
              )
            } else {
              if (that.locale === 'en') {
                alert('Sorry, there is something wrong.')
              } else {
                alert('账号或密码错误')
              }
            }
          } else {
            if (that.locale === 'en') {
              alert('Sorry, there is something wrong.')
            } else {
              alert('账号或密码错误')
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created: function () {
    this.$cookies.remove('userid')
    this.$cookies.remove('username')
    this.$cookies.remove('type')
  },
  props: ['toggleComponent']
}
</script>
<style scoped>
  .Content-Main{
    position: relative;
    font: 20px "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-shadow: 1px 1px 1px #FFF;
    border-radius: 5px;
    color: #888;
    background: rgba(255,255,255,0.4);
    height: 100%;
    width:100%;
  }
  .Content-Main h1{
    display: block;
    color: #333;
    /*font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    /*border-bottom: 1px solid #DADADA;*/
    /*color: #888;*/
  }
  .Content-Main h1>span{
    display: block;
    font-size: 16px;
  }
  .Content-Main label{
    display: block;
    font-size: 30px;
    /*padding: 20px 30px 20px 30px;*/
  }
  .Content-Main label>span {
    float: left;
    padding-right: 10px;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: left;
    color: #333;
  }
  button{
    font-size: 16px;
  }
  .form {
    margin-right: 30%;

  }
  .submit {
    padding: 15px;
    margin-top: 20px;
    display: block;
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
  .password {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .more_btn {
    padding: 0 .5rem;
  }
</style>
