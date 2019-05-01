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
          <li class="nav-item"><a class="nav-link" ><router-link to="/" style="font-size: 25px">Exit</router-link></a></li>
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
          <span class="intro">Introduction to Hibernia-Sino</span>
        </h2>
      </div>
      <div class="bd">
        <ul class="ul1 mt20">
          <li>
            <p class="p2">
              <span class="mes">Hibernia-Sino is an international travel insurance stock company.
              </span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">As a comprehensive travel insurance company, we can handle a full range of travel insurance products and services
                (including various statutory insurance businesses)</span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">Hibernia-Sino has firstly promoted prompt and efficient claims settlement service
                and had been well recognized from through out the industry</span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">Hibernia-Sino makes the soul of Chinese traditional concept "pace and combination" as the foundation stone of the enterprise concept,and makes the concept of "combination of every party's benefit to realize the mutual benefit and development" as the core value, and initiates a kind of harmonious and natural enterprise culture.
              </span>

            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              Hibernia-Sino has established a normative corporate governance and decision making mechanism from the start of its operation, laying a very good foundation for its fast growth. </p>
          </li>
        </ul>
      </div>
      <button class="exit"><a href="../Login"><b>{{ $t('EXIT') }}</b></a></button>
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
    margin-bottom: 10px;
    margin-right: 6px;
    margin-top: 2px;
    text-align: center;
  }

  .mes {
    font-size: 29px;
    text-align: center;
  }
  .p2{
    color:rgba(129, 6, 1, 0.7);
    font-size: 29px;
    text-align: left;
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
