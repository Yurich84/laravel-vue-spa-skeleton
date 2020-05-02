function page (path) {
    return () => import(/* webpackChunkName: '' */ `../../modules/auth/components/${path}`).then(m => m.default || m)
}

export const ROUTE_LOGIN = 'login';
export const ROUTE_REGISTER = 'register';
export const ROUTE_CONFIRM_EMAIL = 'confirm-email';
export const ROUTE_COMPLETE_REGISTRATION = 'complete-registration';

export default [
    {
        path: '/login',
        component: page('Login'),
        name: ROUTE_LOGIN,
        meta: {
            nameTransKey: 'route.login'
        }
    },
    {
        path: '/register',
        component: page('Register'),
        name: ROUTE_REGISTER,
        meta: {
            nameTransKey: 'route.register',
            // hidden: true
        }
    },
    {
        path: '/confirm-email/:token',
        component: page('ConfirmEmail'),
        name: ROUTE_CONFIRM_EMAIL,
        meta: {
            nameTransKey: 'route.email_confirm',
        }
    },
    {
        path: '/complete-registration',
        component: page('CompleteRegistration'),
        name: ROUTE_COMPLETE_REGISTRATION,
        meta: {
            nameTransKey: 'route.complete_registration',
        }
    }
]
