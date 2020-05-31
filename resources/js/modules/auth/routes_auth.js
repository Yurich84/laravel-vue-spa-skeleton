/**
 * AutoImporting components
 * @param path
 * @returns {function(): *}
 */
const page = path => () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)

export const ROUTE_LOGIN = 'Login';
export const ROUTE_REGISTER = 'Register';
export const ROUTE_VERIFICATION_EMAIL = 'Verification email';
export const ROUTE_VERIFICATION_RESEND = 'Verification resend';

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
        name: ROUTE_VERIFICATION_EMAIL
    },
    {
        path: 'email/resend/verification',
        component: page('ResendVerification'),
        name: ROUTE_VERIFICATION_RESEND
    }
]
