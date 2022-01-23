import { createApp } from 'vue'
import App from './core/App'
import ElementPlus, {ElMessage} from 'element-plus'
import i18n from './bootstrap/i18n'
import dayjs from './bootstrap/day'
import router from './bootstrap/router'
import store from './core/store'
import globalMixin from './includes/mixins/globalMixin'
import auth from './bootstrap/auth'
import './bootstrap/day'
import VueAxios from 'vue-axios'
import axios from 'axios'

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
        ElMessage.error(i18n.t('global.unknown_server_error').toString())
    } else if (error.response.data.message) {
        ElMessage.error(error.response.data.message)
    }

    return Promise.reject(error)
})

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

app.mount('#app')

export default app
