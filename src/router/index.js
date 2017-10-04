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
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDcwMDc5MzQsImlhdCI6MTUwNzAwNDMzNCwidXNlcmRhdGEiOnsiaWQiOjEwMCwidXNlcm5hbWUiOiJhZG1pbiIsImFsaWFzIjoibmdhZGltaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlzYWRtaW4iOmZhbHNlfX0.dria_u-ldiO9WckgsFmK7aNd1HzFqrXpK_nVd11Xwr4EEwi6UnATY_HisvsC2efAvDRus69zqbnVjonBBlpDXTsI2OL5U5DCxc3tZSb_yjL5-HxFftQch0n750As9FdtUlVseg01A6AWIp2gHHzgrbWqrCmt7ODDX8GiSTubb90'

export const HTTP = axios.create({
  baseURL: `http://192.168.1.12:8090`,
  withCredentials: false,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

