<template>
<div>
    <div v-for="arr in array" :key="arr">
      <div class="progressContainer">
    <div class="progress" :style="{width:arr.progress+'%'}">
        <b>{{arr.progress}}%</b><br>
        <b><p>{{ arr.type }}</p></b>
      <button class="detail">Detail</button>
      <button class="delete"> Delete</button>
    </div>
   </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      array: [
        {
          progress: 30,
          type: 'Lost luggage'
        },
        {
          progress: 50,
          type: 'Others'
        }
      ]
    }
  }
}
</script>

<style scoped>
  div.progressContainer{
    height: 20px;
    width: 96%;
    border-radius: 10px;
    background-color: #ddd;
    margin-left: 2%;
    margin-top: 10%;
  }
  div.progress{
    background-color: #1C8DE0;
    border-radius: 10px;
    height:20px;
    line-height: 20px;}
  b{
    color:Black;
    font-weight: 100;
    font-size: 12px;
    position:absolute;
    left:30%;
  }
  p{
    margin-top: 10px;
    font-size: 18px;
  }
  .detail{
    margin-top: 10px;
    margin-left: 80px;
    position:absolute;
    right:25%;
  }
  .delete{
    margin-top: 10px;
    margin-left: 80px;
    position:absolute;
    right:20%;
  }
</style>
