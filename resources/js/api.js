import axios from 'axios'
import store from "./store";
import router from "./router";

const $axios = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

$axios.interceptors.response.use(function (response) {
    localStorage.setItem('auth_check', '1')
    return response
}, function (error) {
    if (error.response.status === 401) {
        localStorage.removeItem('auth_check')
        localStorage.removeItem('auth_user')

        store.commit('SET_AUTH_CHECK', null, {root: true})
        store.commit('SET_AUTH_USER', {}, {root: true})

        router.push({ name: 'login' })
    }
    return Promise.reject(error)
})

export default $axios;
