<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Data</h2>
        <p>All the data</p>
      </div>
    </div>
  </section>
  <div class="row">
    <div class="col-sm-10 table-responsive" style="margin-left: 10% ;font-size: 20px">
      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
        <thead>
        <tr role="row">
          <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Id</th>
          <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">User ID</th>
          <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Subject</th>
          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Detail</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even" role="row">
          <td class="sorting_1">Blink</td>
          <td>Iridium  54.0</td>
          <td>GNU/Linux</td>
          <td><a class="more_btn" style="font-size: 20px ;"><router-link to="/Decision" >Detail</router-link></a></td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Firefox 1.0</td>
          <td>Win 98+ / OSX.2+</td>
          <td><a class="more_btn"><router-link to="/Decision" style="font-size: 20px">Detail</router-link></a></td>
        </tr>
        <tr class="even" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Browser 8</td>
          <td>Win 98SE+</td>
          <td><a class="more_btn"><router-link to="/Decision" style="font-size: 20px">Detail</router-link></a></td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Navigator 9</td>
          <td>Win 98+ / OSX.2+</td>
          <td><a class="more_btn"><router-link to="/Decision" style="font-size: 20px">Detail</router-link></a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </body>
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'Solution',
  data () {
    return {
      array: []
    }
  },
  methods: {
    jumptomainpage (id, type, message, subject, userid) {
      this.$router.push(
        {
          name: 'Decision',
          params: {
            id: id,
            type: type,
            message: message,
            subject: subject,
            userid: userid
          }
        }
      )
    }
  },
  created: function () {
    // let vm = this
    axios.get('/api/luggage/all').then((res) => {
      this.array = res.data
      console.log(this.array)
    })
    // var self = this
    // axios({
    //   url: '/api/luggage/all',
    //   type: 'GET',
    //   dataType: 'JSONP',
    //   success: function (res) {
    //     self.array = res
    //     console.log(res)
    //   }
    // })
    // $.getJSON('/api/luggage/all', function (result) {
    //   $.each(result, function (i, field) {
    //     this.array = result
    //     console.log(result)
    //   })
    // })
  }
}
</script>
