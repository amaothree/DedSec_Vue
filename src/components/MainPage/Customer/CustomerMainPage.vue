<template>
  <body>
  <div class="top">
      <ul>
        <li><a href="../Login"><b>Exit</b></a></li>
        <li><a href="#"><b>Service</b></a></li>
        <li><a href="#"><b>Language</b></a></li>
      </ul>
  </div>
  <div class="hc_lnav">
    <div class="allbtn">
      <h2><a href="#"><strong>&nbsp;</strong><i>&nbsp;</i></a></h2>
      <ul style="width:190px" class="jspop box">
        <li class="a1">
          <div class="tx"><a href="#"><i>&nbsp;</i>Renew policies</a> </div>
          <dl><dd><a href="#"><img src="../../../assets/Policy.png" alt="Policy">Policy 1</a></dd></dl>
          <dl><dd><a href="#"><img src="../../../assets/Policy.png" alt="Policy">Policy 2</a></dd></dl>
        </li>
        <li class="a2">
          <div class="tx"><a href=""><i>&nbsp;</i>Conmmunication</a> </div>
          <dl><dd><a href=""><router-link to="/Claim"><img src="../../../assets/Claim.png" alt="Claim">Register a claim</router-link></a></dd></dl>
          <dl><dd><a href=""><router-link to="/ProcessingProgress"><img src="../../../assets/Progress.png" alt="Progress">Processing Progress</router-link></a></dd></dl>
        </li>
        <li class="a3">
          <div class="tx"><a href=""><i>&nbsp;</i>Setting</a> </div>
          <dl>
            <dd><a href=""><router-link to="/PersonalDetail"><img src="../../../assets/PersonalDetail.png" alt="PersonalDetail">Update personal details</router-link></a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
  <div class="main">
    <testComponent></testComponent>
    <div class="router"><router-view></router-view></div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'CustomerNav'
}
</script>

<style scoped>
  .main{
    top:0;
    left:0;
    position: absolute;
    z-index: -1;
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: url("../../../assets/background.png") no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    background-size:cover;
    /*filter:alpha(opacity=50);*/
    /*-moz-opacity:0.5;*/
    /*-khtml-opacity: 0.5;*/
    /*opacity: 0.5;*/
  }
  .router{
    /*background: #eff3f5;*/
    /*top:400px;*/
    /*left:800px;*/
    margin: 80px 200px 200px 280px;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

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
    background-color: #eff3f5;
    font-family: arial, helvetica, sans-serif;
    color: #666666;
    font-size: 12px;
    /*background: url("../../../assets/background.png") no-repeat;*/
    /*background-size:100% 100%;*/
    /*overflow: hidden;*/
    /*background-size:cover;*/
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
    top:0;
    left:0;
    z-index: 9999;
    position: absolute;
    width: 200px;
    margin-top: 0px;
    height: 100%;
    background-color: #fcfcfc;
    /*margin: 40px 0 0 120px;*/
  }

  .hc_lnav .allbtn {
    z-index: 99999;
    position: relative
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
    width: 200px;
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
    padding-top: 4px;
    margin-top:2%;
    margin-bottom: 2%;
  }

  .hc_lnav .allbtn ul li dl a {
    line-height: 22px;
    white-space: nowrap;
    float: left;
    color: #888;
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
  /*top*/
  .top{
    /* 设置宽度高度背景颜色 */
    height: auto; /*高度改为自动高度*/
    width:100%;
    margin-left: 0;
    background:#fcfcfc;
    position: fixed; /*固定在顶部*/
    top: 0;/*离顶部的距离为0*/
    margin-bottom: 5px;
  }
  .top ul{
    /* 清除ul标签的默认样式 */
    width: auto;/*宽度也改为自动*/
    list-style-type: none;
    white-space:nowrap;
    overflow: hidden;
    margin-left: 5%;
    /* margin-top: 0;          */
    padding: 0;

  }
  .top li {
    float:right; /* 使li内容横向浮动，即横向排列  */
    margin-right:2%;  /* 两个li之间的距离*/
    position: relative;
    overflow: hidden;
    width: 60px;
  }

  .top li a{
    /* 设置链接内容显示的格式*/
    display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
    color:#6e6e6e;
    text-align: center;
    padding: 3px;
    overflow: hidden;
    text-decoration: none; /* 去除下划线 */

  }
  .top li a:hover{
    /* 鼠标选中时背景变为黑色 */
    background-color: #111;
  }
  .top ul li ul{
    /* 设置二级菜单 */
    width: 60px;
    margin-left: -0.2px;
    background:rgb(189, 181, 181);
    position: relative;
    display: none; /* 默认隐藏二级菜单的内容 */

  }
  .top ul li ul li{
    /* 二级菜单li内容的显示 */
    width: 60px;
    float:none;
    text-align: center;
  }
  .top ul li:hover ul{
    /* 鼠标选中二级菜单内容时 */
    display: block;
    width: 60px;
  }
  img{
    height:15%;
    width:15%;
    margin-left: 5%;
    float:left;
    margin-right: 10%;
  }
</style>
