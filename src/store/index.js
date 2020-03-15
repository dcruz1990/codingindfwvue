import Vue from 'vue'
import Vuex from 'vuex'

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
    Login (context, userdata, header) {
      fetch('http://localhost:5050/api/Auth/login', { method: 'post', body: JSON.stringify(userdata), headers: header }).then((response) => {
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
