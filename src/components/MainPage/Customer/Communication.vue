<template>
  <div class="app">
    <div class="xw-header">
      <div class="xw-ring-wrap">
        <a :class="[bellStatus ? '' : 'xw-ring-icon-toggle', 'xw-ring-icon']" @touchstart="hint('checkStaus')"></a>
      </div>
      <div class="xw-header-content" @touchstart="showInfo">
        <div v-if="!toShowMaskInfo" :class="[toShowMaskInfo ? '' : 'bounceInRight' , 'animated']">
          <img src="../../../assets/logo.png" class="xw-header-avatar">
          <div class="xw-header-title-wrap">
            <div class="xw-header-title">Feedback</div>
          </div>
        </div>
      </div>
    </div>
    <div class="xw-content"  @touchstart="toShowMaskInfo=false"  ref="xwBody">
      <div class="xw-chat-wrap" >
        <ul>
          <li v-for="messageList in records" :key="messageList.index">
            <div v-if="messageList.type==1">
              <div class="xw-chat-time">{{messageList.time}}</div>
              <div class="xw-chat-servicer">
                <div class="xw-servicer-avantar-wrap">
                  <img src="../../../assets/staff.png" class="xw-servicer-avantar">
                </div>
                <div class="xw-chat-msg">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
              </div>
            </div>
            <!-- 用户发送的消息模板-->
            <div v-else>
              <div class="xw-chat-time">{{messageList.time}}</div>
              <div class="xw-chat-customer">
                <div class="xw-customer-avantar-wrap">
                  <img src="../../../assets/client.png" class="xw-customer-avantar">
                </div>
                <div class="xw-chat-msg" style="display:inline-block">
                  <span v-html="replaceFace(messageList.content)"></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="xw-footer-wrap" @touchstart="toShowMaskInfo=false">
      <div class="xw-footer-content">
        <div class="xw-vmodel-wrap">
          <textarea class="xw-content-textarea" placeholder="Please enter your question ..." v-model="content" @focus="onFocusText"></textarea>
        </div>
        <div class="xw-chat-tool">
          <div class="xw-chat-tool-item">
            <transition  name="fade">
              <a href="javascript:void(0)" class="xw-send-btn-text" v-if="content.trim().length" @click="sendMsg">发送</a>
            </transition >
          </div>
        </div>
      </div>
    </div>
    <!-- 提示音 -->
    <audio  style="display:none" preload="metadata" controls="controls" autoplay="autoplay" ref="hintAudio">
      <source :src="myaudio" type="audio/mpeg"/>
    </audio>
    <audio id="audio" preload="auto">
      <source :src="myaudio" type="audio/mpeg"/>
    </audio>
  </div>
</template>

<script>
import evaluate from '../api/evaluate.vue'
import Toast from '../api/toast'
export default {
  name: 'Communication',
  components: {
    evaluate,
    Toast
    // emojiSlider

  },
  data () {
    return {
      comment: {},
      showEmoji: true,
      showToast: false,
      toastText: '',
      showMoreOpratin: false,
      toShowMaskInfo: false,
      bellStatus: true,
      myaudio: '../../../static/msg.mp3',
      videoVal: false,
      showNarrowPopVal: false,
      testContents: ['"今天天气不错', '这个问题还没遇到过', '你说什么，我听不明白', '今天周五了', '请稍后--', '当前客服忙', '您还有什么咨询的吗', '正在查询', 'gone with the wind'],
      content: '',
      records: [{
        type: 1,
        time: new Date().toLocaleTimeString(),
        content: 'Hello！Welcome to Hibernia-Sino, what can do for you? If you have any questions, please contact us online or call us. '

      },
      {
        type: 2,
        time: new Date().toLocaleTimeString(),
        content: 'Thanks for your help'
      }],
      showScore: false,
      ScoreDB: {
        scoreDatas: [
          {
            scoreTitle: '服务指数',
            scoreFlag: 0,
            scoreArr: [1, 2, 3, 4, 5]
          },
          {
            scoreTitle: '接通速度',
            scoreFlag: 1,
            scoreArr: [1, 2, 3, 4, 5]
          },
          {
            scoreTitle: '办事效率',
            scoreFlag: 2,
            scoreArr: [1, 2, 3, 4, 5]
          }
        ],
        maxVal: [0, 0, 0]
      },
      imgFile: {},
      EXPS: []
    }
  },
  created () {
    this._loadEmojiData()
  },
  methods: {
    showInfo () {
      this.toShowMaskInfo = true
    },
    hint (staus) {
      if (staus !== undefined) {
        this.bellStatus = !this.bellStatus
      }
      this.bellStatus ? this.$refs.hintAudio.play() : this.$refs.hintAudio.pause()
    },
    showNarrowPopFuc () {
      this.showNarrowPopVal = true
      this.videoVal = false
    },
    showBigPopFuc () {
      this.showNarrowPopVal = false
      this.videoVal = true
    },
    showEvaluateFuc () {
      this.showScore = !this.showScore
    },
    sendMsg () {
      var content = this.content.trim()
      this.records.push({
        time: new Date().toLocaleTimeString(),
        content: content,
        type: 2
      })
      let audio = document.querySelector('#audio')
      audio.play()
      this.content = ''
      setTimeout(() => {
        this.hint()
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: this.testContents[Math.floor(Math.random() * 9)],
          type: 1
        })
        this.scrollToBottom()
      }, 800)
    },
    getEmotionData (pageNow, pageSize) {
      return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
    },
    replaceFace (con) {
      if (!con) {
        return
      }
      if (con.toString().indexOf('/:') > -1) {
        var exps = this.EXPS
        for (var i = 0; i < exps.length; i++) {
          con = con.replace(exps[i].reg, '<img src="' + exps[i].file + '"  alt="" />')
        }
      }
      return con
    },
    selectStar (msg) {
      let index = msg[0]
      let scoreFlag = msg[1]
      // let scoreArr = msg[2];
      var Target = [1, 2, 3, 4, 5]
      for (var i = 0; i < index; i++) {
        Target[i] = i
      }
      for (var j = index; j < Target.length; j++) {
        Target[j] = -1
      }
      var tempArr = []
      tempArr = this.ScoreDB.maxVal.slice(0)
      tempArr[scoreFlag] = index
      this.ScoreDB.maxVal = tempArr.concat()
      this.ScoreDB.scoreDatas[scoreFlag].scoreArr = Target
    },
    confrmStar (msg) {
      this.showToast = true
      this.toastText = '您的评分依次是 ' + msg
      this.showScore = false
      setTimeout(() => {
        this.showToast = false
      }, 2000)
    },
    onFocusText () {
      this.scrollToBottom()
    },
    _loadEmojiData () {
    }
  }
}
</script>
<style scoped>
  #app{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .app{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
  }
  .xw-content{
    flex:1;
    position: relative;
    overflow: auto;
    transition: height .8s;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .animated.bounceIn,
  .animated.bounceOut {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
  }
  @-webkit-keyframes bounceInDown {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }
    to {
      -webkit-transform: none;
      transform: none;
    }
  }
  .bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
  }
  @keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
    to {
      -webkit-transform: none;
      transform: none;
    }
  }
  .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
  }
  @-webkit-keyframes bounceInRight {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    from {
      opacity: 0;
      -webkit-transform: translate3d(3000px, 0, 0);
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }
    to {
      -webkit-transform: none;
      transform: none;
    }
  }
  .bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
  }
  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);

    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

  }
  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
  }
  img{
    height:20px;
    width:20px;
  }
  ul{
    list-style: none;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0;
    padding: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    padding: 0;
    background-color: rgba(0, 0, 0, .2);
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: transparent;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .xw-ring-wrap{
    position: absolute;
    right: 5px;
    top: 3px;
    padding: 0 2px;
    z-index: 4;
  }

  .xw-ring-icon {
    float: right;
    padding: 5px;
    margin-right: 3px;
    height: 30px;
    width: 30px;
    opacity: .6;
    cursor: pointer;
    text-indent: -9999px;
    overflow: visible;
  }
  .xw-body-wrap-scroll,.xw-body-wrap-scroll-main{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: hidden;
    -webkit-overflow-scrolling: auto;
  }
  .xw-header {
    z-index: 2;
    max-height: 360px;
    background: #ed4858;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  }
  .xw-header-content {
    position: relative;
    overflow: hidden;
    padding: 0px 16px;
    min-height: 50px;
  }
  .xw-chat-servicer:after,
  .xw-chat-servicer:before,
  .xw-chat-customer:after,
  .xw-chat-customer:before,
  .xw-chat-wrap:after,
  .xw-chat-wrap:before,
  .xw-chat-tool:after,
  .xw-chat-tool:before,
  .xw-chat-ul-box:after,
  .xw-chat-ul-box:before {
    display: table;
    content: "";
  }
  .xw-header-avatar {
    float: left;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    margin-right: 8px;
    margin-top: 5px;
  }
  .xw-header-title-wrap {
    padding: 3px 0;
    float: left;
    width: 200px;
  }
  .xw-header-title {
    font-size: 14px;
    color: #fff;
    margin-top: 8px;
  }
  .xw-chat-wrap {
    overflow: auto;
    padding-left: 16px;
    padding-bottom: 20px;
  }
  .xw-chat-wrap .xw-chat-time,
  .xw-chat-wrap time {
    line-height: 1;
    text-align: center;
    display: block;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 12px;
    color: #999;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }
  .xw-chat-servicer,
  .xw-chat-customer {
    position: relative;
    margin-bottom: 16px;
    padding: 0 10px 0 45px;
  }
  .xw-servicer-avantar-wrap {
    position: absolute;
    bottom: 0;
    line-height: 0;
  }
  .xw-send-btn-text{
    padding: 4px 8px;
    background-color:#ed4858;
    color: #fff;
    border-radius: 5px;
  }
  .xw-customer-avantar-wrap {
    position: absolute;
    bottom: 0;
    right: 8px;
    line-height: 0;
  }
  .xw-chat-servicer .xw-servicer-avantar-wrap,.xw-customer-avantar-wrap{
    left: 0;
  }
  .xw-servicer-avantar {
    border-radius: 100%;
  }
  .xw-servicer-avantar-wrap img,.xw-customer-avantar-wrap img {
    height: 34px;
    width: 34px;
  }
  .xw-chat-msg {
    -webkit-font-smoothing: antialiased;
    hyphens: auto;
    word-wrap: break-word;
    word-break: normal;
    position: relative;
    clear: both;
    padding: 8px 16px;
    border: 1px solid transparent;
    max-width: 100%;
    min-width: 50px;
    min-height: 22px;
    line-height: 1.6em;
    max-width: 70%;
  }
  .xw-chat-servicer .xw-chat-msg {
    background: #fff;
    border-color: #efefef;
    float: left;
  }
  .xw-chat-msg :last-child {
    margin-bottom: 0;
  }
  .xw-chat-msg span{
    white-space: pre-line;
  }
  .xw-chat-servicer,
  .xw-chat-customer {
    position: relative;
    margin-bottom: 16px;
    padding: 0 10px 0 45px;
  }
  .xw-chat-customer {
    text-align: right;
  }
  .xw-chat-customer .xw-chat-msg {
    float: right;
    text-align: left;
    background: #ed4858;
    border-color: #ed4858;
    color: #fff;
    margin-right: 45px;
  }
  .xw-customer-avantar{
    border-radius: 50%;
  }
  .xw-chat-msg :last-child {
    margin-bottom: 0;
  }
  .xw-chat-wrap .xw-system-info-time,
  .xw-chat-wrap time {
    line-height: 1;
    text-align: center;
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    color: #999;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }
  .xw-system-info{
    margin-bottom: 8px;
  }
  .xw-chat-wrap>:last-child {
    margin-bottom: 16px;
  }
  .xw-system-info {
    text-align: center;
    font-size: 12px;
  }
  .xw-system-info span {
    display: inline-block;
    background: rgba(0, 0, 0, .08);
    padding: 4px 8px;
    line-height: 1;
    color: #7c7c7c;
    border-radius: 2px;
    text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
  }
  .xw-footer-wrap {
    justify-content:flex-end;
    width: 100%;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .05);
    background: #fff;
    z-index: 2;
  }
  .xw-footer-content {
    position: relative;
    height: 60px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 4px;
  }
  .xw-vmodel-wrap{
    flex:1;
  }
  .xw-content-textarea{
    box-sizing: border-box;
    z-index: 1;
    overflow-y: auto;
    font-size: 14px;
    line-height: 14px;
    border: none;
    resize: none;
    padding: 16px 14px 16px 14px;
    font-family: inherit;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
    width: 80%;
  }
  .xw-chat-tool {
    position: absolute;
    right: 0px;
    margin-right: 10%;
    bottom: 0;
    z-index: 2;
  }
  .xw-chat-tool-item {
    height: 52px;
    line-height: 52px;
    position: relative;
    float: left;
    background: #fff;
  }
  .xw-chat-tool-btn {
    display: block;
  }
  .xw-chat-tool-btn {
    margin-top: 7px;
    height: 38px;
    width: 38px;
    border-radius: 100%;
    text-indent: -9999px;
    opacity: .5;
    overflow: hidden;
    transform: translateZ(0);
    margin-left: 10px;
  }

  .xw-chat-tool-item .xw-window-text {
    position: absolute;
    bottom: 100%;
    left: 40%;
    margin-bottom: -3px;
    -webkit-transform: translateX(-60%);
    transform: translateX(-60%);
    white-space: nowrap;
    box-shadow: 0 3px 18px 2px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .05);
    font-size: 12px;
    background: #fff;
    line-height: 1em;
  }
  .xw-chat-tool-item .xw-window-text.xw-face-emoji-ul {
    right: -23px;
    left: auto;
    -webkit-transform: none;
    transform: none;
  }
  .xw-chat-tool-item .xw-window-text h4 {
    font-size: 12px;
    margin: 0;
    font-weight: 400;
    padding: 12px 8px;
    padding-bottom: 0;
  }
  .xw-chat-ul-box{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .xw-chat-ul-box {
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 8px;
    height: 130px;
    overflow: hidden;
    width: 340px;
    margin: 0px auto;
  }
  .xw-chat-tool-item .xw-window-text .xw-chat-ul-box {
    padding: 8px;
  }
  .swiper-slide{
    float: left;
  }
  .xw-chat-ul-box a {
    display: block;
    height: 40px;
    width: 40px;
  }
  .swiper-pagination{
    display: flex;
    width: 100%;
    justify-content:center;
  }
  .swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    display: inline-block;
    background: #ccc;
    border-radius: 10px;
    margin-left:5px;
    margin-right: 5px;
  }
  .swiper-pagination-bullet-active{
    background: #007aff;
  }
  .xw-chat-tool-item {
    height: 52px;
    position: relative;
    float: left;
  }
  .xw-chat-tool-item .xw-window-text span {
    display: block;
    padding: 10px 12px;
    background: #fff;
    position: relative;
    z-index: 1;
    font-size: 17px;
    line-height: 16px;
  }
  .xw-chat-servicer:after,
  .xw-chat-customer:after,
  .xw-chat-wrap:after,
  .xw-chat-tool:after,
  .xw-chat-ul-box:after{
    clear: both;
  }
  .xw-chat-msg:last-child:before {
    bottom: -1px;
  }
  .xw-chat-msg:last-child:after,
  .xw-chat-msg:last-child:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    display: block;
  }
  .xw-chat-customer .xw-chat-msg:last-child:before {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #ed4858;
    right: -10px;
    border-left-width: 9px;
  }
  .xw-chat-servicer .xw-chat-msg:last-child:before {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #efefef;
    left: -10px;
    border-left-width: 9px;
  }
  .xw-chat-servicer .xw-chat-msg:last-child:after {
    display: inline-block;
    height: 0;
    width: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    left: -8px;
    border-left-width: 9px;
    bottom: 0px;
  }
  .xw-show-info-box{
    height: 200px;
    margin-top: -50px;
    z-index: 1000;
    background: #ed4858;
    color:#fff;
  }
  .xw-logo{
    text-align: center;
  }
  .xw-logo img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .xw-header-info p{
    height: 110px;
    padding:0 16px;
    line-height: 1.6rem;
    word-wrap: break-word;
    text-align: left;
    overflow: auto;
  }
  .xw-chat-msg span img{
    vertical-align: middle;
  }
  .mint-swipe-items-wrap > div{
    text-align: center;
  }
  .xw-scroll-ul{
    min-height: 340px;
  }
  .mint-swipe-indicator.is-active {
    background: #ed4858;
    opacity: 1;
  }
  html,body,a,button,input,textarea,img,ul,li,p,dl,dd,h1,h2,h3,h4,h5,h6{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a,button,input,textarea,img{
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    outline: none;
  }
  body {
    height: 100%;
    width: 100vw;
    overflow: hidden;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #333;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
    transition:.5s;
  }
  a {
    text-decoration: none;
    color: #4078c0;
  }
  img {
    border-style: none;
  }
</style>
