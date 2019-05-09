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
  <table class="table" style="font-size: .6rem;margin-left:30%;width: 60%;">
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
          name: 'EmployeeDetail'
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
