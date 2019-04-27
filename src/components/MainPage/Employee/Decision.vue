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
    <div class="container" style=" position: absolute;">
      <span class="id" style=" padding-left: 5%;position: absolute;"><span >{{ $t('Decision.id')}} :&nbsp;&nbsp;</span>{{id}}</span>
      <span class="userid" style="margin-left: 30%;position: absolute;"><span>{{ $t('Decision.Uid')}} :&nbsp;&nbsp;</span><span class="data">{{userid}}</span></span>
      <span class="subject" style="margin-left: 55%;position: absolute;"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
      <span class="type" style="margin-left: 80%;position: absolute;"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
      <textarea class="form-control" rows="5" style="margin-top: 10%; margin-left: 5%;font-size: 40px;" readonly v-model="message"></textarea>
      <button class="btn approve" @click="setApprove">{{ $t('Decision.Approve')}}</button>
      <button class="btn deny" @click="setDeny">{{ $t('Decision.Deny')}}</button>
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
    position: absolute;
    float: left;
    font-size: 30px;
  }
  .type{
    position: absolute;
    float: left;
    font-size: 30px;
  }
  .approve{
    position: relative;
    margin-left: 25%;
    margin-top: 5%;
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
  .subject,.type,.id,.userid{
    font-size: 40px;
    color: black;
  }
</style>
