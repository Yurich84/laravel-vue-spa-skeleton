import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'

export function plugin(Vue) {

    Vue.use(VueAxios, axios)
    let token = document.head.querySelector('meta[name="csrf-token"]')
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.baseURL = process.env.MIX_API_ENDPOINT

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
        registerData:   {url: process.env.MIX_API_ENDPOINT + 'auth/register', method: 'POST'},
        fetchData:      { url: process.env.MIX_API_ENDPOINT + 'auth/me', method: 'POST' },
        tokenExpired: () => false,
        parseUserData: function (data) {
            // bus.$emit('userLoggedIn', data.data);
            return data.data;
        },
    });
}
