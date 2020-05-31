/**
 * AutoImporting components
 * @param path
 * @returns {function(): *}
 */
const page = path => () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)

export const ROUTE_LOGIN = 'login';
export const ROUTE_REGISTER = 'register';
export const ROUTE_CONFIRM_EMAIL = 'confirm-email';

export default [
    {
        path: '/login',
        component: page('Login'),
        name: ROUTE_LOGIN,
        meta: {
            auth: false,
        },
    },
    {
        path: '/register',
        component: page('Register'),
        name: ROUTE_REGISTER,
        meta: {
            auth: false,
        },
    },
    {
        path: 'email/verify/:user',
        component: page('VerifyEmail'),
        name: ROUTE_CONFIRM_EMAIL
    },
    {
        path: 'email/resend/verification',
        component: page('ResendVerification'),
        name: ROUTE_CONFIRM_EMAIL
    }
]
