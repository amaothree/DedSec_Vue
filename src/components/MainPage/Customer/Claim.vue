<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Claim</h2>
        <p>Sumbit your claim</p>
      </div>
    </div>
  </section>
  <div class="Content-Main">
    <form action="" class="form-report">
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
        <span>Name of Recipient</span>
        <input type="text" class="form-control" v-model="name">
      </label>
      <label>
        <span>Phone</span>
        <input type="text" class="form-control" v-model="phone">
      </label>
      <label>
        <span>Country</span>
        <input type="text" class="form-control" v-model="country">
      </label>
      <label>
        <span>City</span>
        <input type="text" class="form-control" v-model="city">
      </label>
      <label>
        <span>District</span>
        <input type="text" class="form-control" v-model="district">
      </label>
      <label>
        <span>Specific Address</span>
        <input type="text" class="form-control" v-model="address">
      </label>
      <label>
        <span>Postal Code</span>
        <input type="text" class="form-control" v-model="postal">
      </label>
      <label>
        <!--<button class="button" @click="addluggage">{{ $t('claim.Send')}}</button>-->
        <button type="submit" class="more_btn" @click="addluggage"  style="font-size: 20px;margin-left: 50%">Send</button>
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
      lug_subject: '',
      postal: '',
      address: '',
      district: '',
      city: '',
      country: '',
      phone: '',
      name: ''
    }
  },
  methods: {
    addluggage: function () {
      axios('/api/luggage/add', {
        params: {
          subject: this.lug_subject,
          type: this.lug_type,
          message: this.lug_message,
          recipient: this.name,
          phone: this.phone,
          country: this.country,
          city: this.city,
          district: this.district,
          address: this.address,
          postcode: this.postal
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
  .Content-Main input[type="text"],.Content-Main textarea{
    width: 70%;
    height: 50px;
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
