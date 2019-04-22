<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Services</h2>
        <p>what do you want to do ？</p>
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
            <h4>register a claim</h4>
            <p>start to register a claim</p>
            <a class="more_btn"><router-link to="/Claim" >register</router-link></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-2.png" alt="">
            </div>
            <h4>process prograss</h4>
            <p>check the process of your claims </p>
            <a class="more_btn"><router-link to="/ProcessingProgress" >progress</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>
