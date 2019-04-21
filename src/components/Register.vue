<template>
  <div class="register">
        <span class="title">
            用户注册
        </span>

    <form action="submit">
      <div class="account">
        <input type="text" @blur="onBlurCheckAccount('phone')"
               :class="{'phone-input':true,error:errorMessage.phone.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['phone']"  v-model.trim="phone">
      </div>

      <div class="password">
        <input type="password" @blur="onBlurCheckPassword('code')" :class="{'code-input':true,error:errorMessage.code.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['code']" v-model.number.trim="code">
      </div>
      <div class="repassword">
        <input type="repeat password" @blur="onBlurCheckRepeat('repeat')" :class="{'code-input':true,error:errorMessage.code.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['repeat']" v-model.number.trim="repeat">
      </div>
      <div class="mb2">
      <a href="javascript:" class="register-btn submit" @click="jumptomainpage ()">{{ $t('Register.Register')}}</a>
      </div>
      <div class="register-org">
        <span>{{ $t('Register.p')}}</span>
      </div>
      <input name="savesid" value="0" id="check-box" class="checkbox" type="checkbox"><span>同意<a href="/src/components/Protocol.vue" class="org-btn">{{ $t('Register.Protocal')}}</a></span>
    </form>
    <div class="bottom">
      <span>{{ $t('Register.Alr')}}<a href="javascript:" @click="toggleComponent" class="toggle-register-btn">{{ $t('Register.LogIn')}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'zhihu',
      errorMessage: {
        phone: this.$t('Register.Account'),
        code: this.$t('Register.Password'),
        repeat: this.$t('Register.Password')
      }
    }
  },
  methods: {
    onBlurCheckPassword (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('Register.ps'))
      } else {
        this.errorMessage[name] = ''
      }
    },
    onBlurCheckAccount (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('Register.ac'))
      } else {
        this.errorMessage[name] = ''
      }
    },
    onBlurCheckRepeat (name) {
      console.log(name, 'check name')
      const value = this[name]
      if (!value || value.length < 1) {
        return (this.errorMessage[name] = this.$t('Register.re_ps'))
      } else {
        this.errorMessage[name] = ''
      }
    },
    toggleHiddenPassword () {
      this.hidden = !this.hidden
    },
    jumptomainpage () {
      this.$router.push(
        {
          path: '/CustomerMainPage'
        }
      )
    }
  },
  props: ['toggleComponent']
}
</script>

<style scoped>
  input {
    box-sizing: border-box;
    border: 0;
    outline: none;
    color: white;
  }
  .error::-webkit-input-placeholder {
    color: red;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: white;
  }
  .register {
    width: 550px;
    height: 490px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 30%;
    top: 20%;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    border-radius: 2px;
    box-sizing: border-box;
  }
  .title {
    text-align: center;
    height: 20px;
    font: 50px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #FFFFFF;
    line-height: 70px;
    padding:0 0 35px 0;
    margin-bottom: 10px;
  }
  .tip {
    color: #0084ff;
    text-align: center;
    font-size: 22px;
    margin-top: 15px;
  }
  form {
    padding: 0 40px 36px;
    margin-top: 20px;
  }
  .account {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .password {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .repassword {
    height: 66px;
    padding: 0 5px;
    margin-bottom: 20px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
  }
  .checkbox{
    vertical-align: middle;
    margin: 0 15px 0 0;
    text-align: left;
  }
  .phone-input {
    height: 66px;
    outline: none;
    display: inline-block;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
    border: none;
    background: none;
    line-height: 46px;
    color: white;
    margin-left: 20px;
    width: 290px;
  }
  .code {
    height: 48px;
    padding-top: 5px;
    font-size: 14px;
    border-bottom: 1px solid white;
  }
  .code-input {
            height: 66px;
            outline: none;
            display: inline-block;
            font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei";
            border: none;
            background: none;
            line-height: 46px;
    margin-left: 20px;
    width: 290px;
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
  .register-btn{
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 50px;
    background: #0096e6;
  }
  a.register-btn {
    color: #ffffff;
    margin-top: 14px;
    height: 55px;
    line-height: 36px;
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 30px;
  }
  .register-org {
    width: 100%;
    margin-top: 18px;
    font-size: 13px;
  }
  .register-org span {
    color: white;
    font-size: 30px;
  }
  a.org-btn {
    color: wheat;
  }
  a.toggle-register-btn {
    color: wheat;
  }
  .bottom {
        height: 22px;
        color: #FFFFFF;
        text-align: center;
        font-size: 26px;
        line-height: 16px;
        margin-bottom: 50px;
  }
  .bottom a{
      width: 280px;
      height: 22px;
      color: wheat;
      text-align: center;
      line-height: 18px;
      text-decoration: none;
    }
  input::-webkit-input-placeholder{
    color: white;
  }
</style>
