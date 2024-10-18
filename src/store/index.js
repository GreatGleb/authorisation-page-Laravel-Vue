import { createStore } from 'vuex'
import { saveUser, getAllUsers } from '@/requests/axios'

export default createStore({
  state: {
    token: null,
    users: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    async register({ commit }, payload) {
      try {
        const response = await saveUser(payload)
        if(response.access_token) {
          commit('SET_TOKEN', response.access_token)
        }

        return response
      } catch (error) {
        console.error(error)
      }
    },
    async getUsers({ state, commit }) {
      try {
        let token
        if(state.token) {
          token = state.token
        } else if(localStorage.getItem('token')) {
          token = localStorage.getItem('token')
        }

        const response = getAllUsers(token)
        commit('SET_USERS', response)

        return response
      } catch (error) {
        console.error(error)
      }
    },
  },
})
