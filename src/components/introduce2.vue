<template>
  <body>
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" ><router-link to="/">Exit</router-link></a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px">Language</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>introduction</h2>
      </div>
    </div>
  </section>
  <div class="login">
    <div class="module-a">
      <div class="hd">
        <h2 class="h2">
          <span class="intro">Policy of Hibernia-Sino</span>
        </h2>
      </div>
      <div class="bd">
        <p class="mt40 p1">
          <span class="mes">We adheres to the following privacy protection principles and is committed to providing you with more secure and reliable service:</span>
        </p>
        <ul class="ul1 mt20">
          <li>
            <p class="fb">
              <span class="message_num">1. </span><span class="message">Security Safeguard and Reliance:</span>
            </p>
            <p class="p2">
              <span class="mes">We try our best to prevent your information from breach, damage or loss via effective and reasonable information security technology and administrative process;</span>
            </p>
          </li>
          <li class="mt20">
            <p class="fb">
              <span class="message_num">2. </span><span class="message">Choice:</span>
            </p>
            <p class="p2">
              <span class="mes">We provide you convenient privacy management options so that you may make proper choices to control or manage your privacy;</span>
            </p>
          </li>
          <li class="mt20">
            <p class="fb">
              <span class="message_num">3. </span><span class="message">Protection of Communication Secret:</span>
            </p>
            <p class="p2">
              <span class="mes">We will strictly protect your communication secrets in compliance with the applicable laws and regulations;</span>
            </p>
          </li>
          <li class="mt20">
            <p class="fb">
              <span class="message_num">4. </span><span class="message">Reasonableness and Necessity:</span>
            </p>
            <p class="p2">
              <span class="mes">We will collect necessary data so that we can provide you and other users with better service in order to achieve products' functions; </span>

            </p>
          </li>
          <li class="mt20">
            <p class="fb">
              <span class="message_num">5. </span><span class="message">Transparency:</span>
            </p>
            <p class="p2">
              We endeavor to introduce our privacy policy in an easy and straightforward way and help you better understand our information process practice;
            </p>
          </li>
        </ul>
      </div>
      <button class="exit"><a href="../Login"><b>{{ $t('message.exit') }}</b></a></button>
    </div>
  </div>
  </body>

</template>
<script>

</script>
<style>
  input {
    box-sizing: border-box;
    border: 0;
    outline: none;
  }
  .login {
    width: 1600px;
    hight:10000px;
    margin-left: 200px;
    background: #ffffff;
    position: absolute;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    border-radius: 2px;
    box-sizing: content-box;
  }
  li {
    text-align: left;
  }
  .intro {
    color: rgba(225, 216, 216, 9);
    font-size: 40px;
    margin-bottom: 1px;
    margin-right: 6px;
    margin-top: 2px;
  }
  .message_num {
    color: blue;
  }
  .fb {
    font-size: 30px;
    margin-left: 60px;
    color: blue;
  }
  .mes {
    font-size: 20px;
    text-align: center;
  }
  .h2{
    color:rgba(26, 26, 26, 0.1);
    font-size: 20px;
    text-align: center;
  }
  button{
    padding: 10px 25px 10px 25px;
    width:200px;
    margin-left: 600px;
    margin-top: 50px;
    border-radius: 4px;
    border:1px solid #CCC;
    background: antiquewhite;
    color: #333;
  }
</style>
