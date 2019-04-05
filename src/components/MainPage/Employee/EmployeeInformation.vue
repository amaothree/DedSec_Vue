<template>
  <div class="Personal" >
    <h1>Personal Detail</h1>

    <form action="">
      <dl>
        <dd>
          <label>Name</label>
          <span class="message">name</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Sex</label>
          <span class="message">sex</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>ID</label>
          <span class="message">id</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Phone Number</label>
          <span class="message">phone num</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Email</label>
          <span class="message">email</span>
        </dd>
      </dl>
      <button @click="jumptomainpage()">Modify</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmployeeInformation',
  data () {
    return {
      array: []
    }
  },
  methods: {
    jumptomainpage () {
      this.$router.push(
        {
          name: 'EmployeeDetail'
        }
      )
    }
  }
}
</script>

<style scoped>
  span{
    margin-right: 200px;
    float: right;
  }
  dl{
    text-align: left;
    margin-left: 100px;
  }
  form,h1{
    margin-top:5%;
    color: #333;
  }
  .Personal{
    position: absolute;
    height: 75%;
    width:65%;
    margin-top:2%;
    margin-left: 2%;
    background-color: rgba(255,255,255,0.4);
    /*border-radius: 5px;*/
    /*border: 1px solid #DADADA;*/
  }
</style>
