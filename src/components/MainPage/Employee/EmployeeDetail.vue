<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('personal.Information')}}</h2>
        <p class="setset">{{ $t('personal.meschange')}}</p>
      </div>
    </div>
  </section>
  <table class="table" style="font-size: 35px;margin-left:30%;width: 80%;line-height: 1%">
    <tbody>
    <tr>
      <td>{{ $t('personal.id')}}:</td>
      <td>{{userid}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.name')}}:</td>
      <td>{{username}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.FirstName')}}:</td>
      <td><input type="text" name="名" id="first_name" v-model="first_name" class="input"></td>
    </tr>
    <tr>
      <td>{{ $t('personal.LastName')}}:</td>
      <td> <input type="text" name="姓" id="last_name" v-model="last_name" class="input"></td>
    </tr>
    <tr>
      <td>{{ $t('personal.Password')}}:</td>
      <td><input type="text" name="密码" id="password" v-model="password" class="input"></td>
    </tr>
    <tr>
      <td>{{ $t('personal.Email')}}:</td>
      <td><input type="text" name="邮箱" id="email" v-model="email" class="input"></td>
    </tr>
    <tr>
      <td>{{ $t('personal.Phone')}}:</td>
      <td><input type="text" name="联系方式" id="phone" v-model="phone" class="input"></td>
    </tr>
    <tr>
      <td>{{ $t('personal.Type')}}:</td>
      <td>{{type}}</td>
    </tr>
    </tbody>
  </table>
  <button class="btn approve" @click="modifyPersonalDetail()">{{ $t('personal.submit')}}</button>
  </body>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  inject: ['reload'],
  name: 'EmployeeDetail',
  data () {
    return {
      userid: 0,
      username: '',
      password: '',
      email: '',
      phone: '',
      type: '',
      logon_date: '',
      first_name: '',
      last_name: ''
    }
  },
  created () {
    this.username = this.$cookies.get('username')
    this.type = this.$cookies.get('type')
    this.userid = this.$cookies.get('userid')
    var that = this
    axios
      .post('/api/login/getUser?username=' + this.username)
      .then(function (response) {
        console.log(response.data.password)
        that.password = response.data.password
        that.email = response.data.email
        that.phone = response.data.phone
        that.first_name = response.data.first_name
        that.last_name = response.data.last_name
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    async modifyPersonalDetail () {
      if (this.password === '' || this.email === '' || this.phone === '' || this.first_name === '' || this.last_name === '') {
        alert('Please enter all boxes.')
      } else {
        var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (re.test(this.email)) {
          if (!(/^1[34578]\d{9}$/.test(this.phone))) {
            if (this.locale === 'en') {
              alert('Please enter a valid phone.')
            } else {
              alert('请输入有效电话')
            }
            return false
          }
          if (!(/^(\w){6,20}$/.test(this.password))) {
            if (this.locale === 'en') {
              alert('Please enter a valid password (6-20) .\nOnly English characters, "-", numbers and "_" are allowed.')
            } else {
              alert('请输入有效密码(6-20)。\n只允许使用英文字符“-”、数字和“_”')
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
          var that = this
          let data = {
            'id': that.userid,
            'password': that.password,
            'fname': that.first_name,
            'lname': that.last_name,
            'phone': that.phone,
            'email': that.email
          }
          await axios({
            method: 'post',
            url: '/api/user/modify',
            data: Qs.stringify(data)
          }).then((res) => {
            if (this.locale === 'en') {
              alert('Submit Successfully')
            } else {
              alert('修改成功。')
            }
          }).catch((error) => {
            console.log(error)
            if (this.locale === 'en') {
              alert('Error: The submission has something wrong')
            } else {
              alert('错误:修改有错误。')
            }
          })
          this.$router.push(
            {
              path: '/PersonalInformation'
            })
          window.reload()
        } else {
          if (this.locale === 'en') {
            alert('Please enter a valid email.\nFor example, XXXXXXXXXXX@XXX.com')
          } else {
            alert('请输入有效的电子邮件。\n 例如,XXXXXXXXXXX@XXX.com')
          }
        }
      }
    }
  }
}
</script>
<style scoped>
  body{color: #666;}
  ul{list-style: none;}
  a{text-decoration: none;cursor: default;}
  .module-line span{display: inline-block;*display: inline;*zoom: 1}
  .setset{height: 20px;left: 30px}
  h2{}
  input{
    background: none;
    color: #ca963b;
  }
  .table>tbody>tr>td{
    border:0px;
  }
  .approve{
    position: relative;
    margin-left: 46%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #57cb26;
  }
</style>
