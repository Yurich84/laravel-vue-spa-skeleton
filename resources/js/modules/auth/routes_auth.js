import Login from './components/Login'
import Register from './components/Register'
import VerifyEmail from './components/VerifyEmail'
import ResendVerification from './components/ResendVerification'

export default [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            auth: false,
        },
    },
    {
        path: '/register',
        component: Register,
        name: 'Register',
        meta: {
            auth: false,
        },
    },
    {
        path: 'email/verify/:user',
        component: VerifyEmail,
        name: 'Verification email'
    },
    {
        path: 'email/resend/verification',
        component: ResendVerification,
        name: 'Verification resend'
    }
]
