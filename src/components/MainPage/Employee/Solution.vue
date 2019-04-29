<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('solution.Data')}}</h2>
        <p>{{ $t('solution.All')}}</p>
      </div>
    </div>
  </section>
  <div class="row">
    <div class="col-sm-10 table-responsive" style="margin-left: 10% ;font-size: 20px">
      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
        <thead>
        <tr role="row">
          <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">{{ $t('solution.Id')}}</th>
          <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('solution.User')}}</th>
          <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('solution.Subject')}}</th>
          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('solution.Detail')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even" role="row" v-for="arr in array" :key="arr.id">
          <td class="sorting_1">{{arr.id}}</td>
          <td>{{ arr.userid}}</td>
          <td>{{ arr.subject}}</td>
          <td><a class="more_btn" style="font-size: 20px ;" @click="jumptomainpage(arr.id,arr.type,arr.message,arr.subject,arr.userid)">Detail</a></td>
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
  }
}
</script>
