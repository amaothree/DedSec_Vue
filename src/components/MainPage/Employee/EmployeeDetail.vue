<template>
  <div class="Personal" >
    <h1>Personal Detail</h1>

    <form action="" method="post" autocomplete="off" data-form="ajax" >
      <dl>
        <dd>
          <label for ="username" >User Name</label>
          <input type="text" name="用户名" id="username" :value="username" class="input">
        </dd>
      </dl>
      <!--<dl>-->
        <!--<dd>-->
          <!--<label for ="sex" >*Sex</label>-->
          <!--<select name="sex" id="sex">-->
            <!--<option value="male">male</option>-->
            <!--<option value="female">female</option>-->
            <!--</select>-->
        <!--</dd>-->
      <!--</dl>-->
      <dl>
        <dd>
          <label for ="first_name" >First Name</label>
          <input type="text" name="名" id="first_name" :value="first_name" class="input">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="last_name" >Last Name</label>
          <input type="text" name="姓" id="last_name" :value="last_name" class="input">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="password" >Password</label>
          <input type="password" name="密码" id="password" :value="password" class="input">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="phone" >Phone Number</label>
          <input type="text" name="联系方式" id="phone" :value="phone" class="input">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="email" >Email</label>
          <input type="text" name="邮箱" id="email" value="email" class="input">
        </dd>
      </dl>
      <input type="submit" value="Submit" class="submit">
    </form>
    </div>
</template>

<script>
export default {
  name: 'EmployeeDetail',
  data () {
    return {
      username: 'Default',
      password: 'Default',
      first_name: 'Default',
      last_name: 'Default',
      phone: 'Default',
      email: 'Default'
    }
  },
  created () {
    this.email = this.$route.params.email
    this.phone = this.$route.params.phone
    this.last_name = this.$route.params.last_name
    this.first_name = this.$route.params.first_name
    this.password = this.$route.params.password
    this.username = this.$route.params.username
  }
}
</script>

<style scoped>
  .input,select{
    margin-right: 15%;
    float: right;
  }
  dl{
    text-align: left;
    margin-left: 15%;
  }
  form,h1{
    margin-top:5%;
    color: #333;
  }
  .Personal{
    position: absolute;
    height: 100%;
    width:100%;
    /*margin-top:2%;*/
    /*margin-left: 2%;*/
    background-color: rgba(255,255,255,0.4);
    /*border-radius: 5px;*/
    /*border: 1px solid #DADADA;*/
  }
  .submit{
    margin-right: 15%;
    float: right;
    margin-top: 4%;
  }

</style>
