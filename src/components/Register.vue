<template>
  <div class="register">
        <span class="zhihu-name">
            Hibernia-Sino
        </span>
    <!--<div class="tip">A tip for the webset</div>-->
    <form action="submit">
      <div class="phone">
        <input type="text" @blur="onBlurCheckAccount('phone')"
               :class="{'phone-input':true,error:errorMessage.phone.indexOf('Can not be empty')>-1}"
               :placeholder="errorMessage['phone']"  v-model.trim="phone">
      </div>
      <!--<div class="phone">-->
        <!--&lt;!&ndash;<select name="" id="Prefix" v-model="selected" >&ndash;&gt;-->
          <!--&lt;!&ndash;<option :value="option" v-for="option in optionArray" :key="option">{{option}}</option>&ndash;&gt;-->
        <!--&lt;!&ndash;</select>&ndash;&gt;-->
        <!--<span class="sot-line"></span>-->
        <!--<input type="text" @blur="onBlurCheckAccount('phone')" :class="{'phone-input':true,error:errorMessage.phone.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['phone']" v-model.number.trim="phone">-->
      <!--</div>-->
      <div class="phone">
        <input type="password" @blur="onBlurCheckPassword('code')" :class="{'code-input':true,error:errorMessage.code.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['code']" v-model.number.trim="code">
      </div>
      <div class="phone">
        <input type="password" @blur="onBlurCheckRepeat('repeat')" :class="{'code-input':true,error:errorMessage.code.indexOf('Can not be empty')>-1}" :placeholder="errorMessage['repeat']" v-model.number.trim="repeat">
      </div>
      <!--<div class="souce">接受语音验证码</div>-->
      <a href="javascript:" class="register-btn" @click="jumptomainpage ()">{{ $t('Register.Register')}}</a>
      <div class="register-org">
        <span>{{ $t('Register.p')}}</span>
        <a href="/src/components/Protocol.vue" class="org-btn">{{ $t('Register.Protocal')}}</a>
      </div>
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
      phone: '',
      optionArray: ['中国 +86', '美国 +1', '日本 +81'],
      selected: '中国 +86',
      code: '',
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
    color: black;
  }
  .register {
    width: 432px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    border-radius: 2px;
    box-sizing: border-box;
  }
  .zhihu-name {
    font-size: 65px;
    color: #0084ff;
    text-align: center;
    display: block;
    margin-top: 30px;
  }
  .tip {
    color: #0084ff;
    text-align: center;
    font-size: 22px;
    margin-top: 15px;
  }
  form {
    padding: 0 40px 36px;
    margin-top: 30px;
  }
  .phone {
    height: 48px;
    border-bottom: 1px solid gray;
    padding-top: 5px;
  }
  #Prefix {
    width: 110px;
    color: black;
    height: 38px;
    line-height: 38px;
    font-size: 18px;
    text-align: left;
    box-sizing: border-box;
    border: 0;
    outline: none;
    float: left;
  }
  .sot-line {
    height: 22px;
    width: 1px;
    float: left;
    background: #ebebeb;
    margin: 12px 12px 0;
  }
  .phone-input {
    color: black;
    height: 38px;
    line-height: 38px;
    font-size: 18px;
    text-align: left;
    box-sizing: border-box;
    border: 0;
    outline: none;
    margin-left: 5px;
    padding-left: 10px;
    overflow: hidden;
  }
  .code-btn {
    color: #175199;
    width: 98px;
    line-height: 48px;
    margin-left: 5px;
    float: right;
    text-align: right;
  }
  .souce {
    color: #175199;
    line-height: 48px;
    text-align: right;
    font-size: 14px;
    cursor: pointer;
  }
  .code {
    height: 48px;
    padding-top: 5px;
    font-size: 14px;
    border-bottom: 1px solid gray;
  }
  .code-input {
    color: black;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    text-align: left;
    box-sizing: border-box;
    border: 0;
  }
  a.register-btn {
    background-color: #0084ff;
    color: #ffffff;
    margin-top: 14px;
    height: 36px;
    line-height: 36px;
    width: 100%;
    display: inline-block;
    text-align: center;
  }
  .register-org {
    width: 100%;
    margin-top: 18px;
    font-size: 13px;
  }
  .register-org span {
    color: #8590a6;
  }
  a.org-btn {
    color: #175199;
    float: right;
  }
  a.toggle-register-btn {
    color: #175199;
  }
  .bottom {
    text-align: center;
    height: 60px;
    line-height: 60px;
    background-color: #f6f6f6;
    border-top: 1px solid #ebebeb;
    font-size: 16px;
  }
</style>
