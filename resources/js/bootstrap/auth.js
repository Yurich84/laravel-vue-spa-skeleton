import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import {Message} from 'element-ui'
import i18n, {setI18nLanguage} from '@/bootstrap/i18n'

import VueAuth from '@websanova/vue-auth/dist/v2/vue-auth.esm'
import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js'
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js'
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js'

Vue.use(VueAxios, axios)
let token = document.head.querySelector('meta[name="csrf-token"]')
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = process.env.MIX_API_ENDPOINT
axios.defaults.withCredentials = true

// Response interceptor
axios.interceptors.response.use(response => response, error => {
    if (error.response.data.message) {
        console.error('--- ', error.response.data.message)
    }
    if (error.response.status >= 500) {
        Message.error(i18n.t('global.unknown_server_error').toString())
    } else if (error.response.data.message) {
        Message.error(error.response.data.message)
    }

    return Promise.reject(error)
})

export default new VueAuth(Vue, {
    plugins : {
        http   : axios,
        router : Vue.router
    },
    drivers : {
        http   : driverHttpAxios,
        auth   : driverAuthBearer,
        router : driverRouterVueRouter,
    },
    options : {
        loginData: {url: process.env.MIX_API_ENDPOINT + 'auth/login', redirect: {name: 'Dashboard'}},
        logoutData: {url: process.env.MIX_API_ENDPOINT + 'auth/logout', redirect: {name: 'Login'}, makeRequest: true},
        registerData: {url: process.env.MIX_API_ENDPOINT + 'auth/register', method: 'POST', redirect: {name: 'Login'}},
        fetchData: {url: process.env.MIX_API_ENDPOINT + 'auth/me', method: 'POST'},
        refreshData: {enabled: false},
        rolesKey: 'all_permissions',
        parseUserData: function (data) {
            setI18nLanguage(data.data.locale || 'en')
            return data.data || {}
        },
    }
})
