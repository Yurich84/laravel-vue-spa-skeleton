import Vue from 'vue'
import App from './core/App'
import ElementUI from 'element-ui'
import i18n from './bootstrap/i18n'
import router from './bootstrap/router'
import store from './core/store'
import globalMixin from './includes/mixins/globalMixin'
import 'bootstrap'
import moment from 'moment'

import auth from './bootstrap/auth'
import './bootstrap/moment'

window.moment = moment
try {
    window.$ = window.jQuery = require('jquery')
} catch (e) {
    console.log('Error load jquery')
}

Vue.use(ElementUI, {i18n: (key, value) => i18n.t(key, value)})

Vue.prototype.config = window.config

Vue.mixin(globalMixin);

window.Vue = new Vue({
    router,
    store,
    auth,
    i18n,
    render: h => h(App)
}).$mount('#app')
