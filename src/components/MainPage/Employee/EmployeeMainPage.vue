<style scoped>
  .layout{
    border: 1px solid #2aabd2;
    background: #0f0f0f;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
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

                <a class="nav-link" href="#">中英文</a>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{$t('navigate.Renew')}}
                  </template>
                  <MenuItem name="1-1">{{$t('navigate.Policy1')}}</MenuItem>
                  <MenuItem name="1-2">{{$t('navigate.Policy2')}}</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    {{$t('navigate.Communication')}}
                  </template>
                  <MenuItem name="2-1">
                    <a href="javascript"><router-link to="/Solution"><span> {{$t('navigate.DealWithClaims')}}</span></router-link> </a>
                    </MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    {{$t('navigate.Setting')}}
                  </template>
                  <MenuItem name="3-1"><a href="javascript"><router-link to="/EmployeeInformation"><span> 订单</span></router-link> </a></MenuItem>
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
</script>
