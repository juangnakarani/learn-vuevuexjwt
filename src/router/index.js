import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Guest from '@/components/Guest'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})