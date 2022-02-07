import { createApp } from 'vue'
import App from './core/App'
import ElementPlus from 'element-plus'
import i18n from './bootstrap/i18n'
import dayjs from './bootstrap/day'
import router from './bootstrap/router'
import store from './core/store'
import globalMixin from './includes/mixins/globalMixin'
import auth from './bootstrap/auth'
import './bootstrap/day'
import VueAxios from 'vue-axios'
import axios from './bootstrap/axios-interceptor'
import filters from './includes/filters'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(auth)
app.use(i18n)
app.use(ElementPlus, {i18n: (key, value) => i18n.t(key, value)})
app.mixin(globalMixin)

app.config.globalProperties.$config = window.config
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$filters = filters

app.mount('#app')

export default app
