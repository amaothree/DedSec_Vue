<template>
  <div class="Personal" >
    <h1>个人信息</h1>

    <form action="" method="post" autocomplete="off" data-form="ajax" >
      <dl>
        <dd>
          <label for ="name" >*姓名</label>
          <input type="text" name="姓名" id="name">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="sex" >*性别</label>
          <select name="sex" id="sex">
            <option value="male">male</option>
            <option value="female">female</option>
            </select>
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="ID number" >*身份证号/护照</label>
          <input type="text" name="身份证号" id="ID number">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="phone" >*联系方式</label>
          <input type="text" name="联系方式" id="phone">
        </dd>
      </dl>
      <dl>
        <dd>
          <label for ="email" >*邮箱</label>
          <input type="text" name="邮箱" id="email">
        </dd>
      </dl>
      <input type="submit" value="Submit">
    </form>
    </div>
</template>

<script>
export default {
  name: 'PersonalDetail'
}
</script>

<style scoped>

  label{
    text-align: left;
    ;
  }
  input{
    text-align: left;
  }
</style>
