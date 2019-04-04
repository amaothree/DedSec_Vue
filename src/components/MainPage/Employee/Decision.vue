<template>
    <div class="container">
      <div class="id"><span >ID :&nbsp;&nbsp;</span>{{id}}</div>
      <br>
      <div class="type"><span>TYPE :&nbsp;&nbsp;</span><span class="data">{{type}}</span></div>
      <div class="message" style=" overflow:scroll;">{{message}}</div>
      <button>Approve</button><button>Deny</button>
    </div>
</template>

<script>
export default {
  name: 'Decision',
  data () {
    return {
      id: 1,
      type: 'others',
      message: 'wefhwuwfehfe'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.type = this.$route.params.type
    this.message = this.$route.params.message
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
  }
 .id{
    padding-top: 5%;
    padding-left: 5%;
    float: left;
    margin-left:15%;
   font-size: 16px;
  }
  .message{
    position: absolute;
    margin-left: 10%;
    margin-top: 5%;
    border: 1px solid #DADADA;
    background-color: #FFF;
    border-radius: 5px;
    width: 80%;
    height: 60%;
    font-size: 16px;
  }

  button{
    margin: 5%;
    margin-top: 50%;
    font-size: 16px;
  }

</style>
