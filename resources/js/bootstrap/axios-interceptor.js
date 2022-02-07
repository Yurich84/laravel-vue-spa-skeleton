import axios from 'axios'
import {ElMessage} from 'element-plus'
import i18n from '@/bootstrap/i18n'

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

export default axios
