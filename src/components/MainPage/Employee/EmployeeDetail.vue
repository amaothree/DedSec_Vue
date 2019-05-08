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
      username: 'Default',
      password: 'Default',
      email: 'Default',
      phone: 'Default',
      type: 'Default',
      logon_date: 'Default',
      first_name: 'Default',
      last_name: 'Default'
    }
  },
  created () {
    this.email = this.$route.params.email
    this.phone = this.$route.params.phone
    this.last_name = this.$route.params.last_name
    this.first_name = this.$route.params.first_name
    this.password = this.$route.params.password
    this.username = this.$cookies.get('username')
    this.type = this.$cookies.get('type')
    this.userid = this.$cookies.get('userid')
  },
  methods: {
    async modifyPersonalDetail () {
      if (this.password === '' || this.email === '' || this.phone === '' || this.first_name === '' || this.last_name === '') {
        alert('Please enter all boxes.')
      } else {
        var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (re.test(this.email)) {
          if (!(/^1[34578]\d{9}$/.test(this.phone))) {
            alert('Please enter a valid phone.')
            return false
          }
          if (!(/^(\w){6,20}$/.test(this.password))) {
            alert('Please enter a valid password (6-20) .\nOnly English characters, numbers and underscores are allowed.')
            return false
          }
          if (!(/^.{1,20}$/.test(this.first_name))) {
            alert('First name should be between 1 and 20.')
            return false
          }
          if (!(/^.{1,20}$/.test(this.last_name))) {
            alert('Last name should be between 1 and 20.')
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
            alert('Submit Successfully')
          }).catch((error) => {
            console.log(error)
            alert('Error: The submission has something wrong')
          })
          this.$router.push(
            {
              path: '/PersonalInformation'
            })
          window.reload()
        } else {
          alert('Please enter a valid email.\nFor example, XXXXXXXXXXX@XXX.com')
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
