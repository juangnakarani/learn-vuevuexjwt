<template>
  <div class="jumbotron">
    <div class="container">
      <div class="starter-template">
        <h2>{{ msg }}</h2>
      </div>
    </div>
    <!-- Example row of columns -->
    <div class="row">
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'
import { HTTP } from '@/router/index'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Admin Page'
    }
  },
  created: function() {
    // `this` points to the vm instance
    // console.log('a is: ' + this.msg)

    // TODO make request and check result for handle 403
    HTTP.options(`/admin`, {
      withCredentials: true,
      timeout: 1000,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDcwMTI5ODcsImlhdCI6MTUwNzAwOTM4NywidXNlcmRhdGEiOnsiaWQiOjEwMCwidXNlcm5hbWUiOiJhZG1pbiIsImFsaWFzIjoibmdhZGltaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlfX0.3_0yhE5qARCO89aZhen4gIyYvFXuyKdjG8-N9m506f_m3pZ_zjrFKa0OVWOwSfTVdBiy-p79DzK6O-UWEGMOXK2N1JPD28T6BWryG6McNnYb_WSLyS_lhxLbwtYZmJApi8S3msUDApxY7S0uukzMRL20WOtF-tCbq9BQOkDmFvw'
      }
    })
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response)
        router.push({ path: '/admin' })
      })
      .catch(e => {
        console.log(e)
        router.push({ path: '/403' })
      })




  }
}
</script>