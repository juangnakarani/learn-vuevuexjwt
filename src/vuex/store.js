import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
  token: 'Hello this is will be state token'
}

const mutations = {
  changeToken (anu, token) {
    this.state.token = token
    console.log(anu)
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})
