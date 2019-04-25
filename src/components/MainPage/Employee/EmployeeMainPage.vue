<template>
  <body>
  <!--================Header Menu Area =================-->
  <header class="main_menu_area">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="font-size: 40px">Hibernia-Sino</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" ><router-link to="/" style="font-size: 25px">Exit</router-link></a></li>
          <li class="nav-item"><a class="nav-link"><router-link to="/EmployeeMainPage" style="font-size: 25px">services</router-link></a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="font-size: 25px" :key="locale?'en':'cn'" @click="changeLang()">{{lang}}</a></li>
          <li class="nav-item"><a><router-link to="/EmployeeInformation" style="font-size: 25px">setting</router-link></a></li>
        </ul>
      </div>
    </nav>
  </header>
  <!--================End Header Menu Area =================-->

  <!--================Banner Area =================-->
  <div class="row">
    <div class="col-sm-12 table-responsive">
      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
        <thead>
        <tr role="row">
          <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Rendering engine</th>
          <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Browser</th>
          <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Platform(s)</th>
          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Engine version</th>
          <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">CSS grade</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even" role="row">
          <td class="sorting_1">Blink</td>
          <td>Iridium  54.0</td>
          <td>GNU/Linux</td>
          <td>54</td>
          <td>A</td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Firefox 1.0</td>
          <td>Win 98+ / OSX.2+</td>
          <td>1.7</td>
          <td>A</td>
        </tr>
        <tr class="even" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Browser 8</td>
          <td>Win 98SE+</td>
          <td>1.7</td>
          <td>A</td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Navigator 9</td>
          <td>Win 98+ / OSX.2+</td>
          <td>1.8</td>
          <td>A</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--================End Banner Area =================-->
  <router-view></router-view>
  </body>
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
<style>
  table.dataTable thead .sorting:after,
  table.dataTable thead .sorting_asc:after,
  table.dataTable thead .sorting_desc:after {
    font-family: 'FontAwesome';
  }

  table.dataTable thead .sorting:after {
    content: '\f0dc';
  }

  table.dataTable thead .sorting_asc:after {
    content: '\f0dd';
  }

  table.dataTable thead .sorting_desc:after {
    content: '\f0de';
  }
</style>
