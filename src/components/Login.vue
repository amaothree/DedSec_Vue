<template>
  <body>
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" ><router-link to="/" style="font-size: 25px">{{ $t('login.exit')}}</router-link></a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
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
        <span>{{ $t('login.account')}}</span>
        <input type="text" name="userName" autocomplete="off" :placeholder=" $t('login.username')" class="layui-input" v-model="username">
      </label>
      <label>
        <span>{{ $t('login.pass')}}</span>
        <input id="login-password" type="password" name="password"  autocomplete="off" :placeholder=" $t('login.password')" class="layui-input" v-model="password">
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <a class="more_btn" style="margin-left: 20%"><a style="font-size: 20px" @click="login()">{{ $t('login.Login')}}</a></a>
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
      password: '',
      locale: 'en',
      lang: '中文',
      errorMessage: {
        phone: this.$t('login.Account'),
        code: this.$t('Register.Password')
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
    login () {
      axios.get('/api/login/getUser?username=' + this.username).then((res) => {
        this.userid = res.data.id
        this.username = res.data.username
        this.type = res.data.type
        this.password = res.data.password
        if (this.password === res.data.password) {
          this.$cookies.set('userid', this.userid, 120000)
          this.$cookies.set('username', this.username, 120000)
          this.$cookies.set('password', this.password, 120000)
          this.$cookies.set('type', this.type, 120000)
          if (this.type === 'customer') {
            alert('Dear ' + this.username + ', you have logged in.')
            this.$router.push(
              {
                path: '/CustomerMainPage'
              }
            )
          } else if (this.type === 'employee') {
            alert('Dear ' + this.username + ', you have logged in.')
            this.$router.push(
              {
                path: '/EmployeeMainPage'
              }
            )
          } else {
            alert('Sorry, there is something wrong.')
          }
        } else {
          alert('Failed.')
        }
      })
    }
  },
  created: function () {
    this.$cookies.remove('userid')
    this.$cookies.remove('username')
    this.$cookies.remove('type')
    this.$cookies.remove('password')
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
    padding: 0px 0px 10px 40px;
    color: #333;
    /*font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    /*border-bottom: 1px solid #DADADA;*/
    /*color: #888;*/
    padding: 20px 30px 20px 30px;
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
    width: 20%;
    padding-right: 10px;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: right;
    color: #333;
  }
  button{
    font-size: 16px;
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
</style>
