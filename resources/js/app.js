import Vue from 'vue'
import * as bootstrap from './bootstrap'
import App from './components/App'

bootstrap.setupPlugins(Vue)

Vue.prototype.config = window.config

window.Vue = new Vue({
    ...bootstrap.createInstanceOptions(Vue),
    render: h => h(App)
}).$mount('#app')
