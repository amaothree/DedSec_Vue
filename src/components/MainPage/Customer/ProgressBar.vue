<template>
<body>
<section class="banner_area">
  <div class="container">
    <div class="banner_inner_text">
      <h2>Detail</h2>
      <p>Check out the requirement</p>
    </div>
  </div>
</section>
<div class="container">
  <span class="subject"><span>{{ $t('Decision.Subject')}} :&nbsp;&nbsp;</span><span class="data">{{subject}}</span></span>
  <span class="type"><span>{{ $t('Decision.Type')}} :&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
  <span class="status"><span style="font-size: 50px ;margin-left: 10%">status:&nbsp;&nbsp;</span><span class="data">{{type}}</span></span>
  <textarea class="form-control" rows="5" style="margin-top: 10%; margin-left: 5%;font-size: 40px;"></textarea>
  <button class="btn approve" @click="setApprove">{{ $t('Decision.Approve')}}</button>
  <button class="btn deny" @click="setDeny">{{ $t('Decision.Deny')}}</button>
</div>
</body>
</template>

<script>
</script>

<style scoped>

  .subject{
    position: relative;
    float: left;
    font-size: 50px;
    margin-left: 10%;
    width: 20%;
  }
  .type{
    position: relative;
    float: left;
    font-size: 50px;
    margin-left:15%;
    width: 20%;
  }

  .approve{
    position: relative;
    margin-left: 25%;
    margin-top: 5%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #75cb61;
  }
  .deny{
    position: relative;
    margin-left: 70%;
    margin-top: -9%;
    font-size: 30px;
    bottom:0;
    color:#1d78cb;
    background: #f6e74f;
  }
 .subject,.type{
    color: black;
  }
</style>
