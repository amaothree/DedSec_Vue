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
  <span class="subject" style="margin-left: 5%;position: absolute;"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
  <span class="type" style="margin-left: 35%;position: absolute;"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
  <span class="status" style="margin-left: 70%"><span>status:&nbsp;&nbsp;</span><span class="data">{{status}}</span></span>
  <textarea class="form-control" rows="5" style="margin-top: 10%; margin-left: 5%;font-size: 40px;" readonly v-model="message"></textarea>
  <button class="btn approve" @click="deleteclaim(id)">Delete</button>
  <button class="btn deny" @click="jumpBack()">Back</button>
</div>
</body>
</template>

<script>
import axios from 'axios'
export default {
  inject: ['reload'],
  name: 'ProgessDetail',
  data () {
    return {
      type: 'Default',
      message: 'Default',
      subject: 'Default',
      status: 0,
      id: 0,
      returnmessage: 'Default'
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
    deleteclaim (id) {
      axios('/api/luggage/delete', {
        params: {
          id: id
        }
      }).then(function (response) {
        alert(response.data)
      }).catch(function (error) {
        console.log(error)
        alert('Error : There is something wrong for removing the claim.')
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
    this.returnmessage = this.$route.params.reply
  }
}
</script>

<style scoped>
  .subject{
    position: absolute;
    float: left;
    font-size: 50px;
    width: 20%;
  }
  .type{
    position: absolute;
    float: left;
    font-size: 50px;
    margin-left:35%;
    width: 20%;
  }
  .status{
    position: absolute;
    float: left;
    font-size: 50px;
    margin-left:60%;
    width: 20%;
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
 .subject,.type{
    color: black;
  }
</style>
