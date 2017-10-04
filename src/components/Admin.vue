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
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDcwODU4MDIsImlhdCI6MTUwNzA4MjIwMiwidXNlcmRhdGEiOnsiaWQiOjAsInVzZXJuYW1lIjoiIiwiYWxpYXMiOiIiLCJlbWFpbCI6IiIsImlzYWRtaW4iOmZhbHNlfX0.ZM_xGD6_meOBrtmUj8-CQyYUECUxDBkf4GeH5Bc3PLnS70QAF7x_F1yshZxYwG7ToPQIkeF0snElOMNwA8tK1Xc4aLaeQaf5xNRnS9oX1qqUDGtkNEYCUBUAwNoa7Z17JVU0IUpJ_bqqPadTdjKQvJfZF813EpHoRymSTq65TPQ',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': 'http://192.168.1.12:8080',
        // 'Access-Control-Request-Method': 'GET'

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