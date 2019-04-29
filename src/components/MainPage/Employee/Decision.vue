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
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>User Id:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
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
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>Phone:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>Country:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>City:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>District:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>Specific Address:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      <tr>
        <td>Postal Code:</td>
        <td><span class="data" style="white-space: nowrap; "></span></td>
      </tr>
      </tbody>
    </table>
    <span class="message" style="margin-left: 11%;margin-top: 3%;position:relative;font-size: 35px;"><span style="">message:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top: 2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" readonly v-model="message"></textarea>
    <span class="comment" style="margin-left: 11%;position:relative;font-size: 35px;"><span style="">comment:&nbsp;&nbsp;</span></span>
    <textarea class="form-control" rows="5" style="margin-top:2%;font-size: 35px;position: relative;margin-left: 7%;width: 80%" v-model="message"></textarea>
    <ul style="display: inline">
      <button class="btn approve" @click="deleteclaim(id)">Approve</button>
      <button class="btn deny" @click="jumpBack()">Deny</button>
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
