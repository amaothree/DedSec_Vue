<template>
    <div class="container">
      <span class="id"><span >Id :&nbsp;&nbsp;</span>{{id}}</span>
      <!--<br>-->
      <span class="userid"><span>User Id :&nbsp;&nbsp;</span><span class="data">{{userid}}</span></span>
      <span class="subject"><span>Subject :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
      <span class="type"><span>Type :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
      <div class="message" style=" overflow:scroll;">{{message}}</div>
      <button>Approve</button><button>Deny</button>
    </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
  .container{
    position: relative;
    height: 75%;
    width:65%;
    /*margin-top: 1%;*/
    margin-left: 2%;
    /*border: 1px solid #DADADA;*/
    background-color: rgba(255,255,255,0.4);
    /*border-radius: 5px;*/
    text-align: left;
  }
 .id{
   position: absolute;
    float: left;
   margin-left: 100px;
    font-size: 16px;
   padding: 30px;
  }
  .message{
    position: absolute;
    margin-left: 100px;
    margin-top: 150px;
    border: 1px solid #DADADA;
    background-color: #FFF;
    border-radius: 5px;
    width: 80%;
    height: 60%;
    font-size: 16px;
    text-align: center;
  }

  button{
    margin: 200px;
    margin-top: 600px;
    font-size: 20px;
  }
  .type{
    position: absolute;
    float: left;
    margin-left:700px;
    font-size: 16px;
    padding: 30px;
  }
  .subject{
    position: absolute;
    float: left;
    margin-left:500px;
    font-size: 16px;
    padding: 30px;
  }
  .userid{
    position: absolute;
    float: left;
    margin-left:300px;
    font-size: 16px;
    padding: 30px;
  }
  .id,.userid,.subject,.type{
    color: black;
  }
</style>
