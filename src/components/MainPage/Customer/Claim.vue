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
        <button type="button" class="more_btn" @click="addluggage"  style="font-size: .6rem;margin-left: 30%;margin-right: 30%;">{{ $t('claim.Send')}}</button>
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
  methods: {
    addluggage: function () {
      if (this.name === '' || this.phone === '' || this.country === '' || this.city === '' || this.district === '' || this.postal === '' || this.lug_subject === '' || this.lug_type === '') {
        alert('Only Message and Specific Address can be empty. \nPlease enter all other boxes.')
        return false
      }
      if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        alert('Please enter a valid phone.')
        return false
      }
      if (!(/^.{0,400}$/.test(this.message))) {
        alert('Message should be between 0 and 400.')
        return false
      }
      if (!(/^.{1,30}$/.test(this.name))) {
        alert('Name of Recipient should be between 1 and 30.')
        return false
      }
      if (!(/^.{1,30}$/.test(this.country))) {
        alert('Country should be between 1 and 30.')
        return false
      }
      if (!(/^.{1,30}$/.test(this.district))) {
        alert('District should be between 1 and 30.')
        return false
      }
      if (!(/^.{1,30}$/.test(this.city))) {
        alert('City should be between 1 and 30.')
        return false
      }
      if (!(/^.{0,100}$/.test(this.address))) {
        alert('Specific Address should be between 0 and 100.')
        return false
      }
      if (!(/^.{1,15}$/.test(this.postal))) {
        alert('Postal Code should be between 1 and 15.')
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
        console.log(res)
        alert('Submit Successfully')
        this.$router.push(
          {
            path: '/CustomerMainPage'
          })
        window.reload()
      }).catch((error) => {
        console.log(error)
        alert('Error: The submission has something wrong')
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
    font-size: .4rem;
    /*padding: 20px 30px 20px 30px;*/
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
    line-height: 15px;
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
    width: auto;
    padding: 0.0625rem 0 0.0625rem 0.0625rem;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    font-size: 0.25rem;;
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
    font-size: .8rem;
  }
  form{
    padding: 20px 30px 20px 30px;;
  }
  button{
    font-size: .5rem;
  }
</style>
