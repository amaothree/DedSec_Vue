<style scoped>
  .layout{
    border: 1px solid #2aabd2;
    background: #fff;
    position: absolute;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    width:100%;
  }
  .title{
    width: 20%;
    position: relative;
    float:right;
    color:#2aabd2;
    font-size: 50px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .menus{
    height:100%;
    background:#2b542c;
    text-align: left;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <a class="title">Hibernia-Sino</a>
          <div class="layout-nav" style="display: inline; ">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <a class="nav-link" href="../Login">{{$t('message.exit')}}</a>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              <a class="nav-link" href="#">{{$t('message.server')}}</a>
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>

              <a class="nav-link" href="#" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px',background: '#8796ff'}" style="height:1000px; font-size: 20px">
        <Content :style="{padding: '24px 0', minHeight: '100%', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#8796ff'}" class="menus">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" style="height: 1000px;">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate" style="margin-left: -10%"></Icon>
                    {{$t('navigate.Renew')}}
                  </template>
                  <MenuItem name="1-1">{{$t('navigate.Policy1')}}</MenuItem>
                  <MenuItem name="1-2">{{$t('navigate.Policy2')}}</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad" style="margin-left: -10%"></Icon>{{$t('navigate.Communication')}}
                  </template>
                  <MenuItem name="2-1">
                    <a href="javascript"><router-link to="/Claim"> <span> {{$t('navigate.Register')}}</span></router-link> </a>
                  </MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics" style="margin-left: -10%"></Icon>
                    {{$t('navigate.Setting')}}
                  </template>
                  <MenuItem name="3-1" style="margin-left: -10%"><a href="javascript"><router-link to="/PersonalInformation"><span> {{$t('navigate.Personal')}}</span></router-link> </a></MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              Content
              <div class="router"><router-view> </router-view></div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'CustomerNav',
  data () {
    return {
      locale: 'en',
      lang: '中文'
    }
  },
  methods: {
    changeLang () {
      // 增加传入语言
      if (this.locale === 'cn') {
        this.lang = '中文'
        this.locale = 'en'
      } else {
        this.lang = 'ENG'
        this.locale = 'cn'
      }
      this.$cookie.set('lng', this.locale === 'cn' ? '0' : '1', 1)
      window.location.reload() // 进行刷新改变cookie里的值
    }
  },
  mounted () {
    if (this.$cookie.get('lng') === '0') {
      this.locale = 'cn'
      this.lang = 'ENG'
    } else {
      this.locale = 'en'
      this.lang = '中文'
    }
    this.$cookie.set('lng', this.locale === 'cn' ? '0' : '1', 1)
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      console.log('locale', val)
    }
  }
}

</script>
