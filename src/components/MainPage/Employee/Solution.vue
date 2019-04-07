<template>
  <div class="container" style=" overflow:scroll;">
    <span class="id">ID</span>
    <span class="Subject">Subject</span>
    <span class="userid">User ID</span>
    <div v-for="arr in array" :key="arr.id">
      <div class="progressContainer">
        <div class="progress">
          <span class="id">{{arr.id}}</span>
          <span class="userid">{{ arr.userid}}</span>
          <span class="Subject">{{ arr.subject}}</span>
          <button class="detail" @click="jumptomainpage(arr.id,arr.type,arr.message,arr.subject,arr.userid)"> Detail</button>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'Solution',
  data () {
    return {
      array: []
    }
  },
  methods: {
    jumptomainpage (id, type, message, subject, userid) {
      this.$router.push(
        {
          name: 'Decision',
          params: {
            id: id,
            type: type,
            message: message,
            subject: subject,
            userid: userid
          }
        }
      )
    }
  },
  created: function () {
    // let vm = this
    axios.get('/api/luggage/all').then((res) => {
      this.array = res.data
      console.log(this.array)
    })
    // var self = this
    // axios({
    //   url: '/api/luggage/all',
    //   type: 'GET',
    //   dataType: 'JSONP',
    //   success: function (res) {
    //     self.array = res
    //     console.log(res)
    //   }
    // })
    // $.getJSON('/api/luggage/all', function (result) {
    //   $.each(result, function (i, field) {
    //     this.array = result
    //     console.log(result)
    //   })
    // })
  }
}
</script>

<style scoped>
  .container{
    position: relative;
    height: 100%;
    width:100%;
    /*margin-top: 1%;*/
    /*margin-left: 2%;*/
    /*border: 1px solid #DADADA;*/
    background-color: rgba(255,255,255,0.4);
    /*border-radius: 5px;*/
  }
  div.progressContainer{
    height: 4%;
    width: 90%;
    border-radius: 5px;
    background-color: #ddd;
    margin-left: 4%;
    margin-top: 1%;
  }
  /*div.progress{*/
    /*!*background-color: #1C8DE0;*!*/
    /*!*border-radius: 10px;*!*/
    /*height:30px;*/
    /*!*line-height: 20px;*!*/
  /*}*/
  .id{
    color:Black;
    font-weight: 100;
    font-size: 16px;
    position:absolute;
    left:10%;
  }
  .userid{
    color:Black;
    font-weight: 100;
    font-size: 16px;
    position:absolute;
    left: 30%;
  }
  .Subject{
    margin-left: 25%;
    font-size: 16px;
    color:Black;
  }
  .detail{
    /*margin-top: 10px;*/
    /*margin-right: 3%;*/
    /*position:absolute;*/
    position:absolute;
    right:7%;
    margin-top: 2%;
    font-size: 16px;
  }
</style>
