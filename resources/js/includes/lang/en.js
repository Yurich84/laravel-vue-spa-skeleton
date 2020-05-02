import enLocale from 'element-ui/lib/locale/lang/en'

export const en = {
    global: {
        ok: 'Ok',
        cancel: 'Cancel',
        unknown_server_error: 'Unknown server error',
        form: {
            rules: {
                required: 'Field "{fieldName}" is required',
                email: 'Please input correct email address',
                min: 'Field length "{fieldName}" must be more then {attribute} characters',
                max: 'Field length "{fieldName}" must be less then {attribute} characters',
                password_repeat: {
                    different: 'Mismatch passwords',
                }
            }
        },
    },
    auth: {
        token_expired_alert_title: 'Session Expired!',
        token_expired_alert_text: 'Please log in again to continue.',
        login: {
            title: 'Login',
            submit_button: 'Sign In'
            // TODO fill this
        },
        register: {
            title: 'Register',
            submit_button: 'Sign Up',
            success: 'Thanks for registration.'
            // TODO fill this
        },
        logout_confirm: {
            title: 'Confirm LogOut',
            text: 'You will be logged out',
            button_ok: 'Ok',
            button_cancel: 'Cancel',
        }
    },
    ...enLocale
}
