<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{$t('Decision.Decision')}}</h2>
        <p>{{$t('Decision.Check')}}</p>
      </div>
    </div>
  </section>
  <div class="container">
    <table class="table" style="font-size: 35px;margin-left: 7%;">
      <tbody>
      <tr>
        <td>{{$t('Decision.id')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{id}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.Uid')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{userid}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.Subject')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{subject}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.Type')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{type}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.status')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{status}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.Recipient')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{recipient}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.phone')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{phone}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.country')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{country}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.city')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{city}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.District')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{district}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.specific_Address')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{address}}</span></td>
      </tr>
      <tr>
        <td>{{$t('Decision.postal_code')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{postcode}}</span></td>
      </tr>
      </tbody>
    </table>
    <span class="message" style="margin-left: 11%;margin-top: 3%;position:relative;font-size: 35px;"><span style="">{{$t('Decision.message')}}:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top: 2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="message"></textarea>
    <span class="comment" style="margin-left: 11%;position:relative;font-size: 35px;"><span style="">{{$t('Decision.comment')}}:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top:2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" v-model="returnmessage"></textarea>
    <ul style="display: inline">
      <button class="btn approve" @click="setApprove()">{{$t('Decision.approve')}}</button>
      <button class="btn deny" @click="setDeny()">{{$t('Decision.deny')}}</button>
    </ul>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'Decision',
  data () {
    return {
      type: '',
      message: '',
      subject: '',
      status: 0,
      id: 0,
      returnmessage: 'None',
      recipient: '',
      city: '',
      country: '',
      district: '',
      userid: 0,
      postcode: '',
      phone: '',
      address: ''
    }
  },
  created () {
    this.type = this.$cookies.get('lugtype')
    this.message = this.$cookies.get('message')
    this.subject = this.$cookies.get('subject')
    this.status = this.$cookies.get('status')
    this.id = this.$cookies.get('id')
    if (this.$cookies.get('reply') !== null) {
      this.returnmessage = this.$cookies.get('reply')
    }
    this.city = this.$cookies.get('city')
    this.country = this.$cookies.get('country')
    this.district = this.$cookies.get('district')
    this.userid = this.$cookies.get('userid')
    this.postcode = this.$cookies.get('postcode')
    this.recipient = this.$cookies.get('recipient')
    this.phone = this.$cookies.get('phone')
    this.address = this.$cookies.get('address')
  },
  methods: {
    async setApprove () {
      if (!(/^.{0,400}$/.test(this.returnmessage))) {
        alert('Comment should be between 0 and 400.')
        return false
      }
      let data = {
        'id': this.id,
        'status': 'Approve',
        'reply': this.returnmessage
      }
      await axios({
        method: 'post',
        url: '/api/luggage/pick',
        data: Qs.stringify(data)
      }).then((res) => {
        alert('Successfully processed')
      }).catch((error) => {
        console.log(error)
        alert('Error: The submission has something wrong')
      })
      this.$cookies.remove('lugtype')
      this.$cookies.remove('subject')
      this.$cookies.remove('message')
      this.$cookies.remove('status')
      this.$cookies.remove('id')
      this.$cookies.remove('reply')
      this.$cookies.remove('city')
      this.$cookies.remove('country')
      this.$cookies.remove('district')
      this.$cookies.remove('postcode')
      this.$cookies.remove('recipient')
      this.$cookies.remove('phone')
      this.$cookies.remove('address')
      this.$router.push(
        {
          name: 'Solution'
        }
      )
      location.reload()
    },
    async setDeny () {
      let data = {
        'id': this.id,
        'status': 'Deny',
        'reply': this.returnmessage
      }
      await axios({
        method: 'post',
        url: '/api/luggage/pick',
        data: Qs.stringify(data)
      }).then((res) => {
        alert('Successfully processed')
      }).catch((error) => {
        console.log(error)
        alert('Error: The submission has something wrong')
      })
      this.$cookies.remove('lugtype')
      this.$cookies.remove('subject')
      this.$cookies.remove('message')
      this.$cookies.remove('status')
      this.$cookies.remove('id')
      this.$cookies.remove('reply')
      this.$cookies.remove('city')
      this.$cookies.remove('country')
      this.$cookies.remove('district')
      this.$cookies.remove('postcode')
      this.$cookies.remove('recipient')
      this.$cookies.remove('phone')
      this.$cookies.remove('address')
      this.$router.push(
        {
          name: 'Solution'
        }
      )
      location.reload()
    }
  }
}
</script>

<style scoped>
  .table>tbody>tr>td{
    border:0px;
  }
  .approve{
    position: relative;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #75cb61;
  }
  .deny{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #b21f2d;
  }
  .subject,.type{
    color: black;
  }
</style>
