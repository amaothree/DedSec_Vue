<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('personal.Information')}}</h2>
        <p class="setset">{{ $t('personal.mes')}}</p>
      </div>
    </div>
  </section>
  <table class="table" style="font-size: 35px;margin-left:30%;width: 60%; border-spacing:50px;">
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
      <td>{{first_name}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.LastName')}}:</td>
      <td>{{last_name}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.Password')}}:</td>
      <td>{{password}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.Email')}}:</td>
      <td>{{email}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.Phone')}}:</td>
      <td>{{phone}}</td>
    </tr>
    <tr>
      <td>{{ $t('personal.Type')}}:</td>
      <td>{{type}}</td>
    </tr>
    </tbody>
  </table>
  <button class="btn approve" @click="jumptomainpage()">{{ $t('personal.Modify')}}</button>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  inject: ['reload'],
  name: 'EmployeeInformation',
  data () {
    return {
      userid: 0,
      username: 'Default',
      password: 'Default',
      email: 'Default',
      phone: 'Default',
      type: 'Default',
      first_name: 'Default',
      last_name: 'Default'
    }
  },
  methods: {
    jumptomainpage () {
      this.$router.push(
        {
          name: 'EmployeeDetail',
          params: {
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email
          }
        }
      )
    }
  },
  created: function () {
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
        console.log(this.array)
      })
      .catch(function (error) {
        console.log(error)
      })
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
