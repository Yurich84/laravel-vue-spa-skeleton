import Vue from 'vue'
import * as bootstrap from './bootstrap'
import App from './components/App'

Vue.prototype.brandGroupList = window.brandGroupList;

bootstrap.setupPlugins(Vue);

window.Vue = new Vue({
    ...bootstrap.createInstanceOptions(Vue),
    render: h => h(App)
}).$mount('#app')
