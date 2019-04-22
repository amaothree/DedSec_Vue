<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px">中英文</a></li>
            </ul>
      </div>
    </nav>
  </header>
  <!--================End Header Menu Area =================-->

  <!--================Banner Area =================-->
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>welcome to hibernia-sino</h2>
        <p>这里加点介绍</p>
      </div>
    </div>
  </section>
  <!--================End Banner Area =================-->

  <!--================End Banner Area =================-->
  <section class="service_feature">
    <div class="container">
      <div class="row feature_inner">
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-1.png" alt="">
            </div>
            <h4>register </h4>
            <p>start to register a new account</p>
            <a class="more_btn"><router-link to="/login" >register</router-link></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-2.png" alt="">
            </div>
            <h4>login</h4>
            <p>if you have an account please login </p>
            <a class="more_btn"><router-link to="/login" >login</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>

</script>
