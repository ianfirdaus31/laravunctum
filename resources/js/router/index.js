import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

import Login from "../views/Login";
import Home from "../views/Home";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

//Navigation Guards
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.authCheck
        if (!auth) {
            next({name: 'login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
