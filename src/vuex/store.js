import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
  token: '',
  auth: false
}

const mutations = {
  changeToken (anu, token) {
    this.state.token = token
    console.log(anu)
  },
  setAuth (param, bool) {
    this.state.auth = bool
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})
