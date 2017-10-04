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
    HTTP.get(`/admin`, {
      withCredentials: true,
      timeout: 1000,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDcxMTg4NTcsImlhdCI6MTUwNzExNTI1NywidXNlcmRhdGEiOnsiaWQiOjEwMCwidXNlcm5hbWUiOiJhZG1pbiIsImFsaWFzIjoibmdhZGltaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlfX0.jJ3cA5x4ZvPu6FTYH0QSt_aOAFIjBuX8hUzcL5k-X3jd8CYeb1nPNkiruoZbvUFyv0k9ahl2Dgi4Rrqy6njjbkoHr8VNgglkBc9bvsCj1ELPEzfusXeOTutcnTul78VCCT9oH9c-1CbvdWjy78qkdSTBFZfw00huQYgwtY2m-os',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': 'http://192.168.1.12:8090',
        // 'Access-Control-Request-Method': 'GET'

      }
    })
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response)
      })
      .catch(e => {
        console.log(e)
        router.push({ path: '/403' })
      })
  }
}
</script>