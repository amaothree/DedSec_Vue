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
          <li class="nav-item "><a class="nav-link" ><router-link to="/" style="font-size: 25px">{{ $t('Register.exit')}}</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('Register.register')}}</h2>
        <p>{{ $t('Register.click')}} <router-link to="/Login">{{ $t('Register.here')}}</router-link> {{ $t('Register.back')}}</p>
      </div>
    </div>
  </section>
  <div class="Content-Main">
    <form action="" class="form-report" style="margin-left: 20%;">
      <label>
        <span style="width: 100%">{{ $t('Register.username')}}</span>
        <input type="text" name="userName" autocomplete="off" :placeholder="$t('Register.e_username')" class="layui-input" v-model="username">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.password')}}</span>
        <input id="login-password" type="password" name="password"  autocomplete="off" :placeholder="$t('Register.e_password')" class="layui-input" v-model="password">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.repassword')}}</span>
        <input id="repeat-password" type="password" name="password" autocomplete="off" :placeholder="$t('Register.e_repassword')" class="repeat-input" v-model="repassword">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.Email')}}</span>
        <input type="text" name="email" autocomplete="off" :placeholder="$t('Register.e_email')" class="layui-input" v-model="email">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.Fname')}}</span>
        <input type="text" name="fname" autocomplete="off" :placeholder="$t('Register.e_Fname')" class="layui-input" v-model="first_name">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.Lname')}}</span>
        <input type="text" name="Iname" autocomplete="off" :placeholder="$t('Register.e_Lname')" class="layui-input" v-model="last_name">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.Phone')}}</span>
        <input type="text" name="phone" autocomplete="off" :placeholder="$t('Register.e_Phone')" class="layui-input" v-model="phone">
      </label>
      <label>
        <span style="width: 100%">{{ $t('Register.Type')}}</span>
        <select name="selected" style="width: auto" v-model="type">
          <option value="employee">{{ $t('Register.employee')}}</option>
          <option value="customer" selected="selected">{{ $t('Register.customer')}}</option>
        </select>
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <a class="more_btn" style="margin-left: 20%" @click="register()"><a style="font-size: .5rem">{{ $t('Register.register')}}</a></a>
      </label>
    </form>
  </div>
  </body>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'Claim',
  data () {
    return {
      username: '',
      password: '',
      repassword: '',
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      type: '',
      status: 'true',
      repeat: false,
      locale: this.locale,
      lang: this.lang,
      load: 0
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
    changeLang () {
      // 增加传入语言
      let con = confirm('是否切换语言?');
      if (con === true) {
        if (this.locale === 'cn') {
          this.lang = '中文'
          this.locale = 'en'
        } else {
          this.lang = 'ENG'
          this.locale = 'cn'
        }
        this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
        window.location.reload() // 进行刷新改变cookie里的值
      }
    },
    async register () {
      if (this.username === '' || this.password === '' || this.repassword === '' || this.email === '' || this.phone === '' || this.first_name === '' || this.last_name === '') {
        alert('Please enter all boxes.')
      } else {
        await axios('/api/register/uni?username=' + this.username)
          .then(response => {
            this.repeat = response.data
          })
          .catch(error => {
            console.log(error)
            alert('Can not get information from back end.')
          })
        if (this.repeat) {
          console.log('success')
          if (this.password === this.repassword) {
            var that = this
            let data = {
              'username': that.username,
              'password': that.password,
              'email': that.email,
              'fname': that.first_name,
              'lname': that.last_name,
              'phone': that.phone,
              'type': that.type
            }

            axios({
              method: 'post',
              url: '/api/register/add',
              data: Qs.stringify(data)
            })
            // axios({
            //   method: 'post',
            //   url: '/api/register/add',
            //   data: {
            //     username: that.username,
            //     password: that.password,
            //     email: that.email,
            //     fname: that.first_name,
            //     lname: that.last_name,
            //     phone: that.phone,
            //     type: that.type
            //   }
            // }).then((res) => {
            //   console.log(res.data)
            // })
            // var that = this
            // await axios
            //   .post('/api/register/add?username=' + this.username + '&password' + this.password + '&email' + this.email + '&fname' + this.first_name + '&lname' + this.last_name + '&type' + this.type)
            //   .then(function (response) {
            //     console.log(response)
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //     that.status = 'false'
            //   })
            // axios.post('/api/register/add', {
            //   params: {
            //     username: this.username,
            //     password: this.password,
            //     email: this.email,
            //     fname: this.first_name,
            //     lname: this.last_name,
            //     phone: this.phone,
            //     type: this.type
            //   }
            // }).then(function (response) {
            //   console.log(response)
            //   alert('Submit Successfully')
            // }).catch(function (error) {
            //   console.log(error)
            //   alert('Error : There is something wrong for this submission.')
            //   this.status = 'false'
            // })
            if (this.status === 'true') {
              this.$router.push(
                {
                  path: '/Login'
                }
              )
            }
          } else {
            alert('Password and Repeat password should be the same. Please enter again.')
          }
        } else {
          console.log('fail' + this.repeat)
          alert('The username has existed. Please enter again.')
        }
        this.load = 0
      }
    }
  }
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
    padding: 20px 30px 20px 30px;
  }
  .Content-Main label>span{
    float: left;
    padding-right: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: left;
    color: #333;
  }

  .select1{
    width: 71%;
    height: 35px;
    margin-bottom: 16px;
    margin-right: 6px;
    margin-top: 2px;
    line-height: 15px;
    padding: 5px 0px 5px 5px;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-size: 20px;
  }
  .select2{
    width: 13%;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-size: 16px;
  }
  .Content-Main textarea{
    width: 70%;
    height: 200px;
    padding: 5px 0px 0px 5px;
    font-size: 30px;
  }
  .button{
    padding: 10px 25px 10px 25px;
    margin-left: 111px;
    border-radius: 4px;
    border:1px solid #CCC;
    background: #FFF;
    color: #333;
  }
  .button:hover{
    color: #333;
    background-color: #EBEBEB;
    border-color: #ADADAD;
    font-size: 16px;
  }
  form{
    padding: 20px 30px 20px 30px;;
  }
  button{
    font-size: 16px;
  }
  .form-report {
    margin-right: 20%;
    margin-left: 20%;
  }
  .more_btn {
    padding: 0 .5rem;
  }
</style>
