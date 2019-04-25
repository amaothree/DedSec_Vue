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
    <div class="container" style="margin-top: 5%">
      <span class="id"><span >{{ $t('Decision.id')}} :&nbsp;&nbsp;</span>{{id}}</span>
      <!--<br>-->
      <span class="userid"><span>{{ $t('Decision.Uid')}} :&nbsp;&nbsp;</span><span class="data">{{userid}}</span></span>
      <span class="subject"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
      <span class="type"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
      <textarea class="form-control" rows="5" style="margin-top: 10%; margin-left: 5%;font-size: 40px;"></textarea>
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
      userid: 0
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
          status: 'approve'
        }
      })
    },
    setDeny: function () {
      axios('/api/luggage/pick', {
        params: {
          id: this.id,
          status: 'deny'
        }
      })
    }
  }
}
</script>

<style scoped>

 .id{
   position: relative;
    float: left;
    font-size: 50px;
   margin-left:10%;
   width: 20%;
  }
 .userid{
   position: relative;
   float: left;
   font-size: 50px;
   width: 20%;
 }
 .subject{
   position: relative;
   /*float: left;*/
   font-size:50px;
   margin-left:4%;
   width: 20%;
 }
 .type{
   position: relative;
   float: left;
   margin-left:10%;
   font-size: 50px;
   width: 20%;
 }
  .message{
    position: relative;
    margin-left: 10%;
    margin-top: 150px;
    border: 1px solid #DADADA;
    background-color: #FFF;
    border-radius: 5px;
    width: 80%;
    height: 60%;
    font-size: 16px;
    text-align: center;
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
  .id,.userid,.subject,.type{
    color: black;
  }
</style>
