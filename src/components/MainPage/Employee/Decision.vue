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
        <td>Id:</td>
        <td><span class="data" style="white-space: nowrap; ">{{id}}</span></td>
      </tr>
      <tr>
        <td>User Id:</td>
        <td><span class="data" style="white-space: nowrap; ">{{userid}}</span></td>
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
        <td>Status:</td>
        <td><span class="data" style="white-space: nowrap; ">{{status}}</span></td>
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
    <textarea class="form-control" rows="5" style="margin-top:2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" v-model="returnmessage"></textarea>
    <ul style="display: inline">
      <button class="btn approve" @click="setApprove()">Approve</button>
      <button class="btn deny" @click="setDeny()">Deny</button>
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
  },
  methods: {
    async setApprove () {
      // axios('/api/luggage/pick', {
      //   params: {
      //     id: this.id,
      //     status: 'approve',
      //     reply: this.returnmessage
      //   }
      // })
      let data = {
        'id': this.id,
        'status': 'Approve',
        'reply': this.returnmessage
      }
      await axios({
        method: 'post',
        url: '/api/luggage/pick',
        data: Qs.stringify(data)
      })
      alert('Successfully processed')
      this.$router.push(
        {
          name: 'Solution'
        }
      )
      location.reload()
    },
    async setDeny () {
      // axios('/api/luggage/pick', {
      //   params: {
      //     id: this.id,
      //     status: 'deny',
      //     reply: this.returnmessage
      //   }
      // })
      let data = {
        'id': this.id,
        'status': 'Deny',
        'reply': this.returnmessage
      }
      await axios({
        method: 'post',
        url: '/api/luggage/pick',
        data: Qs.stringify(data)
      })
      alert('Successfully processed')
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
    margin-left: 17%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #75cb61;
  }
  .deny{
    margin-left: 30%;
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
