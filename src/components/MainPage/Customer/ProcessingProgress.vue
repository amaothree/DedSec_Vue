<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>{{ $t('progress.Process')}} </h2>
        <p>{{ $t('progress.mes1')}}</p>
      </div>
    </div>
  </section>
  <div class="row">
    <div class="col-sm-10 table-responsive" style="margin-left: 10% ;font-size: 20px">
      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
        <thead>
        <tr role="row">
          <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">{{ $t('progress.Subject')}}</th>
          <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('progress.Status')}}</th>
          <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('progress.Detail')}}</th>
          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">{{ $t('progress.Delete')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even" role="row" v-for="arr in array" :key="arr.index">
          <td class="sorting_1">{{arr.subject}}</td>
          <td>{{arr.status}}</td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;" @click="jumptoDetail(arr.type,arr.message,arr.subject,arr.status,arr.id,arr.reply,arr.recipient,arr.address,arr.city,arr.country,arr.district,arr.phone,arr.postcode,arr.userid)">{{ $t('progress.Detail')}}</a></td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;" @click="deleteclaim(arr.id)">{{ $t('progress.Delete')}}</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </body>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  inject: ['reload'],
  name: 'ProcessingProgress',
  data () {
    return {
      userid: 'Default',
      array: [],
      bool: 'even'
    }
  },
  mounted () {
    if (this.$cookies.get('lng') === '0') {
      this.locale = 'cn'
      this.lang = 'ENG'
    } else {
      this.locale = 'en'
      this.lang = '中文'
    }
    this.$cookies.set('lng', this.locale === 'cn' ? '0' : '1', 365, '/')
  },
  methods: {
    jumptoDetail (lugtype, message, subject, status, id, reply, recipient, address, city, country, district, phone, postcode, userid) {
      this.$router.push(
        {
          name: 'ProgressDetail'
        },
        this.$cookies.set('lugtype', lugtype, 120000),
        this.$cookies.set('message', message, 120000),
        this.$cookies.set('subject', subject, 120000),
        this.$cookies.set('status', status, 120000),
        this.$cookies.set('id', id, 120000),
        this.$cookies.set('reply', reply, 120000),
        this.$cookies.set('recipient', recipient, 120000),
        this.$cookies.set('address', address, 120000),
        this.$cookies.set('city', city, 120000),
        this.$cookies.set('country', country, 120000),
        this.$cookies.set('district', district, 120000),
        this.$cookies.set('phone', phone, 120000),
        this.$cookies.set('postcode', postcode, 120000)
      )
    },
    async deleteclaim (id) {
      let data = {
        'id': id
      }
      await axios({
        method: 'post',
        url: '/api/luggage/delete',
        data: Qs.stringify(data)
      })
      location.reload()
    }
  },
  created () {
    this.userid = this.$cookies.get('userid')
    var that = this
    axios
      .post('/api/luggage/getbyuserid?userid=' + this.userid)
      .then(function (response) {
        console.log(response.data)
        that.array = response.data
        console.log(this.array)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
