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
  computed: {
    token: function() {
      return this.$store.getters.getToken
    }
  },
  created: function() {
    // `this` points to the vm instance
    // console.log('a is: ' + this.msg)
    console.log('ini token di admin:' + this.token)
    // TODO make request and check result for handle 403
    HTTP.get(`/admin`, {
      withCredentials: true,
      timeout: 1000,
      headers: {
        'Authorization': 'Bearer '+this.token,

      }
    })
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response)

      })
      .catch(e => {
        console.log(e)
        router.push({ path: '/401' })
      })
  }
}
</script>