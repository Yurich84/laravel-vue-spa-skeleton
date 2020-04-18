import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import * as authSetup from './auth-setup'
import * as i18n from './i18n-setup'
import {router} from './router-setup'
import {momentPlugin} from './moment-setup'
import {store as storeOptions} from '../store'

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    window._ = require('lodash');
    window.moment = require('moment');
} catch (e) {
    console.log('Error load main libraries')
}

export function setupPlugins(Vue) {
    Vue.use(VueRouter)
    i18n.plugin(Vue)
    Vue.use(momentPlugin)
}

export function createInstanceOptions(Vue) {

    Vue.router = router

    authSetup.plugin(Vue)

    Vue.use(Vuex);
    const store = new Vuex.Store(storeOptions)

    let i18nInstance = i18n.makeI18nInstance();

    Vue.use(ElementUI, {i18n: (key, value) => i18nInstance.t(key, value)})

    return {
        router,
        store,
        i18n: i18nInstance
    }
}
