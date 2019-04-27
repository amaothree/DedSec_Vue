<template>
  <body>
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item "><a class="nav-link" ><router-link to="/" style="font-size: 25px">Exit</router-link></a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px">Language</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Register</h2>
        <p>click <router-link to="/Login">here</router-link> to back to login</p>
      </div>
    </div>
  </section>
  <div class="Content-Main">
    <form action="" class="form-report" style="margin-left: 30%;">
      <label>
        <span>username</span>
        <input type="text" name="userName" autocomplete="off" placeholder="请输入登录名" class="layui-input">
      </label>
      <label>
        <span>password</span>
        <input id="login-password" type="password" name="password"  autocomplete="off" placeholder="请输入密码" class="layui-input">
      </label>
      <label>
        <span>repeat password</span>
        <input id="repeat-password" type="password" name="password" autocomplete="off" placeholder="请再次输入密码" class="repeat-input">
      </label>
      <label>
        <span>email</span>
        <input type="text" name="email" autocomplete="off" placeholder="请输入邮箱" class="layui-input">
      </label>
      <label>
        <span>first name</span>
        <input type="text" name="fname" autocomplete="off" placeholder="请输入名" class="layui-input">
      </label>
      <label>
        <span>surname</span>
        <input type="text" name="Iname" autocomplete="off" placeholder="请输入姓" class="layui-input">
      </label>
      <label>
        <span>phone</span>
        <input type="text" name="phone" autocomplete="off" placeholder="请输入电话" class="layui-input">
      </label>
      <label>
        <span>type</span>
        <select name="selected" style="width: 23%">
          <option value="admin">admin</option>
          <option value="employee">employee</option>
          <option value="customer">customer</option>
        </select>
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <a class="more_btn" style="margin-left: 20%"><router-link to="/CustomerMainPage" style="font-size: 20px">Register</router-link></a>
      </label>
    </form>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Claim',
  data () {
    return {
      lug_message: '',
      lug_type: '',
      lug_subject: ''
    }
  },
  methods: {
    addluggage: function () {
      console.log(this.lug_type + ' ' + this.lug_subject + ' ' + this.lug_message)

      axios('/api/luggage/add', {
        params: {
          subject: this.lug_subject,
          type: this.lug_type,
          message: this.lug_message
        }
      }).then(function (response) {
        console.log(response)
        alert('Submit Successfully')
      }).catch(function (error) {
        console.log(error)
        alert('Error : There is something wrong for this submission.')
      })
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
    margin: 0px 0px 5px;
    font-size: 30px;
    /*padding: 20px 30px 20px 30px;*/
  }
  .Content-Main label>span{
    float: left;
    width: 20%;
    padding-right: 10px;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: right;
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
</style>
