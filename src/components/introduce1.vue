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
          <li class="nav-item"><a class="nav-link" ><router-link to="/" style="font-size: 25px">{{$t('in1.Exit')}}</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{$t('in1.introduction')}}</h2>
      </div>
    </div>
  </section>
  <div class="login">
    <div class="module-a">
      <div class="hd">
        <h2 class="h2">
          <span class="intro">{{$t('in1.line1')}}</span>
        </h2>
      </div>
      <div class="bd">
        <ul class="ul1 mt20">
          <li>
            <p class="p2">
              <span class="mes">{{$t('in1.line2')}}
              </span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">{{$t('in1.line3')}}</span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">{{$t('in1.line4')}}</span>
            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              <span class="mes">{{$t('in1.line5')}}
              </span>

            </p>
          </li>
          <li class="mt20">
            <p class="p2">
              {{$t('in1.line6')}} </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </body>

</template>
<script>
export default {
  name: 'Introduce',
  data () {
    return {
    }
  }
}
</script>
<style>
  input {
    box-sizing: border-box;
    border: 0;
    outline: none;
  }
  .login {
    margin-left: 10%;
    margin-right: 10%;
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
    font-size: .3rem;
    text-align: center;
  }
  .p2{
    color:rgba(129, 6, 1, 0.7);
    font-size: .3rem;
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
