<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Detail</h2>
        <p>Check out the requirement</p>
      </div>
    </div>
  </section>
  <div class="container">
    <table class="table" style="font-size: 35px;margin-left: 7%;">
      <tbody>
      <tr>
        <td>Status:</td>
        <td><span class=" data" style="white-space: nowrap; ">{{status}}</span> </td>
      </tr>
      <tr>
        <td>Subject:</td>
        <td><span class="data" style="white-space: nowrap; ">{{subject}}</span></td>
      </tr>
      <tr>
        <td>Type:</td>
        <td><span class="data" style="white-space: nowrap; ">{{type}}</span></td>
      </tr>
      <tr>
        <td>Name of Recipient:</td>
        <td><span class="data" style="white-space: nowrap; ">{{recipient}}</span></td>
      </tr>
      <tr>
        <td>Phone:</td>
        <td><span class="data" style="white-space: nowrap; ">{{phone}}</span></td>
      </tr>
      <tr>
        <td>Country:</td>
        <td><span class="data" style="white-space: nowrap; ">{{country}}</span></td>
      </tr>
      <tr>
        <td>City:</td>
        <td><span class="data" style="white-space: nowrap; ">{{city}}</span></td>
      </tr>
      <tr>
        <td>District:</td>
        <td><span class="data" style="white-space: nowrap; ">{{district}}</span></td>
      </tr>
      <tr>
        <td>Specific Address:</td>
        <td><span class="data" style="white-space: nowrap; ">{{address}}</span></td>
      </tr>
      <tr>
        <td>Postal Code:</td>
        <td><span class="data" style="white-space: nowrap; ">{{postcode}}</span></td>
      </tr>
      </tbody>
    </table>
    <span class="message" style="margin-left: 11%;margin-top: 3%;position:relative;font-size: 35px;"><span style="">message:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top: 2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="message"></textarea>
    <span class="comment" style="margin-left: 11%;position:relative;font-size: 35px;"><span style="">comment:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top:2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="returnmessage"></textarea>
    <ul style="display: inline">
      <button class="btn approve" @click="deleteclaim(id)">Delete</button>
      <button class="btn deny" @click="jumpBack()">Back</button>
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
      location.reload()
    }
  },
  created () {
    this.type = this.$route.params.type
    this.message = this.$route.params.message
    this.subject = this.$route.params.subject
    this.status = this.$route.params.status
    this.id = this.$route.params.id
    if (this.$route.params.reply !== null) {
      this.returnmessage = this.$route.params.reply
    }
    this.city = this.$route.params.city
    this.country = this.$route.params.country
    this.district = this.$route.params.district
    this.userid = this.$route.params.userid
    this.postcode = this.$route.params.postcode
    this.recipient = this.$route.params.recipient
    this.phone = this.$route.params.phone
    this.address = this.$route.params.address
  }
}
</script>

<style scoped>
  .table>tbody>tr>td{
    border:0px;
  }
  .approve{
    position: relative;
    margin-left: 17%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #cb1d1d;
  }
  .deny{
    margin-left: 30%;
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
