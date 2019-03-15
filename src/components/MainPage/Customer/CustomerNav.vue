<template>
  <body>
  <div class="hc_lnav">
    <div class="allbtn">
      <h2><a href="#"><strong>&nbsp;</strong>全部商品分类<i>&nbsp;</i></a></h2>
      <ul style="width:190px" class="jspop box">
        <li class="a1">
          <div class="tx"><a href="#"><i>&nbsp;</i>Renew policies</a> </div>
          <dl><dd><a href="#">Policy 1</a></dd></dl>
          <dl><dd><a href="#">Policy 2</a></dd></dl>
        </li>
        <li class="a2">
          <div class="tx"><a href=""><i>&nbsp;</i>Conmmunication</a> </div>
          <dl><dd><a href="">Register a claim</a></dd></dl>
          <dl><dd><a href="">Feedback</a></dd></dl>
        </li>
        <li class="a3">
          <div class="tx"><a href=""><i>&nbsp;</i>Setting</a> </div>
          <dl>
            <dd><a href="">Update personal details</a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'CustomerNav'
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a,
  img {
    border: 0;
  }

  body {
    line-height: 3em;
    background-color: #ffffff;
    font-family: arial, helvetica, sans-serif;
    color: #666666;
    font-size: 12px
  }

  a {
    color: #ffffff;
    text-decoration: none;
    -webkit-transition-property: color;
    -moz-transition-property: color;
    -o-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: .2s;
    -webkit-transition-timing-function: ease-in;
    -moz-transition-duration: .2s;
    -moz-transition-timing-function: ease-in;
    -o-transition-duration: .2s;
    -o-transition-timing-function: ease-in;
    transition-duration: .2s;
    transition-timing-function: ease-in;

  }

  a:hover {
    color: #cd0606;
    text-decoration: underline
  }
  /* hc_lnav */

  .hc_lnav {
    z-index: 9999;
    position: relative;
    width: 200px;
    /*margin: 40px 0 0 120px;*/
  }

  .hc_lnav .allbtn {
    z-index: 99999;
    position: relative;
  }

  .hc_lnav .allbtn h2 {
    font-size: 14px;
    box-shadow: 2px 0px 6px -3px #0084ff;
    -webkit-box-shadow: 2px 0px 6px -3px #0084ff;
    -moz-box-shadow: 2px 0px 6px -3px #0084ff
  }

  .hc_lnav .allbtn h2 a {
    line-height: 36px;
    background-color: #fcfcfc;
    width: 120px;
    display: block;
    font-family: 微软雅黑, 黑体;
    height: 36px;
    color: #666666;
    font-size: 14px;
    font-weight: normal
  }

  .hc_lnav .allbtn h2 a:hover {
    text-decoration: none;
  }

  .hc_lnav .allbtn h2 i {}

  .hc_lnav .allbtn h2 strong {}

  .hc_lnav .allbtn ul {
    z-index: 99999;
    position: absolute;
    background-color: #ffffff;
    width: 200px;
    display: block;/*可以设置菜单是显示还是隐藏   display：none；为隐藏*/
    top: 36px;
    left: 0px
  }

  body.hc_home .hc_lnav .allbtn ul {
    display: block
  }

  body.hc_list .hc_lnav .allbtn ul {
    display: block
  }

  .hc_lnav .allbtn ul li {
    padding-bottom: 7px;
    zoom: 1;
    clear: both;
    cursor: default;
    width: 200px;
  }

  .hc_lnav .allbtn ul li .tx {
    line-height: 35px;
    background-color: #0084ff;
    /*padding-left: 10px;*/
    height: 35px;
    text-align: center;
    width: 200px;
  }

  .hc_lnav .allbtn ul li .tx a {
    font-family: 微软雅黑, 黑体;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: color 0.1s ease-out 0s;
    -moz-transition: color 0.1s ease-out 0s;
    -ms-transition: color 0.1s ease-out 0s;
    -o-transition: color 0.1s ease-out 0s;
    transition: color 0.1s ease-out 0s;
    text-align: center;
  }

  .hc_lnav .allbtn ul li .tx a i {
    line-height: 25px;
    margin-top: 5px;
    width: 25px;
    background-position: 0px 0px;
    float: left;
    height: 25px;
    margin-right: 10px;
    text-decoration: none
  }

  .hc_lnav .allbtn ul li dl {
    zoom: 1;
    color: #ffffff;
    clear: both;
    overflow: auto;
    padding-top: 4px
  }

  .hc_lnav .allbtn ul li dl a {
    line-height: 22px;
    white-space: nowrap;
    float: left;
    color: #d9e7ce;
    margin-left: 6px;
    margin-right: 6px;
    -webkit-transition: color 0.1s ease-out 0s;
    -moz-transition: color 0.1s ease-out 0s;
    -ms-transition: color 0.1s ease-out 0s;
    -o-transition: color 0.1s ease-out 0s;
    transition: color 0.1s ease-out 0s
  }

  .hc_lnav .allbtn ul li dt {
    padding-left: 10px;
    width: 30px;
    float: left;
    padding-top: 1px
  }

  .hc_lnav .allbtn ul li dd {
    line-height: 22px;
    width: 150px;
    float: left;
    padding-top: 2px
  }

  .hc_lnav .allbtn ul li .pop {
    border-bottom: #599900 2px solid;
    position: absolute;
    border-left: medium none;
    padding-bottom: 10px;
    background-color: #fcfcfc;
    min-height: 466px;
    padding-left: 30px;
    width: 640px;
    padding-right: 30px;
    display: none;
    height: 464px;
    border-top: medium none;
    top: 0px;
    border-right: #599900 2px solid;
    padding-top: 10px;
    left: 200px;
    box-shadow: 4px 4px 5px -1px #999999;
    -webkit-box-shadow: 4px 4px 5px -1px #999999;
    -moz-box-shadow: 4px 4px 5px -1px #999999
  }

  .hc_lnav .allbtn ul li .pop h3 {
    display: none;
    font-size: 14px
  }

  .hc_lnav .allbtn ul li .pop dl {
    padding-bottom: 6px;
    color: #666666;
    padding-top: 6px
  }

  .hc_lnav .allbtn ul li .pop dl:hover {
    background-color: #f3f3f3
  }

  .hc_lnav .allbtn ul li .pop dl a {
    color: #666666;
    margin-left: 12px;
    margin-right: 12px
  }

  .hc_lnav .allbtn ul li .pop dl a.un {
    color: #a5a5a5
  }

  .hc_lnav .allbtn ul li .pop dt {
    padding-left: 0px;
    width: 72px
  }

  .hc_lnav .allbtn ul li .pop dd {
    width: 565px;
    margin-left: -12px
  }

  .hc_lnav .allbtn ul li .pop .act {
    width: 640px;
    height: 80px;
    overflow: hidden;
    padding-top: 10px
  }

  .hc_lnav .allbtn:hover ul {
    display: block
  }

  .hc_lnav .allbtn ul li:hover {
    background-color: #EBEBEB;
  }

  .hc_lnav .allbtn ul li:hover .tx {
    background-color: #EBEBEB
  }

  .hc_lnav .allbtn ul li:hover .tx a {
    color: #333333
  }

  .hc_lnav .allbtn ul li:hover .tx a i {
    background-position: 0px -25px
  }

  .hc_lnav .allbtn ul li:hover .pop {
    display: block;
    top: 0px;
    left: 190px
  }

  .hc_lnav .allbtn ul li:hover .pop dl a.un {
    color: #a5a5a5;
    text-decoration: none
  }

  .hc_lnav .allbtn ul li:hover dl {
    color: #6e6e6e
  }

  .hc_lnav .allbtn ul li:hover a {
    color: #666666
  }

  .hc_lnav .allbtn ul li:hover a:hover {
    color: #cd0606
  }
  .hc_lnav{
    position: absolute;
    height:100%;
    border:1px solid #EBEBEB;
    box-shadow: 4px 5px 5px -1px #EBEBEB;
    -webkit-box-shadow: 4px 4px 5px -1px #EBEBEB;
    -moz-box-shadow: 4px 4px 5px -1px #EBEBEB
  }
  .a1:hover,.a2:hover,.a3:hover,.a4:hover{
    border-left:2px solid #0084ff;
  }
</style>
