<template>
  <div class="login">
    <div class="module-a">
      <div class="hd">
        <h2 class="h2">
          <span class="intro">Introduction</span>
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
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
  input {
    box-sizing: border-box;
    border: 0;
    outline: none;
  }
  .login {
    width: 1000px;
    background: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    border-radius: 2px;
    box-sizing: content-box;
  }
  li {
    text-align: left;
  }
  .intro {
    text-align: left;
    color: red;
  }
  .message_num {
    color: blue;
  }
  .fb {
    font-size: 30px;
    color: blue;
  }
  .mes {
    font-size: 25px;

  }
</style>
