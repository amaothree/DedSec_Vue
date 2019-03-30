<template>
  <div class="container" style=" overflow:scroll;">
    <span class="id">ID</span>
    <span class="type">TYPE</span>
    <div v-for="arr in array" :key="arr">
      <div class="progressContainer">
        <div class="progress">
          <span class="id">{{arr.id}}</span>
          <span class="type">{{ arr.type}}</span>
          <button class="detail" @click="jumptomainpage(arr.id,arr.type,arr.message)"> Detail</button>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solution',
  data () {
    return {
      array: [
        {
          id: 30,
          type: 'Lost luggage',
          message: 'No Message'
        },
        {
          id: 50,
          type: 'Others',
          message: 'No Message'
        },
        {
          id: 30,
          type: 'Lost luggage',
          message: 'No Message'
        },
        {
          id: 50,
          type: 'Others',
          message: 'No Message'
        },
        {
          id: 30,
          type: 'Lost luggage',
          message: 'No Message'
        },
        {
          id: 50,
          type: 'Others',
          message: 'No Message'
        },
        {
          id: 30,
          type: 'Lost luggage',
          message: 'No Message'
        },
        {
          id: 50,
          type: 'Others',
          message: 'No Message'
        },
        {
          id: 30,
          type: 'Lost luggage',
          message: 'No Message'
        }
      ]
    }
  },
  methods: {
    jumptomainpage (id, type, message) {
      this.$router.push(
        {
          name: 'Decision',
          params: {
            id: id,
            type: type,
            message: message
          }
        }
      )
    }
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
    border: 1px solid #DADADA;
    background-color: #FFF;
    border-radius: 5px;
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
    font-size: 12px;
    position:absolute;
    left:10%;
  }
  .type{
    margin-left: 3%;
    font-size: 12px;
  }
  .detail{
    /*margin-top: 10px;*/
    /*margin-right: 3%;*/
    /*position:absolute;*/
    position:absolute;
    right:7%;
    margin-top: 2%;
  }
</style>
