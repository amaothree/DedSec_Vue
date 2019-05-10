<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{$t('ProgressDetail.Detail')}}</h2>
        <p>{{$t('ProgressDetail.Check')}}</p>
      </div>
    </div>
  </section>
  <div class="container">
    <table class="table" style="font-size: .6rem;text-align:center;width:100%">
      <tbody>
      <tr>
        <td>{{$t('ProgressDetail.status')}}:</td>
        <td><span class=" data" style="white-space: nowrap; ">{{status}}</span> </td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.Subject')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{subject}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.Type')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{type}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.Recipient')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{recipient}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.phone')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{phone}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.country')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{country}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.city')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{city}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.District')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{district}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.specific_Address')}} :</td>
        <td><span class="data" style="white-space: nowrap; ">{{address}}</span></td>
      </tr>
      <tr>
        <td>{{$t('ProgressDetail.postal_code')}}:</td>
        <td><span class="data" style="white-space: nowrap; ">{{postcode}}</span></td>
      </tr>
      </tbody>
    </table>
    <span class="message" style="margin-left: 11%;margin-top: 3%;margin-bottom: 3%;position:relative;font-size: .8rem;"><span style="">{{$t('ProgressDetail.message')}}:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-bottom: 3%;margin-top: 2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="message"></textarea>
    <span class="comment" style="margin-left: 11%;margin-top: 3%;;margin-bottom: 3%;position:relative;font-size: .8rem;"><span style="">{{$t('ProgressDetail.comment')}}:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-bottom: 3%;margin-top:2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="returnmessage"></textarea>
    <ul style="display: inline">
      <button class="btn approve" @click="deleteclaim(id)">{{$t('ProgressDetail.Delete')}}</button>
      <button class="btn deny" @click="jumpBack()">{{$t('ProgressDetail.Back')}}</button>
    </ul>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  inject: ['reload'],
  name: 'ProgessDetail',
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
  methods: {
    jumpBack () {
      this.$router.push(
        {
          name: 'ProcessingProgress'
        }
      )
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
    },
    async deleteclaim (id) {
      let data = {
        'id': id
      }
      await axios({
        method: 'post',
        url: '/api/luggage/delete',
        data: Qs.stringify(data)
      })
      this.$router.push(
        {
          path: '/ProcessingProgress'
        }
      )
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
      location.reload()
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
  }
}
</script>

<style scoped>
  .table>tbody>tr>td{
    border:0px;
  }
  .approve{
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #cb1d1d;
  }
  .deny{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #f6e74f;
  }
  .subject,.type{
    color: black;
  }
</style>
