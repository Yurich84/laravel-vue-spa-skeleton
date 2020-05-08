import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import store from '../core/store'
import {Message, MessageBox} from 'element-ui';

Vue.use(VueAxios, axios)
let token = document.head.querySelector('meta[name="csrf-token"]')
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = process.env.MIX_API_ENDPOINT

// Response interceptor
axios.interceptors.response.use(response => response, error => {

    if (error.response.status === 401 && store.getters['isAuth']) {
        MessageBox.confirm(window.Vue.$t('auth.token_expired_alert_text'), window.Vue.$t('auth.token_expired_alert_title'), {
            confirmButtonText: window.Vue.$t('global.ok'),
            cancelButtonText: window.Vue.$t('global.cancel'),
            type: 'warning'
        }).then(() => {
            // store.commit('logOut')
            // todo redirect to login
            console.log('logout')
        })
    } else if (error.response.data.errors) {
        console.log('validate errors')
    } else if (error.response.data.message) {
        Message.error(window.Vue.$t('global.unknown_server_error'))
        console.error('--- ', error.response.data.message)
    } else {
        Message.error(window.Vue.$t('global.unknown_server_error'))
    }

    return Promise.reject(error)
})

Vue.use(VueAuth, {
    auth: {
        request: function (req, token) {
            this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token})
        },
        response: function (res) {
            let headers = this.options.http._getHeaders.call(this, res),
                token = headers.Authorization || headers.authorization
            if (token) {
                token = token.split(/Bearer:?\s?/i)

                return token[token.length > 1 ? 1 : 0].trim()
            }
        }
    },
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    loginData:      { url: process.env.MIX_API_ENDPOINT + 'auth/login' },
    logoutData:     { url: process.env.MIX_API_ENDPOINT + 'auth/logout', redirect: '/login' },
    registerData:   { url: process.env.MIX_API_ENDPOINT + 'auth/register', method: 'POST'},
    fetchData:      { url: process.env.MIX_API_ENDPOINT + 'auth/me', method: 'POST' },
});
