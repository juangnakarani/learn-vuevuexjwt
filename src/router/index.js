import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Guest from '@/components/Guest'
import Admin from '@/components/Admin'
import UnauthorizedPage from '@/components/401'
import axios from 'axios'

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
    },
    {
      path: '/401',
      name: 'UnauthorizedPage',
      component: UnauthorizedPage
    }
  ]
})

export const HTTP = axios.create({
  baseURL: `http://192.168.1.12:8090`,
  withCredentials: false,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

