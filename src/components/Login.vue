<template>
    <div class="container">

        <form class="form-signin">
            <h4 class="form-signin-heading">Ayo login!</h4>
            <label for="inputEmail" class="sr-only">Username</label>
            <input v-model="username" type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="getToken">Sign in</button>
        </form>

    </div>
    <!-- /container -->
</template>

<script>

import store from '@/vuex/store.js'


import { HTTP } from '@/router/index'

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to My Home',
            username: null,
            password: null
        }
    },
    store,
    methods: {
        changeTkn: function(event) {
            this.$store.commit('changeToken', event.target.value)
        },
        getToken: function() {
            let username = this.username
            let password = this.password
            let login = { 'username': username, 'password': password }

            HTTP.post(`/login`, login)
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },

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
