<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Information</h2>
        <p class="setset">Change your personal details</p>
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
      })
      this.$router.push(
        {
          path: '/EmployeeInformation'
        })
      window.reload()
    }
  }
}
</script>
<style scoped>
  body{color: #666;}
  ul{list-style: none;}
  a{text-decoration: none;cursor: default;}
  .module-line span{display: inline-block;*display: inline;*zoom: 1}
  .module-privilege{width: 1600px;height: 910px;margin: 0px auto 0px;position: relative}
  .module-privilege .privilege-ul{float: left;border: 1px solid #d3d1d0;background: #fff;width: 980px;position: absolute}
  .module-privilege .privilege-ul.name-ul{left: 0}
  .module-privilege .privilege-ul.svip-ul{left: -2750px;color: #ca963b;-moz-box-shadow: 0 0 10px 2px rgba(0, 0, 0, .08);box-shadow: 0 0 10px 2px rgba(0, 0, 0, .08)}
  .module-privilege .privilege-ul .privilege-item{text-align: center;height: 75px;line-height: 45px;font-size: 34px}
  .module-privilege .privilege-ul .privilege-item a{color: #666;display: block;width: 100%;height: 100%}
  .module-privilege .privilege-ul .privilege-item.first-item{height: 102px;padding-top: 10px}
  .module-privilege .privilege-ul .privilege-item .title,
  .module-privilege .privilege-ul .privilege-item .svip-type{font-size: 40px}
  .module-privilege .privilege-ul .privilege-item .title .vip-type-icon,
  .module-privilege .privilege-ul .privilege-item .svip-type .vip-type-icon{display: inline-block;*display: inline;*zoom: 1;vertical-align: middle;height: 30px}
  .module-privilege .privilege-ul .privilege-item .title .vip-type-title,
  .module-privilege .privilege-ul .privilege-item .svip-type .vip-type-title{height: 30px;line-height: 30px;display: inline-block;vertical-align: middle}
  .module-privilege .privilege-ul .privilege-item .vip-type .vip-type-icon,
  .module-privilege .privilege-ul .privilege-item .no-vip-type .vip-type-icon{display: inline-block;*display: inline;*zoom: 1;vertical-align: middle;height: 30px}
  .module-privilege .privilege-ul .privilege-item .vip-type .vip-type-title,
  .module-privilege .privilege-ul .privilege-item .no-vip-type .vip-type-title{height: 30px;line-height: 30px;display: inline-block;vertical-align: middle}
  .module-privilege .privilege-ul.active{border-color: #f2ddaf;background-color: #fffaeb;margin-top: -4px;width: 780px;left: 800px;z-index: 10}
  .module-privilege .privilege-ul.active .privilege-item.first-item{height: 106px}
  .icon-size-middle{width: 30px;height: 30px;}
  .vip-icon,.buy-btn-box{display: inline-block;}
  .center-button-container-middle{width: 120px;height: 30px;font-size: 24px;line-height: 30px;text-align: center;border-radius: 15px;}
  .center-button-light-yellow{border: 1px solid #f9d681;background-color: #f9d681;color: #351d06;}
  .center-button-light-yellow:hover{background-color: #e7c062;}
  .center-button-base{cursor: pointer;display: inline-block;margin: 0 5px;}
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
