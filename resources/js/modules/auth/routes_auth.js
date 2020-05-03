/**
 * AutoImporting components
 * @param path
 * @returns {function(): *}
 */
const page = path => () => import(/* webpackChunkName: '' */ `./components/${path}`).then(m => m.default || m)

export const ROUTE_LOGIN = 'login';
export const ROUTE_REGISTER = 'register';
export const ROUTE_CONFIRM_EMAIL = 'confirm-email';
export const ROUTE_COMPLETE_REGISTRATION = 'complete-registration';

export default [
    {
        path: '/login',
        component: page('Login'),
        name: ROUTE_LOGIN
    },
    {
        path: '/register',
        component: page('Register'),
        name: ROUTE_REGISTER
    },
    {
        path: '/confirm-email/:token',
        component: page('ConfirmEmail'),
        name: ROUTE_CONFIRM_EMAIL
    },
    {
        path: '/complete-registration',
        component: page('CompleteRegistration'),
        name: ROUTE_COMPLETE_REGISTRATION
    }
]
