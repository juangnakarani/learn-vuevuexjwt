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
import router from '@/router/index.js'
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
                    console.log(response.status)
                    console.log(response.data.token)
                    if(response.status=200){
                        this.$store.commit('changeToken', response.data.token)
                        this.$store.commit('setIsAuth', true)
                        this.$store.commit('setIsLogin', true)
                        router.push({ path: '/admin' })
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },

}
</script>

