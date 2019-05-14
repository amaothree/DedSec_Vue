<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('claim.Claim')}}</h2>
        <p>{{ $t('claim.claim_message')}}</p>
      </div>
    </div>
  </section>
  <div class="Content-Main">
    <form autocomplete="off" @submit.prevent="onSubmit">
      <label>
        <span>{{ $t('claim.Subject')}}</span>
        <select name="select1" class="select1" v-model="lug_subject">
          <option value="Lost luggage">{{ $t('claim.Lost')}}</option>
          <option value="Others">{{ $t('claim.Others')}}</option>
        </select>
      </label>
      <label>
        <span>{{ $t('claim.Type')}}</span>
        <select name="select2" class="select1" v-model="lug_type">
          <option value="Phone">{{ $t('claim.Phone')}}</option>
          <option value="Bag">{{ $t('claim.Bag')}}</option>
          <option value="Others">{{ $t('claim.Other')}}</option>
        </select>
      </label>
      <label>
      <span>{{ $t('claim.Message')}}</span>
        <textarea id="message" name="message" v-model="lug_message"></textarea>
    </label>
      <label>
        <span>{{ $t('claim.name')}}</span>
        <input type="text" class="form-control" v-model="name">
      </label>
      <label>
        <span>{{ $t('claim.Phone1')}}</span>
        <input type="text" class="form-control" v-model="phone">
      </label>
      <label>
        <span>{{ $t('claim.Country')}}</span>
        <input type="text" class="form-control" v-model="country">
      </label>
      <label>
        <span>{{ $t('claim.City')}}</span>
        <input type="text" class="form-control" v-model="city">
      </label>
      <label>
        <span>{{ $t('claim.District')}}</span>
        <input type="text" class="form-control" v-model="district">
      </label>
      <label>
        <span>{{ $t('claim.address')}}</span>
        <input type="text" class="form-control" v-model="address">
      </label>
      <label>
        <span>{{ $t('claim.Pcode')}}</span>
        <input type="text" class="form-control" v-model="postal">
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <button type="button" class="more_btn" @click="addluggage"  style="font-size: .6rem;margin-left: 30%;">{{ $t('claim.Send')}}</button>
      </label>
    </form>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'Claim',
  data () {
    return {
      lug_message: '',
      lug_type: '',
      lug_subject: '',
      postal: '',
      address: '',
      district: '',
      city: '',
      country: '',
      phone: '',
      name: '',
      userid: -1,
      res: 'Default'
    }
  },
  mounted () {
    if (this.$cookies.get('lng') === '0') {
      this.locale = 'cn'
      this.lang = 'ENG'
    } else {
      this.locale = 'en'
      this.lang = '中文'
    }
    this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
  },
  methods: {
    addluggage: function () {
      if (this.name === '' || this.phone === '' || this.country === '' || this.city === '' || this.district === '' || this.postal === '' || this.lug_subject === '' || this.lug_type === '') {
        if (this.locale === 'en') {
          alert('Only Message and Specific Address can be empty. \nPlease enter all other boxes.')
        } else {
          alert('只有消息和特定地址可以为空。\n请输入所有其他框。')
        }
        return false
      }
      if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        if (this.locale === 'en') {
          alert('Please enter a valid phone.')
        } else {
          alert('请输入有效电话。')
        }
        return false
      }
      if (!(/^.{0,400}$/.test(this.message))) {
        if (this.locale === 'en') {
          alert('Message should be between 0 and 400.')
        } else {
          alert('消息应该在0到400个字符之间。')
        }
        return false
      }
      if (!(/^.{1,30}$/.test(this.name))) {
        if (this.locale === 'en') {
          alert('Name of Recipient should be between 1 and 30.')
        } else {
          alert('收件人姓名应在1至30个字符之间。')
        }
        return false
      }
      if (!(/^.{1,30}$/.test(this.country))) {
        if (this.locale === 'en') {
          alert('Country should be between 1 and 30.')
        } else {
          alert('国家应该在1到30个字符之间。')
        }
        return false
      }
      if (!(/^.{1,30}$/.test(this.district))) {
        if (this.locale === 'en') {
          alert('District should be between 1 and 30.')
        } else {
          alert('地区应在1至30个字符之间。')
        }
        return false
      }
      if (!(/^.{1,30}$/.test(this.city))) {
        if (this.locale === 'en') {
          alert('City should be between 1 and 30.')
        } else {
          alert('城市应在1至30个字符之间。')
        }
        return false
      }
      if (!(/^.{0,100}$/.test(this.address))) {
        if (this.locale === 'en') {
          alert('Specific Address should be between 0 and 100.')
        } else {
          alert('具体地址应该在0到100个字符之间。')
        }
        return false
      }
      if (!(/^.{1,15}$/.test(this.postal))) {
        if (this.locale === 'en') {
          alert('Postal Code should be between 1 and 15.')
        } else {
          alert('邮政编码应该在1到15个字符之间。')
        }
        return false
      }
      var that = this
      let data = {
        'subject': that.lug_subject,
        'type': that.lug_type,
        'message': that.lug_message,
        'recipient': that.name,
        'phone': that.phone,
        'country': that.country,
        'city': that.city,
        'district': that.district,
        'address': that.address,
        'postcode': that.postal,
        'userid': that.userid
      }
      axios({
        method: 'post',
        url: '/api/luggage/add',
        data: Qs.stringify(data),
        success: (res) => {
          console.log(res)
        }
      }).then((res) => {
        if (that.locale === 'en') {
          alert('Submit Successfully')
        } else if (this.locale === 'cn') {
          alert('提交成功。')
        }
        this.$router.push(
          {
            path: '/CustomerMainPage'
          })
      }).catch((error) => {
        console.log(error)
        if (that.locale === 'en') {
          alert('Error: The submission has something wrong')
        } else {
          alert('错误:提交有错误。')
        }
      })
    }
  },
  created: function () {
    this.userid = this.$cookies.get('userid')
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
    font-size: .5rem;
    padding: 1rem 2rem 0rem 0;
  }
  .Content-Main label>span{
    float: left;
    padding-right: 0.125rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: right;
    color: #333;
  }
  .Content-Main input[type="text"],.Content-Main textarea{
    width: 100%;
    height: .7rem;
    padding: 5px 0px 5px 5px;
    margin-bottom: 16px;
    margin-right: 6px;
    margin-top: 2px;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-size: 40px;
  }
  .select1{
    height: .8rem;
    width: auto;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-size: 0.4rem;;
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
    width: 100%;
    height: 2rem;
    padding: 5px 0px 0px 5px;
    font-size: .5rem;
  }
  form{
    padding: 20px 30px 20px 30px;;
  }
  button{
    font-size: .5rem;
  }
</style>
