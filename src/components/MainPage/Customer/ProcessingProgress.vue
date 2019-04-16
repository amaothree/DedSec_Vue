<template>
  <div class="container">
    <b class="subject"><p>Subject</p></b>
    <b class="status"><p>Status</p></b>
    <br>
    <hr>
    <div v-for="arr in array" :key="arr.index">
      <div class="progressContainer">
        <div class="progress">
          <b class="subject"><p>{{ arr.subject }}</p></b>
          <b class="status"><p>{{arr.status}}</p></b>
          <button class="detail" @click="jumptoDetail(arr.type,arr.message,arr.subject,arr.status)">{{ $t('ProcessBar.Detail')}}</button>
          <button class="delete"> {{ $t('ProcessBar.Delete')}}</button><br>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ProcessingProgress',
  data () {
    return {
      userid: 'Default',
      array: []
    }
  },
  methods: {
    jumptoDetail (type, message, subject, status) {
      this.$router.push(
        {
          name: 'ClaimProgessDetail',
          params: {
            type: type,
            message: message,
            subject: subject,
            status: status
          }
        }
      )
    }
  },
  created () {
    this.userid = this.$route.params.userid
    axios.get('/api/luggage/all').then((res) => {
      this.array = res.data
    })
  }
}
</script>

<style scoped>
.container{
  position: absolute;
  height: 100%;
  width:100%;
  background-color: rgba(255,255,255,0.4);
  overflow: auto;
  /*border: 1px solid #DADADA;*/
  /*!*background-color: #FFF;*!*/
  /*border-radius: 5px;*/
}
/*div.progressContainer{*/
  /*height: 20px;*/
  /*width: 96%;*/
  /*border-radius: 10px;*/
  /*background-color: #ddd;*/
  /*margin-left: 2%;*/
  /*margin-top: 10%;*/
/*}*/
/*div.progress{*/
  /*background-color: #1C8DE0;*/
  /*border-radius: 10px;*/
  /*height:20px;*/
  /*line-height: 20px;}*/
b{
  color:Black;
  font-weight: 100;
  position:absolute;
  left:20%;
}
p{
  /*margin-top: 10px;*/
  font-size: 18px;
}
.detail{
  margin-top: 20px;
  margin-left: 80px;
  position:absolute;
  right:25%;
  font-size: 16px;
}
.delete{
  margin-top: 20px;
  margin-left: 80px;
  position:absolute;
  right:10%;
  font-size: 16px;
}
  .subject{
    position:absolute;
    left:20%;
  }
  .status{
    position:absolute;
    left:40%;
  }
</style>
