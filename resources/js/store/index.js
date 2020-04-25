import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions: {
        getUserProfile() {

        }
    },

    state: {
        authCheck: localStorage.getItem('auth_check'),
        authUser: localStorage.getItem('auth_user')
    },

    getters: {
        authCheck: state => {
            return state.authCheck === '1'
        },

        authUser: state => {
            return state.authUser == null || state.authUser === {} ? {} : JSON.parse(state.authUser)
        }
    },

    mutations: {
        SET_AUTH_CHECK(state, payload) {
            state.authCheck = payload
        },

        SET_AUTH_USER(state, payload) {
            state.authUser = payload
        }
    }
})
