import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from '../includes/routes'
import {store as storeOptions} from '../store'
import Notifications from 'vue-notification'

window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

window.axios.defaults.baseURL = process.env.APP_API_URL;


export function setupPlugins(Vue) {
    Vue.use(VueRouter)
    Vue.use(Notifications)
}

export function createInstanceOptions(Vue) {
    const router = new VueRouter({
        routes,
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            return new Promise((resolve) => {
                if (to.hash) {
                    resolve({ selector: to.hash })
                } else if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({x: 0, y: 0})
                }
            })
        }
    })

    Vue.router = router

    Vue.use(Vuex);
    const store = new Vuex.Store(storeOptions)

    return {
        router,
        store,
    }
}
