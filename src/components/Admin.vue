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
    isauth: function() {
      return this.$store.getters.getIsAuth
    },
    islogin: function() {
      return this.$store.getters.getIsLogin
    }
  },
  created: function() {
    // console.log('a is: ' + this.msg)
    console.log('token di admin:' + this.token)
    console.log('auth di admin:' + this.isauth)
    console.log('login di admin:' + this.islogin)
    // TODO check is auth == true
    if (this.isauth != true) {
      router.push({ path: '/401' })
    } else {
      // TODO make request and check result for handle 401
      HTTP.get(`/admin`, {
        withCredentials: true,
        timeout: 1000,
        headers: {
          'Authorization': 'Bearer ' + this.token,
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
}
</script>