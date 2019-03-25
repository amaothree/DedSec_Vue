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
  position: relative;
  height: 90%;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  border: 1px solid #DADADA;
}
</style>
