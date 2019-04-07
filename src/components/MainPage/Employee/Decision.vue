<template>
    <div class="container">
      <span class="id"><span >Id :&nbsp;&nbsp;</span>{{id}}</span>
      <!--<br>-->
      <span class="userid"><span>User Id :&nbsp;&nbsp;</span><span class="data">{{userid}}</span></span>
      <span class="subject"><span>Subject :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
      <span class="type"><span>Type :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
      <div class="message" style=" overflow:scroll;">{{message}}</div>
      <button class="approve">Approve</button><button class="deny">Deny</button>
    </div>
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
  .container{
    position: relative;
    height: 100%;
    width:100%;
    /*border: 1px solid #DADADA;*/
    background-color: rgba(255,255,255,0.4);
    /*border-radius: 5px;*/
    text-align: left;
  }
 .id{
   position: absolute;
    float: left;
   margin-left: 8%;
    font-size: 16px;
   padding: 3%;
   width: 10%;
  }
  .message{
    position: absolute;
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
    position: absolute;
    margin-left: 30%;
    margin-bottom: 5%;
    font-size: 20px;
    bottom:0;
  }
  .deny{
    position: absolute;
    margin-left: 60%;
    margin-bottom: 5%;
    font-size: 20px;
    bottom:0;
  }
  .type{
    position: absolute;
    float: left;
    margin-left:67%;
    font-size: 16px;
    padding: 3%;
  }
  .subject{
    position: absolute;
    /*float: left;*/
    margin-left:40%;
    font-size: 16px;
    padding: 3%;
    width: 30%;
  }
  .userid{
    position: absolute;
    float: left;
    margin-left:20%;
    font-size: 16px;
    padding: 3%;
    width: 20%;
  }
  .id,.userid,.subject,.type{
    color: black;
  }
</style>
