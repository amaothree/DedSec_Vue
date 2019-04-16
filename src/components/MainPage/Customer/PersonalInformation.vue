<template>
  <div class="Personal" >
    <h1>{{ $t('personal.personal')}}</h1>

    <form action="">
      <dl>
        <dd>
          <label>{{ $t('personal.id')}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
          <span class="message">{{id}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.name')}}</label>
          <span class="message">{{username}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.FirstName')}}&nbsp; </label>
          <span class="message">{{first_name}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.LastName')}}&nbsp; </label>
          <span class="message">{{last_name}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.Password')}}&nbsp; &nbsp; </label>
          <span class="message">{{password}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.Email')}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
          <span class="message">{{email}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.Phone')}}&nbsp; &nbsp; &nbsp; &nbsp; </label>
          <span class="message">{{phone}}</span>
        </dd>
      </dl>
      <dl>
        <dd>
          <label>{{ $t('personal.Type')}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </label>
          <span class="message">{{type}}</span>
        </dd>
      </dl>
      <button @click="jumptomainpage()">{{ $t('personal.Modify')}}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PersonalInformation',
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
          name: 'PersonalDetail',
          params: {
            userid: this.id,
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
    axios.get('/api/login/getUser?username=wuqiannian').then((res) => {
      this.id = res.data.id
      this.username = res.data.username
      this.password = res.data.password
      this.email = res.data.email
      this.phone = res.data.phone
      this.type = res.data.type
      this.first_name = res.data.first_name
      this.last_name = res.data.last_name
    })
  }
}
</script>
<style scoped>
  span{
    /*!*position: absolute;*!*/
    margin-left: 50%;
    /*position: absolute;*/
    /*float: left;*/
  }
  label{
    padding-left: 4%;
    /*float: left;*/
  }
  dl{
    text-align: left;
    padding-left: 11%;
  }
  h1{
    padding-top:2%;
    color: #333;
  }
  h1{
    text-align: center;
    /*padding-left: 30%;*/
  }
  .Personal{
    position: relative;
    height: 100%;
    width:100%;
    overflow: auto;
    /*margin-top:2%;*/
    /*margin-left: 2%;*/
    background-color: rgba(255,255,255,0.4);
  }
  button{
    font-size: 20px;
  }
  .message{
    width: 100%;
  }
</style>
