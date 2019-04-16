<template>
  <div class="container">
    <span class="subject"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
    <span class="type"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
    <span class="status"><span>Status :&nbsp;&nbsp;</span><span class="data">{{status}}</span></span>
    <div class="message" style=" overflow:scroll;">{{message}}</div>
    <button class="delete">Delete</button><button class="back" @click="jumpBack()">Back</button>
  </div>
</template>

<script>
export default {
  name: 'ClaimProgessDetail',
  data () {
    return {
      type: 'Default',
      message: 'Default',
      subject: 'Default',
      status: 0
    }
  },
  methods: {
    jumpBack(){
      this.$router.push(
        {
          name: 'ProcessingProgress'
        }
      )
    }
  },
  created () {
    this.type = this.$route.params.type
    this.message = this.$route.params.message
    this.subject = this.$route.params.subject
    this.status = this.$route.params.status
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
  .subject{
    position: absolute;
    float: left;
    margin-left: 8%;
    font-size: 16px;
    padding: 3%;
    width: 20%;
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

  .delete{
    position: absolute;
    margin-left: 30%;
    margin-bottom: 5%;
    font-size: 20px;
    bottom:0;
  }
  .back{
    position: absolute;
    margin-left: 60%;
    margin-bottom: 5%;
    font-size: 20px;
    bottom:0;
  }
  /*.type{*/
    /*position: absolute;*/
    /*float: left;*/
    /*margin-left:67%;*/
    /*font-size: 16px;*/
    /*padding: 3%;*/
  /*}*/
  .type{
    position: absolute;
    /*float: left;*/
    margin-left:40%;
    font-size: 16px;
    padding: 3%;
    width: 30%;
  }
  .status{
    position: absolute;
    float: left;
    margin-left:75%;
    font-size: 16px;
    padding: 3%;
    width: 20%;
  }
  .status,.subject,.type{
    color: black;
  }
</style>
