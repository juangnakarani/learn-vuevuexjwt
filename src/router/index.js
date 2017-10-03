import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Guest from '@/components/Guest'
import Admin from '@/components/Admin'
import ForbiddenPage from '@/components/403'
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
      path: '/403',
      name: 'ForbiddenPage',
      component: ForbiddenPage
    }
  ]
})

export const HTTP = axios.create({
  baseURL: `http://localhost:8090`,
  withCredentials: false,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})
