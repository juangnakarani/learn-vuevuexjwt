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
    },
    auth: function() {
      return this.$store.getters.getAuth
    }
  },
  created: function() {
    // console.log('a is: ' + this.msg)
    console.log('ini token di admin:' + this.token)
    console.log('ini auth di admin:' + this.auth)
    // TODO check is auth == true
    if(this.auth != true) {
      router.push({ path: '/401' })
    }
    // TODO make request and check result for handle 401
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
      })
  }
}
</script>