import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: Boolean,
    user: Object
  },
  mutations: {
    setLoadingStatus (state, val) {
      state.isLoading = val
    },
    setUserStatus (state, user) {
      state.user = user
    }
  },
  actions: {
    Login (context, userdata) {
      const header = { 'Content-Type': 'application/json' }
      // axios({
      //   baseURL: 'http://localhost:5050/api/Auth/login',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: userdata
      // }).then((response) => {
      //   context.commit('setLoadingStatus', true)
      //   return response.json()
      // }).then((data) => {
      //   context.commit('setUserStatus', data)
      //   context.commit('setLoadingStatus', false)
      //   console.log(this.data)
      // }).catch((err) => {
      //   console.log(err)
      // })
      fetch('http://localhost:5050/api/Auth/login', { method: 'post', headers: header, body: JSON.stringify(userdata) }).then((response) => {
        context.commit('setLoadingStatus', true)
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
  }
})
