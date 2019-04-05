<template>
  <div class="initial">
    <img src="../assets/blue.png" alt="Background">
    <component :toggleComponent="toggleComponent" :is="typeName"></component>
  </div>
</template>

<script>
import Login from './Login'
import Register from './Register'
export default {
  name: 'InitialPage',
  data () {
    return {
      typeName: 'Login'
    }
  },
  methods: {
    toggleComponent: function () {
      this.typeName = this.typeName === 'Login' ? 'Register' : 'Login'
    }
  },
  components: {
    Login,
    Register
  }
}
</script>

<style scoped>
  .initial{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    height: 100%;
    z-index: -9999;
  }
</style>
