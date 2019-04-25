<template>
  <body>
  <section class="banner_area">
    <div class="container">
      <div class="banner_inner_text">
        <h2>Process </h2>
        <p>check out your process</p>
      </div>
    </div>
  </section>
  <div class="row">
    <div class="col-sm-10 table-responsive" style="margin-left: 10% ;font-size: 20px">
      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
        <thead>
        <tr role="row">
          <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Subject</th>
          <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Status</th>
          <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Detail</th>
          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even" role="row">
          <td class="sorting_1">Blink</td>
          <td>Iridium  54.0</td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;"><router-link to="/ProgressBar">Detail</router-link></a></td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;">Delete</a></td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Firefox 1.0</td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;"><router-link to="/ProgressBar">Detail</router-link></a></td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;">Delete</a></td>
        </tr>
        <tr class="even" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Browser 8</td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;"><router-link to="/ProgressBar">Detail</router-link></a></td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;">Delete</a></td>
        </tr>
        <tr class="odd" role="row">
          <td class="sorting_1">Gecko</td>
          <td>Netscape Navigator 9</td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;"><router-link to="/ProgressBar">Detail</router-link></a></td>
          <td><a class="more_btn" style="font-size: 20px ;color: #6f42c1;">Delete</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </body>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'ProcessingProgress',
  components: {ProgressBar}
}
</script>

<style scoped>
</style>
