import enLocale from 'element-ui/lib/locale/lang/en'

export const en = {
    global: {
        unknown_server_error: 'Unknown server error',
        form: {
            rules: {
                required: 'Field "{fieldName}" is required',
                min: 'Field length "{fieldName}" must be more then {attribute} characters',
                max: 'Field length "{fieldName}" must be less then {attribute} characters',
            }
        },
    },
    ...enLocale
}
