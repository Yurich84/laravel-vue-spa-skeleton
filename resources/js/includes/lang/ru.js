import ruLocale from 'element-ui/lib/locale/lang/ru-RU'

export const messages = {
    global: {
        ok: 'Ok',
        cancel: 'Отмена',
        save: 'Сохранить',
        add: 'Добавить',
        edit: 'Редактировать',
        delete: 'Удалить',
        new: 'Новый',
        search: 'Искать...',
        unknown_server_error: 'Неизвестная ошибка сервера',
        form: {
            rules: {
                required: 'Поле "{fieldName}" обезательно',
                email: 'Пожалуйста введите корректный email',
                min: 'Длинна поля "{fieldName}" должна быть больше {attribute} символов',
                max: 'Длинна поля "{fieldName}" должна быть меньше {attribute} символов',
                password_repeat: {
                    different: 'Пароли не совпадают',
                }
            }
        },
    },
    auth: {
        token_expired_alert_title: 'Сессия истекла!',
        token_expired_alert_text: 'Пожалуйска зайдите слова.',
        verification: {
            resend_link: 'Отправить имейл о верификации еще раз',
            resend_title: 'Отправка имейла о верификации',
            resend_button: 'Отправить',
            failed: 'Ссылка не действительная.',
        },
        resend_verification_link: 'Отправить имейл о верификации еще раз',
        login: {
            title: 'Войти',
            submit_button: 'Войти',
            email_label: 'Email',
            password_label: 'Пароль',
        },
        logout: {
            title: 'Выйти',
        },
        register: {
            title: 'Зарегестрироваться',
            name_label: 'Имя',
            email_label: 'Email',
            password_label: 'Пароль',
            password_confirmation_label: 'Повторите пароль',
            submit_button: 'Отправить',
            success: 'Спасибо за регистрацию.'
        },
        logout_confirm: {
            title: 'Подтвердите выход',
            text: 'Вы будете розлогинены',
            button_ok: 'Ok',
            button_cancel: 'Отмена',
        }
    },
    setting: {
        profile: {
            name: 'Имя',
            email: 'Email',
        }
    },
    ...ruLocale
}
