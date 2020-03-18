import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    user: {},
    isAuthenticated: false
  },
  mutations: {
    setLoadingStatus (state, val) {
      state.isLoading = val
    },
    setUserStatus (state, user) {
      state.user = user
    },
    setIsAuthenticate (state, value) {
      state.isAuthenticated = value
    }
  },
  actions: {
    Login (context, userdata) {
      const baseUrl = 'http://localhost:5050/api/'
      const header = { 'Content-Type': 'application/json' }
      fetch(baseUrl + 'Auth/login', { method: 'post', headers: header, body: JSON.stringify(userdata) }).then((response) => {
        context.commit('setLoadingStatus', true)
        if (response.status === 200) {
          context.commit('setIsAuthenticate', true)
        } else {
          context.commit('setIsAuthenticate', false)
        }
        return response.json()
      }).then((data) => {
        context.commit('setUserStatus', data)
        context.commit('setLoadingStatus', false)
        console.log(this.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  },
  getters: {
    getIsAuthenticated (state) {
      return state.isAuthenticated
    }
  }
})
