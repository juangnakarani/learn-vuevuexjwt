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
            <router-link to="/admin">
              <a class="nav-link">Admin</a>
            </router-link>
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
export default {
  name: 'app',
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
