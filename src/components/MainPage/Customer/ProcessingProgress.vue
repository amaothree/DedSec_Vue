<template>
  <div class="container">
    <ProgressBar></ProgressBar>
  </div>

</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'ProcessingProgress',
  components: {ProgressBar}
}
</script>

<style scoped>
.container{
  position: absolute;
  height: 75%;
  width:65%;
  margin-top: 2%;
  margin-left: 2%;
  background-color: rgba(255,255,255,0.4);
  /*border: 1px solid #DADADA;*/
  /*!*background-color: #FFF;*!*/
  /*border-radius: 5px;*/
}
</style>
