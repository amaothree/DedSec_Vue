<template>
  <div class="Personal" >
    <h1>Personal Detail</h1>

    <form action="" method="post" autocomplete="off" data-form="ajax" >
      <dl>
        <dd>
          <label for ="name" >*Name</label>
          <input type="text" name="姓名" id="name">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="sex" >*Sex</label>
          <select name="sex" id="sex">
            <option value="male">male</option>
            <option value="female">female</option>
            </select>
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="ID number" >*ID</label>
          <input type="text" name="身份证号" id="ID number">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="phone" >*Phone Number</label>
          <input type="text" name="联系方式" id="phone">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="email" >*Email</label>
          <input type="text" name="邮箱" id="email">
        </dd>
      </dl>
      <input type="submit" value="Submit">
    </form>
    </div>
</template>

<script>
export default {
  name: 'EmployeeDetail'
}
</script>

<style scoped>
  input,select{
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
