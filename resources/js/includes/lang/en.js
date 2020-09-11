import enLocale from 'element-ui/lib/locale/lang/en'

export const messages = {
    global: {
        ok: 'Ok',
        cancel: 'Cancel',
        save: 'Save',
        add: 'Add',
        edit: 'Edit',
        delete: 'Delete',
        new: 'New',
        search: 'Search...',
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
        verification: {
            resend_link: 'Resend verification',
            resend_title: 'Resend verification',
            resend_button: 'Send',
            failed: 'The verification link is invalid.',
        },
        resend_verification_link: 'Resend verification email',
        login: {
            title: 'Login',
            submit_button: 'Sign In',
            email_label: 'Email',
            password_label: 'Password',
        },
        logout: {
            title: 'Logout',
        },
        register: {
            title: 'Register',
            name_label: 'Name',
            email_label: 'Email',
            password_label: 'Password',
            password_confirmation_label: 'Repeat password',
            submit_button: 'Sign Up',
            success: 'Thanks for registration.'
        },
        logout_confirm: {
            title: 'Confirm LogOut',
            text: 'You will be logged out',
            button_ok: 'Ok',
            button_cancel: 'Cancel',
        }
    },
    setting: {
        profile: {
            name: 'Name',
            email: 'Email',
        }
    },
    ...enLocale
}
