<template>
  <div id="app" class="container">
    <nav class="navbar navbar-toggleable-md navbar-dark" style="background-color: #ffffff;">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <router-link to="/guest">
              <a class="nav-link">Guest</a>
            </router-link>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-link" v-on:click="linkadmin">Admin</button>
          </li>
        </ul>
        <router-link to="/login">
          <a class="nav-link">Login</a>
        </router-link>
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
    linkadmin: function() {
      router.push({ path: '/admin' })
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
