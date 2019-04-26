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
  <div class="Personal" >
    <div class="personalinf">
      <div class="module-privilege">
        <ul class="privilege-ul name-ul">
          <li class="privilege-item first-item">
            <p class="title">
              <span>Types</span>
            </p>
          </li>
          <li class="privilege-item" style="background: #fbf9f8">
            <a>ID</a>
          </li>
          <li class="privilege-item">
            <a>User name</a>
          </li>
          <li class="privilege-item" style="background: #fbf9f8">
            <a>First name</a>
          </li>
          <li class="privilege-item">
            <a>Last name</a>
          </li>
          <li class="privilege-item" style="background: #fbf9f8">
            <a>Password</a>
          </li>
          <li class="privilege-item">
            <a>Email</a>
          </li>
          <li class="privilege-item" style="background: #fbf9f8">
            <a>Phone</a>
          </li>
          <li class="privilege-item">
            <a>Type</a>
          </li>
        </ul>
        <ul class="privilege-ul svip-ul active recommend">
          <li class="privilege-item first-item">
            <div class="svip-type">
              <p class="vip-type-icon">
                <span class="vip-icon svip-middle icon-size-middle"></span>
              </p>
              <span class="vip-type-title">information</span>
            </div>
            <div class="buy-btn-box">
              <p class="center-button-base center-button-light-yellow center-button-container-middle" @click="jumpback()">Submit</p>
            </div>
          </li>
          <li class="privilege-item" style="background: #fbf4e4">{{userid}}</li>
          <li class="privilege-item"><input type="text" name="用户名" id="username" :value="username" class="input"></li>
          <li class="privilege-item" style="background: #fbf4e4"><input type="text" name="名" id="first_name" :value="first_name" class="input"></li>
          <li class="privilege-item">  <input type="text" name="姓" id="last_name" :value="last_name" class="input"></li>
          <li class="privilege-item" style="background: #fbf4e4"> <input type="password" name="密码" id="password" :value="password" class="input"></li>
          <li class="privilege-item">        <input type="text" name="联系方式" id="phone" :value="phone" class="input"></li>
          <li class="privilege-item" style="background: #fbf4e4"> <input type="text" name="邮箱" id="email" value="email" class="input"></li>
          <li class="privilege-item">{{type}}</li>
        </ul>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'PersonalDetail',
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
    this.email = this.$cookies.get('email')
    this.phone = this.$cookies.get('phone')
    this.last_name = this.$cookies.get('last_name')
    this.first_name = this.$cookies.get('first_name')
    this.password = this.$cookies.get('password')
    this.username = this.$cookies.get('username')
    this.type = this.$cookies.get('type')
    this.userid = this.$cookies.get('userid')
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
</style>
