import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import {Message} from 'element-ui';

Vue.use(VueAxios, axios)
let token = document.head.querySelector('meta[name="csrf-token"]')
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = process.env.MIX_API_ENDPOINT

// Response interceptor
axios.interceptors.response.use(response => response, error => {

    if (error.response.data.message) {
        console.error('--- ', error.response.data.message)
    }

    if (error.response.status >= 500) {
        Message.error(window.Vue.$t('global.unknown_server_error'))
    }

    return Promise.reject(error)
})

Vue.use(VueAuth, {
    auth:           require('@websanova/vue-auth/dist/drivers/auth/bearer.js'),
    http:           require('@websanova/vue-auth/dist/drivers/http/axios.1.x.js'),
    router:         require('@websanova/vue-auth/dist/drivers/router/vue-router.2.x.js'),
    loginData:      { url: process.env.MIX_API_ENDPOINT + 'auth/login', redirect: '/admin/' },
    logoutData:     { url: process.env.MIX_API_ENDPOINT + 'auth/logout', redirect: '/login', makeRequest: true },
    registerData:   { url: process.env.MIX_API_ENDPOINT + 'auth/register', method: 'POST', redirect: '/login' },
    fetchData:      { url: process.env.MIX_API_ENDPOINT + 'auth/me', method: 'POST' },
    refreshData:    { enabled: false },
});
