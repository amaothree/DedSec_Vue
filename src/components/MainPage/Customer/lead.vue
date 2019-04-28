<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('lead.Services')}}</h2>
        <p>{{ $t('lead.mes1')}}</p>
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
            <h4>{{ $t('lead.register_claim')}}</h4>
            <p>{{ $t('lead.mes2')}}</p>
            <a class="more_btn"><router-link to="/Claim" >{{ $t('lead.register')}}</router-link></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="feature_item">
            <div class="f_icon">
              <img src="static/img/icon/f-icon-2.png" alt="">
            </div>
            <h4>{{ $t('lead.process')}}</h4>
            <p>{{ $t('lead.mes3')}} </p>
            <a class="more_btn"><router-link to="/ProcessingProgress" >{{ $t('lead.progress')}}</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>
