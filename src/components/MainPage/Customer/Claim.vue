<template>
  <div class="Content-Main">
    <div class="Content-Main1">
      <h1>Register a claim</h1>
    </div>
    <form action="" method="post" class="form-report">
      <label>
        <span>Subject:</span>
        <select name="select1" class="select1">
          <option value="Lost luggage">Lost luggage</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <label>
        <span>Message:</span>
        <textarea id="mesaage" name="message" placeholder="Your can tell me"></textarea>
      </label>
      <label>
        <input type="button" class="button" value="Send">
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Claim'
}
</script>
<style scoped>
  .Content-Main{
    /*max-width: 500px;*/
    position: absolute;
    margin: auto;
    margin-top: 2%;
    /*padding: 20px 30px 20px 30px;*/
    font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-shadow: 1px 1px 1px #FFF;
    /*border: 1px solid #DDD;*/
    border-radius: 5px;
    color: #888;
    background: rgba(255,255,255,0.4);
    margin-left: 2%;
    height: 75%;
    width:65%;
    /*filter:alpha(opacity=50);*/
    /*-moz-opacity:0.5;*/
    /*-khtml-opacity: 0.5;*/
    /*opacity: 0.5;*/
  }
  .Content-Main h1{
    display: block;
    padding: 0px 0px 10px 40px;
    color: #333;
    /*margin: -10px -30px 30px -30px;*/
    /*font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;*/
    /*border-bottom: 1px solid #DADADA;*/
    /*color: #888;*/
    padding: 20px 30px 20px 30px;
    margin-top: 3%;
  }
  .Content-Main h1>span{
    display: block;
    font-size: 11px;
  }
  .Content-Main label{
    display: block;
    margin: 0px 0px 5px;
    /*padding: 20px 30px 20px 30px;*/
  }
  .Content-Main label>span{
    float: left;
    width: 20%;
    padding-right: 10px;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-align: right;
    color: #333;
  }
  .Content-Main input[type="text"],.Content-Main textarea{
    width: 70%;
    height: 20px;
    padding: 5px 0px 5px 5px;
    margin-bottom: 16px;
    margin-right: 6px;
    margin-top: 2px;
    line-height: 15px;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .select1{
    width: 71%;
    height: 35px;
    margin-bottom: 16px;
    margin-right: 6px;
    margin-top: 2px;
    line-height: 15px;
    padding: 5px 0px 5px 5px;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .select2{
    width: 13%;
    border-radius: 4px;
    border: 1px solid #CCC;
    color: #888;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .Content-Main textarea{
    width: 70%;
    height: 100px;
    padding: 5px 0px 0px 5px;
  }
  .button{
    padding: 10px 25px 10px 25px;
    margin-left: 111px;
    border-radius: 4px;
    border:1px solid #CCC;
    background: #FFF;
    color: #333;
  }
  .button:hover{
    color: #333;
    background-color: #EBEBEB;
    border-color: #ADADAD;
  }
  form{
    padding: 20px 30px 20px 30px;;
  }
</style>
