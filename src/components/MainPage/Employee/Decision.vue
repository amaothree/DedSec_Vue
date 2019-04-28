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
    <ul class="list-inline">
      <span class="subject" style="margin-left: 5%;margin-top: 3%;position:relative;"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{subject}}</span></span>
      <span class="type" style="margin-left: 20%;margin-top: 3%;position: relative;"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{type}}</span></span>
      <span class="status" style="margin-left: 15%;margin-top: 3%;position:relative;"><span>status:&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{status}}</span></span>
    </ul>
    <ul class="list-inline">
      <span class="city" style="margin-left: 5%;margin-top: 3%;position:relative;"><span>city :&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{subject}}</span></span>
      <span class="phone" style="margin-left: 20%;margin-top: 3%;position: relative;"><span>phone :&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{type}}</span></span>
      <span class="country" style="margin-left: 15%;margin-top: 3%;position:relative;"><span>country:&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{status}}</span></span>
    </ul>
    <ul class="list-inline">
      <span class="district" style="margin-left: 5%;margin-top: 3%;position:relative;"><span>District:&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{subject}}</span></span>
      <span class="code" style="margin-left: 10%;margin-top: 3%;margin-left:25%;position: relative;width: 45%"><span>postal code:&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{type}}</span></span>
    </ul>
    <ul class="list-inline">
      <span class="address" style="margin-left: 5%;margin-top: 3%;position:relative;"><span style="">specific Address:&nbsp;&nbsp;</span><span class="data" style="white-space: nowrap; ">{{status}}</span></span>
      <span class="Recipient" style="margin-top: 3%;margin-bottom: 3%;position:relative;  float: left;font-size: 35px;width: 35%;"><span style="white-space: nowrap; ">Name of Recipient:&nbsp;&nbsp;</span></span>
    </ul>
    <span class="message" style="margin-left: 5%;margin-top: 3%;position:relative;font-size: 40px;"><span style="">message:&nbsp;&nbsp;</span><span class="data">{{status}}</span></span>
    <textarea class="form-control" rows="5" style="margin-top: 2%;font-size: 35px;position: relative" readonly v-model="message"></textarea>
    <span class="comment" style="margin-left: 5%;position:relative;font-size: 40px;"><span style="">comment:&nbsp;&nbsp;</span><span class="data">{{status}}</span></span>
    <textarea class="form-control" rows="5" style="margin-top:2%;font-size: 35px;position: relative" readonly v-model="message"></textarea>
    <ul class="list-inline">
    <button class="btn approve" @click="deleteclaim(id)">approve</button>
    <button class="btn deny" @click="jumpBack()">deny</button>
    </ul>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Decision',
  data () {
    return {
      id: 0,
      type: 'Default',
      message: 'Default',
      subject: 'Default',
      userid: 0,
      returnmessage: 'No comment'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.type = this.$route.params.type
    this.message = this.$route.params.message
    this.subject = this.$route.params.subject
    this.userid = this.$route.params.userid
  },
  methods: {
    setApprove: function () {
      axios('/api/luggage/pick', {
        params: {
          id: this.id,
          status: 'approve',
          reply: this.returnmessage
        }
      })
      alert('Successfully processed')
    },
    setDeny: function () {
      axios('/api/luggage/pick', {
        params: {
          id: this.id,
          status: 'deny',
          reply: this.returnmessage
        }
      })
      alert('Successfully processed')
    }
  }
}
</script>

<style scoped>
  .subject{
    float: left;
    font-size: 50px;
    width: 15%;
  }
  .type{
    float: left;
    font-size: 50px;
    width: 20%;
  }
  .status{
    float: left;
    font-size: 50px;
    width: 25%;
  }
  .address{
    float: left;
    font-size: 50px;
    width: 50%;
  }
  .country{
    float: left;
    font-size: 50px;
    width: 25%;
  }
  .city{
    float: left;
    font-size: 50px;
    width: 15%;
  }
  .phone{
    float: left;
    font-size: 50px;
    width: 20%;
  }
  .district{
    float: left;
    font-size: 50px;
    width: 25%;
  }
  .code{
    float: left;
    font-size: 50px;
  }
  .approve{
    position: relative;
    margin-left: 25%;
    margin-top: 6%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #75cb61;
  }
  .deny{
    position: relative;
    margin-left: 70%;
    margin-top: -9%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #f6e74f;
  }
  .subject,.type{
    color: black;
  }
</style>
