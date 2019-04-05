<template>
  <div class="Personal" >
    <h1>Personal Detail</h1>

    <form action="">
      <dl>
        <dd>
          <label>Id</label>
          <span class="message">{{id}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>User Name</label>
          <span class="message">{{username}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>First Name</label>
          <span class="message">{{first_name}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Last Name</label>
          <span class="message">{{last_name}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Password</label>
          <span class="message">{{password}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Email</label>
          <span class="message">{{email}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Phone</label>
          <span class="message">{{phone}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>Type</label>
          <span class="message">{{type}}</span>
        </dd>
      </dl>
      <button @click="jumptomainpage()">Modify</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EmployeeInformation',
  data () {
    return {
      id: 0,
      username: 'Default',
      password: 'Default',
      email: 'Default',
      phone: 'Default',
      type: 'Default',
      logon_date: 'Default',
      first_name: 'Default',
      last_name: 'Default'
    }
  },
  methods: {
    jumptomainpage () {
      this.$router.push(
        {
          name: 'EmployeeDetail',
          params: {
            username: this.username,
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email
          }
        }
      )
    }
  },
  created: function () {
    // let vm = this
    axios.get('http://152.136.82.233:8084/login/getUser?username=wuqiannian').then((res) => {
      this.id = res.data.id
      this.username = res.data.username
      this.password = res.data.password
      this.email = res.data.email
      this.phone = res.data.phone
      this.type = res.data.type
      this.first_name = res.data.first_name
      this.last_name = res.data.last_name
      console.log(this.array)
    })
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
    margin-top:3%;
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
  button{
    font-size: 20px;
  }
</style>
