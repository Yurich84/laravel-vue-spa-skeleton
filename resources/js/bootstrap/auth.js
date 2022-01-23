import router from './router'
import {setI18nLanguage} from '@/bootstrap/i18n'

import {createAuth} from '@websanova/vue-auth'
import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js'
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js'
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js'

export default (app) => {
    app.use(createAuth({
        plugins: {
            http: app.axios,
            router: router,
        },
        drivers: {
            http: driverHttpAxios,
            auth: driverAuthBearer,
            router: driverRouterVueRouter,
        },
        options: {
            loginData: {
                url: process.env.MIX_API_ENDPOINT + 'auth/login',
                redirect: {name: 'Dashboard'}
            },
            logoutData: {
                url: process.env.MIX_API_ENDPOINT + 'auth/logout',
                redirect: {name: 'Login'},
                makeRequest: true
            },
            registerData: {
                url: process.env.MIX_API_ENDPOINT + 'auth/register',
                method: 'POST',
                redirect: {name: 'Login'}
            },
            fetchData: {
                url: process.env.MIX_API_ENDPOINT + 'auth/me',
                method: 'POST'
            },
            refreshData: {enabled: false},
            rolesKey: 'all_permissions',
            parseUserData: function (data) {
                setI18nLanguage(data.data.locale || 'en')
                return data.data || {}
            },
        }
    }))
}
