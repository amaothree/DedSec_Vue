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
        <select name="selected" style="width: auto" v-model="type" @click="changeFlag()">
          <option value="employee">{{ $t('Register.employee')}}</option>
          <option value="customer" selected="selected">{{ $t('Register.customer')}}</option>
        </select>
      </label>
      <label v-if="flag">
        <span style="width: 100%">{{ $t('Register.Invitation_Code')}}</span>
        <input type="text" name="phone" autocomplete="off" :placeholder=" $t('Register.e_Invitation_Code')" class="layui-input" v-model="code">
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
      status: false,
      repeat: false,
      locale: this.locale,
      lang: this.lang,
      load: 0,
      code: '',
      flag: false
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
    changeFlag () {
      if (this.type === 'employee') {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    async register () {
      if (this.username === '' || this.password === '' || this.repassword === '' || this.email === '' || this.phone === '' || this.first_name === '' || this.last_name === '' || this.type === '') {
        if (this.locale === 'en') {
          alert('Please enter all boxes.')
        } else {
          alert('请输入所有信息')
        }
      } else {
        if (!(/^1[34578]\d{9}$/.test(this.phone))) {
          if (this.locale === 'en') {
            alert('Please enter a valid phone.')
          } else {
            alert('请输入有效电话')
          }
          return false
        }
        if (!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email))) {
          if (this.locale === 'en') {
            alert('Please enter a valid email.\nFor example, XXXXXXXXXXX@XXX.com')
          } else {
            alert('请输入有效的电子邮件。\n 例如,XXXXXXXXXXX@XXX.com')
          }
          return false
        }
        if (!(/^[a-zA-Z0-9_-]{6,20}$/.test(this.password))) {
          if (this.locale === 'en') {
            alert('Please enter a valid password (6-20) .\nOnly English characters, "-", numbers and "_" are allowed.')
          } else {
            alert('请输入有效密码(6-20)。\n只允许使用英文字符“-”、数字和“_”')
          }
          return false
        }
        if (!(/^[a-zA-Z0-9_-]{3,16}$/.test(this.username))) {
          if (this.locale === 'en') {
            alert('Please enter a valid username (3-16) .\nOnly English characters, "-", numbers and "_" are allowed.')
          } else {
            alert('请输入一个有效的用户名(3-16)。\n只允许使用英文字符“-”、数字和“_”。')
          }
          return false
        }
        if (!(/^.{1,20}$/.test(this.first_name))) {
          if (this.locale === 'en') {
            alert('First name should be between 1 and 20.')
          } else {
            alert('名字应该在1到20个字之间。')
          }
          return false
        }
        if (!(/^.{1,20}$/.test(this.last_name))) {
          if (this.locale === 'en') {
            alert('Last name should be between 1 and 20.')
          } else {
            alert('姓应该在1到20个字之间。')
          }
          return false
        }
        await axios('/api/register/uni?username=' + this.username)
          .then(response => {
            this.repeat = response.data
          })
          .catch(error => {
            console.log(error)
            if (this.locale === 'en') {
              alert('Can not get information from back end.')
            } else {
              alert('无法从后端获取信息。')
            }
          })
        if (this.repeat) {
          console.log('success')
          if (this.password === this.repassword) {
            if (this.flag === true) {
              if (this.code === '') {
                if (this.locale === 'en') {
                  alert('Please enter Invitation Code.\nThis can be got from the company.')
                } else {
                  alert('请输入邀请码。\n这可以从公司得到。')
                }
                return false
              }
              if (!(/^.{8}$/.test(this.code))) {
                if (this.locale === 'en') {
                  alert('The invitation code should be 8 characters.')
                } else {
                  alert('邀请代码应该是8个字符。')
                }
                return false
              }
              console.log('qian' + this.status)
              var s = this
              await axios
                .post('/api/passcode/check?passcode=' + this.code)
                .then(function (response) {
                  console.log(response.data)
                  s.status = response.data
                  if (!response.data) {
                    if (this.locale === 'en') {
                      alert('Do not have the invitation code in database.\nPlease check again.')
                    } else {
                      alert('数据库中没有邀请代码。\n请再检查一次。')
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error)
                  alert(error)
                })
              console.log('hou' + this.status)
              if (this.status === true) {
                console.log('try to post')
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
                await axios({
                  method: 'post',
                  url: '/api/register/add',
                  data: Qs.stringify(data)
                })
                this.$router.push(
                  {
                    path: '/Login'
                  }
                )
              }
            } else {
              var th = this
              let data = {
                'username': th.username,
                'password': th.password,
                'email': th.email,
                'fname': th.first_name,
                'lname': th.last_name,
                'phone': th.phone,
                'type': th.type
              }
              await axios({
                method: 'post',
                url: '/api/register/add',
                data: Qs.stringify(data)
              })
              this.$router.push(
                {
                  path: '/Login'
                }
              )
            }
          } else {
            if (this.locale === 'en') {
              alert('Password and Repeat password should be the same. Please enter again.')
            } else {
              alert('密码和重复密码应该是相同的。请再输入一次。')
            }
          }
        } else {
          console.log('fail' + this.repeat)
          if (this.locale === 'en') {
            alert('The username has existed. Please enter again.')
          } else {
            alert('用户名已经存在。请再输入一次。')
          }
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
