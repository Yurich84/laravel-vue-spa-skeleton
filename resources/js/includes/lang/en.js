import enLocale from 'element-ui/lib/locale/lang/en'

export const en = {
    global: {
        ok: 'Ok',
        cancel: 'Cancel',
        unknown_server_error: 'Unknown server error',
        form: {
            rules: {
                required: 'Field "{fieldName}" is required',
                min: 'Field length "{fieldName}" must be more then {attribute} characters',
                max: 'Field length "{fieldName}" must be less then {attribute} characters',
            }
        },
    },
    auth: {
        token_expired_alert_title: 'Session Expired!',
        token_expired_alert_text: 'Please log in again to continue.',
    },
    ...enLocale
}
