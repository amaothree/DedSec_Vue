<template>
  <div class="logo_box">
        <span class="title">
            Hibernia-Sino
        </span>
    <form action="submit">
      <div class="input_outer">
        <span class="u_user"></span>
        <input name="logname" class="text" onFocus=" if(this.value=='输入ID或用户名登录') this.value=''" onBlur="if(this.value=='') this.value='输入ID或用户名登录'" value="输入ID或用户名登录" style="color: #FFFFFF !important" type="text">
      </div>
      <div class="input_outer">
        <span class="us_uer"></span>
        <label class="l-login login_password" style="color: rgb(255, 255, 255);display: block;">输入密码</label>
        <input name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;" onFocus="$('.login_password').hide()" onBlur="if(this.value=='') $('.login_password').show()" value="" type="password">
      </div>
      <div class="mb2"><a class="act-but submit" href="javascript:" @click="jumptomainpage()" style="color: #FFFFFF">{{ $t('login.LogIn')}}</a>
      </div>
      <input name="savesid" value="0" id="check-box" class="checkbox" type="checkbox"><span>记住用户名</span>
    </form>
    <div class="sas">
        <span>{{ $t('login.no')}}<a href="javascript:" @click="toggleComponent" class="toggle-register-btn">{{ $t('login.Register')}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'zhihu',
      phone: '',
      password: '',
      hidden: true,
      errorMessage: {
        phone: this.$t('login.Account'),
        password: this.$t('login.Password')
      }
    }
  },
  methods: {
    toggleHiddenPassword () {
      this.hidden = !this.hidden
    },
    jumptomainpage () {
      this.$router.push(
        {
          path: '/EmployeeMainPage'
        }
      )
    }
  },
  props: ['toggleComponent']
}
</script>

<style scoped>
  .u_user{
    width: 25px;
    height: 25px;
    background-image: url(/src/assets/login_ico.png);
    background-position:  -125px 0;
    position: absolute;
    margin: 12px 13px;
  }
  .us_uer{
    width: 25px;
    height: 25px;
    background-image: url(/src/assets/login_ico.png);
    background-position: -125px -34px;
    position: absolute;
    margin: 12px 13px;
  }
  .logo_box{
     width: 280px;
     height: 490px;
     padding: 35px;
     color: #EEE;
     position: absolute;
     left: 50%;
     top:100px;
     margin-left: -175px;
   }
  .title{
    text-align: center;
    height: 20px;
    font: 40px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #FFFFFF;
    line-height: 60px;
    padding:0 0 35px 0;
  }
  .input_outer{
    height: 46px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .l-login{
    position: absolute;
    z-index: 1;
    left: 50px;
    top: 0;
    height: 46px;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    line-height: 46px;
  }
  label{
    color: rgb(255, 255, 255);
    display: block;
  }
  .text{
    width: 220px;
    height: 46px;
    outline: none;
    display: inline-block;
    font: 14px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    margin-left: 50px;
    border: none;
    background: none;
    line-height: 46px;
  }
  .mb2{
    margin-bottom: 20px
  }
  .mb2 a{
    text-decoration: none;
    outline: none;
  }
  .submit {
    padding: 15px;
    margin-top: 20px;
    display: block;
  }
  .act-but{
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 50px;
    background: #0096e6;
  }
  .checkbox{
    vertical-align: middle;
    margin: 0 5px 0 0;
  }
  .sas{
    width: 280px;
    height: 18px;
    float: left;
    color: #FFFFFF;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 50px;
  }
  .sas a{
    width: 280px;
    height: 18px;
    color: blue;
    text-align: center;
    line-height: 18px;
    text-decoration: none;
  }
</style>
