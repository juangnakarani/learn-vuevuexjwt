<template>
  <div id="app" class="container">
    <nav class="navbar navbar-toggleable-md navbar-dark" style="background-color: #ffffff;">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <button type="button" class="btn btn-link" v-on:click="goToHome">Admin</button>
          </li>
          <li class="nav-item active">
            <button type="button" class="btn btn-link" v-on:click="goToGuest">Guest</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-link" v-on:click="goToAdmin">Admin</button>
          </li>
        </ul>
        <button type="button" class="btn btn-primary" v-if="islogin" @click="goToLoginOut">Logout</button>
        <button type="button" class="btn btn-primary" v-else @click="goToLoginOut">Login</button>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// penting gaes jangan lupa import store dan jangan lupa add di export default ya :)
import store from './vuex/store.js'
import { HTTP } from '@/router/index'
import router from '@/router/index.js'
export default {
  name: 'app',
  store,
  methods: {
    goToAdmin: function() {
      router.push({ path: '/admin' })
    },
    goToGuest: function() {
      router.push({ path: '/guest' })
    },
    goToHome: function() {
      router.push({ path: '/' })
    },
    goToLoginOut: function() {
      if (this.islogin == true) {
        this.$store.commit('changeToken', '')
        this.$store.commit('setIsAuth', false)
        this.$store.commit('setIsLogin', false)

      }
      router.push({ path: '/login' })

    }
  },
  computed: {
    islogin: function() {
      return this.$store.getters.getIsLogin
    }
  }
}

</script>

<style>
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 8px;
  margin: 0 auto;
}

.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}

.form-signin .checkbox {
  font-weight: normal;
}

.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="username"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
