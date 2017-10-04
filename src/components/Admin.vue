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
        'Authorization': 'Bearer yJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDcxMDkzMTEsImlhdCI6MTUwNzEwNTcxMSwidXNlcmRhdGEiOnsiaWQiOjEwMCwidXNlcm5hbWUiOiJhZG1pbiIsImFsaWFzIjoibmdhZGltaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlfX0.QA-mBwndAIRYqxJ5clbbELa1YA9zcm58hlz2BoDUEnV2TUhktf5iReg5F9davlYsy108oTJtyMrdpG27kUvFy5_WXCw1JJA0VbPZFFsurOSOLxy0qJp64lX-xhRtaLm0llKPd4DfA31UQ1ZstEbZQSfnSaVsRy1HVYyHtMf43Eo',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': 'http://192.168.1.12:8090',
        // 'Access-Control-Request-Method': 'GET'

      }
    })
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data)
        router.push({ path: '/admin' })
      })
      .catch(e => {
        console.log(e)
        router.push({ path: '/403' })
      })
  }
}
</script>